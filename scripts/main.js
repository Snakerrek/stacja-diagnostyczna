const handleNavToggle = () => {
  const links = document.getElementsByClassName('link');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      document.querySelector('#nav-toggle').checked ^= 1;
    });
  }
};

handleNavToggle();
