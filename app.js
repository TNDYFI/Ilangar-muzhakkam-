const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const IMG={
 politics:'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85',
 youth:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85',
 sports:'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85',
 education:'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85',
 tech:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
 society:'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=85',
 world:'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1200&q=85',
 jobs:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85'
};
const base=[
{id:1,category:'இளைஞர்',headline:'இளைஞர்களுக்கான புதிய திறன் பயிற்சிகள்: டிஜிட்டல் உலகில் வாய்ப்புகளை உருவாக்கும் முயற்சிகள்',details:'டிஜிட்டல் திறன்கள், தொழில்முனைவு மற்றும் சமூக பங்களிப்பு ஆகியவற்றை மையமாகக் கொண்டு இளைஞர்களுக்கான புதிய பயிற்சி முயற்சிகள் கவனம் பெறுகின்றன. இந்த demo செய்தி UI/UX testing-க்காக சேர்க்கப்பட்டுள்ளது.',imageUrl:IMG.youth,source:'இளைஞர் முழக்கம்',sourceUrl:'https://example.com',time:'15 நிமிடங்களுக்கு முன்'},
{id:2,category:'அரசியல்',headline:'மாநில அளவிலான இளைஞர் கொள்கை விவாதங்கள்: முக்கிய அம்சங்கள் என்ன?',details:'இளைஞர்களின் கல்வி, வேலைவாய்ப்பு, விளையாட்டு மற்றும் சமூக பங்கேற்பு குறித்து பல்வேறு கருத்துகள் முன்வைக்கப்பட்டுள்ளன. முழுமையான விவரங்கள் அதிகாரப்பூர்வ அறிவிப்புகளுடன் சரிபார்க்கப்பட வேண்டும்.',imageUrl:IMG.politics,source:'Editorial Desk',sourceUrl:'https://example.com',time:'32 நிமிடங்களுக்கு முன்'},
{id:3,category:'விளையாட்டு',headline:'உடல் ஆரோக்கியமும் விளையாட்டும்: இளைஞர்களுக்கான புதிய fitness trend',details:'தினசரி உடற்பயிற்சி, ஓட்டப்பயிற்சி மற்றும் குழு விளையாட்டுகளில் இளைஞர்களின் ஆர்வம் அதிகரித்து வருகிறது. விளையாட்டை வாழ்க்கை முறையின் ஒரு பகுதியாக மாற்ற நிபுணர்கள் வலியுறுத்துகின்றனர்.',imageUrl:IMG.sports,source:'Sports Desk',sourceUrl:'https://example.com',time:'1 மணி நேரத்திற்கு முன்'},
{id:4,category:'கல்வி',headline:'கல்வியுடன் திறன் வளர்ப்பு: மாணவர்களுக்கு உதவும் புதிய learning methods',details:'பாடப்புத்தக அறிவுடன் communication, coding, problem solving போன்ற திறன்களை இணைக்கும் கற்றல் முறைகள் மாணவர்களின் எதிர்காலத்துக்கு உதவக்கூடும்.',imageUrl:IMG.education,source:'Education Desk',sourceUrl:'https://example.com',time:'1 மணி நேரத்திற்கு முன்'},
{id:5,category:'தொழில்நுட்பம்',headline:'AI மற்றும் இளைஞர்கள்: புதிய தொழில்நுட்பத்தை பொறுப்புடன் பயன்படுத்துவது எப்படி?',details:'Artificial Intelligence கருவிகள் கல்வி, content creation மற்றும் software development போன்ற துறைகளில் வேகமாக பயன்படுத்தப்படுகின்றன. Privacy மற்றும் fact-checking முக்கியம்.',imageUrl:IMG.tech,source:'Tech Desk',sourceUrl:'https://example.com',time:'2 மணி நேரத்திற்கு முன்'},
{id:6,category:'சமூகம்',headline:'சமூக பங்களிப்பில் இளைஞர்கள்: சிறிய முயற்சிகள் உருவாக்கும் பெரிய மாற்றம்',details:'சுற்றுச்சூழல், கல்வி உதவி மற்றும் சமூக சேவை போன்ற துறைகளில் இளைஞர்களின் பங்களிப்பு பல இடங்களில் கவனம் பெறுகிறது.',imageUrl:IMG.society,source:'Youth Desk',sourceUrl:'https://example.com',time:'3 மணி நேரத்திற்கு முன்'},
{id:7,category:'இந்தியா',headline:'இந்தியாவில் இளைஞர் வேலைவாய்ப்பை மையப்படுத்தும் புதிய முயற்சிகள் குறித்து கவனம்',details:'வேலைவாய்ப்பு மற்றும் திறன் மேம்பாட்டை இணைக்கும் முயற்சிகள் குறித்து பல்வேறு தளங்களில் விவாதம் நடைபெற்று வருகிறது.',imageUrl:IMG.jobs,source:'India Desk',sourceUrl:'https://example.com',time:'4 மணி நேரத்திற்கு முன்'},
{id:8,category:'உலகம்',headline:'உலக இளைஞர்களை இணைக்கும் digital communities வளர்ச்சி',details:'உலகம் முழுவதும் இளைஞர்கள் கல்வி, தொழில்நுட்பம் மற்றும் சமூக முயற்சிகளுக்காக digital communities-ஐ பயன்படுத்துகின்றனர்.',imageUrl:IMG.world,source:'World Desk',sourceUrl:'https://example.com',time:'5 மணி நேரத்திற்கு முன்'},
{id:9,category:'வேலைவாய்ப்பு',headline:'Resume முதல் interview வரை: புதிய தலைமுறைக்கான job preparation checklist',details:'ஒரு தெளிவான resume, project portfolio மற்றும் interview preparation ஆகியவை வேலை தேடுபவர்களுக்கு முக்கியமான அடிப்படைகள்.',imageUrl:IMG.jobs,source:'Career Desk',sourceUrl:'https://example.com',time:'6 மணி நேரத்திற்கு முன்'}
];
let allNews=JSON.parse(localStorage.getItem('il_news_demo')||'null')||base;let activeCat='all',searchTerm='',visible=6,current=null;
function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function render(){const f=allNews.filter(n=>(activeCat==='all'||n.category===activeCat)&&(!searchTerm||`${n.headline} ${n.details} ${n.category}`.toLowerCase().includes(searchTerm.toLowerCase())));$('#sectionTitle').textContent=activeCat==='all'?'இன்றைய முக்கிய செய்திகள்':activeCat;$('#breakingText').textContent=f[0]?.headline||'இந்தப் பிரிவில் செய்திகள் இல்லை';
if(f[0]){$('#hero').innerHTML=`<article class="hero-card" data-id="${f[0].id}" style="background-image:url('${f[0].imageUrl}')"><div class="hero-copy"><span>${esc(f[0].category)}</span><h1>${esc(f[0].headline)}</h1><p>${esc(f[0].details.slice(0,150))}</p><small>${esc(f[0].time)} • ${esc(f[0].source)}</small></div></article>`}else $('#hero').innerHTML='<div class="empty">செய்திகள் இல்லை</div>';
$('#sideHighlights').innerHTML=f.slice(1,4).map(n=>`<article class="mini-card" data-id="${n.id}"><img src="${n.imageUrl}"><div><span>${esc(n.category)}</span><h3>${esc(n.headline)}</h3><small>${esc(n.time)}</small></div></article>`).join('');
$('#newsGrid').innerHTML=f.slice(0,visible).map(n=>`<article class="news-card" data-id="${n.id}"><div class="card-img"><img loading="lazy" src="${n.imageUrl}" onerror="this.src='${IMG.youth}'"><span class="card-cat">${esc(n.category)}</span><button class="bookmark" data-save="${n.id}"><i class="fa-regular fa-bookmark"></i></button></div><div class="news-info"><small>${esc(n.time)} • ${esc(n.source)}</small><h3>${esc(n.headline)}</h3><p>${esc(n.details.slice(0,105))}</p><div class="card-foot"><span>மேலும் படிக்க</span><i class="fa-solid fa-arrow-up-right-from-square"></i></div></div></article>`).join('');$('#loadMore').style.display=f.length>visible?'inline-flex':'none';
$$('[data-id]').forEach(x=>x.onclick=e=>{if(e.target.closest('[data-save]'))return;openArticle(Number(x.dataset.id))});$$('[data-save]').forEach(b=>b.onclick=e=>{e.stopPropagation();b.classList.toggle('saved');toast(b.classList.contains('saved')?'செய்தி சேமிக்கப்பட்டது':'சேமிப்பு நீக்கப்பட்டது')});}
function openArticle(id){current=allNews.find(n=>n.id===id);if(!current)return;$('#articleImage').src=current.imageUrl;$('#articleCat').textContent=current.category;$('#articleDate').textContent=current.time;$('#articleTitle').textContent=current.headline;$('#articleBody').textContent=current.details;$('#articleSource').innerHTML=`ஆதாரம்: <a href="${esc(current.sourceUrl)}" target="_blank" rel="noopener">${esc(current.source)} ↗</a>`;$('#articleModal').classList.add('show')}
function close(id){$('#'+id)?.classList.remove('show')}
function toast(t){let x=$('#toast');if(!x){x=document.createElement('div');x.id='toast';document.body.append(x)}x.textContent=t;x.classList.add('show');clearTimeout(x.t);x.t=setTimeout(()=>x.classList.remove('show'),1800)}
// V4 drawer controller — single source of truth, no duplicate handlers
let drawerOpen=false, drawerTouchStartX=0, drawerTouchStartY=0;
function setDrawer(open){
  const drawer=$('#drawer'), backdrop=$('#backdrop');
  if(!drawer||!backdrop)return;
  drawerOpen=!!open;
  drawer.classList.toggle('open',drawerOpen);
  backdrop.classList.toggle('show',drawerOpen);
  document.body.classList.toggle('drawer-open',drawerOpen);
  drawer.setAttribute('aria-hidden',String(!drawerOpen));
  $('#menuBtn')?.setAttribute('aria-expanded',String(drawerOpen));
  if(drawerOpen){
    const first=$('#closeDrawer');
    setTimeout(()=>first?.focus({preventScroll:true}),80);
  }else{
    $('#menuBtn')?.focus({preventScroll:true});
  }
}
function selectCat(c){
  activeCat=c; visible=6;
  $$('.cat,.quick,.bottom-nav button[data-cat],.drawer-links button[data-cat],.footer a[data-cat]').forEach(b=>b.classList.toggle('active',b.dataset.cat===c));
  render();
  setDrawer(false);
  window.scrollTo({top:0,behavior:'smooth'});
}

document.addEventListener('click',e=>{
  const cat=e.target.closest('.cat,.quick,.bottom-nav button[data-cat],.drawer-links button[data-cat],.footer a[data-cat]');
  if(cat?.dataset.cat){e.preventDefault();selectCat(cat.dataset.cat);return;}
  if(e.target.closest('#menuBtn')){e.preventDefault();setDrawer(!drawerOpen);return;}
  if(e.target.closest('#closeDrawer') || e.target.closest('#backdrop')){e.preventDefault();setDrawer(false);return;}
});

$('#menuBtn')?.setAttribute('aria-controls','drawer');
$('#menuBtn')?.setAttribute('aria-expanded','false');
$('#drawer')?.setAttribute('aria-hidden','true');
$('#drawer')?.addEventListener('touchstart',e=>{
  const t=e.changedTouches[0]; drawerTouchStartX=t.clientX; drawerTouchStartY=t.clientY;
},{passive:true});
$('#drawer')?.addEventListener('touchend',e=>{
  const t=e.changedTouches[0];
  const dx=t.clientX-drawerTouchStartX, dy=t.clientY-drawerTouchStartY;
  if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy) && dx<0)setDrawer(false);
},{passive:true});
// Edge swipe from the left opens the drawer.
document.addEventListener('touchstart',e=>{
  if(drawerOpen)return;
  const t=e.changedTouches[0];
  if(t.clientX<=18){drawerTouchStartX=t.clientX;drawerTouchStartY=t.clientY;}
},{passive:true});
document.addEventListener('touchend',e=>{
  if(drawerOpen||drawerTouchStartX>18)return;
  const t=e.changedTouches[0],dx=t.clientX-drawerTouchStartX,dy=t.clientY-drawerTouchStartY;
  if(dx>60&&Math.abs(dx)>Math.abs(dy))setDrawer(true);
  drawerTouchStartX=999;
},{passive:true});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&drawerOpen){e.preventDefault();setDrawer(false)}});
// Keep keyboard focus inside drawer while open.
document.addEventListener('keydown',e=>{
  if(e.key!=='Tab'||!drawerOpen)return;
  const drawer=$('#drawer');
  const items=[...drawer.querySelectorAll('button,a,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.disabled);
  if(!items.length)return;
  const first=items[0],last=items[items.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
});

$('#searchBtn').onclick=()=>{$('#searchPanel').classList.toggle('show');$('#searchInput').focus()};$('#searchInput').oninput=e=>{searchTerm=e.target.value;visible=6;render()};$('#clearSearch').onclick=()=>{$('#searchInput').value='';searchTerm='';render()};
$('#themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.il_theme=document.body.classList.contains('dark')?'dark':'light'};if(localStorage.il_theme==='dark')document.body.classList.add('dark');$('#refreshBtn').onclick=()=>{toast('செய்திகள் refresh செய்யப்பட்டன');render()};$('#loadMore').onclick=()=>{visible+=3;render()};
$$('[data-close]').forEach(b=>b.onclick=()=>close(b.dataset.close));$('#articleModal').onclick=e=>{if(e.target.id==='articleModal')close('articleModal')};
$('#shareBtn').onclick=async()=>{if(!current)return;if(navigator.share){try{await navigator.share({title:current.headline,text:current.details})}catch{}}else{await navigator.clipboard?.writeText(current.headline);toast('தலைப்பு copy செய்யப்பட்டது')}};$('#likeBtn').onclick=e=>{e.currentTarget.classList.toggle('liked');toast(e.currentTarget.classList.contains('liked')?'Like பதிவு செய்யப்பட்டது ❤️':'Like நீக்கப்பட்டது')};$('#saveBtn').onclick=()=>toast('செய்தி சேமிக்கப்பட்டது 🔖');
const PDF_CONFIG={pageWidth:210,pageHeight:297,margin:12,imageQuality:.96,canvasScale:2};
function escapePDFText(value){return String(value??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;')}
function createPDFFileName(title){let n=String(title||'Ilangar-Muzhakkam-News').replace(/[<>:"/\\|?*\x00-\x1F]/g,'').replace(/\s+/g,'-').trim();return (n||'Ilangar-Muzhakkam-News').substring(0,80)+'.pdf'}
function waitPDF(ms=300){return new Promise(r=>setTimeout(r,ms))}
async function waitPDFImages(container){const imgs=[...container.querySelectorAll('img')];await Promise.all(imgs.map(img=>new Promise(r=>{if(img.complete)return r();img.onload=r;img.onerror=r})))}
function createPDFContainer(news){const c=document.createElement('div');c.id='ilm-pdf-render-container';Object.assign(c.style,{position:'fixed',left:'-100000px',top:'0',width:'794px',minHeight:'1123px',background:'#fff',color:'#111',padding:'48px',boxSizing:'border-box',fontFamily:"'Noto Sans Tamil','Noto Sans',Arial,sans-serif",fontSize:'16px',lineHeight:'1.8',zIndex:'99999999',display:'block',visibility:'visible',opacity:'1'});const title=news.headline||news.title||'இளைஞர் முழக்கம்';const body=news.details||news.description||news.content||news.summary||'செய்தி விவரங்கள் இல்லை.';const category=news.category||'செய்தி';const source=news.source||news.sourceName||'இளைஞர் முழக்கம்';const date=news.time||news.date||new Date().toLocaleDateString('ta-IN');const image=news.imageUrl||news.image||news.imageUrl||'';const imageHTML=image?`<div style="width:100%;margin:25px 0;text-align:center"><img src="${escapePDFText(image)}" crossorigin="anonymous" style="width:100%;max-height:380px;object-fit:cover;border-radius:16px;display:block;background:#eee" onerror="this.style.display='none'"></div>`:'';c.innerHTML=`<div style="width:100%;border-bottom:3px solid #d50000;padding-bottom:18px;margin-bottom:25px"><div style="font-size:14px;font-weight:800;color:#d50000;margin-bottom:8px">இளைஞர் முழக்கம்</div><div style="font-size:28px;font-weight:900;line-height:1.4;color:#111">${escapePDFText(title)}</div><div style="margin-top:12px;font-size:13px;color:#666">${escapePDFText(category)} &nbsp; • &nbsp; ${escapePDFText(date)}</div></div>${imageHTML}<div style="margin-top:25px;font-size:17px;line-height:2;color:#222;white-space:pre-wrap;word-break:break-word">${escapePDFText(body)}</div><div style="margin-top:40px;padding-top:18px;border-top:1px solid #ddd;font-size:13px;color:#666"><strong>மூலம்:</strong> ${escapePDFText(source)}</div><div style="margin-top:20px;font-size:11px;color:#999;text-align:center">Generated by Ilangayargal Muzhakkam</div>`;document.body.appendChild(c);return c}
async function generateNewsPDF(news){let container=null;try{if(!news){alert('செய்தி விவரங்கள் கிடைக்கவில்லை.');return}if(!window.jspdf||!window.jspdf.jsPDF){alert('PDF library load ஆகவில்லை. Internet connection-ஐ check செய்யவும்.');return}toast('PDF தயாராகிறது...');container=createPDFContainer(news);await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));await waitPDF(500);await waitPDFImages(container);await waitPDF(300);const canvas=await html2canvas(container,{scale:PDF_CONFIG.canvasScale,useCORS:true,allowTaint:false,backgroundColor:'#fff',logging:false,imageTimeout:20000,removeContainer:true,width:container.scrollWidth,height:container.scrollHeight,windowWidth:794,scrollX:0,scrollY:0});if(!canvas||canvas.width<=0||canvas.height<=0)throw new Error('PDF canvas is empty');const imageData=canvas.toDataURL('image/jpeg',PDF_CONFIG.imageQuality);const {jsPDF}=window.jspdf;const pdf=new jsPDF({orientation:'portrait',unit:'mm',format:'a4',compress:true});const pageWidth=PDF_CONFIG.pageWidth,pageHeight=PDF_CONFIG.pageHeight,margin=PDF_CONFIG.margin,contentWidth=pageWidth-margin*2;const imageHeight=canvas.height*contentWidth/canvas.width;let heightLeft=imageHeight,position=margin;pdf.addImage(imageData,'JPEG',margin,position,contentWidth,imageHeight,undefined,'FAST');heightLeft-=pageHeight-margin*2;while(heightLeft>0){pdf.addPage();position=margin-(imageHeight-heightLeft);pdf.addImage(imageData,'JPEG',margin,position,contentWidth,imageHeight,undefined,'FAST');heightLeft-=pageHeight-margin*2}pdf.save(createPDFFileName(news.headline||news.title));toast('PDF Download தொடங்கியது ✓')}catch(error){console.error('ILM PDF ERROR:',error);alert('PDF உருவாக்குவதில் பிழை ஏற்பட்டுள்ளது.\nமீண்டும் முயற்சி செய்யவும்.')}finally{if(container)try{container.remove()}catch(e){}document.querySelectorAll('#ilm-pdf-render-container').forEach(el=>{try{el.remove()}catch(e){}})}}
async function downloadPDF(){if(!current){alert('முதலில் ஒரு செய்தியை திறக்கவும்.');return}await generateNewsPDF(current)}
$('#pdfBtn').onclick=downloadPDF;
$('#magazinePdf').onclick=async()=>{if(!allNews.length){alert('News data கிடைக்கவில்லை.');return}const magazine={...allNews[0],headline:'இளைஞர் முழக்கம் — மாத இதழ் Demo Edition',details:allNews.slice(0,6).map((n,i)=>`${i+1}. ${n.headline}\n\n${n.details}`).join('\n\n'),source:'Editorial Desk',time:'August 2026'};await generateNewsPDF(magazine)};
window.downloadNewsPDF=generateNewsPDF;window.downloadPDF=downloadPDF;
$('#accountBtn').onclick=$('#bottomAccount').onclick=$('#loginDrawer').onclick=()=>$('#authModal').classList.add('show');$('#authForm').onsubmit=e=>{e.preventDefault();const n=$('#authName').value.trim()||'இளைஞர் வாசகர்';$('#drawerUser').innerHTML=`<div class="user-avatar"><i class="fa-solid fa-user-check"></i></div><div><b>${esc(n)}</b><small>Demo profile active</small></div>`;close('authModal');toast('Demo profile உருவாக்கப்பட்டது');};
$('#tickerNext').onclick=()=>{const i=Math.floor(Math.random()*allNews.length);$('#breakingText').textContent=allNews[i].headline};
setTimeout(()=>$('#splash').classList.add('hide'),700);setTimeout(()=>$('#splash')?.remove(),1300);render();
