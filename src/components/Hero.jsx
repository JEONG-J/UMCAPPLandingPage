import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import umcLogo from '../assets/umc_logo.png';
import glassShard1 from '../assets/glass_shard_1.png';
import glassShard2 from '../assets/glass_shard_2.png';

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
    font-size: 2.8rem;
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

const StoreButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  
  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
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
          <span>We Handle the Ops.</span>
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          동아리 운영의 모든 것을 하나의 앱으로.<br />
          성장에만 집중하세요. 나머지는 저희가 해결합니다.
        </Subtitle>

        <ButtonGroup
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <StoreButton href="#" whileTap={{ scale: 0.95 }}>
            <svg viewBox="0 0 24 24"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.0527-.5676.416.416 0 00-.568.0527l-2.0355 3.5255c-1.6961-.7759-3.6063-1.2066-5.6184-1.2066-2.0121 0-3.9223.4307-5.6184 1.2066l-2.0355-3.5255a.4173.4173 0 00-.5676-.0527.416.416 0 00-.0527.5676l1.9973 3.4592C2.6806 10.9786 1.0583 14.0758 1.0028 17.55h21.9945c-.0555-3.4742-1.6778-6.5714-5.1189-8.2286" /></svg>
            <span>Android 앱 다운로드</span>
          </StoreButton>

          <StoreButton href="#" whileTap={{ scale: 0.95 }}>
            <svg viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.74-3.03 1.58-.67.77-1.24 2-1.08 3.12 1.17.09 2.33-.77 3.04-1.59" /></svg>
            <span>iOS 앱 다운로드</span>
          </StoreButton>
        </ButtonGroup>
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
