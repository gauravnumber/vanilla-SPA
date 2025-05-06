import { About } from "./About.js";
import { Contact } from "./Contact.js";
import { Home } from "./Home.js";
import { UserDetail } from "./UserDetail.js"; // Assuming you have a UserDetail component

// Route definitions
const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
  "/user/:id": UserDetail, // Define the dynamic route for user profiles
};

// Function to match a path against defined routes
function matchRoute(path) {
  for (const routePath in routes) {
    const routeRegex = new RegExp(
      "^" + routePath.replace(/:\w+/g, "(\\w+)") + "$"
    );
    const match = path.match(routeRegex);
    if (match) {
      const params = {};
      const paramNames = routePath.match(/:(\w+)/g) || [];
      for (let i = 0; i < paramNames.length; i++) {
        params[paramNames[i].slice(1)] = match[i + 1];
      }
      return {
        component: routes[routePath],
        params: params,
      };
    }
  }
  return null;
}

// Render function
function render(path) {
  const app = document.getElementById("app");
  const routeMatch = matchRoute(path);

  if (routeMatch) {
    app.innerHTML = routeMatch.component(routeMatch.params); // Pass parameters to the component
  } else {
    app.innerHTML = `<h1>404</h1><p>Page not found.</p>`;
  }
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
