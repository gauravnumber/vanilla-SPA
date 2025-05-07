import { About } from "./About.js";
import { Contact } from "./Contact.js";
import { Home } from "./Home.js";
import { UserDetail } from "./UserDetail.js";

class Router {
  constructor() {
    this.routes = new Map();
    this.middlewares = [];
    this.app = document.getElementById("app");

    // Bind methods
    this.handleRoute = this.handleRoute.bind(this);
    this.navigate = this.navigate.bind(this);

    // Initialize event listeners
    this.initEventListeners();
  }

  // Add a route with optional middleware
  addRoute(path, component, middleware = []) {
    this.routes.set(path, {
      component,
      middleware: Array.isArray(middleware) ? middleware : [middleware],
    });
  }

  // Add global middleware
  use(middleware) {
    this.middlewares.push(middleware);
  }

  // Initialize routes
  initRoutes() {
    this.addRoute("/", Home);
    this.addRoute("/about", About);
    this.addRoute("/contact", Contact);
    this.addRoute("/user/:id", UserDetail);
  }

  // Parse route parameters
  parseParams(routePath, currentPath) {
    const params = {};
    const routeParts = routePath.split("/");
    const pathParts = currentPath.split("/");

    routeParts.forEach((part, index) => {
      if (part.startsWith(":")) {
        const paramName = part.slice(1);
        params[paramName] = pathParts[index];
      }
    });

    return params;
  }

  // Match route with parameters
  matchRoute(path) {
    for (const [routePath, route] of this.routes) {
      const pattern = routePath
        .replace(/:[^/]+/g, "([^/]+)")
        .replace(/\//g, "\\/");
      const regex = new RegExp(`^${pattern}$`);

      if (regex.test(path)) {
        const params = this.parseParams(routePath, path);
        return { ...route, params };
      }
    }
    return null;
  }

  // Handle route changes
  async handleRoute() {
    const path = window.location.pathname;
    const route = this.matchRoute(path);

    if (!route) {
      this.app.innerHTML = `<h1>404</h1><p>Page not found.</p>`;
      return;
    }

    // Run global middleware
    for (const middleware of this.middlewares) {
      const result = await middleware(path);
      if (result === false) return;
    }

    // Run route-specific middleware
    for (const middleware of route.middleware) {
      const result = await middleware(path, route.params);
      if (result === false) return;
    }

    // Render the component
    this.app.innerHTML = route.component(route.params);
  }

  // Navigation handler
  navigate(path) {
    window.history.pushState({}, "", path);
    this.handleRoute();
  }

  // Initialize event listeners
  initEventListeners() {
    document.addEventListener("click", (event) => {
      if (event.target.matches("[data-link]")) {
        event.preventDefault();
        const path = event.target.getAttribute("href");
        this.navigate(path);
      }
    });

    window.addEventListener("popstate", () => this.handleRoute());
  }

  // Start the router
  start() {
    this.initRoutes();
    this.handleRoute();
  }
}

// Create and start the router
const router = new Router();
router.start();

// Export for use in other files
export { router };
