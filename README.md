# SquadTrackr – Built for Teams That Build Together.

A full-stack web application developed to manage student team members efficiently. Utilizing a **React.js frontend** and a **Node.js + Express backend**, this application offers features such as member addition, viewing, detailed profiles, and image uploads. All data is securely stored and managed using **MongoDB**. The app includes **data validation** to ensure proper field input and **error handling** for issues like invalid data, database errors, and file upload failures. The website is **fully responsive** and designed for both web and mobile views.

---

## 👥 Team Details

- [**Ayush Singh**– RA2211027010231](https://github.com/Ayush-Singh24) 
- [**Devansh Patel** – RA2211027010228](https://github.com/Devansh-Patel-2929)
- [**Shashank Prasad**– RA2211027010234](https://github.com/shashank-pd)

---

## 🛠️ Software Requirements

### Backend

| Component       | Version/Requirement        |
|-----------------|----------------------------|
| **Node.js**     | v14 or newer               |
| **MongoDB**     | Community Server edition   |
| **Environment** | `.env` file with `MONGO_URI` and `PORT` variables |

### Frontend

| Component | Version/Requirement |
|-----------|---------------------|
| **npm**   | v6 or newer         |
| **React.js** | v19 (via Vite)    |

---

## 🚀 Features

### Frontend

- **Add Member Page**: A form to input new member details, including:
  - Name
  - Registration Number
  - Role
  - Email
  - Phone Number
  - Profile Picture (image upload)

- **View Members Page**: Displays all team members in a grid layout with options to view more details for each member.

- **Member Details Page**: Clicking on a member in the list navigates to their detailed profile, showing:
  - Full Name
  - Registration Number
  - Role
  - Contact Information
  - Profile Picture

### Backend

- **REST API Endpoints**:
  - `GET /members`: Fetch all team members.
  - `GET /members/:id`: Fetch a specific member’s details using their ID.
  - `POST /members`: Add a new team member, including profile image upload.

- **Data Validation**: Ensures all required fields are provided (e.g., Registration Number, Name, Email).

- **Error Handling**: Includes error handling for validation issues, database errors, and file upload issues.

- **File Upload**: Supports uploading images (JPEG, PNG, GIF) with a size limit of 5MB.

---

## 📸 Screenshots

> ### Landing Page  
> <img src="https://github.com/user-attachments/assets/6f3cfc4a-1705-4ee8-b78b-7449458b8208" width="700"/>

> ### Add Member Page  
> <img src="https://github.com/user-attachments/assets/33823621-2ff9-48c1-9f48-06f0036f6b98" width="700"/>

> ### View Members Page  
> <img src="https://github.com/user-attachments/assets/3b7fa4d2-1120-4b4d-87db-b86d806c305a" width="700"/>

> ### Member Details Page  
> <img src="https://github.com/user-attachments/assets/5e17d81a-a90a-4f73-ae11-1d98b9910dad" width="700"/>

> ### Members Page (Mobile View)  
> <img src="https://github.com/user-attachments/assets/c289ddf9-079c-4189-bc93-ef8ea87d5414" width="300"/>

> ### Add Team Member (Mobile View)  
> <img src="https://github.com/user-attachments/assets/ce0bcb98-788b-43ec-b89f-a6c1c0f4ed02" width="300"/>

> ### Landing Page (Mobile View)  
> <img src="https://github.com/user-attachments/assets/3ea16ede-da4b-4411-a817-d1cd84899714" width="300"/>

> ### Member Details Page (Mobile View)  
> <img src="https://github.com/user-attachments/assets/6e615ec9-a006-4ec3-905b-122cb65f4f4c" width="300"/>

---


## ⚙️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/Ayush-Singh24/FSD-CT-2.git
cd FSD-CT-2
```

### Install Dependencies

#### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

#### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

### Environment Setup

1. Create a `.env` file in the backend directory and add the following environment variables:

   ```bash
   MONGO_URI=your_mongo_connection_string
   PORT=5000
   ```

### Run the Application

#### Backend

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

#### Frontend

1. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

The application should now be accessible at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

---
