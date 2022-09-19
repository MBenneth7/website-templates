//NAVIGATION JS
let menu = document.querySelector(".menu-container");
let mobileNav = document.querySelector(".mobile-nav");

menu.addEventListener("click",()=>{
    mobileNav.classList.toggle("nav-show");
})


//CAROUSEL JS
const slides = document.querySelectorAll(".slide");

const nextImageDelay = 4000;
let imageCounter = 0;

slides[imageCounter].style.opacity = 1;
setInterval(nextImage, nextImageDelay);

function nextImage(){
    slides[imageCounter].style.opacity = 0;
    imageCounter = (imageCounter + 1) % slides.length;
    slides[imageCounter].style.opacity = 1;
}

//DROPDOWN

const consoleDropdown = document.querySelector(".dropdown");
const desktopSubNav = document.querySelector(".desktop-sub-nav");

consoleDropdown.addEventListener("click",()=>{
    desktopSubNav.classList.toggle("show");
})

//ABOUT MODAL

const aboutModal = document.getElementById('about-modal');
const aboutClose = document.querySelector('#about-modal i');
const aboutLinks = document.querySelectorAll('.about-link');

aboutLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        aboutModal.classList.add("show");
        aboutModal.classList.remove("hide");
    })
});

aboutClose.addEventListener("click", ()=>{
    aboutModal.classList.add("hide");
    aboutModal.classList.remove("show");
})

 
