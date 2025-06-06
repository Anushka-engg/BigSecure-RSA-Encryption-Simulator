const express = require('express');
const cors = require('cors');
const { encrypt, decrypt } = require('./rsa');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/encrypt', (req, res) => {
  const { message } = req.body;
  try {
    const plaintext = BigInt(message);
    const ciphertext = encrypt(plaintext);
    res.json({ result: ciphertext.toString() });
  } catch {
    res.status(400).json({ result: 'Encryption failed. Make sure input is a valid number.' });
  }
});

app.post('/decrypt', (req, res) => {
  const { encryptedMessage } = req.body;
  try {
    const ciphertext = BigInt(encryptedMessage);
    const plaintext = decrypt(ciphertext);
    res.json({ result: plaintext.toString() });
  } catch {
    res.status(400).json({ result: 'Decryption failed. Make sure input is a valid encrypted number.' });
  }
});

app.listen(port, () => {
  console.log(`✅ Backend running at http://localhost:${port}`);
});
