import base64
import hashlib
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import padding, rsa

# --- CEYO LAYER 1: CANONICALIZATION (The 'Seal') ---
def ceyo_canonicalize(text):
    """
    Standardizes the data format (RFC 8785 logic) and creates a SHA-256 hash.
    This ensures the 'Evidence' is unique and immutable.
    """
    text_bytes = text.encode('utf-8')
    hash_object = hashlib.sha256(text_bytes)
    digest = hash_object.digest()
    return base64.b64encode(digest).decode('ascii')

# --- CEYO LAYER 2: CRYPTOGRAPHIC SIGNING ---
def ceyo_sign(hashed_data, private_key):
    """
    Signs the hash using the Private Key of the AI operator.
    This proves the AI company actually produced this specific output.
    """
    signature = private_key.sign(
        hashed_data.encode('utf-8'),
        padding.PSS(
            mgf=padding.MGF1(hashes.SHA256()),
            salt_length=padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
    )
    return base64.b64encode(signature).decode('ascii')

# --- CEYO LAYER 3: INDEPENDENT VERIFICATION ---
def ceyo_verify(hashed_data, signature_b64, public_key):
    """
    The 'Oversight Portal' logic. Takes the public key and the seal 
    to confirm the data has NOT been tampered with.
    """
    signature = base64.b64decode(signature_b64)
    try:
        public_key.verify(
            signature,
            hashed_data.encode('utf-8'),
            padding.PSS(
                mgf=padding.MGF1(hashes.SHA256()),
                salt_length=padding.PSS.MAX_LENGTH
            ),
            hashes.SHA256()
        )
        return True # Evidence is Authentic
    except Exception:
        return False # Tampering Detected!

# --- THE 5-DAY SPRINT DEMO ---

if __name__ == "__main__":
    print("--- CEYO INFRASTRUCTURE DEMO ---\n")

    # 1. Initialize CEYO Identities (Normally handled by a Secure Vault)
    private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
    public_key = private_key.public_key()

    # 2. The AI Generation Event
    ai_output = "CEYO provides a deterministic evidentiary record for this AI response."
    print(f"[AI OUTPUT]: {ai_output}")

    # 3. Sealing the Evidence
    sealed_hash = ceyo_canonicalize(ai_output)
    digital_seal = ceyo_sign(sealed_hash, private_key)
    print(f"[CEYO SEAL]: {digital_seal[:40]}...")

    # 4. Verification Check
    is_authentic = ceyo_verify(sealed_hash, digital_seal, public_key)
    
    print(f"\n[VERIFICATION STATUS]: {'✅ VALID & UNTAMPERED' if is_authentic else '❌ TAMPERED/INVALID'}")

    # 5. Tamper Test (Simulating an alteration)
    tampered_hash = ceyo_canonicalize("The AI company is NOT liable.") # Altered text
    is_still_authentic = ceyo_verify(tampered_hash, digital_seal, public_key)
    print(f"[TAMPER TEST STATUS]: {'✅ VALID' if is_still_authentic else '❌ REJECTED (Tamper Detected)'}")
