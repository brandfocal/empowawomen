import { Theme } from './settings/types';
import { BeautyFashionWellnessPillar } from './components/generated/BeautyFashionWellnessPillar';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return <BeautyFashionWellnessPillar />;
}

export default App;
