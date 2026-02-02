import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 140px 20px;
  background: linear-gradient(180deg, #111 0%, #050505 100%);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const Tag = styled.span`
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: #888;
  display: block;
  margin-bottom: 16px;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 16px;
  word-break: keep-all;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ComparisonContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ComparisonCol = styled(motion.div)`
  flex: 1;
  background: ${props => props.isAfter ? 'rgba(68, 138, 255, 0.05)' : 'rgba(255, 82, 82, 0.05)'};
  border: 1px solid ${props => props.isAfter ? 'rgba(68, 138, 255, 0.2)' : 'rgba(255, 82, 82, 0.2)'};
  border-radius: 24px;
  padding: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '${props => props.label}';
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 3rem;
    font-weight: 900;
    opacity: 0.05;
    color: ${props => props.isAfter ? 'var(--accent-blue)' : 'var(--accent-fire)'};
    text-transform: uppercase;
  }
`;

const ColHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: ${props => props.isAfter ? 'var(--accent-blue)' : 'var(--accent-fire)'};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.1rem;
  color: #ccc;
  
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.isAfter ? 'var(--accent-blue)' : 'var(--accent-fire)'};
    flex-shrink: 0;
  }
`;

const GoalSection = () => {
  return (
    <Section id="comparison">
      <Container>
        <SectionHeader>
          <Tag>Impact</Tag>
          <Title>당신의 동아리도<br />바뀔 수 있습니다</Title>
        </SectionHeader>

        <ComparisonContainer>
          {/* Before Column */}
          <ComparisonCol
            isAfter={false}
            label="Before"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ColHeader isAfter={false}>Before UMC App</ColHeader>
            <List>
              <ListItem isAfter={false}><div className="dot" /> 5개 이상의 플랫폼 왔다 갔다</ListItem>
              <ListItem isAfter={false}><div className="dot" /> 공지 누락으로 인한 혼란</ListItem>
              <ListItem isAfter={false}><div className="dot" /> 수동 출석 체크의 불편함</ListItem>
              <ListItem isAfter={false}><div className="dot" /> 운영진의 번아웃</ListItem>
              <ListItem isAfter={false}><div className="dot" /> 챌린저의 낮은 참여도</ListItem>
            </List>
          </ComparisonCol>

          {/* After Column */}
          <ComparisonCol
            isAfter={true}
            label="After"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ColHeader isAfter={true}>After UMC App</ColHeader>
            <List>
              <ListItem isAfter={true}><div className="dot" /> 하나의 앱으로 모든 것 해결</ListItem>
              <ListItem isAfter={true}><div className="dot" /> 100% 확인 가능한 공지 시스템</ListItem>
              <ListItem isAfter={true}><div className="dot" /> 자동화된 스마트 출석</ListItem>
              <ListItem isAfter={true}><div className="dot" /> 언제 어디서나 관리 가능</ListItem>
              <ListItem isAfter={true}><div className="dot" /> 성장에 집중하는 동아리 문화</ListItem>
            </List>
          </ComparisonCol>
        </ComparisonContainer>
      </Container>
    </Section>
  );
};

export default GoalSection;
