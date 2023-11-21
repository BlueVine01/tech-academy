// window.addEventListener('scroll', function() {
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 0);
// })


// document.addEventListener('scroll', () => {
//     const header = document.querySelectorAll('header');

//     if (window.scrollY > 0) {
//         header.classList.add('sticky');
//     } else {
//         header.classList.remove('sticky');
//     }
// })



////////////////////////////
//////////ACTIVE NAVBAR

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(aa => {
        let top = window.scrollY;
        let offset = aa.offsetTop - 150;
        let height = aa.offsetHeight;
        let id = aa.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*= ' + id +']').classList.add('active')
            })
        }
    })
}



////////////////////////
///////NAVBAR ACACORDION

// var acc = document.getElementsByClassName("navigation__responsive");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }


///////////////////////
/////SCROLL REVEAL FUNCTIONALITY

ScrollReveal({
  reset: true,
  duration: 2000,
  delay: 200,
  distance: '80px',
});

ScrollReveal().reveal('.hero-content, .contact-location', {origin: "top"});
ScrollReveal().reveal('.form',{origin: "bottom"});
ScrollReveal().reveal('.flex__row, .flex-left', {origin: "left"}, {delay: 300});
ScrollReveal().reveal('.flex-right, .courses-header',{origin: "right"}, {delay: 300});