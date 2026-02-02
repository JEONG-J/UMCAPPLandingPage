import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import challengerImg from '../assets/challenger_smile.png';
import adminImg from '../assets/admin_smile.png';

const Section = styled.section`
    padding: 140px 20px;
    background: #0a0a0a; /* Slightly lighter than pure black for contrast with Problem section */
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 60px 20px;
    }

    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    }
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
    color: var(--accent-blue); /* Blue for Solution */
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    display: block;
    margin-bottom: 12px;
    letter-spacing: 2px;
`;

const Title = styled.h2`
    font-size: 2.8rem;
    color: #eee;
    font-weight: 700;
    word-break: keep-all;
    line-height: 1.3;

    @media (max-width: 768px) {
        font-size: 2.8rem;
    }
`;

const SubTitle = styled.p`
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-top: 16px;
    font-weight: 400;
`;

const PersonaContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 120px;
`;

const PersonaRow = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    
    @media (max-width: 900px) {
        flex-direction: column !important;
        gap: 40px;
    }
`;

const MemojiWrapper = styled.div`
    width: 250px;
    height: 250px;
    flex-shrink: 0;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 10px 40px rgba(68, 138, 255, 0.3)); /* Blue glow for solution */
    transition: transform 0.3s ease;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    &:hover {
        transform: scale(1.05) rotate(2deg);
    }

    @media (max-width: 768px) {
        width: 180px;
        height: 180px;
    }
`;

const ContentCard = styled.div`
    position: relative;
    color: #ccc;
    flex: 1;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(255, 255, 255, 0.03);
    padding: 40px;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.05);

    @media (max-width: 768px) {
        width: 100%;
        text-align: left;
        padding: 30px;
    }
`;

const StoryText = styled.p`
    font-size: 1.25rem;
    line-height: 1.7;
    margin-bottom: 0;
    color: #e0e0e0;
    font-weight: 300;
    word-break: keep-all;

    strong {
        color: var(--accent-blue);
        font-weight: 600;
    }
`;

const PersonaInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
`;

const Name = styled.h3`
    font-size: 1.4rem;
    font-weight: 700;
    color: white;
`;

const Role = styled.span`
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 600;
    background: rgba(68, 138, 255, 0.1);
    color: var(--accent-blue);
    border: 1px solid rgba(68, 138, 255, 0.2);
`;

const StorySolution = () => {
    return (
        <Section id="story-solution">
            <Container>
                <SectionHeader>
                    <Tag>Transition</Tag>
                    <Title>
                        "우리, 이렇게 바꿔봤어요"
                    </Title>
                    <SubTitle>UMC 앱 도입 후 달라진 일상</SubTitle>
                </SectionHeader>

                <PersonaContainer>
                    {/* Persona 1: Admin (Minji) - After */}
                    <PersonaRow
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ flexDirection: 'row-reverse' }}
                    >
                        <MemojiWrapper>
                            <img src={adminImg} alt="Minji" />
                        </MemojiWrapper>
                        <ContentCard>
                            <PersonaInfo>
                                <Name>6개월 후, 민지의 변화</Name>
                                <Role>Efficient Leader</Role>
                            </PersonaInfo>
                            <StoryText>
                                이제는 출퇴근길에 스마트폰으로 모든 걸 확인해요.
                                누가 공지를 읽었는지 실시간으로 보이니까 따로 확인 연락할 필요도 없어요.<br /><br />
                                예전엔 매주 5시간씩 관리 업무에 쓰던 시간이 <strong>이제는 1시간 반이면 충분해요.</strong><br /><br />
                                남는 시간에는 챌린저들이랑 커피 마시면서 진짜 중요한 이야기를 나눌 수 있게 됐어요. '운영'이 아니라 '성장'에 집중할 수 있게 된 거죠.
                            </StoryText>
                        </ContentCard>
                    </PersonaRow>

                    {/* Persona 2: Member (Junho) - After */}
                    <PersonaRow
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <MemojiWrapper>
                            <img src={challengerImg} alt="Junho" />
                        </MemojiWrapper>
                        <ContentCard>
                            <PersonaInfo>
                                <Name>준호의 일상</Name>
                                <Role>Proactive Member</Role>
                            </PersonaInfo>
                            <StoryText>
                                아침에 일어나면 앱 알림 하나로 오늘 일정을 확인해요.
                                공지도 한 곳에서 다 보이고, 중요한 건 투표로 바로 의견 표시할 수 있어요.<br /><br />
                                스터디 장소에 도착하면 <strong>자동으로 출석 체크되니까 신경 쓸 것도 없고 편해요.</strong><br /><br />
                                이제는 '정보 찾기'가 아니라 '활동 자체'에 집중할 수 있어요.
                            </StoryText>
                        </ContentCard>
                    </PersonaRow>
                </PersonaContainer>
            </Container>
        </Section>
    );
};

export default StorySolution;
