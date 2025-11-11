# 💬 Realtime MERN Messaging App


<img width="1268" height="732" alt="Screenshot 2025-11-11 at 9 53 35 AM" src="https://github.com/user-attachments/assets/08f4071d-db6f-46d3-b6bc-d7319b5ea82a" />
<img width="1431" height="745" alt="Screenshot 2025-11-11 at 9 55 36 AM" src="https://github.com/user-attachments/assets/2a8763c8-2de0-4f72-a77f-d9c59e7e8c07" />
<img width="728" height="730" alt="Screenshot 2025-11-11 at 9 56 25 AM" src="https://github.com/user-attachments/assets/4e41cabc-4a19-4a94-b73e-23c9b4df45ac" />
<img width="1252" height="732" alt="Screenshot 2025-11-11 at 9 56 54 AM" src="https://github.com/user-attachments/assets/3e6114ae-2509-44ef-85d9-fc424193a53f" />


## A modern, full-stack chat application featuring secure authentication and blazing-fast, real-time communication.

**▶️ View Live Application:** [https://chat-app-ff3i.onrender.com/](https://chat-app-ff3i.onrender.com/)

---

## ✨ Features

* **⚡ Realtime Communication:** Enjoy instantaneous messaging and live chat updates powered by **Socket.io**.
* **🔒 Secure Authentication:** Users are securely managed with **JSON Web Token (JWT)** authentication for protected routes and API access.
* **🎨 Clean & Modern UI:** A sleek, user-friendly interface designed with 32 themes! **DaisyUI** components on top of **Tailwind CSS**.
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
