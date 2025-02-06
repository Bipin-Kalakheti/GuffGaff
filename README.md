# GuffGaff - Real-time Chat Application

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://chatapp-e9717.firebaseapp.com)
[![GitHub](https://img.shields.io/github/license/Bipin-Kalakheti/GuffGaff)](https://github.com/Bipin-Kalakheti/GuffGaff/blob/main/LICENSE)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat&logo=firebase)](https://firebase.google.com/)

GuffGaff is a modern real-time chat application built with React and Firebase, featuring instant messaging capabilities, user authentication, and a clean, intuitive interface.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using Firebase Realtime Database
- **User Authentication**: Secure authentication system with email and social login options
- **User Status**: Real-time user online/offline status tracking
- **Message History**: Persistent chat history with timestamp support
- **Responsive Design**: Seamless experience across all device sizes
- **Modern UI**: Clean and intuitive interface with toast notifications
- **State Management**: Efficient state handling with Zustand
- **File Sharing**: Support for image and file attachments
- **User Blocking**: Ability to block/unblock users

## 🛠️ Technology Stack

- **Frontend**: React.js
- **State Management**: Zustand
- **Backend & Database**: Firebase
  - Authentication
  - Realtime Database
  - Cloud Storage
- **Styling**: Custom CSS with modern techniques
- **Build Tool**: Vite
- **Code Quality**: ESLint
- **Notifications**: React Toastify

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bipin-Kalakheti/GuffGaff.git
   cd GuffGaff
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
src/
├── components/         # React components
│   ├── chat/          # Chat interface components
│   ├── detail/        # User detail components
│   ├── list/          # Chat list components
│   ├── login/         # Authentication components
│   └── notification/  # Toast notification components
├── lib/               # Utility functions and store
│   ├── firebase.js    # Firebase configuration
│   ├── chatStore.js   # Zustand store for chat state
│   ├── userStore.js   # Zustand store for user state
│   └── upload.js      # File upload utilities
├── App.jsx            # Main application component
└── main.jsx          # Application entry point
```

## 🔥 Key Features Implementation

### Real-time Chat
- WebSocket connection management for instant messaging
- Message persistence with Firebase Realtime Database
- Optimistic updates for better user experience
- Read receipts and typing indicators

### Authentication
- Email/password authentication
- Social login integration
- Secure session management
- User profile management

### State Management
- Centralized state management with Zustand
- Efficient real-time updates
- Optimized re-rendering
- Persistent state management

## 🚀 Deployment

The application is deployed on Firebase Hosting. To deploy your instance:

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init
   ```

4. Build the application:
   ```bash
   npm run build
   ```

5. Deploy:
   ```bash
   firebase deploy
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Bipin Kalakheti**
- LinkedIn: [Bipin Kalakheti](https://www.linkedin.com/in/bipin-kalakheti/)
- GitHub: [@Bipin-Kalakheti](https://github.com/Bipin-Kalakheti)
- Portfolio: [bipinkalakheti.dev](https://bipin-kalakheti.github.io/Portfolio/)

---

Give this project a ⭐️ if you found it interesting!