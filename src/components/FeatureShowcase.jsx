import React from 'react';
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

const MockupFrame = styled.div`
  background: #111;
  border: 1px solid #333;
  border-radius: 30px;
  padding: 20px;
  width: 320px;
  height: 620px;
  position: relative;
  z-index: 1;
  box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
`;

const MockupHeader = styled.div`
  height: 40px;
  border-bottom: 1px solid #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #666;
  margin-bottom: 20px;
  font-size: 0.8rem;
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

const FeatureShowcase = () => {
  return (
    <Section id="features">
      <Container>
        <SectionHeader>
          <Tag>App Features</Tag>
          <Title>스마트한 동아리 운영의 시작</Title>
          <Desc>복잡한 절차 없이, 앱 하나로 모든 것이 연결됩니다.</Desc>
        </SectionHeader>

        <FeaturesGrid>
          {/* Feature 1 */}
          <FeatureItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FeatureText>
              <h3><span className="gradient-text">1. QR 출석 체크</span></h3>
              <p>운영진이 생성한 QR 코드를 찍기만 하세요.<br />단 3초면 출석이 완료됩니다.</p>
              <List>
                <li>위치 기반 부정 출석 방지</li>
                <li>실시간 출석 현황 대시보드</li>
              </List>
            </FeatureText>
            <VisualContainer>
              <MockupFrame>
                <MockupHeader>Attendance</MockupHeader>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <QRMock />
                  <BtnMock>출석하기</BtnMock>
                </div>
              </MockupFrame>
            </VisualContainer>
          </FeatureItem>

          {/* Feature 2 */}
          <FeatureItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ direction: 'rtl' }}
          >
            <FeatureText style={{ direction: 'ltr' }}>
              <h3><span className="gradient-text">2. 모바일 어드민</span></h3>
              <p>노트북 파우치는 두고 다니세요.<br />스마트폰으로 모든 관리 업무가 가능합니다.</p>
              <List>
                <li>미출석자 일괄 경고 발송</li>
                <li>공지사항 작성 및 푸시 알림</li>
              </List>
            </FeatureText>
            <VisualContainer style={{ direction: 'ltr' }}>
              <MockupFrame>
                <MockupHeader>Admin Mode</MockupHeader>
                {/* Use transient prop $warn to prevent React console warning */}
                <ListItemMock $warn>
                  <span style={{ fontSize: '0.8rem' }}>김철수 (3회 경고)</span>
                  <div style={{ width: 40, height: 20, background: '#444', borderRadius: 4 }}></div>
                </ListItemMock>
                <ListItemMock>
                  <span style={{ fontSize: '0.8rem' }}>이영희 (정상)</span>
                  <div style={{ width: 40, height: 20, background: '#444', borderRadius: 4 }}></div>
                </ListItemMock>
                <div style={{ position: 'absolute', bottom: 30, right: 30, width: 50, height: 50, borderRadius: '50%', background: 'linear-gradient(135deg, #7c4dff 0%, #448aff 100%)', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}></div>
              </MockupFrame>
            </VisualContainer>
          </FeatureItem>

          {/* Feature 3 */}
          <FeatureItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FeatureText>
              <h3><span className="gradient-text">3. 연합 커뮤니티</span></h3>
              <p>우리 지부뿐만 아니라,<br />다른 학교 친구들의 활동도 구경해보세요.</p>
              <List>
                <li>전 지부 통합 게시판</li>
                <li>스터디/프로젝트 팀원 모집</li>
              </List>
            </FeatureText>
            <VisualContainer>
              <MockupFrame>
                <MockupHeader>Community</MockupHeader>
                <FeedCardMock>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#444' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ width: '60%', height: 10, background: '#333', borderRadius: 4, marginBottom: 8 }}></div>
                    <div style={{ width: '90%', height: 10, background: '#333', borderRadius: 4 }}></div>
                  </div>
                </FeedCardMock>
                <FeedCardMock>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#444' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ width: '50%', height: 10, background: '#333', borderRadius: 4, marginBottom: 8 }}></div>
                    <div style={{ width: '80%', height: 10, background: '#333', borderRadius: 4 }}></div>
                  </div>
                </FeedCardMock>
              </MockupFrame>
            </VisualContainer>
          </FeatureItem>
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default FeatureShowcase;
