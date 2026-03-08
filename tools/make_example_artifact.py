#!/usr/bin/env python3
"""
Generate a real CEYO sealed envelope for testing and demonstration.

Output (written to example_artifact/):
  sealed_envelope.json   — full envelope; paste into verify.html or pass to verify_artifact.py
  public_key.pem         — public key for signature verification
  private_key.pem        — DO NOT COMMIT; delete after use

Usage:
    pip install rfc8785 cryptography
    python tools/make_example_artifact.py
"""

import base64
import hashlib
import json
from pathlib import Path

import rfc8785
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import ec


def b64u(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).decode("ascii").rstrip("=")


def main():
    out_dir = Path("example_artifact")
    out_dir.mkdir(parents=True, exist_ok=True)

    # 1) Generate P-256 keypair
    priv = ec.generate_private_key(ec.SECP256R1())
    pub = priv.public_key()

    private_pem = priv.private_bytes(
        encoding=serialization.Encoding.PEM,
        format=serialization.PrivateFormat.PKCS8,
        encryption_algorithm=serialization.NoEncryption(),
    )
    public_pem = pub.public_bytes(
        encoding=serialization.Encoding.PEM,
        format=serialization.PublicFormat.SubjectPublicKeyInfo,
    )

    # 2) Policy-scoped artifact body
    body = {
        "env_fingerprint": "env:sha256:7b2c9f1a3de4b8c02f5a6d7e8f9a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a",
        "event": {
            "model_ref": "opaque-ref-v1",
            "request_id": "req-0001",
            "type": "inference",
        },
        "input_ref_hash": "sha256:1a9f3b2c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a",
        "output_ref_hash": "sha256:2b8e4c3d5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c",
        "policy": {"id": "POL-001", "version": "1.0"},
        "schema_version": "1.0",
        "tier": "controlled",
        "ts": "2026-03-05T00:00:00Z",
    }

    # 3) RFC 8785 canonicalize + SHA-256
    canonical = rfc8785.dumps(body)
    digest = hashlib.sha256(canonical).digest()

    # 4) ECDSA P-256 sign canonical bytes (DER output)
    sig_der = priv.sign(canonical, ec.ECDSA(hashes.SHA256()))

    # 5) Assemble sealed envelope
    envelope = {
        "product": "CEYO",
        "body": body,
        "canonicalization": {
            "scheme": "RFC8785",
            "scope": "body",
            "version": "1.0",
        },
        "integrity": {
            "hash": {
                "alg": "SHA-256",
                "covers": "canonical(body)",
                "value_b64u": b64u(digest),
            },
            "sig": {
                "alg": "ECDSA-P256-SHA256",
                "covers": "canonical(body)",
                "format": "DER",
                "value_b64u": b64u(sig_der),
            },
        },
    }

    # 6) Write files
    (out_dir / "sealed_envelope.json").write_text(
        json.dumps(envelope, indent=2), encoding="utf-8"
    )
    (out_dir / "public_key.pem").write_bytes(public_pem)
    (out_dir / "private_key.pem").write_bytes(private_pem)

    print("Written to example_artifact/")
    print("  sealed_envelope.json  — paste into verify.html or use with verify_artifact.py")
    print("  public_key.pem        — public key for verification")
    print("  private_key.pem       — DO NOT COMMIT; delete after use")
    print()
    print("Verify from the command line:")
    print("  python example_artifact/verify_artifact.py \\")
    print("    example_artifact/sealed_envelope.json \\")
    print("    example_artifact/public_key.pem")


if __name__ == "__main__":
    main()
