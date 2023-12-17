function navbar() {
  const menu_button = document.getElementById("menu");
  const close_button = document.getElementById("close");
  const navbar = document.querySelector(".navbar");

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
  const section_3 = document.getElementById("page1-section-3");
  const special_div = document.querySelector(".localities-card-special");
  const special_div_h3 = document.getElementById("localities-special");

  special_div.addEventListener("click", () => {
    section_3.classList.toggle("see-less");
    if (special_div_h3.textContent == "see less")
      special_div_h3.textContent = "see more";
    else special_div_h3.textContent = "see less";
  });
}
list();

//exist

function radioo() {
  const rhs = document.getElementById("rhs");
  const radio = document.getElementsByName("radioo");

  radio.forEach((radio) => {
    radio.addEventListener("click", () => {
      if (radio.id == "phone" && radio.checked) rhs.classList.add("exist");
      if (radio.id == "email" && radio.checked) rhs.classList.remove("exist");
    });
  });
}
radioo();
