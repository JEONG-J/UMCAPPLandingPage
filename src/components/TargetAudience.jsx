import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import challengerImg from '../assets/challenger.png';
import adminImg from '../assets/admin.png';

const Section = styled.section`
    padding: 140px 20px;
    background: #000;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 60px 20px;
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
    color: var(--accent-fire);
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
        font-size: 2rem;
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
    filter: drop-shadow(0 10px 30px rgba(0,0,0,0.5)) grayscale(0.2); 
    /* Grayscale hint for "Problem" state, maybe optional */
    transition: transform 0.3s ease;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
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

    @media (max-width: 768px) {
        width: 100%;
        text-align: left;
    }
`;


const StoryText = styled.p`
    font-size: 1.25rem;
    line-height: 1.7;
    margin-bottom: 24px;
    color: #e0e0e0;
    font-weight: 300;
    word-break: keep-all;

    strong {
        color: white;
        font-weight: 600;
        background: rgba(255, 82, 82, 0.1);
        padding: 0 4px;
    }
`;

const PersonaInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
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
    background: #222;
    color: #888;
    border: 1px solid #333;
`;

const TargetAudience = () => {
    return (
        <Section id="story-problem">
            <Container>
                <SectionHeader>
                    <Tag>Storytelling</Tag>
                    <Title>
                        "매번 놓치는 공지, 헷갈리는 출석...<br />
                        이제 지쳤어요"
                    </Title>
                    <SubTitle>우리가 겪었던 비효율의 순간들</SubTitle>
                </SectionHeader>

                <PersonaContainer>
                    {/* Persona 1: Admin (Minji) */}
                    <PersonaRow
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ flexDirection: 'row-reverse' }}
                    >
                        <MemojiWrapper>
                            <img src={adminImg} alt="Minji" /> {/* Using adminImg for Minji */}
                        </MemojiWrapper>
                        <ContentCard>
                            <PersonaInfo>
                                <Name>운영진 민지의 하루</Name>
                                <Role>PM / 24세</Role>
                            </PersonaInfo>
                            <StoryText>
                                오늘도 디스코드에 공지 올렸는데 읽은 사람이 몇 명인지 모르겠어요.
                                구글시트 열어서 출석 체크하고, 노션에 자료 정리하고...
                                밤 12시가 넘어서야 오늘 할 일이 끝났네요.<br /><br />
                                <strong>동아리 운영하려고 들어왔는데 관리 업무에 치여서 정작 챌린저들과 제대로 소통도 못 하고 있어요.</strong>
                            </StoryText>
                        </ContentCard>
                    </PersonaRow>

                    {/* Persona 2: Member (Junho) */}
                    <PersonaRow
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <MemojiWrapper>
                            <img src={challengerImg} alt="Junho" /> {/* Using challengerImg for Junho */}
                        </MemojiWrapper>
                        <ContentCard>
                            <PersonaInfo>
                                <Name>챌린저 준호의 고민</Name>
                                <Role>Developer / 22세</Role>
                            </PersonaInfo>
                            <StoryText>
                                어디서 공지를 봤는지 기억이 안 나요. 디스코드? 카톡? 아니면 노션이었나?
                                찾다가 10분은 날린 것 같아요.<br /><br />
                                <strong>내가 출석했는지 안 했는지도 헷갈려요. 그냥 앱 하나로 다 되면 안 되나요?</strong>
                            </StoryText>
                        </ContentCard>
                    </PersonaRow>
                </PersonaContainer>
            </Container>
        </Section>
    );
};

export default TargetAudience;
