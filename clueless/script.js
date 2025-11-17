// Main logic: placeholder -> real iframe, episode switching, splash, sparkles

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector(".video-inner-frame");
  const placeholder = document.getElementById("main-video-placeholder");
  const episodeCards = document.querySelectorAll(".episode-card");
  const sparkleTargets = document.querySelectorAll(".sparkle-target");

  let mainVideo = null; // will hold the <iframe> once we create it

  // Get the embed URL from a card's data attribute
  function getEmbedFromCard(card) {
    if (!card) return null;
    return card.getAttribute("data-embed");
  }

  // Determine which URL to use by default (active card, then first card, then fallback)
  function getDefaultEmbed() {
    const active = document.querySelector(".episode-card.active");
    const fromActive = getEmbedFromCard(active);
    if (fromActive) return fromActive;

    if (episodeCards[0]) {
      const fromFirst = getEmbedFromCard(episodeCards[0]);
      if (fromFirst) return fromFirst;
    }

    // Fallback to your full embed URL
    return "https://www.youtube.com/embed/zTj_JG3aVRs?si=T_keYtRt6RU1Hw92";
  }

  // Create the main iframe if it doesn't exist yet, then set its src
  function ensureMainPlayer(embedUrl) {
    if (!mainContainer) return;

    const url = embedUrl || getDefaultEmbed();
    if (!url) return;

    if (!mainVideo) {
      // Build the iframe exactly like the YouTube embed structure,
      // but with src set to the url we want
      mainVideo = document.createElement("iframe");
      mainVideo.id = "main-video";
      mainVideo.width = "560";
      mainVideo.height = "315";
      mainVideo.src = url;
      mainVideo.title = "YouTube video player";
      mainVideo.frameBorder = "0";
      mainVideo.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      mainVideo.referrerPolicy = "strict-origin-when-cross-origin";
      mainVideo.allowFullscreen = true;

      mainContainer.appendChild(mainVideo);
    } else {
      mainVideo.src = url;
    }

    // Hide placeholder once we have a real player
    if (placeholder) {
      placeholder.classList.add("hidden");
    }
  }

  // Click on the big placeholder: create and play default episode
  if (placeholder) {
    placeholder.addEventListener("click", () => {
      ensureMainPlayer();
    });
  }

  // Episode cards: create player if needed, then switch src
  episodeCards.forEach((card) => {
    card.addEventListener("click", () => {
      const embedUrl = getEmbedFromCard(card);
      if (!embedUrl) return;

      ensureMainPlayer(embedUrl);

      // Active styling
      episodeCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      // Scroll to player on mobile
      if (window.innerWidth < 768) {
        const playerSection = document.getElementById("player");
        if (playerSection) {
          playerSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // ================== SPLASH ==================
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.body.classList.add("splash-done");
    }, 600);
  });

  // ================== PREVENT FORM SUBMIT RELOAD ==================
  const chatForm = document.querySelector(".chat-input");
  if (chatForm) {
    chatForm.addEventListener("submit", (e) => e.preventDefault());
  }

  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => e.preventDefault());
  }

  // ================== HOVER SPARKLES ==================
  function spawnSparkle(x, y) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${x - 4}px`;
    sparkle.style.top = `${y - 4}px`;
    document.body.appendChild(sparkle);

    sparkle.addEventListener("animationend", () => {
      sparkle.remove();
    });
  }

  sparkleTargets.forEach((el) => {
    el.addEventListener("mouseenter", (event) => {
      spawnSparkle(event.clientX, event.clientY);
    });

    el.addEventListener("mousemove", (event) => {
      if (Math.random() < 0.08) {
        spawnSparkle(event.clientX, event.clientY);
      }
    });
  });
});



  // ========== REELS HORIZONTAL SCROLL ==========
  const reelsStrip = document.getElementById("reels-strip");
  const reelsLeft = document.querySelector(".reels-arrow-left");
  const reelsRight = document.querySelector(".reels-arrow-right");

  function scrollReels(direction) {
    if (!reelsStrip) return;
    const amount = 260 * direction; // tweak scroll distance if you want
    reelsStrip.scrollBy({ left: amount, behavior: "smooth" });
  }

  if (reelsLeft) {
    reelsLeft.addEventListener("click", () => scrollReels(-1));
  }

  if (reelsRight) {
    reelsRight.addEventListener("click", () => scrollReels(1));
  }

