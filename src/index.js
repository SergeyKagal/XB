import './styles/styles.css';
import './styles/input.css';
import './styles/tags.css';
import { addHandler } from './app/add-tag-handler';
import { saveTags } from './app/save-tags';
import { loadTags } from './app/load-tags';
import { checkBoxHandler } from './app/check-box-handler';
import { loadState } from './app/load-state';
import { isReadOnlyHandler } from './app/is-readonly-handler';

export const tags = [];
export const state = {
  isReadOnly: false,
};

loadTags();
loadState();
addHandler();
window.addEventListener('unload', saveTags);
checkBoxHandler();
isReadOnlyHandler();
