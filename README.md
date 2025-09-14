# BaatCheet 💬

BaatCheet is a **real-time chat application** that allows users to communicate seamlessly with each other. Built with a modern full-stack approach, it provides features like authentication, live messaging, user profiles, and media sharing.

---
<img width="1910" height="1017" alt="Image" src="https://github.com/user-attachments/assets/9988babb-8e73-4b7c-bc22-ea09b341e8e6" />

## 🌟 Features

- **User Authentication:** Secure sign-up and login system.
- **Real-time Messaging:** Instant messaging using WebSockets.
- **User Profiles:** View and update profile information.
- **Media Sharing:** Send images and files in chat.
- **Responsive Design:** Works on both desktop and mobile devices.
- **Private and Group Chats:** Create group chats and private conversations.

---

## 🛠️ Tech Stack

**Frontend:**  
- React.js  
- Tailwind CSS  
- Vite  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- Socket.io  

**Other Tools:**  
- Cloudinary (for image storage)  
- JWT (for authentication)  
- Axios (for API requests)

---

baatcheet/
├── backend/              # Node.js + Express API
│   ├── src/
│   │   ├── controllers/   # Logic for auth & messages
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   └── lib/           # Utils, DB connection, Cloudinary
│   └── package.json
├── frontend/             # React frontend
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Pages like Login, Home, Profile
│   │   ├── store/         # Zustand stores
│   │   └── lib/           # Axios instance, helpers
│   └── package.json
├── README.md
└── .gitignore

💡 Future Improvements

-Add video and voice calling.
-Implement typing indicators.
-Push notifications for new messages.
-Emojis, reactions, and message reactions.
-Dark mode toggle.
