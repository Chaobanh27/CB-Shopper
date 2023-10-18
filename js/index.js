//scroll to top start
const scrollBtn = document.getElementById("btn");
const btnText = document.getElementById("btn-text");
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollBtn.addEventListener("mouseover", () => {
  btnText.style.display = "block";
});
scrollBtn.addEventListener("mouseleave", () => {
  btnText.style.display = "none";
});
//scroll to top end

//navbar start
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("navbar-top");
  } else {
    navbar.classList.remove("navbar-top");
  }
});
//navbar end


