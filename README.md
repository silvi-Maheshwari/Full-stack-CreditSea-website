# CreditSea Fullstack Assignment 🚀  
A fullstack MERN application that processes XML files containing soft credit pull data from Experian. The system includes a backend for file upload and extraction, a MongoDB database for storage, and a React frontend for viewing reports.

---

## 🔹 Features  
✅ Upload XML files via REST API  
✅ Parse and extract key credit report details  
✅ Store extracted data in MongoDB  
✅ Display reports via a user-friendly React frontend  
✅ Hosted on Render (backend) & Netlify/Vercel (frontend)  

---

## 📌 Tech Stack  
- **Frontend:** React, Axios, React Router  
- **Backend:** Node.js, Express.js, Multer, XML2JS  
- **Database:** MongoDB, Mongoose  
- **Deployment:** Render (backend), Netlify (frontend)  

---

## 🛠️ Installation & Setup  

### **1️⃣ Clone Repository**  
```sh
git clone https://github.com/silvi-Maheshwari/Full-stack-CreditSea-website.git

### **2️⃣ Backend Setup**  
```sh
cd backend
npm install
npm run dev 
```
-  **MongoDB Atlas**  
- **Environment Variables (`.env`)**
  ```
  MONGO_URI=mongodb+srv://maheshwarisilvi98:silvi123@cluster0.jftpm.mongodb.net/books?retryWrites=true&w=majority
  PORT=7000
  ```

### **3️⃣ Frontend Setup**  
```sh
cd frontend
npm install
npm start
```
- **Environment Variables (`.env`)**
  ```
  VITE_BACKEND_URL=https://backend-creditsea.onrender.com


## 🚀 API Endpoints  

### **1️⃣ Upload XML File**  
- **Endpoint:** `POST /upload`  
- **Request Body:** `form-data` (Key: `file`, Value: XML file)  
- **Response:**
  ```json
  {
    "message": "File processed successfully",
    "data": { ...parsed report data... }
  }
  ```

### **2️⃣ Fetch Reports**  
- **Endpoint:** `GET /reports`  
- **Response:**
  ```json
  [
    {
      "name": "John Doe",
      "creditScore": 750,
      "reportSummary": { "totalAccounts": 5, "activeAccounts": 3 }
    }
  ]
  ```

---

## 🎨 UI Screenshots  
🖼️ **[Upload Page]** | 
![image](https://github.com/user-attachments/assets/e8eb9bf7-111a-4d98-ad26-313a832501a4)

🖼️ **[Reports Page]**  
![image](https://github.com/user-attachments/assets/472995a5-8668-4a04-bab9-75150e59c33d)

---

## 🌍 Deployment  
### **Backend** (Render)  
- [Live Backend URL](https://backend-creditsea.onrender.com)

### **Frontend** (Netlify/Vercel)  
- [Live Frontend URL](https://adorable-snickerdoodle-abd274.netlify.app/)

---

## 🧪 Testing  
- **Postman:** Test API endpoints  
---

## 🔗 Additional Resources  
- **Multer (File Uploading)** - https://www.npmjs.com/package/multer  
- **XML2JS (XML Parsing)** - https://www.npmjs.com/package/xml2js  


