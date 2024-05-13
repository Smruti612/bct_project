import React from 'react';
import {
  Nav,
  NavLink,
  NavBtn,
  NavBtnLink,
  Bars,
  NavMenu,
} from './NavbarElements2';

const NavBarVoter = () => {
  return (
    <>
      <Nav>
        <img className='justify-content-start' src={require('../images/logo.svg').default} alt='logo' />
        <Bars />
        <NavMenu className='fw-bold m-auto'>
          <NavLink to='/CandidateDetails'>CANDIDATES</NavLink>
          <NavLink to='/Register'>REGISTER</NavLink>
          <NavLink to='/Vote'>VOTE</NavLink>
          <NavLink to='/Result'>RESULTS</NavLink>
        </NavMenu>
        <NavBtn className='fw-bolder'>
          <NavBtnLink to='/'>VOTER PORTAL</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBarVoter;