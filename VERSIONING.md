# Versioning Policy

CEYO follows a structured versioning approach to ensure compatibility and clarity as the protocol evolves.

The project uses a semantic versioning model.

Version format:

MAJOR.MINOR.PATCH

Example:

1.2.3

---

## Version Components

MAJOR version changes indicate breaking protocol changes.

These may include:

• Artifact schema modifications
• Canonicalization changes
• Cryptographic suite updates
• Verification protocol changes

Systems built on older major versions may not remain compatible.

---

MINOR version changes introduce new functionality while maintaining compatibility.

Examples include:

• Additional artifact fields
• Expanded documentation
• Optional verification features
• New implementation guidance

Existing integrations should continue to function without modification.

---

PATCH version changes address minor corrections.

Examples include:

• Documentation fixes
• Clarifications in specifications
• Non-functional improvements

Patch versions do not affect protocol behavior.

---

## Protocol Compatibility

The CEYO protocol aims to preserve backward compatibility whenever possible.

Compatibility considerations include:

• Artifact schema evolution
• Verification procedures
• Canonicalization requirements

Changes that affect verification determinism will require a MAJOR version update.

---

## Reference Implementation

The reference implementation provided in this repository is intended to demonstrate protocol concepts.

Production systems should treat this implementation as a conceptual guide rather than a finalized software dependency.

---

## Future Evolution

Future protocol development may include:

• Expanded artifact metadata
• Multi-signature artifact sealing
• Hardware-backed key integration
• Standardized public key registries

These features will be introduced through the versioning process described above.
