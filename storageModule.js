// storageModule.js
export function saveSettings(settings) {
    localStorage.setItem('bgcolor', settings.bgcolor);
    localStorage.setItem('font', settings.font);
    localStorage.setItem('image', settings.image);
  }
  
  export function getSettings() {
    return {
      bgcolor: localStorage.getItem('bgcolor') || '#FFFFFF',
      font: localStorage.getItem('font') || 'serif',
      image: localStorage.getItem('image') || 'Cocodrilo.webp'
    };
  }
  