import '../styles/warning.css';

export const warning = () => {
  const warning = document.createElement('div');
  warning.classList.add('warning');
  warning.textContent = 'tag cannot be deleted, disable read-only mode';
  if (document.body.lastChild.className !== 'warning') {
    document.body.appendChild(warning);
    console.log(document.body.lastChild.className);
    setTimeout(() => {
      warning.remove();
    }, 700);
  }
};
