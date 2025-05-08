import { About } from "./About.js";
import { Contact } from "./Contact.js";
import { Home } from "./Home.js";
import { UserDetail } from "./UserDetail.js";

class Router {
  constructor() {
    // Store routes and get app container
    this.routes = {};
    this.app = document.getElementById("app");

    // Set up routes
    this.setupRoutes();

    // Set up event listeners
    this.setupEventListeners();
  }

  // Set up all routes
  setupRoutes() {
    this.routes = {
      "/": Home,
      "/about": About,
      "/contact": Contact,
      "/user/:id": UserDetail,
    };
  }

  // Handle route changes
  handleRoute() {
    const path = window.location.pathname;

    // Find matching route
    let matchedRoute = null;
    let params = {};

    // Check each route
    for (const [routePath, component] of Object.entries(this.routes)) {
      // Convert route path to regex pattern
      const pattern = routePath
        .replace(/:[^/]+/g, "([^/]+)") // Replace :id with capture group
        .replace(/\//g, "\\/"); // Escape forward slashes

      const regex = new RegExp(`^${pattern}$`);
      const match = path.match(regex);

      if (match) {
        // Extract parameters if any
        const paramNames = routePath.match(/:[^/]+/g) || [];
        paramNames.forEach((param, index) => {
          const paramName = param.slice(1); // Remove the : prefix
          params[paramName] = match[index + 1];
        });

        matchedRoute = component;
        break;
      }
    }

    // Render the matched route or 404
    if (matchedRoute) {
      this.app.innerHTML = matchedRoute(params);
    } else {
      this.app.innerHTML = `<h1>404</h1><p>Page not found.</p>`;
    }
  }

  // Handle navigation
  navigate(path) {
    window.history.pushState({}, "", path);
    this.handleRoute();
  }

  // Set up event listeners
  setupEventListeners() {
    // Handle link clicks
    document.addEventListener("click", (event) => {
      if (event.target.matches("[data-link]")) {
        event.preventDefault();
        const path = event.target.getAttribute("href");
        this.navigate(path);
      }
    });

    // Handle browser back/forward buttons
    window.addEventListener("popstate", () => this.handleRoute());
  }

  // Start the router
  start() {
    this.handleRoute();
  }
}

// Create and start the router
const router = new Router();
router.start();

// Export for use in other files
export { router };
