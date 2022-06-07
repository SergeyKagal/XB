import { tags } from '..';

export const saveTags = () => {
  localStorage.setItem('tags', JSON.stringify(tags));
};
