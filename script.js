import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔑 Firebase Config (replace with your own)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Search Function
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("keyup", async () => {
  const searchText = searchInput.value.toLowerCase();
  resultsDiv.innerHTML = "";

  if (searchText.length > 0) {
    const q = query(
      collection(db, "members"),
      where("name", ">=", searchText),
      where("name", "<=", searchText + "\uf8ff")
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      resultsDiv.innerHTML += `<div><strong>${data.name}</strong> - ${data.email}</div>`;
    });

    if (querySnapshot.empty) {
      resultsDiv.innerHTML = "<p>No results found.</p>";
    }
  }
});
