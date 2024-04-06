const sidebar = document.getElementById('sidebar');
const sidebarButtons = document.querySelectorAll('.navbar-1');
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

if (sidebarButtons) {
  sidebarButtons.forEach(button => {
    button.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}
