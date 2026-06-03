import { Theme } from './settings/types';
import { AgricultureFoodSecurityPillar } from './components/generated/AgricultureFoodSecurityPillar';

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

  return <AgricultureFoodSecurityPillar />;
}

export default App;
