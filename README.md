# 💬 Realtime MERN Messaging App

## A modern, full-stack chat application featuring secure authentication and blazing-fast, real-time communication.

**▶️ View Live Application:** [https://chat-app-ff3i.onrender.com/](https://chat-app-ff3i.onrender.com/)

---

## ✨ Features

* **⚡ Realtime Communication:** Enjoy instantaneous messaging and live chat updates powered by **Socket.io**.
* **🔒 Secure Authentication:** Users are securely managed with **JSON Web Token (JWT)** authentication for protected routes and API access.
* **🎨 Clean & Modern UI:** A sleek, user-friendly interface designed with **DaisyUI** components on top of **Tailwind CSS**.
* **🏗️ MERN Stack Architecture:** A robust and scalable foundation using MongoDB, Express.js, React, and Node.js.
* **⚙️ RESTful API:** A high-performance backend API built with **Express** and **Node.js**.

## 💻 Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **React** | The core library for building the user interface. |
| | **Tailwind CSS** | A utility-first CSS framework for rapid styling. |
| | **DaisyUI** | A component library that simplifies Tailwind CSS development for clean UIs. |
| **Backend** | **Node.js** | The runtime environment for running the server. |
| | **Express.js** | A fast, unopinionated framework for the API layer. |
| | **Socket.io** | Enables low-latency, bidirectional, and event-based communication. |
| **Database** | **MongoDB** | A flexible NoSQL database for application data. |
| **Authentication** | **JWT (JSON Web Token)** | Used for secure, state-less authentication. |

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js (LTS recommended)
* npm or yarn
* MongoDB instance (local or cloud)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPO_URL]
    cd [your-project-name]
    ```

2.  **Install dependencies:**

    * For the backend (in the root directory):
        ```bash
        npm install
        # or yarn install
        ```
    * For the frontend (navigate into the client directory):
        ```bash
        cd client
        npm install
        # or yarn install
        ```

3.  **Environment Variables:**

    Create a file named `.env` in the root directory and add your configuration details:
    ```
    # MongoDB Connection String
    MONGO_URI=mongodb://localhost:27017/yourdbname

    # JWT Secret Key
    JWT_SECRET=your_super_secret_key

    # Port for the server
    PORT=5000
    ```

### Running the App

1.  **Start the backend server:**
    ```bash
    # In the root directory
    npm run start
    # or npm run dev (if using a dev script like nodemon)
    ```

2.  **Start the frontend client:**
    ```bash
    # In the client directory
    npm run dev
    ```

The application should now be running on `http://localhost:[frontend-port]` (usually `3000` or `5173`).

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

***

*(Note: Remember to replace `[YOUR_REPO_URL]` and placeholders like `[your-project-name]` with your actual information.)*
