import { state } from '..';
import { tagEditClose } from './tag-edit';

export const isReadOnlyHandler = () => {
  document.querySelector('#input-area__input').readOnly = state.isReadOnly;
  document.querySelector('.input-area__button').disabled = state.isReadOnly;
  if (document.querySelector('.editor')) {
    tagEditClose();
  }
};
