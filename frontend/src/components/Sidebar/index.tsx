import { FormControlLabel, FormGroup, IconButton, Switch } from '@mui/material';
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { DividerStyled } from '../../styles/components/Divider';
import { ContainerBox } from '../../styles/components/Sidebar';
import MenuData from '../../utils/menu_item.json';
import SideBarItem from './sidebar_item';

interface Props {
  toggleTheme(): void;
}
interface IMenuData {
  name: string;
  category: string;
  icon_name: string;
  to: string;
}

export default function SideBar({ toggleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <ContainerBox open={isOpen} sx={{ flexGrow: 1 }}>
      <div className="switcher_box">
        {isOpen && (
          <FormGroup>
            <FormControlLabel
              label={title === 'dark' ? 'Light theme' : 'Dark theme'}
              control={
                <Switch
                  checked={title === 'dark'}
                  onChange={toggleTheme}
                  aria-label="theme switch"
                />
              }
            />
          </FormGroup>
        )}
        <div>
          <IconButton
            size="medium"
            color="inherit"
            title={isOpen ? 'Minimizar' : 'Maximizar'}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-icons">
              {isOpen ? 'chevron_left' : 'chevron_right'}
            </span>
          </IconButton>
        </div>
      </div>

      <DividerStyled />

      <div className="box_items">
        {MenuData.map((item: IMenuData, key) => {
          return (
            <SideBarItem
              key={key}
              name={item.name}
              category={item.category}
              icon_name={item.icon_name}
              to={item.to}
              open={isOpen}
            />
          );
        })}
      </div>
    </ContainerBox>
  );
}
