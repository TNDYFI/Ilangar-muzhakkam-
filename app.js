// --- 1. UI LOGIC (Sidebar & Date) ---
function toggleMenu() {
    const sidebar = document.getElementById('sidebarMenu');
    sidebar.classList.toggle('active');
}

// செட் கரண்ட் டேட் (படத்தில் உள்ளது போல்)
const dateEl = document.getElementById('current-date');
const options = { month: 'long', day: 'numeric', year: 'numeric' };
dateEl.innerText = new Date().toLocaleDateString('en-US', options);


// --- 2. FIREBASE LOGIC (News, Likes & Comments) ---
// ⚠️ உங்கள் அசல் Firebase குறியீடுகளை (Config) கீழே மாற்றவும்
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const feedContainer = document.getElementById('news-feed-target');

// Realtime News Fetching
db.collection("news").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
    
    if (snapshot.empty) {
        feedContainer.innerHTML = '<p style="text-align: center; color: #888; font-size: 20px; margin: 30px 0;">செய்திகள் ஏதும் இல்லை.</p>';
        return;
    }

    feedContainer.innerHTML = ""; // Clear existing

    snapshot.forEach((doc) => {
        const d = doc.data();
        const id = doc.id;
        const commentsHtml = (d.comments || []).map(c => `<p style="margin:5px 0;"><b>வாசகர்:</b> ${c.text}</p>`).join('');

        const card = `
            <div class="card">
                <h3>${d.title}</h3>
                <img src="${d.imageUrl}">
                <p>${d.description}</p>
                
                <div class="actions">
                    <button class="like-btn" onclick="likePost('${id}')">❤️ ${d.likes || 0}</button>
                    <input type="text" class="c-input" id="cmt-${id}" placeholder="கருத்து சேர்க்க...">
                    <button class="c-btn" onclick="addComment('${id}')">Post</button>
                </div>
                <div class="comment-list">${commentsHtml}</div>
            </div>`;
        feedContainer.innerHTML += card;
    });
}, (error) => {
    console.error("Firestore Error:", error);
    feedContainer.innerHTML = '<p style="color:red; text-align:center;">டேட்டாபேஸ் இணைப்பில் பிழை! API Key அல்லது Rules-ஐ சரிபார்க்கவும்.</p>';
});

// Like Function
window.likePost = function(id) {
    db.collection("news").doc(id).update({
        likes: firebase.firestore.FieldValue.increment(1)
    });
};

// Comment Function
window.addComment = function(id) {
    const inp = document.getElementById(`cmt-${id}`);
    if (!inp.value.trim()) return;

    db.collection("news").doc(id).update({
        comments: firebase.firestore.FieldValue.arrayUnion({ text: inp.value.trim() })
    }).then(() => {
        inp.value = ""; // Clear input after posting
    });
};
