import { Theme } from './settings/types';
import { GreenEconomyPillar } from './components/generated/GreenEconomyPillar';

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

  return <GreenEconomyPillar />;
}

export default App;
