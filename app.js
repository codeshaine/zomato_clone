function navbar() {
  let menu_button = document.getElementById("menu");
  let close_button = document.getElementById("close");
  let navbar = document.querySelector(".navbar");

  menu_button.addEventListener("click", (event) => {
    event.preventDefault();
    navbar.classList.add("squeez");
  });

  close_button.addEventListener("click", (event) => {
    event.preventDefault();
    navbar.classList.remove("squeez");
  });
}
navbar();

function list() {
  let section_3 = document.getElementById("page1-section-3");
  let special_div_h3 = document.getElementById("localities-special");

  section_3.addEventListener("click", () => {
    section_3.classList.toggle("see-less");

    if (special_div_h3.textContent == "see less")
      special_div_h3.textContent = "see more";
    else special_div_h3.textContent = "see less";
  });
}
list();
