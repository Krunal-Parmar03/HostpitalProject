const menu = document.querySelector('.menu');
const nav = document.querySelector('.site-header nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
  menu.textContent = open ? '×' : '☰';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = '☰';
}));
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const note = document.querySelector('.form-note');
  note.textContent = 'Thank you — this sample site does not submit appointment requests.';
});
