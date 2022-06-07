export const drawTags = (tags) => {
  const list = document.querySelector('.tag__list');
  tags.forEach((element) => {
    list.innerHTML += `<li class="tag__list-item" data-id="${element.tagId}">
    <span class="tag__list-content">${element.content}</span>
    <button class="tag__list-delete-button">&times;</button>
  </li>`;
  });
};
