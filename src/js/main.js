const title = document.querySelector('.title');
const title1 = document.querySelector('.title1');
const page1 = document.getElementById('page1');

const menuBtn = document.querySelector('.menuButton');
const burger = document.querySelector('.menuButton-burger');

const dropMenu = document.querySelector('.nav');

let shown = false;

menuBtn.addEventListener('click', toggleFunction);

function toggleFunction() {
  if (!shown) {
    burger.classList.add('open');
    dropMenu.classList.add('open1');
    shown = true;
  } else {
    burger.classList.remove('open');
    dropMenu.classList.remove('open1');
    shown = false;
  }
}

//SCROLLING//

function page1Scroll() {
  const scroll = document.querySelectorAll('#page1 .scroll');

  if (window.scrollY < 110) {
    var i = 0,
      length = scroll.length;
    for (i; i < length; i++) {
      var scaleSpeed = parseFloat(scroll[i].dataset.scalespeed || 1);
      var speed = parseFloat(scroll[i].dataset.speed || 1);
      var position = (window.scrollY / 200) * speed;
      var scale = (window.scrollY / 300) * scaleSpeed + 1;

      scroll[i].style.transform = 'scale(' + scale + ')';

      if (scroll[i].dataset.direction === 'vertical') {
        scroll[i].style.transform += 'translateY(' + position + 'px)';
      } else {
        scroll[i].style.transform += 'translateX(' + position + 'px)';
      }
    }
  }
}

const text = document.querySelectorAll('.scroll2');

const observer = new IntersectionObserver(
  entires => {
    entires.forEach(entry => {
      entry.target.classList.toggle('show', entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0,
  },
);

text.forEach(x => {
  observer.observe(x);
});

const galleryElement = document.querySelector('.imgContainer');

const observer2 = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        galleryElement.classList.add('show');
        observer2.unobserve(galleryElement); // Stop observing once it's visible (optional)
      }
    });
  },
  {
    root: null, // Use the viewport as the root
    threshold: 0.5, // When 50% of the element is visible
  },
);

observer2.observe(galleryElement);

window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);
  page1Scroll();
});
window.addEventListener('beforeunload', function (e) {
  window.scrollTo({
    top: 1,
  });
});

const about = document.getElementById('about');
const Contact = document.getElementById('contact');
const galleryPage = document.getElementById('galleryPage');

document.addEventListener('DOMContentLoaded', function () {
  function handleMenuItemClick(event, targetPageId) {
    event.preventDefault();
    burger.classList.remove('open');
    dropMenu.classList.remove('open1');
    document.getElementById(targetPageId).scrollIntoView({
      behavior: 'smooth',
    });
  }

  about.addEventListener('click', event => {
    handleMenuItemClick(event, 'page2');
  });

  galleryPage.addEventListener('click', event => {
    handleMenuItemClick(event, 'page3');
  });

  Contact.addEventListener('click', event => {
    handleMenuItemClick(event, 'page4');
  });
});
