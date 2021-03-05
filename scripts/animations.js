const activateAnimationOnScroll = (
  selector,
  animationName,
  animationPoint = 900,
  delay = '0s'
) => {
  const objects = document.querySelectorAll(selector);
  for (let i = 0; i < objects.length; i++) {
    window.addEventListener('scroll', () => {
      let triggerLine = objects[i].getBoundingClientRect().top;
      if (triggerLine <= animationPoint) {
        objects[i].classList.add(animationName);
      }
      if (delay != '0s') {
        objects[i].style.animationDelay = delay;
      }
    });
  }
};

activateAnimationOnScroll('.animateUP', 'slide-up');
activateAnimationOnScroll('.animateLTR', 'slide-left-to-right');
activateAnimationOnScroll('.animateRTL', 'slide-right-to-left');
activateAnimationOnScroll('.animateFadeIn', 'fade-in');
