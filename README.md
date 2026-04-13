# 📌 QR Generator Web App

A modern and interactive **QR Code Generator & Scanner Web Application** built using HTML, CSS, JavaScript, and Node.js (Express).
This app allows users to generate, download, save, and scan QR codes with a clean UI.

# 🚀 Features

✅ Generate QR codes from text or URLs

📥 Download QR codes as images

💾 Save QR codes (locally + server)

📷 Scan QR codes using camera

📂 View saved QR history

🎨 Clean and responsive UI

🛠️ Tech Stack

# Frontend

HTML

CSS

JavaScript

# Backend

Node.js

Express.js

# Libraries

QRCode.js

HTML5-QRCode

# 📂 Project Structure

**QR_GENERATOR/**

│── index.html

│── style.css

│── script.js

│── server.js

│── package.json

│── package-lock.json

# ⚙️ Installation & Setup

1️⃣ **Clone the repository**

git clone https://github.com/your-username/QR_GENERATOR.git

cd QR_GENERATOR

2️⃣ **Install dependencies**

npm install

3️⃣ **Run the server**

npm start

4️⃣ **Open in browser**

http://localhost:5000/

# 🧠 How It Works

User enters text/URL → QR is generated using QRCode library

QR can be downloaded as PNG

**Save feature:**

Stores in localStorage

Also sends data to backend (/save API)

Scanner uses device camera to decode QR

📸 Screenshots


# 🔗 API Endpoints

Method	Endpoint	Description

POST	/save	Save QR data

GET	/all	Get all saved QR data

📌 Future Improvements

🔐 User authentication

☁️ Cloud database (MongoDB/Firebase)

📊 QR analytics

🎨 Custom QR design (color/logo)

# 🤝 Contributing

Contributions are welcome!

Feel free to fork this repo and submit a pull request.

# 📄 License

This project is licensed under the MIT License.

# 👩‍💻 Author

Your **NANDHINI R**
