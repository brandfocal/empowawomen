import { Theme } from './settings/types';
import { EmpowaWomenSummitPage } from './components/generated/EmpowaWomenSummitPage';

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

  return <EmpowaWomenSummitPage />;
}

export default App;
