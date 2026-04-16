document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // FEED FILTER SYSTEM
    // =========================

    const filterButtons = document.querySelectorAll(".filter-btn");
    const feedCards = document.querySelectorAll(".feed-card");

    filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        // update active state
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // filter cards
        feedCards.forEach(card => {
        const category = card.dataset.category;

        if (filter === "all" || category === filter) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
        });
    });
    });

    // ===== PROJECT MODAL =====
const projectModal = document.getElementById("project-modal");
const projectModalBody = projectModal.querySelector(".modal-body");
const projectCloseBtn = projectModal.querySelector(".modal-close");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.dataset.title;
    const description = card.dataset.description;

    projectModalBody.innerHTML = `
      <h2>${title}</h2>
      <p>${description.replace(/\n/g, "<br><br>")}</p>
    `;

    projectModal.classList.add("active");
  });
});

// CLOSE BUTTON
projectCloseBtn.addEventListener("click", () => {
  projectModal.classList.remove("active");
});

// CLICK OUTSIDE
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    projectModal.classList.remove("active");
  }
});

  // =========================
  // SELECTORS
  // =========================
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  // =========================
  // TAB SWITCHING
  // =========================
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      tabContents.forEach(content => {
        content.classList.remove("active");
      });

      const activeContent = document.getElementById(target);
      if (activeContent) {
        activeContent.classList.add("active");
      }

      
    });
  });

 

  

  // =========================
  // CARD INTERACTION
  // =========================
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-4px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // =========================
  // ✅ GALLERY LIGHTBOX (ADD THIS)
  // =========================
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const imgSrc = item.querySelector("img").src;

      const galleryModal = document.getElementById("modal");

      galleryModal.classList.remove("hidden");

      galleryModal.querySelector(".modal-body").innerHTML = `
        <img src="${imgSrc}" style="width:100%; border-radius:12px;" />
      `;
    });
  });

  // =========================
    // SCROLL REVEAL SYSTEM
    // =========================

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add("active");
        }
    });
    }, {
    threshold: 0.1
    });

    reveals.forEach(el => observer.observe(el));

    // =========================
    // SOFT CURSOR
    // =========================

    const cursor = document.querySelector(".cursor-glow");

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    });

    function animateCursor() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // =========================
    // CURSOR HOVER STATES
    // =========================

    const hoverElements = document.querySelectorAll("button, .card, .project-card, .tab");

    hoverElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
    });

    el.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover");
    });
    });

    // =========================
    // MAGNETIC EFFECT (subtle)
    // =========================

    hoverElements.forEach(el => {
    el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.transform = `translate(
        ${(x - rect.width / 2) * 0.05}px,
        ${(y - rect.height / 2) * 0.05}px
        )`;
    });

    el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0, 0)";
    });
    });

    

});