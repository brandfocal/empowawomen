import { Theme } from './settings/types';
import { EmpowaWomenAboutPage } from './components/generated/EmpowaWomenAboutPage';

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

  return <EmpowaWomenAboutPage />;
}

export default App;
