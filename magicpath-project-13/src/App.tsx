import { Theme } from './settings/types';
import { WholesaleRetailManufacturingPillar } from './components/generated/WholesaleRetailManufacturingPillar';

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

  return <WholesaleRetailManufacturingPillar />;
}

export default App;
