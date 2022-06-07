import { state, tags } from '..';
import { drawTags } from './draw-tags';
import { saveTags } from './save-tags';
import { tagEditClose, tagEditOpen } from './tag-edit';
import { warning } from './warning';

export const tagListenerOn = () => {
  const list = document.querySelector('.tag__list');
  list.addEventListener('click', tagClickHandler);
};
export const tagListenerOff = () => {
  const list = document.querySelector('.tag__list');
  list.removeEventListener('clic', tagClickHandler);
};

export const tagClickHandler = (e) => {
  const id = e.target.getAttribute('id');
  if (
    e.target.classList.contains('tag__list-edit-button') &&
    !state.isReadOnly &&
    !state.isEditorOpen
  ) {
    tagEditOpen(id);
  }

  if (e.target.className === 'tag__list-delete-button' && state.isReadOnly) {
    warning();
  }
  if (e.target.className === 'tag__list-delete-button' && !state.isReadOnly) {
    tagListenerOff();
    tags.forEach((element, index) => {
      if (element.tagId === id) {
        if (document.querySelector('.editor')) {
          tagEditClose();
        }
        tags.splice(index, 1);
      }
    });
    saveTags();
    drawTags(tags);
  }
};
