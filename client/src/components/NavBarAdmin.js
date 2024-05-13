import React from 'react';
import {
  Nav, NavLink, NavBtn, NavBtnLink, Bars, NavMenu,
} from './NavbarElements';

const NavBarAdmin = () => {
  return (
    <>
      <Nav>
        <img src={require('../images/logo.svg').default} alt='logo' />
        <Bars />
        <NavMenu className='fw-bold m-auto'>
          <NavLink to='/CandidateDetails'>CANDIDATES</NavLink>
          <NavLink to='/AddCandidate'>ADD CANDIDATE</NavLink>
          <NavLink to='/VerifyVoter'>VERIFY VOTER</NavLink>
          <NavLink to='/Phase'>ELECTION PHASE</NavLink>
          <NavLink to='/Result'>RESULTS</NavLink>
        </NavMenu>
        <NavBtn className='fw-bolder'>
          <NavBtnLink to='/'>ADMIN PORTAL</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBarAdmin;
