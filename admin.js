// உங்களது Firebase Configuration-ஐ இங்கே மாற்றீடு செய்யவும்
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebase-ஐ துவங்குதல்
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// தேவையான எலிமெண்ட்களை எடுத்தல்
const imgInput = document.getElementById('newsImgUrl');
const imgPreview = document.getElementById('imgPreview');
const newsForm = document.getElementById('advancedNewsForm');
const submitBtn = document.getElementById('submitBtn');

// 1. Live Image Preview Logic
// அட்மின் புகைப்பட லிங்க் டைப் செய்யும் போதே அது கீழே பிரிவியூவாகத் தெரியும்
imgInput.addEventListener('input', function() {
    const urlValue = imgInput.value.trim();
    if (urlValue !== "") {
        imgPreview.src = urlValue;
        imgPreview.style.display = "block";
    } else {
        imgPreview.style.display = "none";
    }
});

// 2. Form Submission to Firebase Firestore
newsForm.addEventListener('submit', function(e) {
    e.preventDefault(); // பக்கம் ரீஃப்ரெஷ் ஆவதைத் தடுக்க

    // ஃபார்ம் மதிப்புகளை சேகரித்தல்
    const title = document.getElementById('newsTitle').value.trim();
    const category = document.getElementById('newsCategory').value;
    const imageUrl = imgInput.value.trim();
    const description = document.getElementById('newsDesc').value.trim();

    // பட்டனை லோடிங் ஸ்டேட்டிற்கு மாற்றுதல் (இரண்டு முறை கிளிக் செய்வதைத் தடுக்க)
    submitBtn.innerText = "நேரலையில் பதிவேற்றப்படுகிறது... ⏳";
    submitBtn.disabled = true;

    // Firebase "news" கலெக்ஷனில் டேட்டாவைச் சேர்த்தல்
    db.collection("news").add({
        title: title,
        category: category,
        imageUrl: imageUrl,
        description: description,
        timestamp: firebase.firestore.FieldValue.serverTimestamp() // சர்வர் நேரம்
    })
    .then(() => {
        // வெற்றிகரமாக பதிவேற்றம் செய்யப்பட்டால்
        alert("வாழ்த்துகள்! செய்தி 'இளைஞர் முழக்கம்' மொபைல் தளத்தில் வெற்றிகரமாக நேரலை செய்யப்பட்டது! 🎉");
        
        // ஃபார்மை ரீசெட் செய்தல்
        newsForm.reset();
        imgPreview.style.display = "none";
    })
    .catch((error) => {
        // பிழை ஏற்பட்டால்
        console.error("Error adding document: ", error);
        alert("செய்தியை பதிவிடுவதில் தோல்வி! இணைய இணைப்பைச் சரிபார்க்கவும்.");
    })
    .finally(() => {
        // பட்டனை பழைய நிலைக்குக் கொண்டு வருதல்
        submitBtn.innerText = "செய்தியை உடனடியாக வெளியிடு 🚀";
        submitBtn.disabled = false;
    });
});
