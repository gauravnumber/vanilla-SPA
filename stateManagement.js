import { createStore } from "./store.js";

const store = createStore({ count: 0 });

// DOM References
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");

// React to state changes
store.subscribe((state) => {
  countDisplay.textContent = state.count;
});

// Event listener
incrementBtn.addEventListener("click", () => {
  const { count } = store.getState();
  store.setState({ count: count + 1 });
});

// Initial render
countDisplay.textContent = store.getState().count;
