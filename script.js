const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacao');
const mobileLayout = window.matchMedia('(max-width: 900px)');
const notice = document.querySelector('#aviso');
const noticeMessage = document.querySelector('#aviso-texto');

function setMenu(open) {
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') === 'false');
});

mobileLayout.addEventListener('change', () => setMenu(false));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !notice.open && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

navigation.querySelectorAll('a:not([data-message])').forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileLayout.matches) {
      setMenu(false);
      document.querySelector(link.hash).focus();
    }
  });
});

document.querySelectorAll('[data-message]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    noticeMessage.textContent = link.dataset.message;
    notice.showModal();
  });
});

menuButton.hidden = false;
document.documentElement.classList.add('menu-ready');
