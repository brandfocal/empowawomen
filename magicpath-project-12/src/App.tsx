import { Theme } from './settings/types';
import { EntrepreneurshipFundingPillar } from './components/generated/EntrepreneurshipFundingPillar';

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

  return <EntrepreneurshipFundingPillar />;
}

export default App;
