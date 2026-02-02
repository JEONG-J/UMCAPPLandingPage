import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 140px 20px;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
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
  word-break: keep-all;

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
  word-break: keep-all;

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
            동아리 운영의 <br />
            비효율을 해결했습니다
          </Title>
          <Desc initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            분산된 도구, 누락되는 공지, 수동 출석 체크...<br />
            성장을 방해하는 운영의 문제점들을 발견했습니다.
          </Desc>
        </Header>

        <BubblesContainer>
          <LeftBubble
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Icon>🤯</Icon>
            <p>"디스코드(공지), 구글시트(출석), 노션(문서)... 도구가 너무 분산되어 있어요."</p>
          </LeftBubble>
          <RightBubble
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Icon>📢</Icon>
            <p>"중요한 공지가 채팅에 묻혀서 내용을 놓쳤어요. 확인 여부도 알 수 없고요."</p>
          </RightBubble>
          <LeftBubble
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Icon>📝</Icon>
            <p>"매번 수동으로 출석 체크하다 보니 실수도 잦고 시간도 오래 걸려요."</p>
          </LeftBubble>
          <RightBubble
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Icon>💻</Icon>
            <p>"외부에서 급하게 처리해야 하는데 PC가 없어서 아무것도 못했어요."</p>
          </RightBubble>
        </BubblesContainer>

        <InsightsBox
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <InsightsBadge>Our Solution</InsightsBadge>
          <InsightItem style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'white' }}>
            <strong>하나의 모바일 앱</strong>으로 모든 운영 도구를 통합하여
          </InsightItem>
          <InsightItem style={{ fontSize: '1.5rem', color: 'var(--accent-fire)' }}>
            효율성을 극대화합니다.
          </InsightItem>
        </InsightsBox>
      </Container>
    </Section>
  );
};

export default ProblemSection;
