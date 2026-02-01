import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, padding 0.3s ease;
  
  &.scrolled {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(12px);
    padding: 15px 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    &.scrolled {
      padding: 12px 20px;
    }
  }
`;

const Logo = styled.a`
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    display: none; // Hidden on mobile for simplicity in this iteration
  }
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Nav
            className={isScrolled ? 'scrolled' : ''}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                UMC App
            </Logo>
            <NavLinks>
                <NavLink onClick={() => scrollToSection('problem')}>Why UMC App</NavLink>
                <NavLink onClick={() => scrollToSection('features')}>Features</NavLink>
                <NavLink onClick={() => scrollToSection('team')}>Team</NavLink>
            </NavLinks>
        </Nav>
    );
};

export default Navbar;
