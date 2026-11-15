const modal = document.getElementById('demo-modal');
const openers = document.querySelectorAll('[data-open-demo]');
const closers = document.querySelectorAll('[data-close-demo]');
const toast = document.getElementById('toast');

function openDemo() {
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.getElementById('open-letter').focus();
}
function closeDemo() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}
openers.forEach((button) => button.addEventListener('click', openDemo));
closers.forEach((button) => button.addEventListener('click', closeDemo));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) closeDemo();
});
document.getElementById('open-letter').addEventListener('click', () => {
  const letter = document.getElementById('demo-letter');
  letter.classList.add('is-visible');
  letter.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
document.getElementById('say-yes').addEventListener('click', () => {
  document.getElementById('demo-reply').textContent = 'Aww, this is a sample page—imagine the real answer 💖';
  confettiHearts();
});
function confettiHearts() {
  const colors = ['#e76782', '#f6d77a', '#c7a8cd', '#fff1e8'];
  for (let index = 0; index < 18; index += 1) {
    const heart = document.createElement('span');
    heart.textContent = index % 3 === 0 ? '✦' : '♥';
    heart.className = 'confetti-heart';
    heart.style.left = `${20 + Math.random() * 60}%`;
    heart.style.top = `${35 + Math.random() * 45}%`;
    heart.style.color = colors[index % colors.length];
    heart.style.setProperty('--drift', `${(Math.random() - 0.5) * 150}px`);
    modal.querySelector('.demo-window').appendChild(heart);
    window.setTimeout(() => heart.remove(), 1300);
  }
}
let toastTimer;
document.querySelectorAll('.wa-order').forEach((link) => {
  const plan = link.dataset.plan;
  link.href = `https://wa.me/919630194023?text=${encodeURIComponent(`Hi Premlettra, I want to order the ${plan} proposal website. Please share the next steps.`)}`;
  link.target = '_blank';
  link.rel = 'noreferrer';
});
document.getElementById('year').textContent = new Date().getFullYear();
