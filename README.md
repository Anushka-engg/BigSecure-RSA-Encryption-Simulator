# BigSecure-RSA-Encryption-Simulator
BigSecure is a lightweight educational project built to simulate RSA encryption using a custom-built BigInt class in C++, integrated with a Node.js + React web interface for simple encryption and decryption operations.

### 🔐 Project Purpose

This project demonstrates the core logic of RSA encryption from scratch by implementing all large number arithmetic (addition, subtraction, multiplication, division, modulus, exponentiation) manually, using a **custom BigInt class** instead of relying on existing libraries.

It helps users and learners understand:

* How encryption and decryption works behind the scenes
* Core C++ logic for handling big integers
* Modular exponentiation and number theory in cryptography
* End-to-end integration of backend logic with a modern frontend

---

### 🧩 Features

* Custom `BigInt` class written in C++ with full arithmetic support
* Manual implementation of **RSA Key Generation**, **Encryption**, and **Decryption**
* Modular exponentiation for big numbers
* **Frontend UI** with React for input/output interaction
* **Backend API** with Node.js (server.js) connected to RSA logic
* Simple and elegant UI to test encryption/decryption

---

### 🛠️ Tech Stack

| Layer         | Tech              |
| ------------- | ----------------- |
| Core Logic    | C++ (BigInt, RSA) |
| Backend API   | Node.js (Express) |
| Frontend      | React + CSS       |
| Communication | Fetch API (REST)  |

---

### 🧮 How It Works

1. User enters a number and selects encryption/decryption.
2. React UI sends a POST request to the backend.
3. Node.js calls RSA logic and uses modular exponentiation for processing.
4. Result is displayed on the UI.

---

### 🚀 Getting Started

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/BigSecure.git
cd BigSecure
```

#### 2. Install backend dependencies

```bash
cd backend
npm install
node server.js
```

#### 3. Run frontend

```bash
cd frontend
npm install
npm start
```

---

### 📄 File Structure

```
BigSecure/
│
├── backend/
│   ├── server.js         # Node.js server with RSA endpoints
│   └── rsa.js            # Modular exponentiation, encrypt/decrypt logic
│
├── frontend/
│   ├── App.js            # React UI logic
│   ├── App.css           # UI styling
│   └── ...
│
├── cpp/
│   ├── BigInt.h / .cpp   # Custom BigInt implementation
│   ├── RSA.h / .cpp      # RSA algorithm using BigInt
│   └── rsa_test.cpp      # CLI test for RSA encryption/decryption
│
└── README.md             # Project documentation
```

---

### ✅ Use Cases

* Students learning about RSA encryption
* Demonstrating C++ + Web tech integration
* Showcasing system design using BigInt logic
* Cryptography learning tool

---

### 📌 Contributions

Pull requests and improvements are welcome!

ENJOY CODING!!
