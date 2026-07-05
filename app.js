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

// 2. Toggle Menus 
window.toggleSidebar = function() {
    document.getElementById('sidebar').classList.toggle('active');
}

window.toggleDropdown = function() {
    document.getElementById('dropdownMenu').classList.toggle('active');
}

window.toggleTheme = function() {
    document.body.classList.toggle('dark-mode');
    document.getElementById('dropdownMenu').classList.remove('active');
    // Logo auto-switch handled by CSS variables
}

// 3. Modals 
window.openModal = function(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.getElementById('dropdownMenu').classList.remove('active'); 
}

window.closeModal = function(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// 4. NEW: Footer Tab Switcher (SPA Logic)
window.switchTab = function(pageId, element) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    document.getElementById('page-' + pageId).classList.add('active');

    // Update Footer Icons Active State
    const footerItems = document.querySelectorAll('.footer-item');
    footerItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
    
    // Scroll to top when changing tab
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. Create Moving Particles for Dark Mode Background
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

// Real-time Data Fetching from Firestore
const q = query(collection(db, "news"), orderBy("timestamp", "desc"));
const container = document.getElementById('news-container');

if (container) {
    onSnapshot(q, (snapshot) => {
        container.innerHTML = ''; 
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


// --- Search Bar Expand/Shrink Logic ---
const searchContainer = document.querySelector('.search-container');
const searchInput = document.getElementById('searchInput');
const logo = document.querySelector('.header-title img');
const threeDotBtn = document.querySelector('.three-dot-btn'); // ✅ correct selector

if (searchContainer && searchInput) {
    const cancelBtn = document.createElement('span');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = "✖";
    searchContainer.appendChild(cancelBtn);

    // Expand on click
    searchContainer.addEventListener('click', () => {
        searchContainer.classList.add('active');
        searchInput.focus();
        if (logo) logo.style.display = "none";          // hide logo
        if (threeDotBtn) threeDotBtn.style.display = "none"; // hide 3-dot
    });

    // Cancel → shrink back
    cancelBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent re-trigger expand
        searchContainer.classList.remove('active');
        searchInput.value = "";
        if (logo) logo.style.display = "block";         // show logo
        if (threeDotBtn) threeDotBtn.style.display = "inline-block"; // restore 3-dot
    });

    // Blur → shrink if empty
    searchInput.addEventListener('blur', () => {
        if (searchInput.value === "") {
            searchContainer.classList.remove('active');
            if (logo) logo.style.display = "block";
            if (threeDotBtn) threeDotBtn.style.display = "inline-block"; // restore 3-dot
        }
    });
}


