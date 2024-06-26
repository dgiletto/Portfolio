import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars,FaHome } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #242424;
    height: 85px;
    display: flex;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    /* Third Nav */
    justify-content: flex-start;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 18px;
    &.active {
        color: #15cdfc;
    }
    &:hover {
        color: #15cdfc;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const Home = styled(FaHome)`
    color: #fff;
    display: block;
    font-size: 1.8rem;
    &:hover {
        color: #15cdfc;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Third Nav */
    width: 100vw;
    white-space: nowrap;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /* Third Nav */
    justify-content: flex-end;
    width: 100vw;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #242424;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: 1px solid #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        border: 1px solid #15cdfc;
        background: #15cdfc;
        color: #000;
    }
`;