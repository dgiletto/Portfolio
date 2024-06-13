import React from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Bars, Home } from './NavBarElements';

export function NavBar() {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <Home />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to='/projects'>
                        Projects
                    </NavLink>
                    <NavLink to='/skills'>
                        Skills
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='contact-me'>Let's Connect!</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}

export default NavBar;