const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("a-enter");
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  },
  // {
  //   threshold: 0.5,
  // }
);
export default {
  beforeMount(el) {
    el.classList.add("a-before-enter");
    animatedScrollObserver.observe(el);
  },
};
