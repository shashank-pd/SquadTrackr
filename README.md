# 🎯 SquadTracker – *Built for Teams That Build Together*

![Tech Stack](https://img.shields.io/badge/Tech_Stack-MERN-blue.svg)
![Responsive](https://img.shields.io/badge/Responsive-Yes-ff69b4)
![UI Animation](https://img.shields.io/badge/Framer--Motion-Animated-000000?logo=framer&logoColor=white)
![Image Upload](https://img.shields.io/badge/Image_Uploads-Multer-yellow)
![Notifications](https://img.shields.io/badge/Toastify-Enabled-FF6C37)


A **MERN stack** full-featured web application for managing student teams efficiently. Built with a **React.js frontend** and a **Node.js + Express backend**, SquadTracker allows users to add, view, and manage team members, with image upload support and real-time profile rendering. Data is securely managed using **MongoDB** with strong validation and robust error handling.

---

## 👨‍💻 Team Members

| Name                | Registration Number | GitHub Profile                                              |
| ------------------- | ------------------- | ----------------------------------------------------------- |
| **Ayush Singh**     | RA2211027010231     | [Ayush-Singh24](https://github.com/Ayush-Singh24)           |
| **Devansh Patel**   | RA2211027010228     | [Devansh-Patel-2929](https://github.com/Devansh-Patel-2929) |
| **Shashank Prasad** | RA2211027010234     | [shashank-pd](https://github.com/shashank-pd)               |

---

## 🧰 Tech Stack

| Layer        | Technologies Used                                                                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend** | ![React](https://img.shields.io/badge/React.js-ffffff?logo=react&logoColor=61DAFB&style=for-the-badge) ![Vite](https://img.shields.io/badge/Vite-ffffff?logo=vite&logoColor=646CFF&style=for-the-badge) ![HTML5](https://img.shields.io/badge/HTML5-ffffff?logo=html5&logoColor=E34F26&style=for-the-badge) ![CSS3](https://img.shields.io/badge/CSS3-ffffff?logo=css3&logoColor=1572B6&style=for-the-badge) |
| **Backend**  | ![Node.js](https://img.shields.io/badge/Node.js-ffffff?logo=node.js&logoColor=339933&style=for-the-badge) ![Express](https://img.shields.io/badge/Express.js-ffffff?logo=express&logoColor=000000&style=for-the-badge)                       |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-ffffff?logo=mongodb&logoColor=47A248&style=for-the-badge)                                                                                       |
| **Others**   | ![Multer](https://img.shields.io/badge/Multer-ffffff?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjY0IiBjeT0iNjQiIHI9IjY0IiBmaWxsPSIjN0Y3RjdGIi8+PC9zdmc+) ![dotenv](https://img.shields.io/badge/Dotenv-ffffff?style=for-the-badge&logo=dotenv&logoColor=black) ![Toastify](https://img.shields.io/badge/React--Toastify-ffffff?style=for-the-badge&logo=react&logoColor=FF6C37) ![Framer Motion](https://img.shields.io/badge/Framer--Motion-ffffff?style=for-the-badge&logo=framer&logoColor=000000) |


## 🚀 Features

### ✅ Core Functionalities

* **Add Member**: Form with fields – Name, Reg. No., Role, Email, Phone, Profile Image.
* **View Members**: Grid layout with brief info and clickable profile links.
* **Member Detail View**: Individual profile display with full contact and image.
* **Data Validation**: Checks for required fields, image size/type validation.
* **Image Upload**: JPEG, PNG, GIF (Max: 5MB).
* **Error Handling**: User-friendly messages for server, DB, and file issues.
* **Responsive Design**: Seamless across web and mobile.

---

## 🖼️ Screenshots

| Web View                                                                                       | Mobile View                                                                                        |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| ![Landing](https://github.com/user-attachments/assets/6f3cfc4a-1705-4ee8-b78b-7449458b8208)    | ![Mobile Landing](https://github.com/user-attachments/assets/3ea16ede-da4b-4411-a817-d1cd84899714) |
| ![Add Member](https://github.com/user-attachments/assets/33823621-2ff9-48c1-9f48-06f0036f6b98) | ![Mobile Add](https://github.com/user-attachments/assets/ce0bcb98-788b-43ec-b89f-a6c1c0f4ed02)     |
| ![Details](https://github.com/user-attachments/assets/3b7fa4d2-1120-4b4d-87db-b86d806c305a)    | ![Mobile Details](https://github.com/user-attachments/assets/29a9436f-f2a2-4c08-8af5-de642dfff22b) |
| ![Grid](https://github.com/user-attachments/assets/5e17d81a-a90a-4f73-ae11-1d98b9910dad)       | ![Mobile Grid](https://github.com/user-attachments/assets/c289ddf9-079c-4189-bc93-ef8ea87d5414)    |

---

## ⚙️ Installation & Setup

### 📁 Clone Repository

```bash
git clone https://github.com/shashank-pd/SquadTrackr.git
cd SquadTrackr
```

---

### 🔧 Backend Setup

```bash
cd backend
npm install
```

Create `.env` in `backend/` and add:

```env
MONGO_URI=mongodb://127.0.0.1:27017/team-api
PORT=5000
```

Start backend:

```bash
npm start
```

Runs on: `http://localhost:5000`

---

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run build
npm run preview
```

Runs on: `http://localhost:4173`

---

### ✅ Prerequisites

* Node.js (v16+)
* MongoDB installed & running
* npm or Yarn

### ⚙️ Start MongoDB (if not running)

**Linux/macOS:**

```bash
sudo systemctl start mongod
```

**Windows:**

```powershell
net start MongoDB
```

---

## 📡 API Endpoints

### 🔹 `GET /members`

> Returns list of all team members.

### 🔹 `GET /members/:id`

> Fetch details of a specific member.

### 🔹 `POST /members`

> Add a new member (with image upload).

**Body (multipart/form-data):**

```json
{
  "name": "John Doe",
  "regNo": "12345",
  "email": "john@example.com",
  "role": "Frontend",
  "phone": "9876543210",
  "profileImage": (File)
}
```

**Errors:**

* `400` – Bad Request (validation)
* `409` – Duplicate Entry
* `500` – Internal Server Error

---

## 🏁 Project Status

| Module   | Status                        |
| -------- | ----------------------------- |
| Backend  | ✅ Live at `localhost:5000`    |
| Frontend | ✅ Preview on `localhost:4173` |
| MongoDB  | ✅ Running locally             |

---


