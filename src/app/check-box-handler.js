import { state } from '..';

export const checkBoxHandler = () => {
  const checkBox = document.querySelector('#is-readonly');

  checkBox.addEventListener('change', (e) => {
    console.log(e.target.checked);
    state.isReadOnly = e.target.checked;
    console.log('check',state);
  });
};
