
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


  // DEBUG TOOLS: paste near the end of script.js
(function(){
    window.heroDebugToggle = function(useContain){
      document.documentElement.classList.add('hero-debug'); // enable debug visuals
      if(useContain){
        document.querySelector('.hero-parallax')?.classList.add('test-contain');
      } else {
        document.querySelector('.hero-parallax')?.classList.remove('test-contain');
      }
    };
    // optional: call once for quick testing (uncomment while debugging)
    // heroDebugToggle(false); // normal debug (cover + scroll)
    // heroDebugToggle(true);  // debug contain mode (no crop)
  })();
  
