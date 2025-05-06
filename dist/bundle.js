(()=>{var n=()=>`
    <h1>About</h1>
    <p>This is the About page.</p>
    <p>lorem</p>
  `;var a=()=>`
    <h1>Contact</h1>
    <p>Contact us at contact@example.com</p>
  `;var p=()=>`
    <h1>Home</h1>
    <p>Welcome to the Home page.</p>
  `;var c={"/":p,"/about":n,"/contact":a};function e(t){let o=document.getElementById("app");o.innerHTML=c[t]?c[t]():"<h1>404</h1><p>Page not found.</p>"}function r(t){if(t.target.matches("[data-link]")){t.preventDefault();let o=t.target.getAttribute("href");window.history.pushState({},"",o),e(o)}}document.addEventListener("click",r);window.addEventListener("popstate",()=>e(window.location.pathname));e(window.location.pathname);})();
