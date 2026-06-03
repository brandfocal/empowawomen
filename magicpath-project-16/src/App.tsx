import { Theme } from './settings/types';
import { CommunicationsPillarPage } from './components/generated/CommunicationsPillarPage';

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

  return <CommunicationsPillarPage />;
}

export default App;
