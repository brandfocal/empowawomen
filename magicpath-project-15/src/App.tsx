import { Theme } from './settings/types';
import { LeadershipGovernanceBoardStage } from './components/generated/LeadershipGovernanceBoardStage';

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

  return <LeadershipGovernanceBoardStage />;
}

export default App;
