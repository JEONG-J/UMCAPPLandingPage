import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import home1 from '../assets/Feature/iOS/home1.png';
import home2 from '../assets/Feature/iOS/home2.png';
import notice1 from '../assets/Feature/iOS/Notice1.png';
import notice2 from '../assets/Feature/iOS/Notice2.png';
import active1 from '../assets/Feature/iOS/active1.png';
import active2 from '../assets/Feature/iOS/active2.png';
import commu1 from '../assets/Feature/iOS/commu1.png';
import commu2 from '../assets/Feature/iOS/commu2.png';
import myPage1 from '../assets/Feature/iOS/myPage1.png';
import myPage2 from '../assets/Feature/iOS/myPage2.png';

// Android Imports
import androidHome1 from '../assets/Feature/Android/home1.png';
import androidHome2 from '../assets/Feature/Android/home2.png';
import androidNotice1 from '../assets/Feature/Android/notice1.png';
import androidNotice2 from '../assets/Feature/Android/notice2.png';
import androidActive1 from '../assets/Feature/Android/active1.png';
import androidActive2 from '../assets/Feature/Android/active2.png';
import androidCommu1 from '../assets/Feature/Android/commu1.png';
import androidCommu2 from '../assets/Feature/Android/commu2.png';
import androidMyPage1 from '../assets/Feature/Android/mypage1.png';
import androidMyPage2 from '../assets/Feature/Android/myapge2.png';

const Section = styled.section`
  padding: 140px 20px;
  background: linear-gradient(180deg, transparent, rgba(124, 77, 255, 0.05), transparent);

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const Tag = styled.span`
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: var(--accent-blue);
  display: block;
  margin-bottom: 16px;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 16px;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    white-space: nowrap;
  }
`;

const Desc = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  word-break: keep-all;
`;

const FeaturesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;

  @media (max-width: 768px) {
    gap: 80px;
  }
`;

const FeatureItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FeatureText = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 24px;
    word-break: keep-all;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 30px;
    line-height: 1.7;
    word-break: keep-all;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    padding-left: 24px;
    margin-bottom: 12px;
    position: relative;
    color: #e0e0e0;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--accent-blue);
      font-weight: bold;
    }
  }
`;

const Subtitle = styled.span`
  font-size: 0.6em;
  color: #aaa;
  font-weight: 400;
  margin-left: 8px;
  vertical-align: middle;
`;

const ResponsiveImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 600px; /* Reduced from 800px for mobile */
  }
`;

const VisualContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    top: -10%;
    left: -10%;
    background: var(--gradient-glow);
    z-index: 0;
    pointer-events: none;
    opacity: 0.6;
  }
`;



// Simple Styled Components for Mockup UI
const QRMock = styled.div`
  width: 200px;
  height: 200px;
  background: white;
  margin: 40px auto;
  border-radius: 12px;
  opacity: 0.9;
`;

const BtnMock = styled.div`
  width: 80%;
  height: 50px;
  background: var(--accent-blue);
  margin: 0 auto;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const ListItemMock = styled.div`
  height: 60px;
  background: #222;
  border-radius: 12px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
  border-left: ${props => props.$warn ? '4px solid #ff5252' : 'none'};
`;

const FeedCardMock = styled.div`
  background: #222;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
`;

const DesignPhilosophy = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 120px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 80px;
  }
`;

const DesignCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.$type === 'ios' ?
    'linear-gradient(90deg, #FF3B30, #FF9500, #FFCC00, #34C759, #007AFF, #5856D6, #AF52DE)' :
    'linear-gradient(90deg, #3DDC84, #4285F4)'};
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const DesignTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
  
  span {
    font-size: 1rem;
    padding: 6px 12px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-secondary);
    white-space: nowrap; /* Prevent text inside badge from wrapping */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const DesignDesc = styled.p`
  font-size: 1.05rem;
  color: #ccc;
  line-height: 1.7;
  margin-bottom: 30px;
  white-space: pre-line;
`;

const KeyPoints = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 16px;
    padding-left: 20px;
    position: relative;
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
    
    strong {
      color: ${props => props.$type === 'ios' ? '#2997FF' : '#3DDC84'};
      display: block;
      margin-bottom: 4px;
    }
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${props => props.$type === 'ios' ? '#2997FF' : '#3DDC84'};
    }
  }
`;

const SegmentControl = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  padding: 6px;
  border-radius: 100px;
  width: fit-content;
  margin: 0 auto 60px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SegmentBtn = styled.button`
  background: ${props => props.$active ? 'var(--accent-blue)' : 'transparent'};
  color: ${props => props.$active ? '#fff' : '#aaa'};
  border: none;
  padding: 10px 0;
  width: 140px;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    color: #fff;
  }
`;

// New styled components for platform-specific mockups
const DualVisualContainer = styled(VisualContainer)`
position: relative;
display: flex;
justify - content: center;
align - items: center;
min - height: 600px; /* Ensure enough space for mockups */
perspective: 1000px;
`;

const PhoneMockup = styled(motion.div)`
background: ${props => props.$type === 'ios' ? '#111' : '#1a1a1a'};
border: 1px solid ${props => props.$type === 'ios' ? '#333' : '#444'};
border - radius: ${props => props.$type === 'ios' ? '30px' : '24px'};
padding: ${props => props.$type === 'ios' ? '20px' : '16px'};
width: 320px;
height: 620px;
position: absolute;
z - index: ${props => props.zIndex || 1};
box - shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
display: flex;
flex - direction: column;
transform - origin: center center;
transform: rotateY(${props => props.styleProps.$rotate || 0}deg);
left: ${props => props.styleProps.$left || 'auto'};
right: ${props => props.styleProps.$right || 'auto'};
position: ${props => props.styleProps.position || 'absolute'};
transition: all 0.5s ease;
  
  &::before {
    content: '${props => props.label}';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #aaa;
    font-size: 0.9rem;
    font-weight: 500;
    opacity: 0.8;
  }
`;

const PhoneHeader = styled.div`
  height: 40px;
  border-bottom: 1px solid ${props => props.$type === 'ios' ? '#2a2a2a' : '#3a3a3a'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: ${props => props.$type === 'ios' ? '#666' : '#888'};
  margin-bottom: 20px;
  font-size: 0.8rem;
`;



const FeatureShowcase = () => {
  const [activePlatform, setActivePlatform] = useState('ios');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeNoticeImageIndex, setActiveNoticeImageIndex] = useState(0);
  const [activeActivityImageIndex, setActiveActivityImageIndex] = useState(0);
  const [activeCommuImageIndex, setActiveCommuImageIndex] = useState(0);
  const [activeMypageImageIndex, setActiveMypageImageIndex] = useState(0);

  // Manual switch only
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveImageIndex(prev => (prev === 0 ? 1 : 0));
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  const [featureViews, setFeatureViews] = useState({
    home: 'A',
    notice: 'A',
    activity: 'A',
    community: 'A',
    mypage: 'A'
  });

  const toggleView = (feature) => {
    setFeatureViews(prev => ({
      ...prev,
      [feature]: prev[feature] === 'A' ? 'B' : 'A'
    }));
  };

  return (
    <Section id="features">
      <Container>
        <SectionHeader>
          <Tag>App Features</Tag>
          <Title>스마트한 동아리 운영의 시작</Title>
          <Desc>iOS와 Android, 각각의 철학을 담아 최적화된 경험을 제공합니다.</Desc>
        </SectionHeader>

        <DesignPhilosophy>
          <DesignCard
            $type="ios"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <DesignTitle>iOS 26 <span>Liquid Glass Paradigm</span></DesignTitle>
            <DesignDesc>
              <strong>'Liquid Glass'</strong><br />
              물리적인 경계를 허물고 마치 실제 액체처럼 부드럽게 흐르는 듯한 경험을 제공합니다.
            </DesignDesc>
            <KeyPoints $type="ios">
              <li>
                <strong>Immersive Transparency</strong>
                배경의 색상과 빛이 상단 요소에 자연스럽게 투사되어 레이어 간의 깊이감을 표현합니다.
              </li>
              <li>
                <strong>Fluid Responsivenes</strong>
                창을 닫거나 전환할 때의 애니메이션은 물리 법칙을 따르며 손끝을 따라 매끄럽게 반응합니다.
              </li>
              <li>
                <strong>Apple Human Interface Guidelines</strong>
                텍스트의 명확성과 콘텐츠를 돋보이게 하는 겸손함을 지킵니다.
              </li>
            </KeyPoints>
          </DesignCard>

          <DesignCard
            $type="android"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <DesignTitle>Android <span>Intuitive</span></DesignTitle>
            <DesignDesc>
              <strong>'Intuitive Approach'</strong><br />
              사용자가 별도의 학습 없이도 기능을 바로 파악할 수 있는 현실 기반의 경험을 제공합니다.
            </DesignDesc>
            <KeyPoints $type="android">
              <li>
                <strong>Real-world Intuition</strong>
                버튼의 그림자와 레이어 등 물리적 특성을 차용하여 상호작용 가능 요소를 본능적으로 인지시킵니다.
              </li>
              <li>
                <strong>Adaptive Design</strong>
                Material You 철학을 기반으로 사용자의 취향과 설정에 맞춰 시스템 테마가 유기적으로 변화합니다.
              </li>
              <li>
                <strong>Accessibility</strong>
                시각적 제약 없이 모두가 평등하게 사용할 수 있도록 설계의 최우선 순위에 둡니다.
              </li>
            </KeyPoints>
          </DesignCard>
        </DesignPhilosophy>

        <SegmentControl>
          <SegmentBtn
            $active={activePlatform === 'ios'}
            onClick={() => setActivePlatform('ios')}
          >
            iOS 26
          </SegmentBtn>
          <SegmentBtn
            $active={activePlatform === 'android'}
            onClick={() => setActivePlatform('android')}
          >
            Android
          </SegmentBtn>
        </SegmentControl>

        <FeaturesGrid>
          {/* Feature 1: Home Tab */}
          <FeatureItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FeatureText>
              <h3><span className="gradient-text">1. 홈 (Home)</span> <Subtitle>- 활동의 중심 허브</Subtitle></h3>
              <p>기수 정보부터 일정, 패널티 현황까지.<br />
                동아리 활동에 필요한 모든 핵심 정보를 가장 직관적인 형태로 제공합니다.</p>
              <List>
                <li>기수 정보 및 남은 기간 표시</li>
                <li>기수별 패널티 현황 집계</li>
                <li>캘린더 및 일정 관리 (Admin)</li>
                <li>최근 공지 및 알림 이력</li>
              </List>
            </FeatureText>

            <DualVisualContainer>
              {activePlatform === 'ios' && (
                <ResponsiveImageContainer>
                  <motion.img
                    src={home1}
                    alt="Home Screen 1"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeImageIndex === 0 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: 50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />
                  <motion.img
                    src={home2}
                    alt="Home Screen 2"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeImageIndex === 1 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: -50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />

                  {/* Visual Swipe Hint */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      zIndex: 20,
                      pointerEvents: 'none',
                      opacity: 0.8
                    }}
                  >
                    <motion.div
                      animate={{ x: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &lt;
                    </motion.div>
                    <div style={{ fontSize: '0.9rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px' }}>SWIPE</div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &gt;
                    </motion.div>
                  </motion.div>
                </ResponsiveImageContainer>
              )}

              {activePlatform === 'android' && (
                <ResponsiveImageContainer>
                  <motion.img
                    src={androidHome1}
                    alt="Android Home Screen 1"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeImageIndex === 0 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: 50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />
                  <motion.img
                    src={androidHome2}
                    alt="Android Home Screen 2"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeImageIndex === 1 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: -50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />

                  {/* Visual Swipe Hint */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      zIndex: 20,
                      pointerEvents: 'none',
                      opacity: 0.8
                    }}
                  >
                    <motion.div
                      animate={{ x: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &lt;
                    </motion.div>
                    <div style={{ fontSize: '0.9rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px' }}>SWIPE</div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &gt;
                    </motion.div>
                  </motion.div>
                </ResponsiveImageContainer>
              )}
            </DualVisualContainer>
          </FeatureItem>

          {/* Feature 2: Notice Tab */}
          <FeatureItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ direction: 'rtl' }}
          >
            <FeatureText style={{ direction: 'ltr' }}>
              <h3><span className="gradient-text">2. 공지 (Notice)</span> <Subtitle>- 체계적인 소식 전달</Subtitle></h3>
              <p>기수부터 파트까지, 원하는 공지만 골라보는 강력한 필터링.<br />
                검색부터 관리자 기능까지 동아리 운영에 최적화된 공지 시스템입니다.</p>
              <List>
                <li>다층 필터 시스템 (기수/타입/파트 등) & 통합 검색</li>
                <li>공지 상세 조회 (내용/투표/대상자) 및 Admin 관리 기능</li>
                <li>공지 작성/수정/삭제 및 투표 생성 (Admin)</li>
              </List>
            </FeatureText>

            <DualVisualContainer style={{ direction: 'ltr' }}>
              {activePlatform === 'ios' && (
                <ResponsiveImageContainer>
                  <motion.img
                    src={notice1}
                    alt="Notice Screen 1"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveNoticeImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeNoticeImageIndex === 0 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: 50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />
                  <motion.img
                    src={notice2}
                    alt="Notice Screen 2"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveNoticeImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeNoticeImageIndex === 1 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: -50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />

                  {/* Visual Swipe Hint */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      zIndex: 20,
                      pointerEvents: 'none',
                      opacity: 0.8
                    }}
                  >
                    <motion.div
                      animate={{ x: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &lt;
                    </motion.div>
                    <div style={{ fontSize: '0.9rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px' }}>SWIPE</div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &gt;
                    </motion.div>
                  </motion.div>
                </ResponsiveImageContainer>
              )}
              {activePlatform === 'android' && (
                <ResponsiveImageContainer>
                  <motion.img
                    src={androidNotice1}
                    alt="Android Notice Screen 1"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveNoticeImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeNoticeImageIndex === 0 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: 50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />
                  <motion.img
                    src={androidNotice2}
                    alt="Android Notice Screen 2"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveNoticeImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeNoticeImageIndex === 1 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: -50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />

                  {/* Visual Swipe Hint */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      zIndex: 20,
                      pointerEvents: 'none',
                      opacity: 0.8
                    }}
                  >
                    <motion.div
                      animate={{ x: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &lt;
                    </motion.div>
                    <div style={{ fontSize: '0.9rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px' }}>SWIPE</div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &gt;
                    </motion.div>
                  </motion.div>
                </ResponsiveImageContainer>
              )}
            </DualVisualContainer>
          </FeatureItem>

          {/* Feature 3: Activity Tab */}
          <FeatureItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FeatureText>
              <h3><span className="gradient-text">3. 활동 (Activity)</span> <Subtitle>- Dual Mode System</Subtitle></h3>
              <p>일반 멤버(Challenger)와 운영진(Admin)에게 각각 최적화된 경험을 제공합니다.<br />
                스마트 출석부터 스터디 관리까지, 역할에 맞는 맞춤형 기능을 경험하세요.</p>
              <List>
                <li>Challenger 모드 (GPS 출석/스터디)</li>
                <li>Admin 모드 (출석 관리/권한 설정)</li>
                <li>지오펜싱 기반 스마트 출석 인증</li>
                <li>커리큘럼 및 미션 카드 관리</li>
              </List>
            </FeatureText>

            <DualVisualContainer>
              {activePlatform === 'ios' && (
                <ResponsiveImageContainer>
                  <motion.img
                    src={active1}
                    alt="Activity Screen 1"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveActivityImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeActivityImageIndex === 0 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: 50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />
                  <motion.img
                    src={active2}
                    alt="Activity Screen 2"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveActivityImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeActivityImageIndex === 1 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: -50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />

                  {/* Visual Swipe Hint */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      zIndex: 20,
                      pointerEvents: 'none',
                      opacity: 0.8
                    }}
                  >
                    <motion.div
                      animate={{ x: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &lt;
                    </motion.div>
                    <div style={{ fontSize: '0.9rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px' }}>SWIPE</div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &gt;
                    </motion.div>
                  </motion.div>
                </ResponsiveImageContainer>
              )}
              {activePlatform === 'android' && (
                <ResponsiveImageContainer>
                  <motion.img
                    src={androidActive1}
                    alt="Android Activity Screen 1"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveActivityImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeActivityImageIndex === 0 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: 50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />
                  <motion.img
                    src={androidActive2}
                    alt="Android Activity Screen 2"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveActivityImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeActivityImageIndex === 1 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: -50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />

                  {/* Visual Swipe Hint */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      zIndex: 20,
                      pointerEvents: 'none',
                      opacity: 0.8
                    }}
                  >
                    <motion.div
                      animate={{ x: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &lt;
                    </motion.div>
                    <div style={{ fontSize: '0.9rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px' }}>SWIPE</div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &gt;
                    </motion.div>
                  </motion.div>
                </ResponsiveImageContainer>
              )}

            </DualVisualContainer>
          </FeatureItem>

          {/* Feature 4: Community Tab */}
          <FeatureItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ direction: 'rtl' }}
          >
            <FeatureText style={{ direction: 'ltr' }}>
              <h3><span className="gradient-text">4. 커뮤니티 (Community)</span> <Subtitle>- 4 Categories</Subtitle></h3>
              <p>소통과 성장을 위한 4가지 핵심 카테고리.<br />
                전체, 질문, 번개모임, 그리고 명예의 전당으로 구성된 체계적인 소통 공간입니다.</p>
              <List>
                <li>게시판: 전체/질문/번개모임</li>
                <li>명예의 전당 (베스트 워크북)</li>
                <li>게시물 작성/수정/삭제 & 검색</li>
                <li>좋아요/댓글 & 파트별 필터링</li>
              </List>
            </FeatureText>

            <DualVisualContainer style={{ direction: 'ltr' }}>
              {activePlatform === 'ios' && (
                <ResponsiveImageContainer>
                  <motion.img
                    src={commu2}
                    alt="Community Screen 1"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveCommuImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeCommuImageIndex === 0 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: 50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />
                  <motion.img
                    src={commu1}
                    alt="Community Screen 2"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveCommuImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeCommuImageIndex === 1 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: -50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />

                  {/* Visual Swipe Hint */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      zIndex: 20,
                      pointerEvents: 'none',
                      opacity: 0.8
                    }}
                  >
                    <motion.div
                      animate={{ x: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &lt;
                    </motion.div>
                    <div style={{ fontSize: '0.9rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px' }}>SWIPE</div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &gt;
                    </motion.div>
                  </motion.div>
                </ResponsiveImageContainer>
              )}
              {activePlatform === 'android' && (
                <ResponsiveImageContainer>
                  <motion.img
                    src={androidCommu1}
                    alt="Android Community Screen 1"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveCommuImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeCommuImageIndex === 0 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: 50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />
                  <motion.img
                    src={androidCommu2}
                    alt="Android Community Screen 2"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveCommuImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeCommuImageIndex === 1 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: -50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />

                  {/* Visual Swipe Hint */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      zIndex: 20,
                      pointerEvents: 'none',
                      opacity: 0.8
                    }}
                  >
                    <motion.div
                      animate={{ x: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &lt;
                    </motion.div>
                    <div style={{ fontSize: '0.9rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px' }}>SWIPE</div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &gt;
                    </motion.div>
                  </motion.div>
                </ResponsiveImageContainer>
              )}
            </DualVisualContainer>
          </FeatureItem>

          {/* Feature 5: MyPage Tab */}
          <FeatureItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FeatureText>
              <h3><span className="gradient-text">5. 마이페이지 (MyPage)</span> <Subtitle>- User Dashboard</Subtitle></h3>
              <p>프로필부터 설정까지, 개인화된 8가지 섹션으로 내 모든 활동을 관리하세요.<br />
                직관적인 리스트 UI로 복잡한 정보도 한눈에 확인할 수 있습니다.</p>
              <List>
                <li><strong>프로필 & 활동 기록</strong>: 외부 링크 관리, 출석·게시글·댓글 활동 내역</li>
                <li><strong>설정 & 지원</strong>: 알림·테마 설정, FAQ·문의, 이용약관</li>
                <li><strong>계정 관리</strong>: SNS 연동, 앱 정보, 로그아웃</li>
              </List>
            </FeatureText>

            <DualVisualContainer>
              {activePlatform === 'ios' && (
                <ResponsiveImageContainer>
                  <motion.img
                    src={myPage1}
                    alt="MyPage Screen 1"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveMypageImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeMypageImageIndex === 0 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: 50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />
                  <motion.img
                    src={myPage2}
                    alt="MyPage Screen 2"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveMypageImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeMypageImageIndex === 1 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: -50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />

                  {/* Visual Swipe Hint */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      zIndex: 20,
                      pointerEvents: 'none',
                      opacity: 0.8
                    }}
                  >
                    <motion.div
                      animate={{ x: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &lt;
                    </motion.div>
                    <div style={{ fontSize: '0.9rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px' }}>SWIPE</div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &gt;
                    </motion.div>
                  </motion.div>
                </ResponsiveImageContainer>
              )}
              {activePlatform === 'android' && (
                <ResponsiveImageContainer>
                  <motion.img
                    src={androidMyPage1}
                    alt="Android MyPage Screen 1"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveMypageImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeMypageImageIndex === 0 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: 50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />
                  <motion.img
                    src={androidMyPage2}
                    alt="Android MyPage Screen 2"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                      if (swipe) setActiveMypageImageIndex(prev => (prev === 0 ? 1 : 0));
                    }}
                    animate={activeMypageImageIndex === 1 ? 'front' : 'back'}
                    variants={{
                      front: { zIndex: 10, scale: 1, x: 0, opacity: 1, filter: 'blur(0px)' },
                      back: { zIndex: 5, scale: 0.85, x: -50, opacity: 0.6, filter: 'blur(2px)' }
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                      width: '280px',
                      height: 'auto',
                      position: 'absolute',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                  />

                  {/* Visual Swipe Hint */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      zIndex: 20,
                      pointerEvents: 'none',
                      opacity: 0.8
                    }}
                  >
                    <motion.div
                      animate={{ x: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &lt;
                    </motion.div>
                    <div style={{ fontSize: '0.9rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px' }}>SWIPE</div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                    >
                      &gt;
                    </motion.div>
                  </motion.div>
                </ResponsiveImageContainer>
              )}
            </DualVisualContainer>
          </FeatureItem>
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default FeatureShowcase;
