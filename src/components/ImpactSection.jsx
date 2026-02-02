import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 120px 20px;
  background: var(--bg-color);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const Tag = styled.span`
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: var(--accent-fire);
  display: block;
  margin-bottom: 16px;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #fff, #999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  word-break: keep-all;

  span {
    background: var(--gradient-main);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ComparisonCard = styled(motion.div)`
  background: ${props => props.$type === 'before'
        ? 'rgba(255, 59, 48, 0.05)'
        : 'rgba(10, 132, 255, 0.05)'};
  border: 1px solid ${props => props.$type === 'before'
        ? 'rgba(255, 59, 48, 0.2)'
        : 'rgba(10, 132, 255, 0.2)'};
  border-radius: 24px;
  padding: 50px 40px;
  position: relative;
  overflow: hidden;

  /* Watermark text */
  &::after {
    content: '${props => props.$type === 'before' ? 'BEFORE' : 'AFTER'}';
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 5rem;
    font-weight: 900;
    color: ${props => props.$type === 'before'
        ? 'rgba(255, 59, 48, 0.05)'
        : 'rgba(10, 132, 255, 0.05)'};
    z-index: 0;
    pointer-events: none;
  }
`;

const CardHeader = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: ${props => props.$type === 'before' ? '#FF3B30' : '#0A84FF'};
  position: relative;
  z-index: 1;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  position: relative;
  z-index: 1;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  font-size: 1.1rem;
  color: #e0e0e0;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.$type === 'before' ? '#FF3B30' : '#0A84FF'};
    flex-shrink: 0;
  }
`;

const ImpactSection = () => {
    return (
        <Section>
            <Container>
                <Header>
                    <Tag>Impact</Tag>
                    <Title>
                        UMC,<br />
                        <span>이렇게 달라집니다</span>
                    </Title>
                </Header>

                <ComparisonGrid>
                    {/* Before Card */}
                    <ComparisonCard
                        $type="before"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <CardHeader $type="before">Before UMC App</CardHeader>
                        <List>
                            <ListItem $type="before">5개 이상의 플랫폼 왔다 갔다</ListItem>
                            <ListItem $type="before">공지 누락으로 인한 혼란</ListItem>
                            <ListItem $type="before">수동 출석 체크의 불편함</ListItem>
                            <ListItem $type="before">운영진의 번아웃</ListItem>
                            <ListItem $type="before">챌린저의 낮은 참여도</ListItem>
                        </List>
                    </ComparisonCard>

                    {/* After Card */}
                    <ComparisonCard
                        $type="after"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <CardHeader $type="after">After UMC App</CardHeader>
                        <List>
                            <ListItem $type="after">하나의 앱으로 모든 것 해결</ListItem>
                            <ListItem $type="after">100% 확인 가능한 공지 시스템</ListItem>
                            <ListItem $type="after">자동화된 스마트 출석</ListItem>
                            <ListItem $type="after">언제 어디서나 관리 가능</ListItem>
                            <ListItem $type="after">성장에 집중하는 동아리 문화</ListItem>
                        </List>
                    </ComparisonCard>
                </ComparisonGrid>

                <KPIContainer
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <KPIItem>
                        <KPINumber>100%</KPINumber>
                        <KPILabel>공지 확인 및 도달률</KPILabel>
                    </KPIItem>
                    <Divider />
                    <KPIItem>
                        <KPINumber>90%</KPINumber>
                        <KPILabel>운영 리소스 절감</KPILabel>
                    </KPIItem>
                    <Divider />
                    <KPIItem>
                        <KPINumber>0min</KPINumber>
                        <KPILabel>출석 체크 소요 시간</KPILabel>
                    </KPIItem>
                </KPIContainer>
            </Container>
        </Section>
    );
};

const KPIContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    padding: 60px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    backdrop-filter: blur(10px);
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
        padding: 40px 24px;
    }
`;

const KPIItem = styled.div`
    text-align: center;
    flex: 1;
`;

const KPINumber = styled.div`
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 12px;
    background: var(--gradient-main);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Outfit', sans-serif;
`;

const KPILabel = styled.div`
    font-size: 1.1rem;
    color: #e0e0e0;
    font-weight: 500;
`;

const Divider = styled.div`
    width: 1px;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    margin: 0 40px;
    
    @media (max-width: 768px) {
        width: 60px;
        height: 1px;
        margin: 20px 0;
    }
`;

export default ImpactSection;
