# 🌐 Login System Frontend (React + Vite + Tailwind)

This is the **frontend** of a full-stack MERN authentication system. It enables users to **register**, **login**, **view**, and **update** their profile information in a secure and responsive UI.

> ✅ Built with ReactJS, Tailwind CSS, Axios, and React Router DOM.

---

## ✨ Features

- 🔐 User Registration and Login forms
- 📄 Profile view with update capability
- 🧠 JWT authentication via localStorage
- ⚡ Responsive UI with Tailwind CSS
- 🔁 React Router navigation
- 🚫 Protected routes (unauthorized users are redirected)
- 🍞 Real-time toast notifications via React-Toastify

---

## 📁 Project Structure
loginSyatem-FE/
│
├── src/
│ ├── Api/ # Axios instance with auth headers
│ ├── components/ # Navbar and shared components
│ ├── context/ # Auth context for user/token
│ ├── pages/ # Register, Login, Profile pages
│ ├── App.jsx # Main app routes
│ ├── main.jsx # React DOM entry
│ └── index.css # TailwindCSS styles
├── .env # API URL
├── tailwind.config.js # Tailwind setup
├── vite.config.js # Vite config
└── package.json # Dependencies

---

## 🚀 Installation

### 1. Clone the repo

```bash
git clone https://github.com/SwaminathanVK/loginSyatem-FE.git
cd loginSyatem-FE

2. Install dependencies
bash

npm install

📸 Pages & Routing
Path	Component	Access
/register	Register	Public
/login	Login	Public
/profile	ProfilePage	Protected
/	Home / Auth	Redirect

🛠 Tech Stack
Frontend: ReactJS + Vite

Styling: Tailwind CSS

Routing: React Router DOM

HTTP: Axios

Toast Notifications: React-Toastify

State: useContext + useReducer

🔐 Auth Flow
User registers or logs in

Token is saved in localStorage

AuthContext shares user data across app

Protected routes validate token on mount

Axios automatically attaches token in headers

🤝 Backend Integration
This app connects to:
🔗 Backend Repo: SwaminathanVK/loginSyatem-BE

👤 Author
Swaminathan VK
