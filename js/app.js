  
  function init(){
const hamburger = document.querySelector(".hamburger")
const sidebarCloseButton = document.querySelector(".close-button")

const slidebarContainer = document.querySelector(".sidebar-container")

function openSlidebar(){
    slidebarContainer.classList.add("show-slidebar")
}

function closeSidebar(){
    slidebarContainer.classList.remove("show-slidebar")
}

hamburger.addEventListener("click", openSlidebar)

sidebarCloseButton.addEventListener("click", closeSidebar)
  }
  init()



  function navbarcontainer(){
  const navbarContainer = document.querySelector(".nav-container")

  window.addEventListener("scroll" , function() {
       const scrollNumber = window.scrollY;
       const targetNumber = this.window.innerWidth >= 992 ? 70 :50 ;

       if(scrollNumber >= targetNumber){
        navbarContainer.classList.add("sticky-nav");
       }
       else{
        navbarContainer.classList.remove("sticky-nav")
       }
  });
}
navbarcontainer()