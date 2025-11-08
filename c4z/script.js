
// FEATURING CREATORS
// IntersectionObserver to animate cards into view
(function(){
    const people = document.querySelectorAll('.person');
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, {threshold: 0.2});
    people.forEach(p => io.observe(p));

    // optional: keyboard "Enter" or click triggers small pulse feedback
    people.forEach(p => {
      p.addEventListener('click', () => {
        p.classList.remove('pulse');
        void p.offsetWidth; // force reflow to restart animation
        p.classList.add('pulse');
      });
      p.addEventListener('keydown', (ev) => {
        if(ev.key === 'Enter' || ev.key === ' '){
          ev.preventDefault();
          p.classList.remove('pulse');
          void p.offsetWidth;
          p.classList.add('pulse');
        }
      });
    });
  })();




// ACTIVATIONS

(function(){
    // Load embed.js once and call process to render all blockquotes
    function injectInstagramScriptOnce(){
      if(window.__igEmbedScriptLoaded) return;
      window.__igEmbedScriptLoaded = true;
      const s = document.createElement('script');
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      s.onload = () => {
        if(window.instgrm && typeof window.instgrm.Embeds !== 'undefined' && typeof window.instgrm.Embeds.process === 'function'){
          window.instgrm.Embeds.process();
        }
      };
      s.onerror = () => {
        console.warn('Instagram embed script failed to load.');
      };
      document.body.appendChild(s);
    }

    // Try to inject immediately so embeds render
    injectInstagramScriptOnce();

    // IntersectionObserver to animate cards into view
    const cards = document.querySelectorAll('#igRowScoped .ig-card');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, {threshold: 0.15});
    cards.forEach(c => io.observe(c));

    // keyboard arrow scrolling for accessibility
    const row = document.getElementById('igRow');
    window.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowRight') row.scrollBy({left:380, behavior:'smooth'});
      if(e.key === 'ArrowLeft') row.scrollBy({left:-380, behavior:'smooth'});
    });
  })();


// Force repaint/reflow (temporary debug / last resort)
window.addEventListener('load', function() {
  // try toggling a data attribute that triggers the "forced" CSS rules above
  document.body.setAttribute('data-force-mobile-fonts', '1');
  // small reflow hack
  document.body.style.transform = 'translateZ(0)';
  setTimeout(function() {
    document.body.style.transform = '';
    // remove attribute when done if you like:
    // document.body.removeAttribute('data-force-mobile-fonts');
  }, 80);
});

