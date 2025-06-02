
# 🌐 Production MERN Portfolio App

A **production-ready portfolio website** built using the MERN (MongoDB, Express, React, Node.js) stack. This web app showcases personal projects, skills, experience, and includes a working contact form — all deployed and hosted on [Render](https://render.com/).

> 🔗 **Live Demo**: [https://mern-portfolio-app-5b38.onrender.com/](https://mern-portfolio-app-5b38.onrender.com/)

---

## 📸 Screenshots

> Replace these with your actual images in an `/assets` or `/images` folder

<p align="center">
  ![image](https://github.com/user-attachments/assets/12aae7ca-95ff-42c5-b0da-74b1418a9a16)

  <br/>
  <i>Landing page with personal introduction</i>
</p>

<p align="center">
  ![image](https://github.com/user-attachments/assets/f72f479a-1aa6-4c51-9ca3-12852261bfca)

  <br/>
  <i>Portfolio projects dynamically rendered from backend</i>
</p>

---

## 🚀 Features

- ✅ **Responsive Frontend:** Built with React and CSS
- 🔗 **API Integration:** Node.js + Express backend
- 🗃️ **MongoDB Integration:** For storing portfolio/project/contact data
- 📬 **Contact Form:** Sends message via backend route
- 🧑‍💻 **Modular Codebase:** Clean separation of client and server
- ☁️ **Deployed:** On Render (both frontend and backend)

---

## 📁 Folder Structure
production-mern-portfolio-app/
│
├── client/ # React frontend
│ └── build/ # Production-ready frontend build
│ └── src/ # React source files
│
├── controllers/ # Express controllers
├── routes/ # API routes (e.g., contact, projects)
├── models/ (if any) # MongoDB schemas
├── server.js # Entry point for backend
├── package.json # Dependencies for backend
└── README.md


---

## 🧑‍💻 Technologies Used

| Tech       | Description                     |
|------------|---------------------------------|
| **React**  | Frontend library for UI         |
| **Node.js**| JavaScript runtime for backend  |
| **Express**| Web framework for API           |
| **MongoDB**| NoSQL database for persistence  |
| **Render** | Deployment platform             |
| **CSS**    | Styling and responsive design   |

---

## 🛠️ Installation & Setup

### 📦 Prerequisites

Make sure you have the following installed:
- Node.js and npm
- MongoDB (local or Atlas)

### 🔧 Steps to Run Locally

1. **Clone the repository:**


```bash
git clone https://github.com/lakhanpalore/production-mern-portfolio-app.git
cd production-mern-portfolio-app

npm install
cd client
npm install
```
2. Set Environment variables
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_SERVICE_USER=your_email@example.com
EMAIL_SERVICE_PASS=your_app_password


