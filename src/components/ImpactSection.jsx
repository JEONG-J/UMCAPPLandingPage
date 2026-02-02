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
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: #fff;
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ImpactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-main);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const RoleTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #fff;
`;

const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const BenefitItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #ccc;
  line-height: 1.5;
  
  strong {
    display: block;
    color: #fff;
    font-size: 1.05rem;
    margin-bottom: 4px;
  }
  
  span.icon {
    font-size: 1.5rem;
    line-height: 1;
    margin-top: 2px;
  }
`;

const ImpactSection = () => {
    return (
        <Section>
            <Container>
                <Header>
                    <Tag>Impact</Tag>
                    <Title>기대 효과</Title>
                </Header>

                <ImpactGrid>
                    {/* Admin */}
                    <ImpactCard
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <RoleTitle>운영진 입장</RoleTitle>
                        <BenefitList>
                            <BenefitItem>
                                <span className="icon">⏱️</span>
                                <div>
                                    <strong>운영 시간 70% 절감</strong>
                                    자동화된 출석과 통합 관리로 업무 효율화
                                </div>
                            </BenefitItem>
                            <BenefitItem>
                                <span className="icon">📊</span>
                                <div>
                                    <strong>데이터 기반 의사결정</strong>
                                    실시간 통계와 현황 파악으로 정확한 운영
                                </div>
                            </BenefitItem>
                            <BenefitItem>
                                <span className="icon">📱</span>
                                <div>
                                    <strong>이동 중에도 관리 가능</strong>
                                    모바일 퍼스트 설계로 장소 제약 해소
                                </div>
                            </BenefitItem>
                        </BenefitList>
                    </ImpactCard>

                    {/* Member */}
                    <ImpactCard
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <RoleTitle>챌린저 입장</RoleTitle>
                        <BenefitList>
                            <BenefitItem>
                                <span className="icon">🎯</span>
                                <div>
                                    <strong>정보 접근성 향상</strong>
                                    모든 공지와 일정을 앱 하나에서 확인
                                </div>
                            </BenefitItem>
                            <BenefitItem>
                                <span className="icon">⚡</span>
                                <div>
                                    <strong>빠른 의사소통</strong>
                                    공지 확인과 투표가 즉시 가능
                                </div>
                            </BenefitItem>
                            <BenefitItem>
                                <span className="icon">🌱</span>
                                <div>
                                    <strong>성장에 집중</strong>
                                    복잡한 절차 없이 활동에만 몰입 가능
                                </div>
                            </BenefitItem>
                        </BenefitList>
                    </ImpactCard>

                    {/* Club */}
                    <ImpactCard
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <RoleTitle>동아리 입장</RoleTitle>
                        <BenefitList>
                            <BenefitItem>
                                <span className="icon">🚀</span>
                                <div>
                                    <strong>효율적인 운영 체계 구축</strong>
                                    시스템화된 운영으로 지속 가능성 확보
                                </div>
                            </BenefitItem>
                            <BenefitItem>
                                <span className="icon">💪</span>
                                <div>
                                    <strong>챌린저 만족도 상승</strong>
                                    편리한 경험 제공으로 소속감 고취
                                </div>
                            </BenefitItem>
                            <BenefitItem>
                                <span className="icon">📈</span>
                                <div>
                                    <strong>데이터 축적으로 지속적 개선</strong>
                                    활동 데이터 기반으로 더 나은 방향 모색
                                </div>
                            </BenefitItem>
                        </BenefitList>
                    </ImpactCard>
                </ImpactGrid>
            </Container>
        </Section>
    );
};

export default ImpactSection;
