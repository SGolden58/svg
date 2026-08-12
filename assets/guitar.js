<script>
document.addEventListener("DOMContentLoaded", () => {
  // select both elements
  const targets = document.querySelectorAll('.Guitar-title, .Join-us');

  if (!targets.length) return; // nothing to observe

  // IntersectionObserver options (tweak threshold if needed)
  const options = {
    root: null,          // viewport
    rootMargin: "0px",
    threshold: 0.1       // 10% visible => trigger
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // add the class to the actual element that intersected
        entry.target.classList.add('show');
        // stop observing this element (so animation runs once)
        obs.unobserve(entry.target);
      }
    });
  }, options);

  // observe each target
  targets.forEach(el => observer.observe(el));
});

// Only fade this specific block
const txt = document.querySelector('.fade-text');

// Fade in at 9s
setTimeout(() => {
    if (txt) txt.style.opacity = "1";
}, 8400);

// Fade out at 24s
setTimeout(() => {
    if (txt) txt.style.opacity = "0";
}, 24000);
</script>
