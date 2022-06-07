import { tags } from '..';
import { drawTags } from './draw-tags';

export const loadTags = () => {
  window.addEventListener('load', () => {
    const storageContent = JSON.parse(localStorage.getItem('tags'));
    if (storageContent) {
      storageContent.forEach((item) => {
        tags.push(item);
      });
    }
    drawTags(tags);
  });
};
