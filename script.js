const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacao');
const mobileLayout = window.matchMedia('(max-width: 900px)');
const notice = document.querySelector('#aviso');

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

const registrationForm = document.querySelector('#inscricao-form');
const registrationSuccess = document.querySelector('#inscricao-sucesso');

document.querySelectorAll('[data-registration]').forEach((button) => {
  button.addEventListener('click', () => {
    registrationForm.hidden = false;
    registrationSuccess.hidden = true;
    registrationForm.reset();
    notice.showModal();
  });
});

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  registrationForm.hidden = true;
  registrationSuccess.hidden = false;
});

document.querySelector('[data-close-dialog]').addEventListener('click', () => {
  notice.close();
});

menuButton.hidden = false;
document.documentElement.classList.add('menu-ready');

const scheduleTabs = document.querySelector('#dias-programacao');
const dayButtons = [...scheduleTabs.querySelectorAll('button')];
const dayPanels = dayButtons.map((button) => document.getElementById(button.getAttribute('aria-controls')));
const downloadButton = document.querySelector('#baixar-programacao');

function selectDay(index) {
  dayButtons.forEach((button, buttonIndex) => {
    const selected = index === buttonIndex;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
    dayPanels[buttonIndex].hidden = !selected;
  });
}

dayButtons.forEach((button, index) => {
  const panel = dayPanels[index];
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', button.id);
  panel.tabIndex = 0;

  button.addEventListener('click', () => selectDay(index));
  button.addEventListener('keydown', (event) => {
    const count = dayButtons.length;
    const targetIndex = {
      ArrowLeft: (index - 1 + count) % count,
      ArrowRight: (index + 1) % count,
      Home: 0,
      End: count - 1
    }[event.key];

    if (targetIndex === undefined) return;
    event.preventDefault();
    selectDay(targetIndex);
    dayButtons[targetIndex].focus();
  });
});

function getScheduleText() {
  const lines = [
    'Semana Acadêmica de Tecnologia — Programação',
    document.querySelector('.schedule__note').textContent
  ];

  dayPanels.forEach((panel) => {
    lines.push('', panel.querySelector('h3').textContent);
    const emptyMessage = panel.querySelector('.schedule__empty');
    if (emptyMessage) lines.push(emptyMessage.textContent);

    panel.querySelectorAll('.schedule__events > li').forEach((event) => {
      const hours = [...event.querySelectorAll('time')].map((time) => time.textContent).join('–');
      const title = event.querySelector('h4').textContent;
      const category = event.querySelector('.schedule__category').textContent;
      const details = [...event.querySelectorAll('.schedule__meta span')].map((item) => item.textContent);
      lines.push(`${hours} | ${title} (${category})`, details.join(' • '));
    });
  });

  return lines.join('\n') + '\n';
}

downloadButton.addEventListener('click', () => {
  const file = new Blob([getScheduleText()], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'programacao-semana-academica.txt';
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
});

selectDay(0);
scheduleTabs.hidden = false;
downloadButton.hidden = false;
