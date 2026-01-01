/* utils.js
   Helper functions for rendering components, handling navigation and modals.
   Keep this file concise but preserve behavior from the original combined file.
*/

let currentLang = 'en';
let currentSlideIndex = 0;
let slideInterval = null;

/* Load navbar and footer components into placeholders */
async function loadComponents() {
  try {
    const navResp = await fetch('components/navbar.html');
    const navHtml = await navResp.text();
    document.getElementById('navbar-placeholder').innerHTML = navHtml;

    const footResp = await fetch('components/footer.html');
    const footHtml = await footResp.text();
    document.getElementById('footer-placeholder').innerHTML = footHtml;
    
  } catch (e) {
    console.warn('Could not load components:', e);
  }
}

/* Build a service card HTML */
function createServiceCard(s) {
  return `
    <div class="bg-white rounded-xl p-4 shadow hover:shadow-lg transition">
      <img src="${s.image}" class="w-full h-40 object-cover rounded mb-3" alt="${s.title.en}">
      <div class="flex items-center justify-between mb-2">
        <h4 class="font-bold text-chakra text-lg">${s.title[currentLang] || s.title.en}</h4>
        ${s.isNew ? '<span class="text-xs bg-primary text-white px-2 py-1 rounded">New</span>' : ''}
      </div>
      <p class="text-sm text-gray-600 mb-3 line-clamp-3">${s.desc[currentLang] || s.desc.en}</p>
      <div class="flex gap-2">
        <button onclick="openServiceModal(${s.id})" class="px-3 py-2 bg-secondary text-white rounded text-sm">Enquire</button>
        <button onclick="filterServices('${s.category}')" class="px-3 py-2 border rounded text-sm">${s.category}</button>
      </div>
    </div>
  `;
}

/* Render main SPA markup (home view with hero, search, categories) */
function renderSPA() {
  const root = document.getElementById('spa-root');
  if (!root) return;

  root.innerHTML = `
    <!-- HERO & SLIDER -->
    <div id="view-home" class="page-view active">
      <section class="relative h-[450px] bg-gray-900 overflow-hidden group">
        <div id="hero-slider" class="relative h-full w-full"></div>
        <button onclick="prevSlide()" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-primary text-white p-3 rounded-full z-20 hover:scale-110"><i class="fas fa-chevron-left"></i></button>
        <button onclick="nextSlide()" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-primary text-white p-3 rounded-full z-20 hover:scale-110"><i class="fas fa-chevron-right"></i></button>
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20" id="slider-dots"></div>
      </section>

      <section class="relative z-20 -mt-8 mb-8 container mx-auto px-4">
        <div class="bg-white p-4 rounded-xl shadow-xl max-w-3xl mx-auto border border-gray-100 flex gap-2 search-ring">
          <div class="flex-grow relative">
            <i class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input type="text" id="home-search-input" oninput="handleHomeSearch(this.value)" 
                   class="w-full pl-12 pr-4 py-3 rounded-lg border-none focus:ring-0 text-gray-700 bg-transparent placeholder-gray-400" 
                   placeholder="Search for services (e.g., Aadhaar, Pan, License)...">
          </div>
          <button class="bg-secondary hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold transition shadow-md hidden sm:block">Search</button>
        </div>
      </section>

      <section class="py-2 bg-white">
        <div class="container mx-auto px-4">
          <div class="flex gap-4 overflow-x-auto no-scrollbar pb-4" id="category-list"></div>
        </div>
      </section>

      <section id="search-results-section" class="hidden py-8 bg-gray-50 border-b">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-chakra">Search Results</h3>
            <button onclick="clearSearch()" class="text-red-500 text-sm hover:underline">Clear Search</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="search-results-grid"></div>
        </div>
      </section>

      <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-8 bg-chakra rounded"></div>
              <h3 class="text-2xl font-bold text-dark">Latest Updates & News</h3>
            </div>
            <button onclick="window.location.href='blog.html' " class="text-primary text-sm font-bold hover:underline">View All Updates &rarr;</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6" id="home-blog-grid"></div>
        </div>
      </section>

      <section class="py-12 bg-light border-t border-primary/20">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-8 bg-secondary rounded"></div>
              <h3 class="text-2xl font-bold text-dark">Our Gallery</h3>
            </div>
            <button onclick="window.location.href='gallery.html' " class="text-secondary text-sm font-bold hover:underline">View Gallery &rarr;</button>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4" id="home-gallery-preview"></div>
        </div>
      </section>

      <section class="py-12 bg-gray-50 border-t border-gray-200">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-8 bg-primary rounded"></div>
              <h3 class="text-2xl font-bold text-dark">New & Trending Services</h3>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="trending-services"></div>
        </div>
      </section>
    </div>

    <!-- Gallery, About, Services, Blog, Contact views are also available inside SPA if needed -->
    <div id="view-gallery" class="page-view"></div>
    <div id="view-about" class="page-view"></div>
    <div id="view-services" class="page-view"></div>
    <div id="view-blog" class="page-view"></div>
    <div id="view-contact" class="page-view"></div>

    <!-- Modals -->
    <div id="service-modal" class="fixed inset-0 z-50 hidden bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-fade-in flex flex-col md:flex-row overflow-hidden border-t-8 border-primary">
        <button onclick="closeModal()" class="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center transition z-10"><i class="fas fa-times"></i></button>
        <div class="md:w-3/5 p-8 overflow-y-auto custom-scroll">
          <img id="modal-img" src="" class="w-full h-48 object-cover rounded-lg mb-6 shadow-sm">
          <span id="modal-category" class="text-secondary font-bold text-xs uppercase tracking-wide">Category</span>
          <h2 id="modal-title" class="text-3xl font-bold text-chakra mb-4 mt-1">Service Title</h2>
          <p id="modal-desc" class="text-gray-600 mb-6 leading-relaxed">Description goes here.</p>
          <div class="mb-6 bg-light p-4 rounded-lg border border-primary/20">
            <h4 class="font-bold text-chakra border-b border-primary/20 pb-2 mb-3 text-sm uppercase"><i class="fas fa-file-alt mr-2 text-primary"></i> <span data-key="lblDocuments">Documents</span></h4>
            <ul id="modal-docs" class="list-disc list-inside text-sm text-gray-700 space-y-1"></ul>
          </div>
          <div>
            <h4 class="font-bold text-chakra border-b pb-2 mb-3 text-sm uppercase"><i class="fas fa-check-circle mr-2 text-secondary"></i> <span data-key="lblEligibility">Eligibility</span></h4>
            <p id="modal-eligibility" class="text-sm text-gray-600">Criteria goes here.</p>
          </div>
        </div>
        <div class="md:w-2/5 bg-gray-50 p-8 border-l border-gray-200 flex flex-col justify-center">
          <h3 class="text-xl font-bold mb-4 text-chakra" data-key="formTitle">Enquiry Now</h3>
          <form id="enquiry-form" onsubmit="handleEnquiry(event)">
            <input type="hidden" id="service-name-hidden">
            <div class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-gray-500 mb-1" data-key="formName">Name *</label>
                <input type="text" id="cust-name" required class="w-full border-gray-300 rounded p-2.5 text-sm border focus:ring-2 focus:ring-primary focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-gray-500 mb-1" data-key="formMobile">Mobile *</label>
                <input type="tel" id="cust-mobile" pattern="[0-9]{10}" required class="w-full border-gray-300 rounded p-2.5 text-sm border focus:ring-2 focus:ring-primary focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-gray-500 mb-1" data-key="formMessage">Message *</label>
                <textarea id="cust-message" rows="3" required class="w-full border-gray-300 rounded p-2.5 text-sm border focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
              </div>
              <button type="submit" class="w-full bg-secondary hover:bg-green-700 text-white font-bold py-3 rounded shadow transition">
                <span data-key="btnSubmit">Send Enquiry</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="media-modal" class="fixed inset-0 z-50 hidden bg-black/90 flex items-center justify-center p-4 backdrop-blur-md" onclick="closeMediaModal()">
      <div class="relative w-full max-w-5xl">
        <button onclick="closeMediaModal()" class="absolute -top-10 right-0 text-white hover:text-primary transition"><i class="fas fa-times text-2xl"></i></button>
        <div id="media-content" class="flex justify-center items-center h-full"></div>
        <p id="media-caption" class="text-center text-white mt-4 font-medium"></p>
      </div>
    </div>
  </div>
  `;

  // After injecting SPA markup, render dynamic bits:
  renderHeroSlides();
  renderCategories();
  renderTrendingServices();
  renderBlogGrid();
  renderGallery();
  renderMegaMenu();
  renderMobileServices();

  // Load initial home previews
  const homePreview = document.getElementById('home-gallery-preview');
  const homeBlogGrid = document.getElementById('home-blog-grid');
  if (homePreview) homePreview.innerHTML = galleryData.slice(0,4).map(g => `<img src="${g.src}" class="w-full h-24 object-cover rounded">`).join('');
  if (homeBlogGrid) homeBlogGrid.innerHTML = blogData.slice(0,3).map(b => generateBlogCard(b)).join('');

  startSlideInterval();
}

/* HERO slider rendering */
function renderHeroSlides() {
  const slider = document.getElementById('hero-slider');
  const dots = document.getElementById('slider-dots');
  if (!slider) return;

  // create 3 slides (uses trending services)
  slider.innerHTML = '';
  let slidesHtml = '';
  const trending = servicesData.filter(s => s.isTrending).slice(0, 3);
  for (let i=0;i<3;i++){
    const svc = trending[i] || servicesData[i] || {};
    slidesHtml += `
      <div class="absolute inset-0 bg-cover bg-center ${i===0 ? 'slide-active' : 'slide-hidden'}" style="background-image:url('${svc.image || 'images/aryaimage2.jpg'}')">
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div class="max-w-2xl text-white">
            <h3 class="text-3xl md:text-5xl font-bold hero-title-text">${svc.title ? svc.title[currentLang] || svc.title.en : ''}</h3>
            <p class="mt-4 hero-desc-text">${svc.desc ? (svc.desc[currentLang] || svc.desc.en) : ''}</p>
            <div class="mt-6">
              <button onclick="openServiceModal(${svc.id || 101})" class="bg-secondary hover:bg-green-700 text-white px-4 py-2 rounded">Enquire</button>
              <button onclick="window.location.href='services.html'" class="bg-white text-chakra px-4 py-2 rounded ml-2">View Services</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  slider.innerHTML = slidesHtml;

  dots.innerHTML = Array.from({length:3}).map((_,i)=>`<button onclick="goToSlide(${i})" class="w-3 h-3 rounded-full transition ${i===0 ? 'bg-primary scale-125' : 'bg-white/50'}" aria-label="slide ${i+1}"></button>`).join('');
}

/* slide control */
function updateSliderUI() {
  const slides = document.querySelectorAll('#hero-slider > div');
  const dots = document.querySelectorAll('#slider-dots > button');
  slides.forEach((s,i) => { s.className = i === currentSlideIndex ? 'absolute inset-0 bg-cover bg-center slide-active' : 'absolute inset-0 bg-cover bg-center slide-hidden'; });
  dots.forEach((d,i) => { d.className = 'w-3 h-3 rounded-full transition ' + (i===currentSlideIndex ? 'bg-primary scale-125' : 'bg-white/50'); });

  // update content for active slide (title/desc)
  const activeService = servicesData.filter(s => s.isTrending).slice(0,3)[currentSlideIndex];
  if(activeService) {
    const activeSlide = slides[currentSlideIndex];
    if (activeSlide) {
      const titleEl = activeSlide.querySelector('.hero-title-text');
      const descEl = activeSlide.querySelector('.hero-desc-text');
      if (titleEl) titleEl.innerText = activeService.title[currentLang];
      if (descEl) descEl.innerText = activeService.desc[currentLang];
    }
  }
}

function nextSlide(){ currentSlideIndex = (currentSlideIndex+1)%3; updateSliderUI(); }
function prevSlide(){ currentSlideIndex = (currentSlideIndex-1+3)%3; updateSliderUI(); startSlideInterval(); }
function goToSlide(i){ currentSlideIndex = i; updateSliderUI(); startSlideInterval(); }
function startSlideInterval(){ if(slideInterval) clearInterval(slideInterval); slideInterval = setInterval(()=>{ nextSlide(); }, 6000); }

/* RENDER CATEGORIES */
function renderCategories(){
  const el = document.getElementById('category-list');
  if(!el) return;

}

/* Render trending services on home */
function renderTrendingServices(){
  const el = document.getElementById('trending-services');
  if(!el) return;
  const trending = servicesData.filter(s => s.isTrending).slice(0,8);
  el.innerHTML = trending.map(s => createServiceCard(s)).join('');
}

/* render blog cards */
function generateBlogCard(b){
  return `
    <div class="bg-white rounded-xl shadow p-4">
      <img src="${b.image}" alt="${b.title}" class="w-full h-40 object-cover rounded mb-3">
      <div class="text-xs text-gray-500 mb-2">${b.date} · ${b.category}</div>
      <h4 class="font-bold text-chakra mb-2">${b.title}</h4>
      <p class="text-sm text-gray-600">${b.desc}</p>
    </div>
  `;
}
function renderBlogGrid(){
  const grid = document.getElementById('blog-grid') || document.getElementById('home-blog-grid');
  if(!grid) return;
  grid.innerHTML = blogData.map(generateBlogCard).join('');
}

/* render gallery */
function renderGallery(){
  const grid = document.getElementById('gallery-grid');
  const homePreview = document.getElementById('home-gallery-preview');
  if(grid) grid.innerHTML = galleryData.map((item, idx) => `
    <div class="break-inside-avoid mb-6 cursor-pointer group" onclick="openMediaModal(${idx})">
      <div class="relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition border-2 border-transparent hover:border-primary">
        <img src="${item.src}" class="w-full h-auto object-cover" alt="${item.title}">
        ${item.type === 'video' ? '<div class="absolute inset-0 flex items-center justify-center play-overlay"><i class="fas fa-play-circle text-white text-5xl opacity-80"></i></div>' : ''}
        <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <h5 class="text-white font-bold text-sm">${item.title}</h5>
          <p class="text-gray-300 text-xs line-clamp-1">${item.desc}</p>
        </div>
      </div>
    </div>
  `).join('');
  if(homePreview) homePreview.innerHTML = galleryData.slice(0,4).map(i => `<div class="relative h-32 rounded-lg overflow-hidden"><img src="${i.src}" class="w-full h-full object-cover"></div>`).join('');
}

/* Mega menu */
function renderMegaMenu(){
  const container = document.getElementById('mega-menu-content');
  if(!container) return;
  container.innerHTML = '';
  const grouped = {};
  categories.forEach(cat => grouped[cat] = []);
  servicesData.forEach(s => {
    if (grouped[s.category]) grouped[s.category].push(s);
  });
  categories.forEach(cat => {
    const col = document.createElement('div');
    col.innerHTML = `
      <h5 class="font-bold text-primary mb-3 border-b border-gray-100 pb-2 text-sm uppercase tracking-wide">${cat}</h5>
      <ul class="space-y-2 text-sm text-gray-600">
        ${grouped[cat].map(s => `<li><a href="#" onclick="openServiceModal(${s.id}); event.preventDefault();" class="hover:text-secondary block truncate font-medium cursor-pointer transition hover:text-primary">${s.title.en}</a></li>`).join('')}
      </ul>
    `;
    container.appendChild(col);
  });
}

/* Mobile services list */
function renderMobileServices(){
  const container = document.getElementById('mobile-services-list');
  if(!container) return;
  container.innerHTML = '';
  categories.forEach(cat => {
    container.innerHTML += `<button onclick="filterServices('${cat}'); toggleMobileMenu()" class="block w-full text-left py-1 hover:text-primary pl-2">${cat}</button>`;
  });
  container.innerHTML += `<button onclick="filterServices('all'); toggleMobileMenu()" class="block w-full text-left py-1 font-bold text-primary pl-2">View All Services →</button>`;
}

function toggleMobileMenu(){ const mm = document.getElementById('mobile-menu'); if(mm) mm.classList.toggle('hidden'); }

/* Search logic */
function handleHomeSearch(q){
  const resultsSection = document.getElementById('search-results-section');
  const resultsGrid = document.getElementById('search-results-grid');
  const trendingSection = document.getElementById('trending-services')?.closest('section');
  const sliderSection = document.getElementById('hero-slider')?.closest('section');

  if(!q || q.trim()==='') {
    if(resultsSection) resultsSection.classList.add('hidden');
    if(trendingSection) trendingSection.classList.remove('hidden');
    if(sliderSection) sliderSection.classList.remove('hidden');
    return;
  }
  const lowerQ = q.toLowerCase();
  const results = servicesData.filter(s => {
    const title = (s.title.en + (s.title.mr||'') + (s.title.hi||'')).toLowerCase();
    const cat = (s.category||'').toLowerCase();
    return title.includes(lowerQ) || cat.includes(lowerQ);
  });
  if(trendingSection) trendingSection.classList.add('hidden');
  if(sliderSection) sliderSection.classList.add('hidden');
  if(resultsSection) resultsSection.classList.remove('hidden');
  if(resultsGrid){
    resultsGrid.innerHTML = results.length === 0 ? `<p class="col-span-full text-center text-gray-500">No services found for "${q}"</p>` : results.map(s=>createServiceCard(s)).join('');
  }
}

function clearSearch(){
  document.getElementById('home-search-input').value = '';
  handleHomeSearch('');
}

/* Filtering */
function filterServices(cat){   
  const grid = document.getElementById('services-grid');
  if(!grid) {
    // If not on services page, navigate
    if (document.location.pathname.endsWith('services.html')) return;
    return navigateTo('services');
  }
  const list = cat === 'all' ? servicesData : servicesData.filter(s => s.category === cat);
  grid.innerHTML = list.map(createServiceCard).join('');
}

/* Service modal */
function openServiceModal(id){
  const service = servicesData.find(s => s.id === id);
  if(!service) return;
  
  // Check if modal exists, if not navigate to services page
  let modal = document.getElementById('service-modal');
  if (!modal) {
    // Modal doesn't exist on this page, navigate to services page first
    window.location.href = 'services.html';
    return;
  }
  
  document.getElementById('modal-img').src = service.image;
  document.getElementById('modal-category').innerText = service.category;
  document.getElementById('modal-title').innerText = service.title[currentLang] || service.title.en;
  document.getElementById('modal-desc').innerText = service.desc[currentLang] || service.desc.en;
  document.getElementById('modal-eligibility').innerText = service.eligibility[currentLang] || service.eligibility.en;

  const docsList = document.getElementById('modal-docs');
  docsList.innerHTML = '';
  (service.docs[currentLang] || service.docs.en).forEach(d => docsList.innerHTML += `<li>${d}</li>`);

  document.getElementById('service-name-hidden').value = service.title.en;
  document.getElementById('service-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal(){ 
  const modal = document.getElementById('service-modal');
  if (modal) {
    modal.classList.add('hidden'); 
    document.body.style.overflow = 'auto'; 
  }
}

/* Media modal */
function openMediaModal(index){
  const item = galleryData[index];
  const content = document.getElementById('media-content');
  const caption = document.getElementById('media-caption');
  const modal = document.getElementById('media-modal');
  if (!item) return;

  if(item.type === 'video'){
    content.innerHTML = `<div class="relative w-full h-auto max-h-[80vh] aspect-video bg-black flex items-center justify-center rounded-lg overflow-hidden border-2 border-white">
        <img src="${item.src}" class="absolute inset-0 w-full h-full object-cover opacity-50">
        <i class="fas fa-play-circle text-6xl text-white z-10 animate-pulse"></i>
        <p class="absolute bottom-10 text-white font-bold">Video Placeholder</p>
      </div>`;
  } else {
    content.innerHTML = `<img src="${item.src}" class="max-w-full max-h-[85vh] rounded-lg shadow-2xl border-4 border-white">`;
  }
  caption.innerText = `${item.title} - ${item.desc}`;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeMediaModal(){ document.getElementById('media-modal').classList.add('hidden'); document.body.style.overflow = 'auto'; }

/* Forms -> WhatsApp behaviour */
function handleEnquiry(e){
  e.preventDefault();
  const serviceName = document.getElementById('service-name-hidden').value;
  const name = document.getElementById('cust-name').value;
  const mobile = document.getElementById('cust-mobile').value;
  const message = document.getElementById('cust-message').value;
  const waNumber = "917774946121";
  const waMessage = `Hello, I want to enquire about ${serviceName}.\n\nName: ${name}\nMobile: ${mobile}\nMessage: ${message}`;
  const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(waMessage)}`;
  window.open(waUrl, '_blank');
  closeModal();
  e.target.reset();
}

function handleContactForm(e){
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const phone = document.getElementById('contact-phone').value;
  const subject = document.getElementById('contact-subject').value;
  const msg = document.getElementById('contact-msg').value;
  const waNumber = "917774946121";
  const waMessage = `*General Enquiry from Website*\n\nName: ${name}\nPhone: ${phone}\nEnquiry Type: ${subject}\nMessage: ${msg}`;
  const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(waMessage)}`;
  window.open(waUrl, '_blank');
  e.target.reset();
}

/* Language selector */
function toggleLangMenu(){ const m = document.getElementById('lang-menu'); if(m) m.classList.toggle('hidden'); }
function changeLang(l){
  currentLang = l;
  document.getElementById('current-lang-label').innerText = l.toUpperCase();
  // rerender text requiring translations:
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[l] && translations[l][key]) el.innerText = translations[l][key];
  });
  // update dynamic content
  renderSPA();
}

/* Navigation helper: if SPA view exposed, show view; otherwise navigate to page */
function navigateTo(name){
  // If SPA root has the associated view element, act as SPA; else, navigate to matching HTML page.
  const viewId = `view-${name}`;
  const viewEl = document.getElementById(viewId);
  if (viewEl) {
    document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
    viewEl.classList.add('active');
    // scroll top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  // Map name to separate pages
  const map = {
    home: 'index.html',
    about: 'about.html',
    blog: 'blog.html',
    gallery: 'gallery.html',
    services: 'services.html',
    contact: 'contact.html'
  };
  const target = map[name] || 'index.html';
  window.location.href = target;
}

/* Close dropdown if clicked outside (small helper) */
window.addEventListener('click', function(event){
  if(!event.target.closest('#lang-menu') && !event.target.closest('[onclick^="toggleLangMenu"]')) {
    const menu = document.getElementById('lang-menu');
    if(menu && !menu.classList.contains('hidden')) menu.classList.add('hidden');
  }
});
