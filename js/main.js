const lightBulb = document.getElementById('light-bulb');
const mainWrap = document.getElementById('main-wrap');
const burgerMenu = document.getElementById('burger-menu');
const burgTop = document.querySelector('.burg-top')
const burgMid = document.querySelector('.burg-middle')
const burgBottom = document.querySelector('.burg-bottom')
const burgerText = document.querySelector('.text-burger')
const topMenu = document.getElementById('top-menu');
const fixedTop = document.getElementById('fixed-top');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavChildren = document.querySelectorAll('.container__mobile-nav-links');
const main = document.getElementById('main');
const arrowDown = document.getElementById('arrow-down');
const cardWrapTest = document.getElementById('card-wrap-test');
const cardWrap = document.getElementById('card-wrap');
const topWrap = document.getElementById('top-wrap');
const hr = document.querySelector('.hr');
const footerFade = document.querySelectorAll('.fade-out');
const footerTextTop = document.getElementById('footer-text-top');
const homeLink = document.querySelector('.home-link');
const contactLinks = document.querySelectorAll('.contact-link');
const modalVideo = document.getElementById('modal-video');
const messageMe = document.getElementById('message-me');
const form = document.getElementById('contact-form');
const select = document.getElementById('select');
const formLabels = document.querySelectorAll('.form-label');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const textareaInput = document.getElementById('message');
const submitButton= document.getElementById('form-button');
const viewWork = document.getElementById('view-work');
const door = document.querySelector('.container__door');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const imgAlt = ['Webapp Dashboard', 'API From Employee Directory', 'Game Show App', 'Web Style Guide', 'An Online Registration Form'];
const imgSource = [
    'images/webapp-dashboard.png',
    'images/use-an-api-to-create-an-employee-directory.png',
    'images/game-show-app.png',
    'images/web-style-guide.png',
    'images/an-online-registration-form.png'
];
const projectDescription = [
    'For this project, my tasks were to build an interactive dashboard for a web application.\
     The project involves creating tables, charts,\
     graphics and other user interface components in a manner that promotes interactivity and usability.',
    'For this project, the tasks were to create an employee directory by communicating with a third-party API (Application Programming Interface).\
    then use those datas to generate information on my webpage',
    'In this project, I was tasked to create a browser version of "Wheel of Success”, a word guessing game" using JavaScript to interact with users throughout the game.',
    'For this project, the goal was to create a style guide for webpage using Sass, an important tool in a modern Front End Web Developer’s toolbox',
    'To acheive this project, I was to build  responsive, mobile-first registration form using a variety of HTML form elements.'
];
const projectLinks = [
  'webapp-dashboard.html',
  'use-an-api-to-create-an-employee-directory.html',
  'game-show-app.html',
  'web-style-guide.html',
  'an-online-registration-form.html'
];
const videoData = [
  'https://player.vimeo.com/video/360109761?background=1&quality=1080p&autoplay=1',
  'https://player.vimeo.com/video/360114006?background=1&quality=1080p&autoplay=1',
  'https://player.vimeo.com/video/360113517?background=1&quality=1080p&autoplay=1',
  'https://player.vimeo.com/video/360114139?background=1&quality=1080p&autoplay=1',
  'https://player.vimeo.com/video/360114189?background=1&quality=1080p&autoplay=1'
];
let windowWidth;
let burgerMenuSwitch = false;
let presentation = false;
let indexCounter = 0;

// ---- Functions ---- //
function fetchVideoURL(array) {
  for (let i=0; i<array.length;i++) {
    fetch(array[i])
      .then(response => response.json())
      .then(data => collectData(data));
  }
}

function collectData(data) {
  videoData.push(data);
}

function getWindowWidth() {
  windowWidth = window.innerWidth;
  return windowWidth;
}

function getTopWrapHeight() {
  topWrapHeight = topWrap.getBoundingClientRect().height;
  return topWrapHeight;
}

function getTopWrapHeight() {
  const topWrapHeight = topWrap.getBoundingClientRect().height;
  return topWrapHeight;
}

function getMainCardHeight() {
  const height = cardWrap.firstElementChild.getBoundingClientRect().height;
  return height;
}


function disableLinks(dataPage) {
  if (dataPage === 'home') {
    homeLink.classList.add('current-page');
  } else if (dataPage === 'contact') {
    contactLinks.forEach(contact => {
    contact.classList.add('current-page');
    });
  }
}


function inputOnFocus(element) {
  return element.previousElementSibling.style.fontSize = '12px';
}


function insertShadow(element) {
  if (document.documentElement.scrollTop > 1) {
    element.classList.add('has-shadow');
  } else if (document.documentElement.scrollTop === 0) {
    element.classList.remove('has-shadow');
  }
}


function displayTextOverlay(element) {
  element.nextElementSibling.style.visibility = 'visible';
  element.nextElementSibling.style.backgroundColor = 'rgba(70,72,102,1)';
  element.nextElementSibling.firstElementChild.style.transform = 'translateY(0)';
  element.nextElementSibling.firstElementChild.style.opacity = '1';
}


function hideTextOverlay(element) {
  element.firstElementChild.style.transform = 'translateY(-1.25em)';
  element.firstElementChild.style.opacity = '0';
  element.style.backgroundColor = 'rgba(0,0,0,0)';
  setTimeout(() => {
    element.removeAttribute('style');
    element.firstElementChild.removeAttribute('style');
  }, 300);
}


function mailTo() {
  return window.location.href = 'mailto:cbnickp@gmail.com?subject=Web_Development_Queries';
}


function hideLight() {
  lightBulb.style.transform = 'translate(-50%, -50%) scale(0.1)';
  lightBulb.style.opacity = '0';
}


function doorOpen() {
  box1.style.transform = 'translateX(100%)';
  setTimeout(() => {
    box2.style.transform = 'translateX(-100%)';
  }, 200);
  setTimeout(() => {
    box3.style.transform = 'translateX(-100%)';
  }, 400);
  setTimeout(() => {
    box4.style.transform = 'translateX(-100%)';
  }, 600);
  setTimeout(() => {
    document.body.removeChild(door);
  }, 1300);
};


function refreshingPage() {
  window.scrollTo(0, 0);
  mainWrap.style.opacity = '1';
}

function showFooter() {
  footerFade[0].style.transform = 'translateY(0)';
  footerFade[0].style.opacity = '1';
}


(function () {
  let _clientY = null;

  mobileNav.addEventListener('touchstart', function (e) {
      if (e.targetTouches.length === 1) {
          _clientY = e.targetTouches[0].clientY;
      }
  }, false);

  mobileNav.addEventListener('touchmove', function (e) {
      if (e.targetTouches.length === 1) {
          disableRubberBand(e);
      }
  }, false);

  function disableRubberBand(e) {
    let clientY = e.targetTouches[0].clientY - _clientY;

    if (mobileNav.scrollTop === 0 && clientY > 0) {
        e.preventDefault();
    }

    if (isOverlayTotallyScrolled() && clientY < 0) {
        e.preventDefault();
    }
  }

  function isOverlayTotallyScrolled() {
    return mobileNav.scrollHeight - mobileNav.scrollTop <= mobileNav.clientHeight;
  }
}());


function checkDataIndex(index) {
  const buttonContainer = cardWrap.firstElementChild.lastElementChild.lastElementChild
  if (index === 0) {
    buttonContainer.firstElementChild.style.opacity = '0';
    buttonContainer.firstElementChild.style.pointerEvents = 'none';
  } else if (index === 4) {
    buttonContainer.lastElementChild.style.opacity = '0';
    buttonContainer.lastElementChild.style.pointerEvents = 'none';
  }
}


function generatePresHTML(index) {
  const div = document.createElement('div');
  const cardImgSource = imgSource[index];
  const cardImgAlt = imgAlt[index];
  const heading = imgAlt[index].toUpperCase();
  const description = projectDescription[index];
  const links = projectLinks[index];
  div.className = 'container__main-card-inner';
  div.innerHTML = `
      <div class="image-project-container">
        <img class="image__project" src="${cardImgSource}" alt="${cardImgAlt}" onmouseover="displayTextOverlay(this)">
        <div class="text-overlay" onmouseleave="hideTextOverlay(this)">
          <h3 class="text-overlay-heading">${heading}</h3>
          <p class="button-view">VIEW</p>
        </div>
      </div>

      <div class="container-card-text">

        <h3 class="card-heading">GRADE RECEIVED</h3>
        <p class="card-text">Exceeds Expectation</p>

        <h3 class="card-heading">PROJECT DESCRIPTION</h3>
        <p class="card-text">${description}</p>

        <div class="container-button">
          <svg version="1.1" id="prev" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 476.213 476.213;" xml:space="preserve">
            <polygon class="prev" fill="#3cf" points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5
            345.606,368.713 476.213,238.106 "/>
          </svg>

          <h4><a id="check-project" href="${links}" target="__blank">See the real thing</a></h4>

          <svg version="1.1" id="next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 476.213 476.213;" xml:space="preserve">
            <polygon class="next" fill="#3cf" points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5
            345.606,368.713 476.213,238.106 "/>
          </svg>
      </div>
    `;
  cardWrap.appendChild(div);
  checkDataIndex(index);
  cardWrap.style.transform = 'translateY(0)';
  cardWrap.style.opacity = '1';
  setTimeout(() => {
    cardWrap.firstElementChild.firstElementChild.style.boxShadow = '0 0 30px 3px rgba(0,0,0,0.75)';
  }, 1400);
  setTimeout(() => {
    cardWrap.firstElementChild.firstElementChild.firstElementChild.style.opacity = '1';
  }, 900);
}


function generateVideo(index) {
  let videourl = videoData[index];
  const videoContainer = document.createElement('div');
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'relative';
  modalVideo.style.backgroundColor = 'rgba(1,1,1,0.75)';
  videoContainer.className = 'video-test-container';
  modalVideo.classList.remove('hidden');
  videoContainer.innerHTML = `
      <div style="padding:56.25% 0 0 0;position:relative;">
        <iframe class="video" src="${videourl}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    `;
  modalVideo.innerHTML = `
      <svg class="close-button" version="1.1" id="close-video" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 475.2 475.2" style="enable-background:new 0 0 475.2 475.2;" xml:space="preserve">
        <g>
          <g>
            <path fill="#f6f7f8" d="M405.6,69.6C360.7,24.7,301.1,0,237.6,0s-123.1,24.7-168,69.6S0,174.1,0,237.6s24.7,123.1,69.6,168s104.5,69.6,168,69.6
              s123.1-24.7,168-69.6s69.6-104.5,69.6-168S450.5,114.5,405.6,69.6z M386.5,386.5c-39.8,39.8-92.7,61.7-148.9,61.7
              s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7,0-297.8C128.5,48.9,181.4,27,237.6,27s109.1,21.9,148.9,61.7
              C468.6,170.8,468.6,304.4,386.5,386.5z"/>
            <path fill="#f6f7f8" d="M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1
              l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4
              c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"/>
          </g>
        </g>
      </svg>
    `;
  modalVideo.appendChild(videoContainer);
  setTimeout(() => {
    modalVideo.firstElementChild.style.opacity = '1';
    videoContainer.firstElementChild.firstElementChild.style.transform =  'translateY(0)';
    videoContainer.firstElementChild.firstElementChild.style.opacity = '1';
  }, 100)
}


function switchPres() {
  cardWrap.firstElementChild.firstElementChild.firstElementChild.style.opacity = '0';
  cardWrap.style.transform = 'translateY(40px)';
  cardWrap.style.transtion = 'opacity 0.7s ease-out';
  cardWrap.style.opacity = '0';
  setTimeout(() => {
    cardWrap.innerHTML = '';
  }, 670);
}


function removeVideo() {
  const videoContainer = document.querySelector('.video-test-container');
  videoContainer.firstElementChild.firstElementChild.style.transform =  'translateY(-40px)';
  videoContainer.firstElementChild.firstElementChild.style.opacity = '0';
  modalVideo.firstElementChild.style.opacity = '0';
  setTimeout(() => {
    modalVideo.classList.add('hidden');
    document.documentElement.removeAttribute('style');
    document.body.removeAttribute('style');
  }, 2100);
  setTimeout(() => {
    modalVideo.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }, 1100);
}


// ---- Event Listeners ---- //
window.onload = () => {
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'relative';
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 20);
  currentWindowWidth = getWindowWidth();
  const currentPage = document.body.getAttribute('data-page');
  setTimeout(() => {
    document.documentElement.removeAttribute('style');
    document.body.removeAttribute('style');
  });
  setTimeout(() => {
    hideLight();
    doorOpen();
  }, 2000);
  if (currentPage === 'home') {
    refreshingPage();
    getWindowWidth();
    disableLinks(currentPage);
  } else if (currentPage === 'contact') {
    main.style.height = '100%';
    disableLinks(currentPage);
  }
};

window.onresize = () => {
  const currentPage = document.body.getAttribute('data-page');
  if (currentPage === 'home') {
    if (cardWrapTest.firstElementChild.childElementCount === 1) {
      cardWrapTest.style.height = getMainCardHeight();
      cardWrapTest.firstElementChild.style.height = '100%';
    }
  }
}

window.onscroll = () => {
  let scroll =  window.pageYOffset;
  if (scroll > 1) {
    fixedTop.classList.add('has-shadow');
  } else if (scroll === 0) {
    fixedTop.classList.remove('has-shadow');
  }

  const currentPage = document.body.getAttribute('data-page');
  if (currentPage === 'home') {
    if (scroll > (getTopWrapHeight() + 100)  && presentation === false) {
      document.documentElement.style.background = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'relative';
      arrowDown.style.opacity = '0';
      arrowDown.parentElement.removeChild(arrowDown.parentElement.childNodes[13]);
      presentation = !presentation;
      const index = parseInt(cardWrap.getAttribute('data-index'));
      scrollTo(0, (getTopWrapHeight() + 100));
      setTimeout(() => {
        showFooter();
      }, 2600);
      setTimeout(() => {
        document.body.removeAttribute('style');
        document.documentElement.removeAttribute('style');
      }, 2300);
      setTimeout(() => {
        const mainCardHeight = String(getMainCardHeight()) + 'px';
        cardWrapTest.style.height = mainCardHeight;
        main.style.height = '100%';
      }, 680);
      setTimeout(() => {
        generatePresHTML(index);
      }, 670);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = document.body.getAttribute('data-page');
    if (currentPage === 'contact') {
    const userChoice = localStorage.getItem('heard about me');
    document.getElementById('name').value = localStorage.getItem('username');
    document.getElementById('email').value = localStorage.getItem('useremail');
    document.getElementById('phone').value = localStorage.getItem('userphone');
    document.getElementById('message').value = localStorage.getItem('usermessage');

    for (let i = 0; i < select.length; i++) {
      if (i === parseInt(userChoice)) {
        select[i].setAttribute('selected', '');
      }
    }
  }
});

topMenu.addEventListener('click', (e) => {
  const burger = e.target.closest('.container__burger-menu')
  if (e.target === burger && burgerMenuSwitch === false) {
    burgerMenu.style.pointerEvents = 'none';
    if (fixedTop.getAttribute('class') === "container__fixed-top has-shadow") {
      fixedTop.style.boxShadow = 'none';
    }
    if (topWrap && cardWrapTest) {
      topWrap.style.transform = 'translateY(40px)';
      cardWrapTest.style.transition = 'all 0.7s ease-out';
      cardWrapTest.style.transform = 'translateY(40px)'
      topWrap.style.opacity = '0';
      cardWrapTest.style.opacity = '0';
    }
    burgerMenuSwitch = !burgerMenuSwitch;
    setTimeout(() => {
      if (topWrap && cardWrapTest) {
        topWrap.style.opacity = '0';
        cardWrapTest.style.opacity = '0';
      }
      mobileNav.style.visibility = 'visible';
      mobileNav.style.transform = 'translateY(0)';
      mobileNav.style.opacity =  '1';
      burgerMenu.removeAttribute('style');
    }, 800);
    burgMid.style.opacity = '0';
    burgTop.style.transform = 'rotate(45deg) translate(7px, 9px)';
    burgBottom.style.transform = 'rotate(-45deg) translate(4px, -7px)';
    burgerText.style.opacity = '0';
    hr.style.opacity = '0';
    footerFade.forEach(element => {
      element.style.transform = 'translateY(40px)';
      element.style.opacity = '0';
    });
    document.body.style.overflow = 'hidden';
  } else if (e.target === burger && burgerMenuSwitch === true) {
    burgerMenu.style.pointerEvents = 'none';
    burgerMenuSwitch = !burgerMenuSwitch;
    burgMid.style.transition = 'opacity 1.4s';
    burgMid.style.opacity = '1';
    burgTop.style.transform = 'rotate(0deg) translate(0, 0)';
    burgBottom.style.transform = 'rotate(0deg) translate(0, 0)';
    burgerText.style.opacity = '1';
    setTimeout(() => {
      burgerMenu.removeAttribute('style');
      burgMid.removeAttribute('style');
    }, 900);
    setTimeout(() => {
      if (fixedTop.getAttribute('style') === "box-shadow: none;") {
        fixedTop.removeAttribute('style');
      }
      if (topWrap && cardWrapTest) {
        topWrap.style.transform = 'translateY(0)';
        cardWrapTest.style.transform = 'translateY(0)';
        topWrap.style.opacity = '1';
        cardWrapTest.style.opacity = '1';
      }
      hr.style.opacity = '1';
      footerFade.forEach(element => {
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
      });
      document.body.removeAttribute('style');
    }, 800);
    mobileNav.style.transform = 'translateY(40px)';
    mobileNav.style.opacity =  '0';
    mobileNav.style.visibility = 'hidden';
  }
});

if (arrowDown) {
  arrowDown.addEventListener('click', () => {
    if (cardWrap.children.length === 0 && presentation === false) {
      document.documentElement.style.background = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'relative';
      arrowDown.style.opacity = '0';
      arrowDown.parentElement.removeChild(arrowDown.parentElement.childNodes[13]);
      presentation = !presentation;
      const index = parseInt(cardWrap.getAttribute('data-index'));
      scrollTo(0, (getTopWrapHeight() + 100));
      setTimeout(() => {
        showFooter();
      }, 2600);
      setTimeout(() => {
        document.body.removeAttribute('style');
        document.documentElement.removeAttribute('style');
      }, 2300);
      setTimeout(() => {
        const mainCardHeight = String(getMainCardHeight()) + 'px';
        cardWrapTest.style.height = '100%';
        main.style.height = '100%';
      }, 680);
      setTimeout(() => {
        generatePresHTML(index);
      }, 670);
    } else {
      window.scrollTo(0, (getTopWrapHeight() + 60));
    }
  });
}

if (messageMe) {
  messageMe.addEventListener('click', (e) => {
    mailTo();
  });
}

if (submitButton) {
  submitButton.addEventListener('click', () => {
    if (nameInput.value === '' && emailInput.value === '' && textareaInput.value === '') {
      formLabels.forEach(label => label.classList.add('invalid-label'));
      nameInput.classList.add('invalid-input');
      nameInput.placeholder = 'REQUIRED';
      emailInput.classList.add('invalid-input');
      emailInput.placeholder = 'INVALID EMAIL ADDRESS';
      textareaInput.classList.add('invalid-input');
      textareaInput.placeholder = 'REQUIRED';
    } else if (nameInput.value === '' && emailInput.value === '') {
      nameInput.classList.add('invalid-input');
      nameInput.placeholder = 'REQUIRED';
      emailInput.classList.add('invalid-input');
      emailInput.placeholder = 'INVALID EMAIL ADDRESS';
    } else if (nameInput.value === '' && textareaInput.value === '') {
      nameInput.classList.add('invalid-input');
      nameInput.placeholder = 'REQUIRED';
      textareaInput.classList.add('invalid-input');
      textareaInput.placeholder = 'REQUIRED';
    } else if (emailInput.value === '' && textareaInput.value === '') {
      emailInput.classList.add('invalid-input');
      emailInput.placeholder = 'INVALID EMAIL ADDRESS';
      textareaInput.classList.add('invalid-input');
      textareaInput.placeholder = 'REQUIRED';
    } else if (nameInput.value === '') {
      nameInput.classList.add('invalid-input');
      nameInput.placeholder = 'REQUIRED';
    } else if (emailInput.value === '') {
      emailInput.classList.add('invalid-input');
      emailInput.placeholder = 'INVALID EMAIL ADDRESS';
    } else if (textareaInput.value === '') {
      textareaInput.classList.add('invalid-input');
      textareaInput.placeholder = 'REQUIRED';
    }
  });
}

window.addEventListener('click', (e) => {
  const next = e.target.closest('#next');
  const prev = e.target.closest('#prev');
  if (e.target === next && cardWrapTest.getAttribute('style') !== 'height: 100%;') {
    e.target.style.pointerEvents = 'none';
    switchPres();
    setTimeout(() => {
      indexCounter += 1;
      cardWrap.setAttribute('data-index', indexCounter);
      const index = indexCounter;
      generatePresHTML(index);
    }, 800);
  } else if (e.target === next && cardWrapTest.getAttribute('style') === 'height: 100%;') {
    e.target.style.pointerEvents = 'none';
    const mainCardHeight = String(getMainCardHeight()) + 'px';
    cardWrap.style.height = mainCardHeight;
    switchPres();
    setTimeout(() => {
      indexCounter += 1;
      cardWrap.setAttribute('data-index', indexCounter);
      const index = indexCounter;
      generatePresHTML(index);
    }, 670);
  }

  if (e.target === prev && cardWrapTest.getAttribute('style') !== 'height: 100%;') {
    e.target.style.pointerEvents = 'none';
    switchPres();
    setTimeout(() => {
      indexCounter -= 1;
      cardWrap.setAttribute('data-index', indexCounter);
      const index = indexCounter;
      generatePresHTML(index);
    }, 800);
  } else if (e.target === prev && cardWrapTest.getAttribute('style') === 'height: 100%;') {
    e.target.style.pointerEvents = 'none';
    const mainCardHeight = String(getMainCardHeight()) + 'px';
    cardWrap.style.height = mainCardHeight;
    switchPres();
    setTimeout(() => {
      indexCounter -= 1;
      cardWrap.setAttribute('data-index', indexCounter);
      const index = indexCounter;
      generatePresHTML(index);
    }, 670);
  }

  if (e.target.id === 'close-video') {
    removeVideo();
  }

  const video = e.target.closest('.text-overlay');
  if (e.target === video) {
    generateVideo(indexCounter);
  }
});
// // rename please
// window.addEventListener('click', (e) => {
//   const video = e.target.closest('.text-overlay');
//   if (e.target === video) {
//     generateVideo(indexCounter);
//   }
// });
//
// window.addEventListener('click', (e) => {
//   if (e.target.id === 'close-video') {
//     removeVideo();
//   }
// });

window.addEventListener('touchstart', (e) => {
  const next = e.target.closest('#next');
  const prev = e.target.closest('#prev');
  if (e.target === next && cardWrapTest.getAttribute('style') !== 'height: 100%;') {
    e.target.style.pointerEvents = 'none';
    switchPres();
    setTimeout(() => {
      indexCounter += 1;
      cardWrap.setAttribute('data-index', indexCounter);
      const index = indexCounter;
      generatePresHTML(index);
    }, 800);
  } else if (e.target === next && cardWrapTest.getAttribute('style') === 'height: 100%;') {
    e.target.style.pointerEvents = 'none';
    const mainCardHeight = String(getMainCardHeight()) + 'px';
    cardWrap.style.height = mainCardHeight;
    switchPres();
    setTimeout(() => {
      indexCounter += 1;
      cardWrap.setAttribute('data-index', indexCounter);
      const index = indexCounter;
      generatePresHTML(index);
    }, 670);
  }

  if (e.target === prev && cardWrapTest.getAttribute('style') !== 'height: 100%;') {
    e.target.style.pointerEvents = 'none';
    switchPres();
    setTimeout(() => {
      indexCounter -= 1;
      cardWrap.setAttribute('data-index', indexCounter);
      const index = indexCounter;
      generatePresHTML(index);
    }, 800);
  } else if (e.target === prev && cardWrapTest.getAttribute('style') === 'height: 100%;') {
    e.target.style.pointerEvents = 'none';
    const mainCardHeight = String(getMainCardHeight()) + 'px';
    cardWrap.style.height = mainCardHeight;
    switchPres();
    setTimeout(() => {
      indexCounter -= 1;
      cardWrap.setAttribute('data-index', indexCounter);
      const index = indexCounter;
      generatePresHTML(index);
    }, 670);
  }

  if (e.target.id === 'close-video') {
    removeVideo();
  }
});

if (form) {
  form.addEventListener('input', (e) => {
    if (e.target.id === 'name') {
      localStorage.setItem('username', e.target.value);
    } else if (e.target.id === 'email') {
      localStorage.setItem('useremail', e.target.value);
    } else if (e.target.id === 'phone') {
      localStorage.setItem('userphone', e.target.value);
    } else if (e.target.id === 'message') {
      localStorage.setItem('usermessage', e.target.value);
    }
  });
}

if (select) {
  select.addEventListener('change', () => {
    const userChoice = select.selectedIndex;
    localStorage.setItem('heard about me', userChoice);
  });
}

if (viewWork) {
  viewWork.addEventListener('click', ()=> {
    window.location.href = 'file:///Users/NICK/Documents/GitHub/Front-End-Development/capstone-portfolio-project9/index.html#card-wrap-test';
  });
}
