# 🎓 Student Dashboard

A full-stack **Student Dashboard** web application built with **Node.js, Express.js, MongoDB Atlas, and Vanilla JavaScript**. The application allows users to manage student records by performing complete **CRUD (Create, Read, Update, Delete)** operations through a clean and responsive interface.

---

## 🚀 Features

* ➕ Add new student records
* 📋 View all students
* ✏️ Update existing student information
* 🗑️ Delete student records
* ☁️ MongoDB Atlas database integration
* 🔄 RESTful API architecture
* 📱 Responsive UI using Bootstrap 5
* ⚡ Fast and lightweight frontend with Vanilla JavaScript

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

---

## 📂 Project Structure

```text
student-dashboard/
│── models/
│   └── Student.js
│
│── routes/
│   └── studentRoutes.js
│
│── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
│── .env
│── server.js
│── package.json
│── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/student-dashboard.git
```

### 2. Navigate to the project

```bash
cd student-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=4000
MONGO_URL=your_mongodb_connection_string
```

### 5. Start the server

```bash
npm run dev
```

or

```bash
npm start
```

---

## 🌐 API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/students`     | Fetch all students |
| POST   | `/api/students`     | Add a new student  |
| PUT    | `/api/students/:id` | Update a student   |
| DELETE | `/api/students/:id` | Delete a student   |

---

## 📸 Preview

<img width="1366" height="720" alt="Screenshot 2026-07-18 113448" src="https://github.com/user-attachments/assets/e87ed66c-f2a9-4f90-b0eb-45bb023d5ef9" />
<img width="1366" height="720" alt="Screenshot 2026-07-18 113419" src="https://github.com/user-attachments/assets/2ec32e44-4c64-42f1-ab05-47206f695bb0" />
<img width="1366" height="720" alt="Screenshot 2026-07-18 113459" src="https://github.com/user-attachments/assets/8dee944f-ab1c-4926-9b5c-e7a256ddadb6" />


## 💡 Future Improvements

* Search students
* Sorting and filtering
* Pagination
* Form validation
* Toast notifications
* Authentication & Authorization
* Export data to CSV/PDF
* Dark mode
* Dashboard statistics

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request


### 👨‍💻 Author

**Harvir Kaur**

CHECK MY PROJECT HERE: https://student-management-system-sigma-gray-62.vercel.app/

If you found this project helpful, consider giving it a ⭐ on GitHub!
