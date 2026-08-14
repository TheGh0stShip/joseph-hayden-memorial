// Give each flame a slightly different, natural rhythm when motion is allowed.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.flame').forEach((flame) => {
    const duration = 1.7 + Math.random() * 1.1;
    flame.style.animationDuration = `${duration.toFixed(2)}s`;
  });
}
