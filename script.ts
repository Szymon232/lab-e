interface Style {
  name: string;
  file: string;
}

interface AppState {
  currentStyle: Style;
  styles: Style[];
}

const appState: AppState = {
  currentStyle: { name: 'fajne', file: 'style1.css' },
  styles: [
    { name: 'fajne', file: 'style1.css' },
    { name: 'fajne2', file: 'style2.css' },
    { name: 'fajne3', file: 'style3.css' }
  ],
};

function applyStyle() {
  const styleLink = document.getElementById('styleLink') as HTMLLinkElement;
  styleLink.href = `css/${appState.currentStyle.file}`;
}

applyStyle();

function generateStyleLinks() {
  const nav = document.querySelector('.main-nav ul');

  if (nav !== null) {
    appState.styles.forEach((style) => {
      const link = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#'; 
      a.textContent = style.name;
      a.addEventListener('click', () => changeStyle(style.name));
      link.appendChild(a);
      nav.appendChild(link);
    });
  }
}

generateStyleLinks();


function changeStyle(styleName: string) {
  const selectedStyle = appState.styles.find((style) => style.name === styleName);
  if (selectedStyle) {
    appState.currentStyle = selectedStyle;
    applyStyle();
  }
}
