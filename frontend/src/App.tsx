import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import { AppRoutes } from './Routes';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="web-application">
        <GlobalStyle />
        <ToastContainer theme={theme.title === 'dark' ? 'dark' : 'light'} />
        <Router>
          <AppRoutes toggleTheme={toggleTheme} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
