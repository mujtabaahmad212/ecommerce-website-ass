# E-Commerce Website

A modern, animated e-commerce website built with React, Vite, Firebase, and Framer Motion.

## 🚀 Features

- **Beautiful Animations**: Smooth, premium animations powered by Framer Motion
- **Firebase Integration**: Authentication, Firestore database, and Storage
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Purple/pink gradient theme with glassmorphism effects
- **Sticky Navigation**: Animated navbar with scroll effects
- **Product Cards**: Interactive product cards with hover effects
- **Loading States**: Custom animated loading spinner

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

## 🔧 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ecommerce-website-ass
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication (Email/Password and Google)
   - Create a Firestore database
   - Enable Storage
   - Get your Firebase configuration

4. Create a `.env` file in the root directory and add your Firebase credentials:
```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Start the development server:
```bash
npm run dev
```

## 🎨 Technologies Used

- **React** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Firebase** - Backend services
  - Authentication
  - Firestore
  - Storage
- **React Router** - Navigation
- **React Icons** - Icon library

## 📁 Project Structure

```
src/
├── costumComponents/    # All React components
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   ├── LoadingSpinner.jsx
│   └── ...
├── context/            # React Context
│   └── firebasecontext.jsx
├── firebase.config.js  # Firebase configuration
├── App.jsx            # Main app component
└── main.jsx          # Entry point
```

## 🚩 Key Features Explained

### Firebase Integration
All Firebase services are initialized in `firebase.config.js` and made available through React Context (`firebasecontext.jsx`). This includes:
- User authentication
- Google Sign-in
- Firestore database operations
- Firebase Storage (fixed the storage access error)

### Animations
The app uses Framer Motion for:
- Page entrance animations
- Stagger animations for lists
- Hover effects
- Smooth transitions
- Parallax scrolling effects

### Components
- **Navbar**: Sticky navbar with scroll effects and mobile slide-in menu
- **ProductCard**: Animated product cards with hover overlays
- **Hero**: Parallax hero section with floating particles
- **LoadingSpinner**: Full-screen loading animation while Firebase initializes

## 🐛 Troubleshooting

### Firebase Storage Error
If you encounter "Access to storage is not allowed from this context":
- Make sure your `.env` file is properly configured
- Check that Firebase Storage is enabled in your Firebase console
- Verify the storage bucket name in your configuration

### Module Import Errors
If you see errors like "Cannot find module":
- Run `npm install` again
- Clear the cache: `npm cache clean --force`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Next Steps

To further enhance the website:
1. Add product data to Firestore
2. Implement shopping cart functionality
3. Add checkout process
4. Create user profile pages
5. Add product search and filters
6. Implement wishlist feature

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 👨‍💻 Author

**N.Ahmad**

---

**Note**: Remember to keep your `.env` file private and never commit it to version control. The `.gitignore` file should already include it.
