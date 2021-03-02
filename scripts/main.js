const updateCopyrightText = () => {
  const paragraph = document.getElementById('copyright-paragraph');
  const date = new Date();
  paragraph.innerText =
    '© ' +
    date.getFullYear().toString() +
    ' PSKP Zespół Szkół Nr 1 im. Jana Kilińskiego w Kłobucku';
};

const smoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
};

const handleNavToggle = () => {
  const links = document.getElementsByClassName('link');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      document.querySelector('#nav-toggle').checked ^= 1;
    });
  }
};

const handleNavBackgroundChangeOnScroll = () => {
  document.addEventListener('scroll', () => {
    if (
      window.scrollY === 0 &&
      !document.querySelector('#nav-toggle').checked
    ) {
      document.getElementsByTagName('nav')[0].style.backgroundColor =
        'rgba(23, 23, 25, 0)';
    } else {
      document.getElementsByTagName('nav')[0].style.backgroundColor =
        'rgba(23, 23, 25, 1)';
    }
  });
};

const handleNavBackgroundChangeOnBurgerExpand = () => {
  const iconBurger = document.getElementsByClassName('icon-burger')[0];
  iconBurger.addEventListener('click', () => {
    if (!document.querySelector('#nav-toggle').checked) {
      document.getElementsByTagName('nav')[0].style.backgroundColor =
        'rgba(23, 23, 25, 1)';
    }
  });
};

smoothScroll();
handleNavToggle();
handleNavBackgroundChangeOnScroll();
handleNavBackgroundChangeOnBurgerExpand();
updateCopyrightText();
