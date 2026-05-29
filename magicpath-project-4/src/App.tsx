import { Theme } from './settings/types';
import { InfrastructurePropertyPillar } from './components/generated/InfrastructurePropertyPillar';

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

  return <InfrastructurePropertyPillar />;
}

export default App;
