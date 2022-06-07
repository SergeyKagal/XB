import { state } from '..';

export const checkBoxHandler = () => {
  const checkBox = document.querySelector('#is-readonly');

  checkBox.addEventListener('change', (e) => {
    state.isReadOnly = e.target.checked;
  });
};
