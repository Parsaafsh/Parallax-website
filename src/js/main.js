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

text.forEach(scroll => {
  observer.observe(scroll);
});

const gallery = document.querySelectorAll('.imageContainer');

const observer2 = new IntersectionObserver(
  entires => {
    entry.target.classList.toggle('show', entry.isIntersecting);
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
    }
  },
  {
    threshold: 0,
  },
);

gallery.forEach(scroll => {
  observer2.observe(scroll);
});

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

document.addEventListener('DOMContentLoaded', function () {
  about.addEventListener('click', function (event) {
    event.preventDefault();
    burger.classList.remove('open');
    dropMenu.classList.remove('open1');
    document.getElementById('page2').scrollIntoView({
      behavior: 'smooth',
    });
  });
  const galleryPage = document.getElementById('galleryPage');

  galleryPage.addEventListener('click', function (event) {
    event.preventDefault();
    burger.classList.remove('open');
    dropMenu.classList.remove('open1');
    document.getElementById('page3').scrollIntoView({
      behavior: 'smooth',
    });
  });
  const Contact = document.getElementById('Contact');

  Contact.addEventListener('click', function (event) {
    event.preventDefault();
    burger.classList.remove('open');
    s;
    dropMenu.classList.remove('open1');
    document.getElementById('page4').scrollIntoView({
      behavior: 'smooth',
    });
  });
});
