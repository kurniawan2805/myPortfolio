const barMenu = document.getElementById("bar-menu");

barMenu.addEventListener("click", showMenu);

function showMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("show-menu");
  //   alert("clicked");
}
// onclick = ;
