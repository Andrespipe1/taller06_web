// uiModule.js
import { getSettings } from './storageModule.js';

export function applySettings() {
  const settings = getSettings();
  document.body.style.backgroundColor = settings.bgcolor;
  document.body.style.fontFamily = settings.font;
  document.getElementById('bgcolor').value = settings.bgcolor;
  document.getElementById('font').value = settings.font;
  document.getElementById('image').value = settings.image;
}

export function updateBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

export function updateFont(font) {
  document.body.style.fontFamily = font;
}
