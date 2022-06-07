import { tags } from '..';

export const loadTags=()=>{
  window.addEventListener('load',()=>{
    const storageContent=JSON.parse(localStorage.getItem('tags'));
    if(storageContent){
      storageContent.forEach((item)=>tags.push(item));
    }
  });
};