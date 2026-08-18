import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {getAuth,onAuthStateChanged,signInWithEmailAndPassword,signOut} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {getFirestore,collection,query,orderBy,onSnapshot,addDoc,serverTimestamp,deleteDoc,doc,getDoc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {firebaseConfig} from "./firebase-config.js";
const app=initializeApp(firebaseConfig),auth=getAuth(app),db=getFirestore(app),$=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const categories=["அரசியல்","சமூகம்","விளையாட்டு","இந்தியா","உலகம்","கல்வி","வேலைவாய்ப்பு","இளைஞர்","உலகம்","மாத இதழ்"];
let posts=[];
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
function setCats(){ $("#category").innerHTML=categories.map(x=>`<option>${x}</option>`).join("");$("#catGrid").innerHTML=categories.map(x=>`<div class="cat-card"><b>${x}</b><small>News section</small></div>`).join("")}
setCats();
$("#login").onsubmit=async e=>{e.preventDefault();try{await signInWithEmailAndPassword(auth,$("#email").value,$("#password").value);$("#gateStatus").textContent=""}catch(x){$("#gateStatus").textContent=x.code?.replace("auth/","")||"Login failed"}};
onAuthStateChanged(auth,async u=>{if(!u)return;const a=await getDoc(doc(db,"admins",u.uid));if(!a.exists()){await signOut(auth);$("#gateStatus").textContent="இந்த account-க்கு Admin permission இல்லை.";return}$("#gate").classList.add("hidden");$("#adminApp").classList.remove("hidden");$("#adminName").textContent=u.email});
$("#logout").onclick=()=>signOut(auth);
$$(".nav").forEach(b=>b.onclick=()=>{$$(".nav").forEach(x=>x.classList.remove("active"));b.classList.add("active");$$(".page").forEach(x=>x.classList.add("hidden"));$("#"+b.dataset.page).classList.remove("hidden");if(b.dataset.page==="posts")renderPosts()});
$("#newPost").onclick=()=>{$$(".nav").forEach(x=>x.classList.remove("active"));$('.nav[data-page="create"]').classList.add("active");$$(".page").forEach(x=>x.classList.add("hidden"));$("#create").classList.remove("hidden")};
$("#imageUrl").oninput=e=>$("#previewImg").src=e.target.value||"assest/logo.png";
function renderPosts(filter=""){const arr=posts.filter(n=>(`${n.headline} ${n.category}`.toLowerCase().includes(filter.toLowerCase())));$("#statPosts").textContent=posts.length;$("#recent").innerHTML=posts.slice(0,6).map(row).join("")||"<p>No posts yet.</p>";$("#allPosts").innerHTML=arr.map(row).join("")||"<p>No matching posts.</p>";$$(".deletePost").forEach(b=>b.onclick=()=>removePost(b.dataset.id))}
function row(n){return `<div class="post-row"><img src="${esc(n.imageUrl||"assest/logo.png")}" onerror="this.src='assest/logo.png'"><div><h3>${esc(n.headline)}</h3><small>${esc(n.category)} • ${n.timestamp?.toDate?n.timestamp.toDate().toLocaleString("ta-IN"):"just now"}</small></div><button class="danger deletePost" data-id="${n.id}">Delete</button></div>`}
const q=query(collection(db,"news"),orderBy("timestamp","desc"));onSnapshot(q,s=>{posts=s.docs.map(d=>({id:d.id,...d.data()}));renderPosts($("#adminSearch").value||"")},console.error);
$("#adminSearch").oninput=e=>renderPosts(e.target.value);
$("#postForm").onsubmit=async e=>{e.preventDefault();const b=$("#publish"),st=$("#postStatus");b.disabled=true;b.textContent="Publishing...";try{await addDoc(collection(db,"news"),{headline:$("#headline").value.trim(),category:$("#category").value,imageUrl:$("#imageUrl").value.trim(),sourceUrl:$("#sourceUrl").value.trim(),details:$("#details").value.trim(),authorName:$("#authorName").value.trim()||"இளைஞர் முழக்கம்",priority:$("#priority").value,timestamp:serverTimestamp(),published:true});st.textContent="✅ செய்தி வெளியிடப்பட்டது";e.target.reset();$("#previewImg").src="assest/logo.png"}catch(x){st.textContent="❌ "+x.message}finally{b.disabled=false;b.textContent="🚀 Publish News";setTimeout(()=>st.textContent="",3000)}};
async function removePost(id){if(confirm("இந்த post-ஐ delete செய்யவா?"))try{await deleteDoc(doc(db,"news",id));}catch(e){alert(e.message)}}
