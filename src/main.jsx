import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import FirebaseProvider from './context/firebasecontext.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FirebaseProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FirebaseProvider>
  </BrowserRouter>
);
