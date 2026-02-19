import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import umcLogo from '../assets/umc_logo.png';
import glassShard1 from '../assets/glass_shard_1.png';
import glassShard2 from '../assets/glass_shard_2.png';
import googlePlayBadge from '../assets/Store/google.png';
import appStoreBadge from '../assets/Store/apple.png';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 20px;
  background: radial-gradient(circle at 50% 40%, rgba(20, 20, 30, 1) 0%, #000 70%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  z-index: 5;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled(motion.div)`
  width: 120px;
  height: 120px;
  margin-bottom: 40px;
  position: relative;
  z-index: 10;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 0 20px rgba(255,255,255,0.3));
  }
`;

const Badge = styled(motion.span)`
  display: inline-block;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.08);
  color: #ccc;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  letter-spacing: 1px;
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  line-height: 1.1;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
  font-family: var(--font-heading);
  font-weight: 800;
  color: #fff;
  word-break: keep-all;
  
  span {
    background: linear-gradient(90deg, #6699ff, #9e66ff); /* Brighter gradient */
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: #ddd; /* Lighter color */
  margin-bottom: 60px;
  line-height: 1.6;
  max-width: 600px;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const StoreButtonImage = styled(motion.img)`
  height: 60px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    height: 50px;
  }
`;

const GlassElement = styled(motion.div)`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: screen;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    opacity: 0.3; /* Less intrusive on mobile */
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CenterGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(60, 60, 100, 0.3) 0%, transparent 70%);
  filter: blur(80px);
  z-index: 0;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    filter: blur(50px);
  }
  
  pointer-events: none;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  /* transform removed here to avoid conflict with framer-motion */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  z-index: 10;
  opacity: 0.7;

  span {
    font-size: 0.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
  
  &:hover {
    opacity: 1;
  }
`;

const Hero = () => {
  const scrollToContent = () => {
    const problemSection = document.getElementById('problem');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section>
      <CenterGlow />

      <GlassElement
        style={{ top: '20%', left: '15%', width: '350px' }}
        animate={{
          y: [0, -40, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src={glassShard1} alt="" />
      </GlassElement>

      <GlassElement
        style={{ bottom: '15%', right: '10%', width: '400px' }}
        animate={{
          y: [0, 50, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <img src={glassShard2} alt="" />
      </GlassElement>

      <Content>
        <LogoContainer
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <img src={umcLogo} alt="UMC Logo" />
        </LogoContainer>

        <Badge
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          University MakeUs Challenge
        </Badge>

        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Focus on Growth,<br />
          <span>We Handle the Ops</span>
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          챌린저들은 성장에만 집중하고,<br />
          운영 업무는 우리가 관리합니다.
        </Subtitle>

        {/* Temporarily hidden as per request
        <ButtonGroup
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('2월 20일 공개 됩니다.');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <StoreButtonImage src={googlePlayBadge} alt="Get it on Google Play" />
          </motion.a>

          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('2월 20일 공개 됩니다.');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <StoreButtonImage src={appStoreBadge} alt="Download on the App Store" />
          </motion.a>
        </ButtonGroup>
        */}
      </Content>

      <ScrollIndicator
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        onClick={scrollToContent}
      >
        <span>Discover More</span>
        <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
      </ScrollIndicator>
    </Section>
  );
};

export default Hero;
