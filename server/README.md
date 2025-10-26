# 📚 Library Management API

A robust RESTful API for managing a library system using **Express.js**, **TypeScript**, and **MongoDB** (via Mongoose). The system allows creating and managing books, borrowing books, and generating summary reports.

---

## 🚀 Live API

🔗 **Live URL**: [https://a3-libraryapi.vercel.app/](https://a3-libraryapi.vercel.app/)

---

## ⚙️ Tech Stack

- **Express.js** – Web framework
- **TypeScript** – Type safety
- **MongoDB & Mongoose** – NoSQL database + ODM
- **Postman** – API testing

---

### ✅ Book Routes

| Method | Endpoint         | Description     | Body / Query                 |
| ------ | ---------------- | --------------- | ---------------------------- |
| POST   | `/api/books`     | Create new book | `title`, `isbn`, `copies`... |
| GET    | `/api/books`     | Get all books   | `filter`, `sort`, `limit`    |
| GET    | `/api/books/:id` | Get single book | —                            |
| PUT    | `/api/books/:id` | Update book     | `copies`, `available`        |
| DELETE | `/api/books/:id` | Delete book     | —                            |

---

### ✅ Borrow Routes

| Method | Endpoint      | Description               | Body                          |
| ------ | ------------- | ------------------------- | ----------------------------- |
| POST   | `/api/borrow` | Borrow a book             | `book`, `quantity`, `dueDate` |
| GET    | `/api/borrow` | Summary of borrowed books | —                             |

---

Thanks for taking the time to check out this project!  
I'm actively learning and building — feel free to connect with me on [X (Twitter)](https://x.com/idev_sumon) or [GitHub](https://github.com/sumon-chandra) or [Linkedin](https://www.linkedin.com/in/sumonchandra).

Let’s grow together as developers!
