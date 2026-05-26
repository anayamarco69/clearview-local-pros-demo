const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");
const quoteButton = document.querySelector("#quoteButton");
const currentYear = document.querySelector("#currentYear");

currentYear.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("show");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

quoteButton.addEventListener("click", () => {
  alert("Practice button clicked. On a real site, this could open a quote form, phone link, or contact page.");
});
