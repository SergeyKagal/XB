import { state } from '..';

export const loadState = () => {
  if (localStorage.getItem('state')) {
    state.isReadOnly = JSON.parse(localStorage.getItem('state')).isReadOnly;
    const checkBox = document.querySelector('#is-readonly');
    checkBox.checked = state.isReadOnly;
  }
};
