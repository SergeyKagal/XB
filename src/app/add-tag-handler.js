import { tags } from '..';

const addButton = document.querySelector('.input-area__button');
const inputText = document.querySelector('#input-area__input');

export const addHandler = () => {
  addButton.addEventListener('click', () => {
    if (inputText.value.trim().length) {
      tags.push({
        tagId: new Date().toISOString(),
        content: inputText.value,
      });

      inputText.value = '';
    }
  });
};
