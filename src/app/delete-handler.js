import { state, tags } from '..';
import { drawTags } from './draw-tags';
import { saveTags } from './save-tags';

export const deleteListenerOn = () => {
  const list = document.querySelector('.tag__list');
  list.addEventListener('click', deleteHandler);
};
export const deleteListenerOff = () => {
  const list = document.querySelector('.tag__list');
  list.removeEventListener('clic', deleteHandler);
};

export const deleteHandler = (e) => {
  if (e.target.className === 'tag__list-delete-button' && !state.isReadOnly) {
    const id = e.target.getAttribute('id');

    deleteListenerOff();
    tags.forEach((element, index) => {
      if (element.tagId === id) {
        tags.splice(index, 1);
      }
    });
    saveTags();
    drawTags(tags);
  }
};
