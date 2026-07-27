(() => {
  const EVENTS_KEY = 'sceh_acquisition_events';
  const VISITOR_KEY = 'sceh_landing_visitor_id';

  function getVisitorId() {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = `visitor-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  }

  function recordEvent(eventType, source, details = '') {
    const events = JSON.parse(localStorage.getItem(EVENTS_KEY) || '[]');
    events.push({
      timestamp: new Date().toISOString(),
      visitorId: getVisitorId(),
      eventType,
      source,
      details
    });
    localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  }

  recordEvent('landing_view', document.referrer ? 'referral' : 'direct', location.pathname);

  document.querySelectorAll('.track-cta').forEach(link => {
    link.addEventListener('click', () => recordEvent('cta_click', link.dataset.cta || 'unknown', link.getAttribute('href') || ''));
  });

  const interestButton = document.getElementById('interestButton');
  const interestMessage = document.getElementById('interestMessage');
  interestButton?.addEventListener('click', () => {
    recordEvent('test_interest', 'landing_page', 'User recorded interest in testing the prototype');
    interestButton.textContent = 'Interest Recorded ✓';
    interestButton.disabled = true;
    interestMessage.textContent = 'Thank you. Your test interest was stored in this browser.';
  });
})();