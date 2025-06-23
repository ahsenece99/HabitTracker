export function applyDarkMode(enabled: boolean) {
  const id = 'dark-theme';
  let link = document.getElementById(id) as HTMLLinkElement | null;

  if (enabled) {
    if (!link) {
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/src/css/Dark.css'; 
      link.id = id;
      document.head.appendChild(link);
    }
  } else {
    if (link) {
      link.remove();
    }
  }
}
