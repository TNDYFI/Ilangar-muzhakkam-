import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- UI Interactions ---

// 1. Remove Loader after 2.5 seconds
setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }
}, 2500);

// 2. Toggle Menus (Exposed globally for HTML onclick attributes)
window.toggleSidebar = function() {
    document.getElementById('sidebar').classList.toggle('active');
}

window.toggleDropdown = function() {
    document.getElementById('dropdownMenu').classList.toggle('active');
}

window.toggleTheme = function() {
    document.body.classList.toggle('dark-mode');
    document.getElementById('dropdownMenu').classList.remove('active');
}

// 3. Create Moving Particles for Dark Mode Background
const bg = document.getElementById('movingBg');
if (bg) {
    for(let i=0; i<30; i++) {
        let p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = Math.random() * 100 + 'vh';
        p.style.animationDuration = (Math.random() * 5 + 5) + 's';
        p.style.animationDelay = Math.random() * 5 + 's';
        bg.appendChild(p);
    }
}

// --- Firebase Integration ---
/* 🔥 முக்கியம்: கீழே உள்ள config-ஐ உங்கள் Firebase Project-ல் இருந்து காப்பி செய்து போடவும் 🔥 */
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Real-time Data Fetching from Firestore collection named "news"
const q = query(collection(db, "news"), orderBy("timestamp", "desc"));
const container = document.getElementById('news-container');

if (container) {
    onSnapshot(q, (snapshot) => {
        container.innerHTML = ''; // Clear loading content
        if(snapshot.empty) {
            container.innerHTML = '<div style="text-align: center; margin-top: 50px; font-size: 20px; color: gray;">செய்திகள் ஏதும் இல்லை.</div>';
            return;
        }

        snapshot.forEach((doc) => {
            const data = doc.data();
            const card = document.createElement('div');
            card.className = 'news-card';
            card.innerHTML = `
                <img src="${data.imageUrl}" alt="News Image" class="news-img" onerror="this.src='https://via.placeholder.com/400x200?text=No+Image'">
                <div class="news-content">
                    <div class="news-category">${data.category}</div>
                    <div class="news-title">${data.headline}</div>
                    <div class="news-desc">${data.details.substring(0, 100)}...</div>
                </div>
            `;
            container.appendChild(card);
        });
    });
}
