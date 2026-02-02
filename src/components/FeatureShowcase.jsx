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
    font-size: 2.2rem;
    margin-bottom: 24px;
    word-break: keep-all;

    @media (max-width: 768px) {
      font-size: 1.8rem;
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
              <h3><span className="gradient-text">1. 홈 (Home)</span> - 활동의 중심 허브</h3>
              <p>동아리 활동의 모든 정보를 한눈에 확인하세요.<br />
                누적 활동일수부터 오늘 세션, 경고 현황, 공지까지 모든 중요 정보를 메인에서 놓치지 않도록 제공합니다.</p>
              <List>
                <li>시즌 정보 카드 & 세대별 경고 현황 관리</li>
                <li>인터랙티브 캘린더 & 일정 상세보기</li>
                <li>최근 공지사항 퀵뷰 & 알림 히스토리</li>
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
                  appTitle="홈"
                >
                  <PhoneHeader $type="ios">Home</PhoneHeader>
                  <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ background: '#222', borderRadius: '16px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: '0.8rem', color: '#888' }}>이번 시즌 활동일수</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>D+42</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div style={{ background: '#1c1c1e', borderRadius: '12px', height: '80px', padding: '12px', border: '1px solid #333' }}>
                        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#ff3b30', marginBottom: '8px' }}></div>
                        <div style={{ fontSize: '0.7rem', color: '#aaa' }}>Next Session</div>
                      </div>
                      <div style={{ background: '#1c1c1e', borderRadius: '12px', height: '80px', padding: '12px', border: '1px solid #333' }}>
                        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#34c759', marginBottom: '8px' }}></div>
                        <div style={{ fontSize: '0.7rem', color: '#aaa' }}>My Status</div>
                      </div>
                    </div>
                    <div style={{ background: '#2c2c2e', borderRadius: '16px', padding: '16px' }}>
                      <div style={{ fontSize: '0.9rem', marginBottom: '10px', color: '#fff' }}>최근 공지</div>
                      <ListItemMock style={{ height: '40px', background: 'transparent', borderBottom: '1px solid #3a3a3a', borderRadius: 0, padding: 0 }}>
                        <span style={{ fontSize: '0.75rem', color: '#ccc' }}>[필독] 3주차 세션 안내</span>
                      </ListItemMock>
                      <ListItemMock style={{ height: '40px', background: 'transparent', borderRadius: 0, padding: 0 }}>
                        <span style={{ fontSize: '0.75rem', color: '#888' }}>회비 납부 안내</span>
                      </ListItemMock>
                    </div>
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
                  appTitle="홈"
                >
                  <PhoneHeader $type="android">Home</PhoneHeader>
                  <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ background: '#2d3135', borderRadius: '24px', padding: '20px' }}>
                      <div style={{ fontSize: '0.9rem', color: '#3ddc84', marginBottom: '4px' }}>Activity Days</div>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>42</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', padding: '10px', background: '#1e1e1e', borderRadius: '16px' }}>
                      {[...Array(7)].map((_, i) => (
                        <div key={i} style={{ aspectRatio: '1', borderRadius: '50%', background: i === 3 ? '#3ddc84' : '#333' }}></div>
                      ))}
                    </div>
                    <FeedCardMock style={{ background: '#1e1e1e', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ fontSize: '0.8rem', color: '#aaa' }}>UPCOMING</div>
                      <div style={{ fontSize: '1rem', color: '#fff', fontWeight: 'bold' }}>Server Deployment</div>
                      <div style={{ fontSize: '0.8rem', color: '#666' }}>Sat, 14:00 PM</div>
                    </FeedCardMock>
                  </div>
                </PhoneMockup>
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
              <h3><span className="gradient-text">2. 공지 (Notice)</span> - The Ping</h3>
              <p>중요한 정보를 놓치지 않는 혁신, The Ping.<br />
                디스코드와 노션에 흩어진 공지를 한곳에서 확인하고, 공지 수신 확인 시스템으로 누가 읽었는지 실시간으로 추적합니다.</p>
              <List>
                <li>세대/파트/카테고리 다중 필터 & 전체 검색</li>
                <li>공지 수신 확인 추적 (The Ping) & 투표 시스템</li>
                <li>사진과 링크가 포함된 멀티미디어 공지 에디터</li>
              </List>
            </FeatureText>

            <DualVisualContainer style={{ direction: 'ltr' }}>
              {activePlatform === 'ios' && (
                <PhoneMockup
                  key="ios"
                  type="ios"
                  label="iOS"
                  zIndex={10}
                  styleProps={{ $left: 'auto', $right: 'auto', $rotate: 0, position: 'relative' }}
                  appTitle="공지"
                >
                  <PhoneHeader $type="ios">The Ping</PhoneHeader>
                  <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
                      <div style={{ padding: '6px 14px', borderRadius: '20px', background: '#333', color: '#fff', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>전체</div>
                      <div style={{ padding: '6px 14px', borderRadius: '20px', background: 'var(--accent-blue)', color: '#fff', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>필독</div>
                      <div style={{ padding: '6px 14px', borderRadius: '20px', background: '#333', color: '#aaa', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>일반</div>
                    </div>
                    <FeedCardMock style={{ alignItems: 'flex-start' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#ff3b30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>!</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.9rem', marginBottom: '4px', color: '#fff' }}>[긴급] 서버 점검 안내</div>
                        <div style={{ fontSize: '0.75rem', color: '#aaa' }}>2024.03.15 14:00</div>
                        <div style={{ marginTop: '8px', fontSize: '0.7rem', color: '#34c759' }}>✓ 128명 읽음</div>
                      </div>
                    </FeedCardMock>
                    <FeedCardMock>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.9rem', marginBottom: '4px', color: '#fff' }}>3월 정기 세션 자료</div>
                        <div style={{ width: '100%', height: '80px', background: '#333', borderRadius: '8px', marginTop: '8px' }}></div>
                      </div>
                    </FeedCardMock>
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
                  appTitle="공지"
                >
                  <PhoneHeader $type="android">Notices</PhoneHeader>
                  <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ position: 'relative' }}>
                      <div style={{ height: '40px', background: '#222', borderRadius: '20px', display: 'flex', alignItems: 'center', padding: '0 16px', color: '#aaa', fontSize: '0.9rem' }}>Search notices...</div>
                    </div>
                    <ListItemMock style={{ flexDirection: 'column', alignItems: 'flex-start', height: 'auto', padding: '16px', gap: '8px' }}>
                      <div style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(61, 220, 132, 0.2)', color: '#3ddc84', fontSize: '0.7rem', width: 'fit-content' }}>MUST READ</div>
                      <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>Session Schedule Change</div>
                      <div style={{ width: '100%', height: '4px', background: '#333', borderRadius: '2px', marginTop: '4px' }}>
                        <div style={{ width: '80%', height: '100%', background: '#3ddc84', borderRadius: '2px' }}></div>
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#aaa', alignSelf: 'flex-end' }}>80% Read</div>
                    </ListItemMock>
                    <ListItemMock style={{ height: 'auto', padding: '16px' }}>
                      <div style={{ fontSize: '0.9rem' }}>General Inquiry</div>
                      <div style={{ fontSize: '0.7rem', color: '#aaa' }}>Yesterday</div>
                    </ListItemMock>
                  </div>
                </PhoneMockup>
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
              <h3><span className="gradient-text">3. 활동 (Activity)</span> - Dual Mode</h3>
              <p>챌린저와 운영진, 두 가지 모드로 완벽한 활동 관리를 지원합니다.<br />
                지오펜싱 기반 스마트 출석부터 커리큘럼, 미션 관리까지 하나의 앱에서 해결하세요.</p>
              <List>
                <li>GPS 기반 스마트 출석 & 지오펜싱(Geofencing)</li>
                <li>커리큘럼 진행도 & 주차별 미션 카드</li>
                <li>Admin 모드: 출석 관리, 스터디 생성, 멤버 관리</li>
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
                  appTitle="활동"
                >
                  <PhoneHeader $type="ios">Activity</PhoneHeader>
                  <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%', justifyContent: 'center' }}>
                    <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'conic-gradient(var(--accent-blue) 0% 75%, #333 75% 100%)', margin: '0 auto', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '130px', height: '130px', borderRadius: '50%', background: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>75%</span>
                        <span style={{ fontSize: '0.7rem', color: '#888' }}>Attendance</span>
                      </div>
                    </div>
                    <BtnMock style={{ marginTop: '20px' }}>GPS 출석하기</BtnMock>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', fontSize: '0.8rem', color: '#666' }}>
                      <span>📍 Location Verified</span>
                    </div>
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
                  appTitle="활동"
                >
                  <PhoneHeader $type="android">Activity</PhoneHeader>
                  <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ background: '#2d3135', borderRadius: '16px', padding: '6px', display: 'flex', marginBottom: '10px' }}>
                      <div style={{ flex: 1, padding: '8px', textAlign: 'center', background: '#3ddc84', color: '#000', borderRadius: '12px', fontWeight: 'bold' }}>Challenger</div>
                      <div style={{ flex: 1, padding: '8px', textAlign: 'center', color: '#aaa' }}>Admin</div>
                    </div>
                    <ListItemMock style={{ background: '#1e1e1e', justifyContent: 'flex-start', gap: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📚</div>
                      <div>
                        <div style={{ fontSize: '0.9rem' }}>Mission 03</div>
                        <div style={{ fontSize: '0.7rem', color: '#3ddc84' }}>Completed</div>
                      </div>
                    </ListItemMock>
                    <ListItemMock style={{ background: '#1e1e1e', justifyContent: 'flex-start', gap: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📍</div>
                      <div>
                        <div style={{ fontSize: '0.9rem' }}>Geofence Setup</div>
                        <div style={{ fontSize: '0.7rem', color: '#aaa' }}>Admin Only</div>
                      </div>
                    </ListItemMock>
                  </div>
                </PhoneMockup>
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
              <h3><span className="gradient-text">4. 커뮤니티 (Community)</span> - 4 Categories</h3>
              <p>질문하고, 모이고, 인정받는 공간.<br />
                전체, 질문, 번개모임, 명예의전당 4가지 카테고리로 체계화된 소통을 경험하세요.</p>
              <List>
                <li>4-카테고리 메뉴: 전체 / 질문 / 번개모임 / 명예의전당</li>
                <li>게시글 작성, 상세 조회 및 댓글 시스템</li>
                <li>우수 활동자를 위한 '명예의전당 (Hall of Fame)'</li>
              </List>
            </FeatureText>

            <DualVisualContainer style={{ direction: 'ltr' }}>
              {activePlatform === 'ios' && (
                <PhoneMockup
                  key="ios"
                  type="ios"
                  label="iOS"
                  zIndex={10}
                  styleProps={{ $left: 'auto', $right: 'auto', $rotate: 0, position: 'relative' }}
                  appTitle="커뮤니티"
                >
                  <PhoneHeader $type="ios">Community</PhoneHeader>
                  <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                      <div style={{ background: '#222', borderRadius: '12px', padding: '16px', textAlign: 'center', fontSize: '0.8rem' }}>🔥 번개모임</div>
                      <div style={{ background: '#222', borderRadius: '12px', padding: '16px', textAlign: 'center', fontSize: '0.8rem', color: '#ffd700' }}>🏆 명예의전당</div>
                    </div>
                    <FeedCardMock>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#444' }}></div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.9rem', marginBottom: '4px', fontWeight: '600' }}>React 상태관리 질문입니다!</div>
                        <div style={{ fontSize: '0.8rem', color: '#ccc', lineHeight: '1.4' }}>Recoil vs Redux 어떤걸 쓰는게 좋을까요? 프로젝트...</div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '8px', fontSize: '0.7rem', color: '#888' }}>
                          <span>💬 5</span>
                          <span>❤️ 12</span>
                        </div>
                      </div>
                    </FeedCardMock>
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
                  appTitle="커뮤니티"
                >
                  <PhoneHeader $type="android">Community</PhoneHeader>
                  <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', paddingBottom: '10px', borderBottom: '1px solid #333' }}>
                      <div style={{ color: '#fff', fontWeight: 'bold', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>All</div>
                      <div style={{ color: '#888' }}>Q&A</div>
                      <div style={{ color: '#888' }}>Meetup</div>
                    </div>
                    <FeedCardMock style={{ background: '#1e1e1e' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.8rem', color: '#3ddc84', marginBottom: '4px' }}>Q&A</div>
                        <div style={{ fontSize: '1rem', marginBottom: '4px' }}>Deployment Issue</div>
                        <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Getting 502 error on nginx...</div>
                      </div>
                    </FeedCardMock>
                    <FeedCardMock style={{ background: '#1e1e1e' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.8rem', color: '#ffab00', marginBottom: '4px' }}>HALL OF FAME</div>
                        <div style={{ fontSize: '1rem', marginBottom: '4px' }}>Best Contributor</div>
                        <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Congratulations to Team A!</div>
                      </div>
                    </FeedCardMock>
                  </div>
                </PhoneMockup>
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
              <h3><span className="gradient-text">5. 마이페이지 (MyPage)</span> - Personal Dashboard</h3>
              <p>내 활동을 관리하는 완벽한 개인 대시보드.<br />
                프로필 설정부터 활동 로그, 소셜 계정 연동까지 8개 섹션으로 구조화된 개인 공간을 제공합니다.</p>
              <List>
                <li>GitHub, LinkedIn, Blog 등 외부 링크 연동</li>
                <li>작성한 글, 댓글, 북마크 등 내 활동 히스토리</li>
                <li>설정, 지원, 법률 정보 및 소셜 로그인 관리</li>
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
                  appTitle="마이페이지"
                >
                  <PhoneHeader $type="ios">My Information</PhoneHeader>
                  <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '10px' }}>
                      <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#333' }}></div>
                      <div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Kim UMC</div>
                        <div style={{ fontSize: '0.8rem', color: '#888' }}>Backend Developer</div>
                      </div>
                    </div>
                    <div style={{ background: '#222', borderRadius: '12px', overflow: 'hidden' }}>
                      <ListItemMock style={{ background: 'transparent', height: '50px', borderBottom: '1px solid #333', marginBottom: 0, borderRadius: 0 }}>
                        <span style={{ fontSize: '0.9rem' }}>My Activity</span>
                        <span style={{ color: '#666' }}>›</span>
                      </ListItemMock>
                      <ListItemMock style={{ background: 'transparent', height: '50px', borderBottom: '1px solid #333', marginBottom: 0, borderRadius: 0 }}>
                        <span style={{ fontSize: '0.9rem' }}>Linked Accounts</span>
                        <span style={{ color: '#666' }}>›</span>
                      </ListItemMock>
                      <ListItemMock style={{ background: 'transparent', height: '50px', marginBottom: 0, borderRadius: 0 }}>
                        <span style={{ fontSize: '0.9rem' }}>Settings</span>
                        <span style={{ color: '#666' }}>›</span>
                      </ListItemMock>
                    </div>
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
                  appTitle="마이페이지"
                >
                  <PhoneHeader $type="android">My Page</PhoneHeader>
                  <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                      <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#333', margin: '0 auto 16px' }}></div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '4px' }}>Lee Server</div>
                      <div style={{ fontSize: '0.9rem', color: '#aaa' }}>Server / Node.js</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                      <div style={{ background: '#2d3135', borderRadius: '16px', padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>12</div>
                        <div style={{ fontSize: '0.7rem', color: '#aaa' }}>Posts</div>
                      </div>
                      <div style={{ background: '#2d3135', borderRadius: '16px', padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>5</div>
                        <div style={{ fontSize: '0.7rem', color: '#aaa' }}>Badges</div>
                      </div>
                      <div style={{ background: '#2d3135', borderRadius: '16px', padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>850</div>
                        <div style={{ fontSize: '0.7rem', color: '#aaa' }}>Points</div>
                      </div>
                    </div>
                  </div>
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
