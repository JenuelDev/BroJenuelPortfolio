const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("a-enter");
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  }
);

const animatedScrollObserverViewFull = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("a-view-enter");
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 1,
  }
);

export const animationViewFull = {
  beforeMount(el) {
    el.classList.add("a-view-before-enter");
    animatedScrollObserverViewFull.observe(el);
  },
};

export default {
  beforeMount(el) {
    el.classList.add("a-before-enter");
    animatedScrollObserver.observe(el);
  },
};
