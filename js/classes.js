'use strict';
///////////////////////////////////////
// Variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section2 = document.querySelector('#section--2');

const tabs = document.querySelectorAll('.skills__tab');
const tabsContainer = document.querySelector('.skills__tab-container');
const tabsContent = document.querySelectorAll('.skills__content');

const nav = document.querySelector('.nav');
const navBar = document.querySelector('.nav__links--bar');
const navIcon = document.querySelector('.nav__link--icon');

///////////////////////////////////////
// Modal window
class Modal {
  constructor() {
    btnsOpenModal.forEach(btn => btn.addEventListener('click', this.openModal));

    for (let i = 0; i < btnsOpenModal.length; i++)
      btnsOpenModal[i].addEventListener('click', this.openModal);

    btnCloseModal.addEventListener('click', this.closeModal);
    overlay.addEventListener('click', this.closeModal);

    this.escKey();
  }

  openModal(e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }

  closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }

  escKey() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        this.closeModal();
      }
    });
  }
}

////////////////////////////////////////////////////////
// PAGE SCROLLING
class PageScroll {
  constructor() {
    // Button scrolling
    btnScrollTo.addEventListener('click', () => {
      section2.scrollIntoView({ behavior: 'smooth' });
    });
    // Page Navigation
    document
      .querySelector('.nav__links')
      .addEventListener('click', function (e) {
        e.preventDefault();

        if (e.target.classList.contains('nav__link')) {
          const id = e.target.getAttribute('href');
          document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
        }
      });

    // Page Navigation mobile tablet
    navIcon.addEventListener('click', e => {
      navBar.classList.toggle('hidden');
    });

    navBar.addEventListener('click', e => {
      e.preventDefault();

      if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

        navBar.classList.add('hidden');
      }
    });
  }
}

////////////////////////////////////////////////////////
// TABBED COMPONENT
class TabbedComponent {
  constructor() {
    tabsContainer.addEventListener('click', function (e) {
      const clicked = e.target.closest('.skills__tab');

      if (!clicked) return;

      tabs.forEach(t => t.classList.remove('skills__tab--active'));
      tabsContent.forEach(c => c.classList.remove('skills__content--active'));

      clicked.classList.add('skills__tab--active');

      document
        .querySelector(`.skills__content--${clicked.dataset.tab}`)
        .classList.add('skills__content--active');
    });
  }
}

////////////////////////////////////////////////////////
// MENU FADE ANIMATION
class MenuFade {
  constructor() {
    nav.addEventListener('mouseover', this.handleHover.bind(0.5));
    nav.addEventListener('mouseout', this.handleHover.bind(1));
  }
  handleHover(e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  }
}

////////////////////////////////////////////////////////
// STICKY NAVIGATION
class Sticky {
  constructor() {
    const header = document.querySelector('.header');
    const navHeight = nav.getBoundingClientRect().height;

    const headerObserver = new IntersectionObserver(this.stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });
    headerObserver.observe(header);
  }
  stickyNav(entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
  }
}

////////////////////////////////////////////////////////
// SKILLS BLUR ANIMATION
class Skills {
  constructor() {
    const sectionTitle = document.querySelector('.skills__blur');
    sectionTitle.addEventListener('mouseover', this.skillsHover.bind(10));
    sectionTitle.addEventListener('mouseout', this.skillsHover.bind(0));
  }
  skillsHover(e) {
    const link = e.target;
    const siblings = link
      .closest('.skills__images')
      ?.querySelectorAll('.skills__image');

    siblings?.forEach(el => {
      if (el !== link) {
        el.style.filter = `blur(${this}px)`;
      }
    });
  }
}

////////////////////////////////////////////////////////
// REVEAL SECTIONS
class RevealSections {
  constructor() {
    const allSections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver(this.revealSection, {
      root: null,
      threshold: 0.1,
    });

    allSections.forEach(function (section) {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    });
  }
  revealSection(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  }
}

////////////////////////////////////////////////////////
// LAZY LOADING IMAGES
class LazyLoading {
  constructor() {
    const imgTargets = document.querySelectorAll('img[data-src]');
    const imgObserver = new IntersectionObserver(this.loadImg, {
      root: null,
      threshold: 0,
      rootMargin: '200px',
    });

    imgTargets.forEach(img => imgObserver.observe(img));
  }

  loadImg(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
  }
}

////////////////////////////////////////////////////////
// SLIDER
class Slider {
  constructor() {
    this.slider();
  }

  slider() {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSLide = 0;
    const maxSlide = slides.length;

    // functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };

    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));

      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };

    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };

    // next slide
    const nextSlide = function () {
      if (curSLide === maxSlide - 1) {
        curSLide = 0;
      } else {
        curSLide++;
      }
      goToSlide(curSLide);
      activateDot(curSLide);
    };

    const prevSlide = function () {
      if (curSLide === 0) {
        curSLide = maxSlide - 1;
      } else {
        curSLide--;
      }
      goToSlide(curSLide);
      activateDot(curSLide);
    };

    const init = function () {
      goToSlide(0);
      createDots();
      activateDot(0);
    };
    init();

    // event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
    document.addEventListener('keydown', function (e) {
      e.key === 'ArrowLeft' && prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  }
}
