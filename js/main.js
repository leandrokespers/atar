console.clear();
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const oqueat = document.querySelector('.oqueat');
  //Toggle Nav

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        //Here there was a small mistake of using normal quotes '' and not back ticks ``.
        //Thats it!
        link.style.animation = `navLinkFade 0.4s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle('toggle');
    oqueat.classList.toggle('oqueat-mobile');
  });

  // Fixed an issue here from foreach to forEach.
};
navSlide();
