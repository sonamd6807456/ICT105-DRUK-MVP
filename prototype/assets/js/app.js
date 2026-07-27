function getData(key) { return JSON.parse(localStorage.getItem(key) || '[]'); }
function setData(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function currentUser() { return JSON.parse(localStorage.getItem('sceh_currentUser') || 'null'); }
function formatDate(date) { return new Date(date + 'T00:00:00').toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'}); }
function isEnded(event) { return event.status === 'Ended' || new Date(event.date + 'T23:59:59') < new Date(); }
function escapeHtml(text='') { return text.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c])); }
function toast(message) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
  t.textContent = message; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2600);
}

function renderHeader() {
  const host = document.querySelector('[data-header]'); if (!host) return;
  const user = currentUser();
  host.innerHTML = `<header class="site-header"><div class="container navbar">
    <a class="brand" href="index.html"><span class="brand-mark">SC</span><span>Smart Campus Event Hub</span></a>
    <button class="menu-btn" aria-label="Open menu">☰</button>
    <nav class="nav-links">
      <a href="index.html">Home</a><a href="events.html">Events</a><a href="about.html">About</a><a href="contact.html">Contact</a>
      ${user?.role==='admin' ? '<a href="admin.html">Admin Dashboard</a>' : ''}
      ${user ? '<a href="my-events.html">My Events</a>' : ''}
    </nav>
    <div class="nav-actions">
      ${user ? `<span class="desktop-only">Hi, ${escapeHtml(user.name.split(' ')[0])}</span><button class="btn btn-secondary btn-sm" id="logoutBtn">Logout</button>` : '<a class="btn btn-secondary btn-sm desktop-only" href="login.html">Login</a><a class="btn btn-primary btn-sm" href="signup.html">Sign Up</a>'}
    </div>
  </div></header>`;
  host.querySelector('.menu-btn').onclick = () => host.querySelector('.nav-links').classList.toggle('show');
  const logout = document.querySelector('#logoutBtn'); if (logout) logout.onclick=()=>{localStorage.removeItem('sceh_currentUser'); location.href='index.html';};
}

function renderFooter() {
  const host = document.querySelector('[data-footer]'); if (!host) return;
  host.innerHTML = `<footer><div class="container"><div class="footer-grid">
    <div><div class="brand" style="color:white"><span class="brand-mark">SC</span><span>Smart Campus Event Hub</span></div><p>One trusted place for university events, registration, updates, and student feedback.</p></div>
    <div><h4>Explore</h4><p><a href="events.html">Browse Events</a></p><p><a href="about.html">About the Hub</a></p></div>
    <div><h4>Student Support</h4><p><a href="contact.html">Contact</a></p><p><a href="login.html">Student Login</a></p></div>
  </div><div class="footer-bottom">© 2026 Smart Campus Event Hub. Student project prototype.</div></div></footer>`;
}

function eventCard(event) {
  const registrations = getData('sceh_registrations').filter(r=>r.eventId===event.id && r.status!=='Cancelled').length;
  return `<article class="event-card">
    <div class="event-img"><img src="${event.image}" alt="${escapeHtml(event.title)}"><span class="badge badge-category">${escapeHtml(event.category)}</span></div>
    <div class="event-body"><h3>${escapeHtml(event.title)}</h3><div class="event-meta"><span>📅 ${formatDate(event.date)} · ${escapeHtml(event.time)}</span><span>📍 ${escapeHtml(event.location)}</span><span>👥 ${registrations}/${event.capacity} registered</span></div></div>
    <div class="event-footer"><span class="badge ${isEnded(event)?'badge-closed':'badge-open'}">${isEnded(event)?'Ended':'Registration Open'}</span><a class="btn btn-primary btn-sm" href="event-details.html?id=${event.id}">View Details</a></div>
  </article>`;
}

function renderEvents(targetId='eventGrid', limit=null) {
  const grid = document.getElementById(targetId); if (!grid) return;
  let events = getData('sceh_events').sort((a,b)=>new Date(a.date)-new Date(b.date));
  if (limit) events = events.filter(e=>!isEnded(e)).slice(0,limit);
  grid.innerHTML = events.length ? events.map(eventCard).join('') : '<div class="empty-state">No events found.</div>';
}

function setupEventFilters() {
  const search=document.getElementById('eventSearch'), category=document.getElementById('categoryFilter'), status=document.getElementById('statusFilter'), grid=document.getElementById('eventGrid');
  if (!search || !grid) return;
  const apply=()=>{
    const q=search.value.toLowerCase();
    const items=getData('sceh_events').filter(e=>{
      const matchesText=[e.title,e.category,e.location,e.organizer].join(' ').toLowerCase().includes(q);
      const matchesCat=!category.value || e.category===category.value;
      const ended=isEnded(e); const matchesStatus=!status.value || (status.value==='upcoming'&&!ended)||(status.value==='ended'&&ended);
      return matchesText&&matchesCat&&matchesStatus;
    });
    grid.innerHTML=items.length?items.map(eventCard).join(''):'<div class="empty-state">No events match your filters.</div>';
  };
  [search,category,status].forEach(el=>el.addEventListener(el.tagName==='INPUT'?'input':'change',apply));
}

function requireStudent(returnUrl) {
  const user=currentUser();
  if (!user) { localStorage.setItem('sceh_returnUrl',returnUrl); location.href='login.html'; return null; }
  return user;
}

document.addEventListener('DOMContentLoaded',()=>{ renderHeader(); renderFooter(); });
