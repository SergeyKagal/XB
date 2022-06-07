import './styles/styles.css';
import './styles/input.css';
import './styles/tags.css';
import { addHandler } from './app/add-tag-handler';
import {  saveTags } from './app/save-tags';
import { loadTags } from './app/load-tags';


export const tags=[];
loadTags();
addHandler();
window.addEventListener('unload',saveTags);
