import { About } from "./About.js";
import { Contact } from "./Contact.js";
import { Home } from "./Home.js";

// Route definitions
const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
};

// Render function
function render(path) {
  const app = document.getElementById("app");
  app.innerHTML = routes[path]
    ? routes[path]()
    : `<h1>404</h1><p>Page not found.</p>`;
}

// Navigation handler
function onNavClick(event) {
  if (event.target.matches("[data-link]")) {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    window.history.pushState({}, "", path);
    render(path);
  }
}

// Listen for navigation and popstate
document.addEventListener("click", onNavClick);
window.addEventListener("popstate", () => render(window.location.pathname));

// Initial render
render(window.location.pathname);
