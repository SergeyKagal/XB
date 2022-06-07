import { tagListenerOn } from './tag-handler';

export const drawTags = (tags) => {
  const list = document.querySelector('.tag__list');
  list.innerHTML = '';
  tags.forEach((element) => {
    list.innerHTML += `<li class="tag__list-item" id="${element.tagId}">
    <span class="tag__list-content">${element.content}</span>
    <div class="tag__list-buttons"><button class="tag__list-edit-button material-icons" id="${element.tagId}">edit</button>
    <button class="tag__list-delete-button" id="${element.tagId}">&times;</button></div>
  </li>`;
  });
  tagListenerOn();
};
