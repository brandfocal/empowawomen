import { Theme } from './settings/types';
import { AgricultureManufacturingPillar } from './components/generated/AgricultureManufacturingPillar';

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

  return <AgricultureManufacturingPillar />;
}

export default App;
