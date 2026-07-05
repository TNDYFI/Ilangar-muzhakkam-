// Firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔑 Firebase Config (replace with your own project details)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔍 Search Bar
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("keyup", async () => {
  const searchText = searchInput.value.toLowerCase();
  resultsDiv.innerHTML = "";

  if (searchText.length > 0) {
    // Example: search in "members" collection, field "name"
    const q = query(
      collection(db, "members"),
      where("name", ">=", searchText),
      where("name", "<=", searchText + "\uf8ff")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      resultsDiv.innerHTML += `<p>${data.name} - ${data.email}</p>`;
    });

    if (querySnapshot.empty) {
      resultsDiv.innerHTML = "<p>No results found.</p>";
    }
  }
});
