import { state, tags } from '..';

export const saveTags = () => {
  localStorage.setItem('tags', JSON.stringify(tags));
  localStorage.setItem('state',JSON.stringify(state));
};
