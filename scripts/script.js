// testimonials
const testimonials = document.querySelectorAll('.testimonial-box');

testimonials.forEach(testimonial => {
    testimonial.style.display = 'none';
})

testimonials[0].style.display = 'block';

let count = 1;

setInterval(() => {
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
    });
    count++;
    if(count > testimonials.length -1) {
        count = 0;
    }
    testimonials[count].style.display = 'block';
}, 4000)

// dinamic year in footer copyright
const copyrightYear = document.querySelector('.dinamic-year');

const currentYear = new Date().getFullYear();

copyrightYear.textContent = currentYear;

// 4 smooth scrolling
// THIS ONE IS COPY FROM W3 SCHOOL WEB SITE

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  
  // navigation links .active on scroll
  
  const navigationLinks = document.querySelectorAll('nav ul a');
  
  const sections = document.querySelectorAll("section");
  window.onscroll = () => {
    var current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      console.log(current); }
    }); 
  
    navigationLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.classList.contains(current)) {
        link.classList.add("active");
      } 
      
  });
  }

  // hamburger menu
  const bars = document.querySelector('.bars');
  const navLinks = document.querySelector('nav ul');

  bars.addEventListener('click', function() {
    if(navLinks.style.display === 'none') {
      navLinks.style.display = 'block';
    } else {
      navLinks.style.display = 'none';
    }
  })

  

  window.addEventListener('resize', function() {
    if(window.innerWidth > 600) {
      navLinks.style.display = 'flex';
    } else {
      navLinks.style.display = 'none';
    }
  })

  // show and hide sections on scroll
  const boxes = document.querySelectorAll('.show-hide-section');

unhide();

window.addEventListener('scroll', unhide);

function unhide() {
    const border = window.innerHeight / 5 * 3;
    boxes.forEach(box => {
      box.firstElementChild.style.transform = 'translateY(400%)';
      box.firstElementChild.style.transition = '1s transform ease';
        const boxPosition = box.getBoundingClientRect().top;
        if(border > boxPosition) {
            box.firstElementChild.style.transform = 'translateY(0)';
        } else {
            box.firstElementChild.style.transform = 'translateY(400%)';
        }  
    })
}


