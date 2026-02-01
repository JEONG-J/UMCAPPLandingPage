import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 140px 20px;
  position: relative;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Tag = styled(motion.span)`
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: var(--accent-blue);
  display: block;
  margin-bottom: 16px;
  font-weight: 700;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Desc = styled(motion.p)`
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const BubblesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
`;

const Bubble = styled(motion.div)`
  max-width: 70%;
  padding: 18px 28px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1.1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  position: relative;

  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 1rem;
  }
`;

const LeftBubble = styled(Bubble)`
  align-self: flex-start;
  background: #1a1a1a;
  border-bottom-left-radius: 4px;
  color: #eee;
  border: 1px solid rgba(255,255,255,0.08);
`;

const RightBubble = styled(Bubble)`
  align-self: flex-end;
  background: rgba(68, 138, 255, 0.1);
  border-bottom-right-radius: 4px;
  color: #ffffff;
  border: 1px solid rgba(68, 138, 255, 0.2);
`;

const Icon = styled.span`
  font-size: 1.8rem;
`;

const InsightsBox = styled(motion.div)`
  background: rgba(255, 82, 82, 0.05);
  border: 2px solid var(--accent-fire);
  border-radius: 24px;
  padding: 40px;
  position: relative;
  text-align: center;
  margin-top: 40px;
`;

const InsightsBadge = styled.div`
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  background: #050505;
  color: var(--accent-fire);
  padding: 6px 24px;
  border-radius: 100px;
  border: 2px solid var(--accent-fire);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const InsightItem = styled(motion.h3)`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 1.25rem;
  color: #ddd;

  strong {
    color: var(--accent-fire);
    font-weight: 700;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProblemSection = () => {
    return (
        <Section id="problems">
            <Container>
                <Header>
                    <Tag initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        User Research
                    </Tag>
                    <Title initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                        UMC 부원들의 <br />
                        목소리를 직접 들었습니다
                    </Title>
                    <Desc initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        기존 동아리 운영의 불편함, 무엇이 문제였을까요?
                    </Desc>
                </Header>

                <BubblesContainer>
                    <LeftBubble
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Icon>😢</Icon>
                        <p>"디스코드 공지가 다른 잡담에 묻혀서 중요한 내용을 놓쳤어요."</p>
                    </LeftBubble>
                    <RightBubble
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Icon>😤</Icon>
                        <p>"매번 노션 페이지 들어가서 내 출석 확인하기 너무 귀찮아요!"</p>
                    </RightBubble>
                    <LeftBubble
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Icon>🤔</Icon>
                        <p>"우리 지부 말고 다른 학교 사람들은 뭘 하는지 전혀 모르겠어요."</p>
                    </LeftBubble>
                    <RightBubble
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Icon>🤯</Icon>
                        <p>"엑셀로 출석부 정리하다가 눈 빠질 뻔... 자동화가 시급해요."</p>
                    </RightBubble>
                </BubblesContainer>

                <InsightsBox
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <InsightsBadge>Insights</InsightsBadge>
                    <InsightItem>
                        1. 분산된 도구(Discord, Notion)로 인한 <strong>정보 피로도</strong>
                    </InsightItem>
                    <InsightItem>
                        2. 폐쇄적인 환경으로 인한 <strong>네트워킹 갈증</strong>
                    </InsightItem>
                    <InsightItem>
                        3. 수기 관리의 비효율과 <strong>모바일 경험 부재</strong>
                    </InsightItem>
                </InsightsBox>
            </Container>
        </Section>
    );
};

export default ProblemSection;
