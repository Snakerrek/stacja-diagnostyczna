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
      if (delay === 'progressive') {
        const time = i / 5 + 's';
        objects[i].style.animationDelay = time;
      } else if (delay !== '0s') {
        objects[i].style.animationDelay = delay;
      }
    });
  }
};

activateAnimationOnScroll('.animateUP', 'slide-up');
activateAnimationOnScroll(
  '.animateUPdelayed',
  'slide-up-delayed',
  900,
  'progressive'
);
activateAnimationOnScroll('.animateLTR', 'slide-left-to-right');
activateAnimationOnScroll('.easyAnimateLTR', 'easy-slide-left-to-right');
activateAnimationOnScroll('.animateRTL', 'slide-right-to-left');
activateAnimationOnScroll('.easyAnimateRTL', 'easy-slide-right-to-left');
activateAnimationOnScroll('.animateFadeIn', 'fade-in');
activateAnimationOnScroll('.animateFadeInHalfSec', 'fade-in', 900, '0.5s');
activateAnimationOnScroll('.animateFadeInSec', 'fade-in', 900, '1s');
