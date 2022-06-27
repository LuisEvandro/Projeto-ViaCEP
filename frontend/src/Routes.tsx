import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import SideBar from './components/Sidebar';
import Home from './pages/Home';

interface Props {
  toggleTheme(): void;
}

export function AppRoutes({ toggleTheme }: Props) {
  return (
    <div className="main_container">
      <div className="sidebar_content">
        <SideBar toggleTheme={toggleTheme} />
      </div>

      <div className="page_content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
