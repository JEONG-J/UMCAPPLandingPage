import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
    font-size: 2.2rem;
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
    font-size: 2.2rem;
    margin-bottom: 24px;
  }
  
  p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 30px;
    line-height: 1.7;
    word-break: keep-all;
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
  justify-content: center;
  align-items: center;
  min-height: 600px; /* Ensure enough space for mockups */
  perspective: 1000px;
`;

const PhoneMockup = styled(motion.div)`
  background: ${props => props.$type === 'ios' ? '#111' : '#1a1a1a'};
  border: 1px solid ${props => props.$type === 'ios' ? '#333' : '#444'};
  border-radius: ${props => props.$type === 'ios' ? '30px' : '24px'};
  padding: ${props => props.$type === 'ios' ? '20px' : '16px'};
  width: 320px;
  height: 620px;
  position: absolute;
  z-index: ${props => props.zIndex || 1};
  box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  transform-origin: center center;
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
          {/* Feature 1: QR Attendance */}
          <FeatureItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FeatureText>
              <h3><span className="gradient-text">1. The Ping</span> - 공지 수신 확인</h3>
              <p>누가 공지를 읽었는지 실시간으로 확인하세요.<br />중요한 내용이 묻히지 않도록 보장합니다.</p>
              <List>
                <li>투표 및 확인 상태 실시간 추적</li>
                <li>대상별 필터링 (기수/파트/학교별)</li>
              </List>
            </FeatureText>

            <DualVisualContainer>
              {activePlatform === 'ios' && (
                <PhoneMockup
                  key="ios"
                  type="ios"
                  label="iOS"
                  zIndex={10}
                  styleProps={{ $left: 'auto', $right: 'auto', $rotate: 0, position: 'relative' }}
                  appTitle="출석 체크"
                >
                  <PhoneHeader $type="ios">Attendance</PhoneHeader>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <QRMock>QR Code</QRMock>
                    <BtnMock>출석하기</BtnMock>
                  </div>
                </PhoneMockup>
              )}

              {activePlatform === 'android' && (
                <PhoneMockup
                  key="android"
                  type="android"
                  label="Android"
                  zIndex={10}
                  styleProps={{ $left: 'auto', $right: 'auto', $rotate: 0, position: 'relative' }}
                  appTitle="출석 체크"
                >
                  <PhoneHeader $type="android">Attendance</PhoneHeader>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <QRMock>QR Code</QRMock>
                    <BtnMock style={{ background: '#00C853' }}>출석 확인</BtnMock>
                  </div>
                </PhoneMockup>
              )}
            </DualVisualContainer>
          </FeatureItem>

          {/* Feature 2: Mobile Admin */}
          <FeatureItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ direction: 'rtl' }}
          >
            <FeatureText style={{ direction: 'ltr' }}>
              <h3><span className="gradient-text">2. GPS 기반 스마트 출석</span></h3>
              <p>QR보다 빠르고 정확합니다.<br />지정된 장소에서 자동으로 출석을 인증하세요.</p>
              <List>
                <li>Geofence 기술로 위치 기반 자동 체크</li>
                <li>시간 윈도우 자동 체크 (정시/지각/결석)</li>
              </List>
            </FeatureText>

            <DualVisualContainer style={{ direction: 'ltr' }}>
              {activePlatform === 'android' && (
                <PhoneMockup
                  key="android"
                  type="android"
                  label="Android"
                  zIndex={10}
                  styleProps={{ $left: 'auto', $right: 'auto', $rotate: 0, position: 'relative' }}
                  appTitle="관리자 모드"
                >
                  <PhoneHeader $type="android">Admin Mode</PhoneHeader>
                  <ListItemMock $warn>
                    <span style={{ fontSize: '0.75rem' }}>김철수 (3회 경고)</span>
                    <div style={{ width: 30, height: 16, background: '#444', borderRadius: 4 }}></div>
                  </ListItemMock>
                  <ListItemMock>
                    <span style={{ fontSize: '0.75rem' }}>이영희 (정상)</span>
                    <div style={{ width: 30, height: 16, background: '#444', borderRadius: 4 }}></div>
                  </ListItemMock>
                  <div style={{ marginTop: 'auto', marginBottom: 20, alignSelf: 'flex-end', width: 40, height: 40, borderRadius: '50%', background: '#00C853', boxShadow: '0 4px 8px rgba(0,0,0,0.3)' }}></div>
                </PhoneMockup>
              )}

              {activePlatform === 'ios' && (
                <PhoneMockup
                  key="ios"
                  type="ios"
                  label="iOS"
                  zIndex={10}
                  styleProps={{ $left: 'auto', $right: 'auto', $rotate: 0, position: 'relative' }}
                  appTitle="Admin"
                >
                  <PhoneHeader $type="ios">Admin Mode</PhoneHeader>
                  <ListItemMock $warn>
                    <span style={{ fontSize: '0.75rem' }}>Warning List</span>
                    <div style={{ width: 30, height: 16, background: '#ff5252', borderRadius: 4 }}></div>
                  </ListItemMock>
                  <ListItemMock>
                    <span style={{ fontSize: '0.75rem' }}>Regular List</span>
                    <div style={{ width: 30, height: 16, background: '#444', borderRadius: 4 }}></div>
                  </ListItemMock>
                  <div style={{ marginTop: 'auto', marginBottom: 20, alignSelf: 'flex-end', width: 40, height: 40, borderRadius: '50%', background: 'var(--accent-blue)', boxShadow: '0 4px 8px rgba(0,0,0,0.3)' }}></div>
                </PhoneMockup>
              )}
            </DualVisualContainer>
          </FeatureItem>

          {/* Feature 3: Community */}
          <FeatureItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FeatureText>
              <h3><span className="gradient-text">3. Mobile-First Admin</span></h3>
              <p>PC 없이도 완벽한 운영이 가능합니다.<br />언제 어디서나 동아리를 관리하세요.</p>
              <List>
                <li>모바일에서 바로 멤버 및 일정 관리</li>
                <li>실시간 알림으로 이슈 즉각 대응</li>
              </List>
            </FeatureText>

            <DualVisualContainer>
              {activePlatform === 'ios' && (
                <PhoneMockup
                  key="ios"
                  type="ios"
                  label="iOS"
                  zIndex={10}
                  styleProps={{ $left: 'auto', $right: 'auto', $rotate: 0, position: 'relative' }}
                  appTitle="Community"
                >
                  <PhoneHeader $type="ios">Community</PhoneHeader>
                  <FeedCardMock>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#444' }}></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ width: '60%', height: 8, background: '#333', borderRadius: 4, marginBottom: 6 }}></div>
                      <div style={{ width: '90%', height: 8, background: '#333', borderRadius: 4 }}></div>
                    </div>
                  </FeedCardMock>
                  <FeedCardMock>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#444' }}></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ width: '50%', height: 8, background: '#333', borderRadius: 4, marginBottom: 6 }}></div>
                      <div style={{ width: '80%', height: 8, background: '#333', borderRadius: 4 }}></div>
                    </div>
                  </FeedCardMock>
                </PhoneMockup>
              )}

              {activePlatform === 'android' && (
                <PhoneMockup
                  key="android"
                  type="android"
                  label="Android"
                  zIndex={10}
                  styleProps={{ $left: 'auto', $right: 'auto', $rotate: 0, position: 'relative' }}
                  appTitle="커뮤니티"
                >
                  <PhoneHeader $type="android">Community</PhoneHeader>
                  <FeedCardMock>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#444' }}></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ width: '70%', height: 8, background: '#333', borderRadius: 4, marginBottom: 6 }}></div>
                      <div style={{ width: '90%', height: 8, background: '#333', borderRadius: 4 }}></div>
                    </div>
                  </FeedCardMock>
                  <FeedCardMock>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#444' }}></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ width: '40%', height: 8, background: '#333', borderRadius: 4, marginBottom: 6 }}></div>
                      <div style={{ width: '100%', height: 8, background: '#333', borderRadius: 4 }}></div>
                    </div>
                  </FeedCardMock>
                </PhoneMockup>
              )}
            </DualVisualContainer>
          </FeatureItem>
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default FeatureShowcase;
