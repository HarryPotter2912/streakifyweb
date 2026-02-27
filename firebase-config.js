// Firebase SDK from CDN (no build step needed)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD3PkpD3pdTj66nSOHcSyv3gcijvXAGxAA",
  authDomain: "streaks-6553c.firebaseapp.com",
  projectId: "streaks-6553c",
  storageBucket: "streaks-6553c.firebasestorage.app",
  messagingSenderId: "895973033005",
  appId: "1:895973033005:web:168b24c65fd5059533a4a4",
  measurementId: "G-X5NVYHN68S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Expose for use elsewhere in the app (optional)
window.firebaseApp = app;
window.firebaseAnalytics = analytics;
