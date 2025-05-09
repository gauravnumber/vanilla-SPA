(function () {
  const container = document.getElementById("toast-container");

  window.toast = function (message, duration = 3000) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    // Calculate when fadeOut should start
    const fadeOutDelay = duration - 300;

    // Set custom animation style
    toast.style.animation = `slideIn 0.3s forwards, fadeOut 0.3s ${fadeOutDelay}ms forwards`;

    container.appendChild(toast);

    // Remove element after total duration
    setTimeout(() => {
      toast.remove();
    }, duration);

    toast.addEventListener("click", () => {
      toast.remove();
    });
  };
})();
