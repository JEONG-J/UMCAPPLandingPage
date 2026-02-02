import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 140px 20px;
  background: linear-gradient(180deg, rgba(5,5,5,1) 0%, rgba(20,20,20,1) 100%);
  
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
  margin-bottom: 80px;
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

const FlowContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  max-width: 350px;
  
  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

const Card = styled.div`
  width: 100%;
  padding: 30px;
  border-radius: 20px;
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProblemCard = styled(Card)`
  background: #222;
  border: 1px solid #333;
  color: #ccc;
  height: 180px;
`;

const SolutionCard = styled(Card)`
  background: #fff;
  color: #111;
  height: 200px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
`;

const Label = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #777;
  margin-bottom: 12px;
  display: block;

  &.solution {
    color: var(--accent-blue);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 8px;
  color: ${props => props.dark ? '#fff' : '#000'};
`;

const CardText = styled.p`
  color: ${props => props.dark ? '#aaa' : '#444'};
  font-size: 1rem;
`;

const Connector = styled.div`
  height: 60px;
  width: 2px;
  background-image: linear-gradient(to bottom, #444 50%, transparent 50%);
  background-size: 2px 10px;
  background-repeat: repeat-y;
  position: relative;

  &::after {
    content: '▼';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    color: #444;
    font-size: 0.8rem;
  }
`;

const GoalSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section id="goals">
      <Container>
        <SectionHeader>
          <Tag>Overview</Tag>
          <Title>문제를 해결하는 3가지 핵심</Title>
        </SectionHeader>

        <FlowContainer as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Column 1 */}
          <Column variants={itemVariants}>
            <ProblemCard>
              <Label>Problem 1</Label>
              <CardTitle dark>운영 도구의 파편화</CardTitle>
              <CardText dark>여러 툴을 왔다 갔다 하며<br />낭비되는 시간과 에너지</CardText>
            </ProblemCard>
            <Connector />
            <SolutionCard>
              <Label className="solution">Solution 1</Label>
              <CardTitle>All-in-One 관리</CardTitle>
              <CardText>출석, 공지, 회계까지<br />앱 하나로 <strong>Centralization</strong></CardText>
            </SolutionCard>
          </Column>

          {/* Column 2 */}
          <Column variants={itemVariants}>
            <ProblemCard>
              <Label>Problem 2</Label>
              <CardTitle dark>PC 중심의 업무 환경</CardTitle>
              <CardText dark>현장에서 노트북을 켜야 하는<br />비효율적인 동선</CardText>
            </ProblemCard>
            <Connector />
            <SolutionCard>
              <Label className="solution">Solution 2</Label>
              <CardTitle>Mobile Admin</CardTitle>
              <CardText>언제 어디서나<br /><strong>스마트폰으로 즉시 처리</strong></CardText>
            </SolutionCard>
          </Column>

          {/* Column 3 */}
          <Column variants={itemVariants}>
            <ProblemCard>
              <Label>Problem 3</Label>
              <CardTitle dark>지부 간 소통 단절</CardTitle>
              <CardText dark>타 학교/지부와 교류할 기회가<br />부족한 폐쇄성</CardText>
            </ProblemCard>
            <Connector />
            <SolutionCard>
              <Label className="solution">Solution 3</Label>
              <CardTitle>Open Community</CardTitle>
              <CardText>장벽 없이 소통하는<br /><strong>연합 게시판 활성화</strong></CardText>
            </SolutionCard>
          </Column>
        </FlowContainer>
      </Container>
    </Section>
  );
};

export default GoalSection;
