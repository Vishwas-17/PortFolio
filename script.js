/*===================toggle icon navbar=======================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');

  navbar.classList.toggle('active');
}
/*========================scroll section active link============================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector(`header nav a[href*= '${id}']`).classList.add('active');
      });
    };
  });
}
/*=================================Sticky Navbar=========================================*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
/*================================remove toggle icon and navbar=============================*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
/*=================================Scroll reveal=========================================*/
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,

});
ScrollReveal().reveal('.home-content,heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box, .contact form ', { origin: 'button' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*=================================typed js=========================================*/
const typed = new Typed('.multiple-text', {
  strings: ['Passionate Developer', 'Dedicated Coder'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true
});
/*=================================Contact=========================================*/
document.addEventListener('DOMContentLoaded', () => {
  emailjs.init("Z_0MkJW-1qZhnmArV");

  document.getElementById('form-submit').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };



    // console.log('Form Data:', formData); 

    emailjs.send("service_j2vw64r", "template_k2zb8ds", {
      name: formData.name,
      message: formData.message, 
      email: formData.email 
  }).then(function(response) {
      console.log("SUCCESS!", response);
      alert("Your message has been sent successfully!");
  }).catch(function(error) {
      console.error("FAILED...", error);
      alert("There was an error sending your message: " + (error.text || "Unknown error"));
  });

})

})





