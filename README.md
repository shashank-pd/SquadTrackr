# SquadTracker – Built for Teams That Build Together.

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

> ### Member Details Page 
> <img src="https://github.com/user-attachments/assets/3b7fa4d2-1120-4b4d-87db-b86d806c305a" width="700"/>


> ### View Members Page  
> <img src="https://github.com/user-attachments/assets/5e17d81a-a90a-4f73-ae11-1d98b9910dad" width="700"/>



> ### Landing Page (Mobile View)  
> <img src="https://github.com/user-attachments/assets/3ea16ede-da4b-4411-a817-d1cd84899714" width="300"/>

> ### Add Team Member (Mobile View)  
> <img src="https://github.com/user-attachments/assets/ce0bcb98-788b-43ec-b89f-a6c1c0f4ed02" width="300"/>


> ### Member Details Page (Mobile View)  
> <img src="https://github.com/user-attachments/assets/29a9436f-f2a2-4c08-8af5-de642dfff22b" width="300"/>


> ### View Members Page (Mobile View)  
> <img src="https://github.com/user-attachments/assets/c289ddf9-079c-4189-bc93-ef8ea87d5414" width="300"/>




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
   Use the `.env` in the project, it should work if you have mongodb installed as a service.

## How to Run

### 1. Install Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [MongoDB](https://www.mongodb.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) (optional)

---

### 2. Start MongoDB as a Service

> MongoDB must be running before starting the backend.

#### On Linux/macOS:

```
sudo systemctl start mongod
sudo systemctl enable mongod
```

#### On Windows (PowerShell as Administrator):

```
net start MongoDB
```
![image](https://github.com/user-attachments/assets/9d15a43a-39cb-4243-b835-4dc81216e7e0)


---

### 3. Backend Setup

```
cd backend
```

- Install dependencies:

```
npm install
# or
yarn install
```

- Ensure you have a `.env` file in the `backend/` folder:

```
MONGODB_URI=<your_mongodb_connection_string>
```
Example
```
MONGO_URI=mongodb://127.0.0.1:27017/team-api
```

- Start the backend server:

```
npm run start
# or
yarn start
```

> Backend will be running at **http://localhost:5000**
![image](https://github.com/user-attachments/assets/062a05e2-b9a3-43f2-a233-4e0f3a5ceab8)


---

### 4. Frontend Setup

```
cd frontend
```

- Install dependencies:

```
npm install
# or
yarn install
```

- Build for production:

```
npm run build
# or
yarn build
```

- Run the preview server:

```
npm run preview
# or
yarn preview
```

> Frontend will be running at **http://localhost:4173**
![image](https://github.com/user-attachments/assets/bb782545-5560-464b-8bec-9a63322f5e34)

> Visit **http://localhost:4173** to use the web app.


---

### Notes

- The `.env` file is required in the backend with the correct `MONGODB_URI`.
- Make sure MongoDB is running before launching the backend server.
- Use either `npm` or `yarn` consistently to avoid dependency conflicts.

---

## API Documentation

### Base URL

```
http://localhost:5000/
```

---

### **GET /api/members** – Get All Members

- **Description**: Returns a list of all members, sorted by newest first.
- **Endpoint**: GET /members
- **Response**: 200 OK

```
[
  {
    "_id": "id",
    "regNo": "12345",
    "name": "John Doe",
    "role": "Developer",
    "email": "john@example.com",
    "bio": "Short bio",
    "phone": "1234567890",
    "profileImage": "uploads/image.jpg",
    ...
  },
  ...
]
```

---

### **GET /api/members/:id** – Get Single Member by ID

- **Description**: Returns a specific member by their MongoDB ID.
- **Endpoint**: GET /members/:id
- **Response**: 200 OK
- **Errors**:
  - 404 Not Found – if member doesn't exist
  - 400 Bad Request – if ID format is invalid

---

### **POST /api/members** – Create a New Member

- **Description**: Creates a new member. Accepts multipart/form-data for image upload.
- **Endpoint**: POST /members
- **Headers**: Content-Type: multipart/form-data
- **Body Parameters**:
  - regNo (string) – required
  - name (string) – required
  - role (string) – required
  - email (string) – required
  - bio (string) – optional
  - phone (string) – optional
  - profileImage (file) – optional

- **Example Form Data**:

```
regNo: "12345"
name: "Jane Doe"
role: "Designer"
email: "jane@example.com"
profileImage: (file)
```

- **Response**: 201 Created

```
{
  "_id": "new_member_id",
  "regNo": "12345",
  "name": "Jane Doe",
  ...
}
```

- **Errors**:
  - 400 Bad Request – missing fields or validation error
  - 409 Conflict – member with same regNo or email already exists
  - 500 Internal Server Error – other failures


## Project Status

✅ Backend: Running on `localhost:5000`  
✅ Frontend: Running on `localhost:4173` after production build preview
