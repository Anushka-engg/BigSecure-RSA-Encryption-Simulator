// rsa.js

// Modular exponentiation: (base^exponent) % modulus
function modExp(base, exponent, modulus) {
  if (modulus === 1n) return 0n;
  let result = 1n;
  base = base % modulus;
  while (exponent > 0n) {
    if (exponent % 2n === 1n) {
      result = (result * base) % modulus;
    }
    exponent = exponent / 2n;
    base = (base * base) % modulus;
  }
  return result;
}

// Hardcoded keys (same as your C++ example)
const p = 61n;
const q = 53n;
const n = p * q; // 3233
const phi = (p - 1n) * (q - 1n);
const e = 17n;
const d = 2753n;

// Encrypt plaintext (number) with public key (e, n)
function encrypt(plaintext) {
  return modExp(plaintext, e, n);
}

// Decrypt ciphertext with private key (d, n)
function decrypt(ciphertext) {
  return modExp(ciphertext, d, n);
}

module.exports = { encrypt, decrypt };
