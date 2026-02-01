import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import challengerImg from '../assets/challenger.png';
import adminImg from '../assets/admin.png';

const Section = styled.section`
    padding: 120px 20px;
    background: #111;
    overflow: hidden;
`;

const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 100px;
`;

const Tag = styled.span`
    color: var(--accent-fire);
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    display: block;
    margin-bottom: 12px;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    color: #eee;
    font-weight: 700;
`;

const PersonaContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
`;

const PersonaRow = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

const MemojiWrapper = styled.div`
    width: 280px;
    height: 280px;
    flex-shrink: 0;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 10px 30px rgba(0,0,0,0.5));
    transition: transform 0.3s ease;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    &:hover {
        transform: scale(1.05) rotate(-2deg);
    }
    
    @media (max-width: 768px) {
        width: 200px;
        height: 200px;
    }
`;

const ContentCard = styled.div`
    background: #e0e0e0; /* Light grey like reference */
    border-radius: 30px;
    padding: 50px 40px;
    position: relative;
    color: #333;
    flex: 1;
    max-width: 600px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.2);
    min-height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        text-align: left;
        padding: 40px 30px;
    }
`;

const Badge = styled.div`
    position: absolute;
    top: -20px;
    left: 40px;
    background: #222;
    color: var(--accent-fire);
    padding: 10px 24px;
    border-radius: 100px;
    font-weight: 700;
    font-size: 0.95rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    border: 2px solid var(--accent-fire);
`;

const CardTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 800;
    margin-bottom: 20px;
    color: var(--accent-fire);
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ListItem = styled.li`
    font-size: 1.05rem;
    line-height: 1.5;
    font-weight: 500;
    position: relative;
    padding-left: 20px;
    color: #444;

    &::before {
        content: '•';
        position: absolute;
        left: 0;
        top: 0;
        color: #666;
        font-weight: bold;
    }
    
    strong {
        color: #000;
        font-weight: 700;
    }
`;

const TargetAudience = () => {
    return (
        <Section id="audience">
            <Container>
                <SectionHeader>
                    <Tag>Persona</Tag>
                    <Title>리서치 바탕으로 페르소나 설정</Title>
                </SectionHeader>

                <PersonaContainer>
                    {/* Persona A */}
                    <PersonaRow
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <MemojiWrapper>
                            <img src={challengerImg} alt="Challenger" />
                        </MemojiWrapper>
                        <ContentCard>
                            <Badge>Persona A. 챌린저</Badge>
                            <CardTitle>특징</CardTitle>
                            <List>
                                <ListItem><strong>정보 접근성</strong>이 낮아 매번 운영진에게 질문함</ListItem>
                                <ListItem>타 지부 소식을 몰라 <strong>소속감</strong>을 느끼기 어려움</ListItem>
                                <ListItem>자신의 경고 현황이나 출석 상태를 <strong>즉시 확인</strong>하고 싶음</ListItem>
                            </List>
                        </ContentCard>
                    </PersonaRow>

                    {/* Persona B */}
                    <PersonaRow
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ flexDirection: 'row-reverse' }} // Alternate layout
                    >
                        <MemojiWrapper>
                            <img src={adminImg} alt="Admin" />
                        </MemojiWrapper>
                        <ContentCard>
                            <Badge style={{ right: 40, left: 'auto', borderColor: 'var(--accent-blue)', color: 'var(--accent-blue)' }}>Persona B. 운영진</Badge>
                            <CardTitle style={{ color: 'var(--accent-blue)' }}>특징</CardTitle>
                            <List>
                                <ListItem>공지 미확인 인원에게 <strong>개별 연락</strong>하느라 스트레스 받음</ListItem>
                                <ListItem>이동 중에도 모바일로 <strong>출석/경고 관리</strong>가 필요함</ListItem>
                                <ListItem>행사 신청 및 인원 파악을 위해 <strong>구글폼/엑셀</strong>을 반복 사용함</ListItem>
                            </List>
                        </ContentCard>
                    </PersonaRow>
                </PersonaContainer>
            </Container>
        </Section>
    );
};

export default TargetAudience;
