function navBar(){
let menu_button=document.getElementById("menu");
let close_button=document.getElementById("close");
let navbar=document.querySelector("nav");
let originalPadding = window.getComputedStyle(navbar).padding;

   let navbar_list = document.querySelector(".navbar-list");
   let menu_title = document.querySelector(".menu-title");
   let menu_bar = document.querySelector(".menu-bar");
   let menu_close = document.querySelector(".menu-close");


menu_button.addEventListener("click",(event)=>{
      event.preventDefault(); 
navbar_list.classList.add("tnavbar-list");
menu_title.classList.add("tmenu-title");
navbar.style.padding="0";
menu_button.style.display="none"
close_button.style.display="block"
})

close_button.addEventListener("click", (event) => {
    event.preventDefault(); 
  navbar_list.classList.remove("tnavbar-list");
  menu_title.classList.remove("tmenu-title");
  menu_button.style.display = "block";
  close_button.style.display = "none";
 navbar.style.padding=originalPadding;
});

}
navBar();