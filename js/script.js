// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// script.js
function loadContent(section) {
  let file = `${section}.html`; // Define file based on section

  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not OK");
      return response.text();
    })
    .then((data) => {
      document.getElementById("content").innerHTML = data; // Display content
    })
    .catch((error) => {
      console.error("Error loading content:", error);
      document.getElementById("content").innerHTML = "<p>Sorry, content could not be loaded.</p>";
    });
}

// Load default content on page load
document.addEventListener("DOMContentLoaded", () => loadContent("home"));
