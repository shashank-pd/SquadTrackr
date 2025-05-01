# SquadTrackr – Student Team Members Management System

A full-stack web application developed to manage student team members efficiently. Utilizing a **React.js frontend** and a **Node.js + Express backend**, this application offers features such as member addition, viewing, detailed profiles, and image uploads. All data is securely stored and managed using **MongoDB**. The app includes **data validation** to ensure proper field input and **error handling** for issues like invalid data, database errors, and file upload failures. The website is fully responsive and designed for both web and mobile views.

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

### Landing Page
*(Screenshot of the homepage or landing page)*

### Add Member Page
*(Screenshot of the add member page with the form fields)*

### View Members Page
*(Screenshot of the page displaying the list of members)*

### Members Page (Mobile View)
*(Screenshot of the mobile view of the members page)*

### Add Team Member (Mobile View)
*(Screenshot of the add team member page in mobile view)*

### Landing Page (Mobile View)
*(Screenshot of the mobile view of the landing page)*

### Member Details Page
*(Screenshot of the member details page with full profile info)*

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
