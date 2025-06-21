// Side menu functionality
const sideMenu = document.querySelector('#sideMenu');

function openMenu() {
  sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
  sideMenu.style.transform = 'translateX(16rem)';
}

// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const action = form.getAttribute("action");

      fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            form.reset(); // ✅ Clears the form
            alert("✅ Message sent successfully!");
          } else {
            response.json().then(data => {
              alert(data.error || "❌ There was a problem.");
            });
          }
        })
        .catch(() => {
          alert("❌ Network error. Please try again.");
        });
    });
  }
});
