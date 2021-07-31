// document.cookie = 'cookie2=value2; SameSite=None; Secure';

var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    slidesPerView: 1,
    // spaceBetween: 500,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    var top = document.getElementById("bottom-to-top");
    if (scroll >= 100) {
        if (!(document.getElementById("topbar").classList.contains("topbar-scrolled"))) {
            top.className += " active";
            document.getElementById("topbar").className += " topbar-scrolled";
            document.getElementById("header").className += " navbar-scrolled";
        }
    }
    else {
        document.getElementById("topbar").classList.remove("topbar-scrolled");
        document.getElementById("header").classList.remove("navbar-scrolled");
        top.classList.remove("active");
    }
});
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("menu-item");
    if (c == "all") {
        c = "menu-item";
    }
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("show");
        if (x[i].classList.contains(c)) {
            x[i].className += " show";
        }
    }
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = btnContainer.getElementsByClassName("active");
        current[0].classList.remove("active");
        this.className += " active";
    });
}
var linkContainer = document.getElementById("links");
var togggle_btn = document.getElementById("toggle-btn");
var navbar = document.getElementById("navbar");

var links = linkContainer.getElementsByClassName("nav-link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        var current = linkContainer.getElementsByClassName("active");
        current[0].classList.remove("active");
        this.className += " active";
        if(navbar.classList.contains("navbar-mobile")){
            navbar.classList.remove("navbar-mobile");
            togggle_btn.classList.remove("bi-x");
            togggle_btn.className += " bi-list";
        }
    });
}

togggle_btn.addEventListener("click",function (){
    if(!navbar.classList.contains("navbar-mobile")){
        navbar.className += " navbar-mobile";
    }
    else{
        navbar.classList.remove("navbar-mobile")
    }
    if(!togggle_btn.classList.contains("bi-x")){
        togggle_btn.classList.remove("bi-list");
        togggle_btn.className += " bi-x";
    }
    else{
        togggle_btn.classList.remove("bi-x");
        togggle_btn.className += " bi-list";
    }
});