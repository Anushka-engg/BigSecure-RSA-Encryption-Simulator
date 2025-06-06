import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [result, setResult] = useState('');
  const [mode, setMode] = useState('encrypt');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = mode === 'encrypt' ? 'encrypt' : 'decrypt';
    const payload =
      mode === 'encrypt'
        ? { message, publicKey: key }
        : { encryptedMessage: message, privateKey: key };

    try {
      const res = await fetch(`http://localhost:5000/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setResult(data.result || 'Error: Invalid response');
    } catch (error) {
      console.error(error);
      setResult('Error connecting to backend');
    }
  };

  return (
    <div className="App">
      <h1>🔐 RSA Encrypt/Decrypt</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder={mode === 'encrypt' ? 'Enter message to encrypt' : 'Enter encrypted message to decrypt'}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="text"
          placeholder={mode === 'encrypt' ? 'Enter Public Key' : 'Enter Private Key'}
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <div>
          <label>
            <input
              type="radio"
              name="mode"
              value="encrypt"
              checked={mode === 'encrypt'}
              onChange={() => setMode('encrypt')}
            />
            Encrypt
          </label>
          <label style={{ marginLeft: '1rem' }}>
            <input
              type="radio"
              name="mode"
              value="decrypt"
              checked={mode === 'decrypt'}
              onChange={() => setMode('decrypt')}
            />
            Decrypt
          </label>
        </div>
        <button type="submit">{mode === 'encrypt' ? 'Encrypt' : 'Decrypt'}</button>
      </form>

      {result && (
        <div className="result">
          <h3>Result:</h3>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
