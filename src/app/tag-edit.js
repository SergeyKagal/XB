import '../styles/editor.css';
import { state, tags } from '..';
import { drawTags } from './draw-tags';

export const tagEditClose = () => {
  state.isEditorOpen = false;
  document.querySelector('.editor').remove();
};

export const tagEditOpen = (id) => {
  state.isEditorOpen = true;
  const editor = document.createElement('div');
  editor.classList.add('editor');
  editor.innerHTML = `<input type="text" class="tag-edit">
  <div><button class="submit">submit</button><button class="cancel">cancel</button></div>
  `;
  document.body.appendChild(editor);

  document.querySelector('.submit').addEventListener('click', () => {
    tags.forEach((tag) => {
      if (
        id === tag.tagId &&
        document.querySelector('.tag-edit').value.trim().length
      ) {
        tag.content = document.querySelector('.tag-edit').value;
      }
    });
    drawTags(tags);

    tagEditClose();
  });
  document.querySelector('.cancel').addEventListener('click', () => {
    tagEditClose();
  });
};
