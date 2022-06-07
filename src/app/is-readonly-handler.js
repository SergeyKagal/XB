import { state } from '..';

export const isReadOnlyHandler=()=>{
  
  document.querySelector('#input-area__input').readOnly=state.isReadOnly;
  document.querySelector('.input-area__button').disabled=state.isReadOnly;
 
};