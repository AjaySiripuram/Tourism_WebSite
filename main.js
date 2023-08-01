// let videoBtn = document.querySelectorAll('.vid-btn');

// window.addEventListener('scroll',function(){
//     var menu = document.getElementById('navbar');
//     menu.classList.toggle('scrolled', window.scrollY > 10);
// });

// videoBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         document.querySelector('.controls .active').classList.remove('active');
//         btn.classList.add('active');
//     });
// });

// var swiper = new Swiper(".review-slider", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

let videoControl = document.getElementById('controls');

const menuBar = document.querySelector('.menu');
let navUl = document.querySelector('.list-items');
const fa = document.querySelector('.fas');
const items = document.querySelectorAll('.item');

menuBar.addEventListener('click', function() {
    navUl.classList.toggle('dis-block');
    fa.classList.toggle("fa-xmark");
});

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        navUl.classList.toggle('dis-block');
        fa.classList.toggle("fa-xmark");
    });
}


//nav bar background color changing while scroll down
const navbar = document.querySelector(".navbar1");
window.addEventListener('scroll', () => {
    navbar.classList.toggle('nav-after', window.scrollY > 100);
})


//navbar discover more name changing

const myTexts = ["amazing", "places", "discover"];
let homeButton = document.querySelector('.home-button');

function typeText(text) {
    homeButton.textContent = "";
    let i = 0;
    const typingInterval = setInterval(function() {
      homeButton.textContent += text[i];
      i++;
      if (i === text.length) {
        clearInterval(typingInterval);
      }
    }, 100);
  }
  
  function execute(){
      let j= 0;
      setInterval(()=>{
          if (j > 2){
              j = 0;
          }
          typeText(myTexts[j]);
          j++;
      }, 1500);
  }
  
  execute();


//smooth section loading

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));
