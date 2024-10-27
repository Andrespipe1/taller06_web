// main.js
import { saveSettings } from './storageModule.js';
import { applySettings, updateBackgroundColor, updateFont } from './uiModule.js';

document.addEventListener('DOMContentLoaded', () => {
  // Aplica las configuraciones guardadas al cargar la página
  applySettings();

  // Maneja los cambios de color de fondo
  document.getElementById('bgcolor').addEventListener('input', (event) => {
    const color = event.target.value;
    updateBackgroundColor(color);
    saveSettings({
      bgcolor: color,
      font: document.getElementById('font').value,
      image: document.getElementById('image').value
    });
  });

  // Maneja los cambios de fuente
  document.getElementById('font').addEventListener('change', (event) => {
    const font = event.target.value;
    updateFont(font);
    saveSettings({
      bgcolor: document.getElementById('bgcolor').value,
      font: font,
      image: document.getElementById('image').value
    });
  });
});
