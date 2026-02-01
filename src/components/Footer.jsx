import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 60px 40px;
  color: var(--text-secondary);
  border-top: 1px solid var(--card-border);
  font-size: 0.9rem;
  background: #020202;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2026 UMC Product Team. All rights reserved.</p>
        </FooterContainer>
    );
};

export default Footer;
