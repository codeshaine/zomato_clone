function navBar() {
      let menu_button = document.getElementById("menu");
      let close_button = document.getElementById("close");
      let navbar = document.querySelector("nav");
      let navbar_list = document.querySelector(".navbar-list");
      let menu_title = document.querySelector(".menu-title");


      menu_button.addEventListener("click", (event) => {
            event.preventDefault();
            navbar_list.classList.add("tnavbar-list");
            menu_title.classList.add("tmenu-title");
            menu_button.classList.remove("menu-bar-display")
            close_button.classList.remove("menu-close-display");
            menu_button.classList.add("not-visible")
            close_button.classList.add("visible")
      })

      close_button.addEventListener("click", (event) => {
            event.preventDefault();
            navbar_list.classList.remove("tnavbar-list");
            menu_title.classList.remove("tmenu-title");

            menu_button.classList.remove("not-visible");
            close_button.classList.remove("visible");
            menu_button.classList.add("menu-bar-display");
            close_button.classList.add("menu-close-display");
      });

}
navBar();

