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
        fa.classList.toggle("fa-cross");
    });
}
