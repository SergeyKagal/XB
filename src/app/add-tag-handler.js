import { tags } from '..';
import { drawTags } from './draw-tags';
import { saveTags } from './save-tags';

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
      drawTags(tags);
      saveTags();
    }
  });
};
