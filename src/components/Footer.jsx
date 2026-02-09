import React from 'react';
import styled from 'styled-components';
import productLogo from '../assets/productLogo.png';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 60px 40px;
  color: var(--text-secondary);
  border-top: 1px solid var(--card-border);
  font-size: 0.9rem;
  background: #020202;
`;

const ProductTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  
  span {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`;

const Logo = styled.img`
  height: 32px;
  width: auto;
  opacity: 0.8;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <ProductTeam>
                <span>Created by</span>
                <Logo src={productLogo} alt="Product Team Logo" />
                <span>UMC Product Team</span>
            </ProductTeam>
            <p>&copy; 2026 Je_Ong. All rights reserved.</p>
        </FooterContainer>
    );
};

export default Footer;
