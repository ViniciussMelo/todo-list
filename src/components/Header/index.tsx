import { ListChecks, Checks } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import { HeaderContainer } from './styles';

import logoIgnite from '../../assets/logo-ignite.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/"><ListChecks size={24}/></NavLink>
        <NavLink to="completed"><Checks size={24}/></NavLink>
      </nav>
    </HeaderContainer>
  )
}