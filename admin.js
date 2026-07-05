import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* 🔥 Main app-ல் போட்ட அதே Firebase config-ஐ இங்கேயும் போடவும் 🔥 */
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

const form = document.getElementById('newsForm');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const status = document.getElementById('status');
        
        btn.innerText = "பதிவேற்றப்படுகிறது...";
        btn.style.backgroundColor = "gray";
        btn.disabled = true;

        try {
            // Add data to Firestore collection named "news"
            await addDoc(collection(db, "news"), {
                headline: document.getElementById('headline').value,
                category: document.getElementById('category').value,
                imageUrl: document.getElementById('imgUrl').value,
                details: document.getElementById('details').value,
                timestamp: serverTimestamp() // Sorts latest news first
            });

            status.innerText = "✅ செய்தி வெற்றிகரமாக பதிவேற்றப்பட்டது!";
            status.style.color = "green";
            e.target.reset(); // Clear form inputs
        } catch (error) {
            console.error("Error adding document: ", error);
            status.innerText = "❌ பிழை ஏற்பட்டுள்ளது. Console-ஐ பார்க்கவும்.";
            status.style.color = "red";
        } finally {
            btn.innerText = "செய்தியை வெளியிடு (PUBLISH)";
            btn.style.backgroundColor = "#cc0000";
            btn.disabled = false;
            setTimeout(() => status.innerText = "", 3000);
        }
    });
}
