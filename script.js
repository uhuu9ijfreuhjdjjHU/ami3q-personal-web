
let navRight = 30;
const navSelect = document.getElementById("navSelect");
const navBox = document.getElementById("navBox");

// Initialize CSS variable
navSelect.style.setProperty("--nav-right", `${navRight}px`);

navSelect.onclick = function() {
  // toggle button rotation
  navSelect.classList.toggle("active");

  // toggle popup visibility
  navBox.classList.toggle("show");

  // move button position
  if (navRight === 30) {
    navRight = 180;
  } else {
    navRight = 30;
  }

  navSelect.style.setProperty("--nav-right", `${navRight}px`);
};

