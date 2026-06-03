import { Theme } from './settings/types';
import { CreativeEconomyPillar } from './components/generated/CreativeEconomyPillar';

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

  return (
    <div className="w-full min-h-screen">
      <CreativeEconomyPillar />
    </div>
  );
}

export default App;
