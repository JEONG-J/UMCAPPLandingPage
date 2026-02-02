import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
    padding: 160px 20px;
    background: black;
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 80px 20px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, rgba(124, 77, 255, 0.15) 0%, transparent 60%);
        pointer-events: none;
    }
`;

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
`;

const Tag = styled(motion.span)`
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 8px 16px;
    border-radius: 100px;
    font-size: 0.9rem;
    margin-bottom: 40px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ccc;
`;

const MainHeading = styled(motion.h2)`
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 60px;
    
    background: linear-gradient(to right, #fff, #888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    word-break: keep-all;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const ContentBox = styled(motion.div)`
    margin: 40px auto;
    max-width: 700px;
`;

const TextBlock = styled.div`
    margin-bottom: 60px;

    h3 {
        font-size: 1.8rem;
        margin-bottom: 16px;
        color: white;
        word-break: keep-all;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    p {
        font-size: 1.25rem;
        color: #888;
        line-height: 1.7;
        word-break: keep-all;
    }

    strong {
        color: white;
        font-weight: 600;
    }
`;

const HighlightText = styled(motion.div)`
    font-size: 2.5rem;
    font-weight: 700;
    margin: 80px 0;
    color: white;
    line-height: 1.4;

    span {
        color: var(--accent-purple);
        display: block;
        font-size: 3.5rem;
        margin-top: 10px;
    }

    @media (max-width: 768px) {
        font-size: 1.8rem;
        span {
            font-size: 2.5rem;
        }
    }
`;

const Divider = styled.div`
    width: 2px;
    height: 80px;
    background: linear-gradient(to bottom, transparent, #333, transparent);
    margin: 0 auto 60px;
`;

const VisionSection = () => {
    return (
        <Section id="vision">
            <Container>
                <Tag
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Philosophy
                </Tag>

                <MainHeading
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    진짜 중요한 건<br />
                    도구가 아니라 문화입니다
                </MainHeading>

                <ContentBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <TextBlock>
                        <h3>운영진은 관리자에서 리더로</h3>
                        <p>출석 체크와 공지 전달에 시간을 쏟는 대신,<br /><strong>챌린저들의 성장을 이끄는 리더가 됩니다.</strong></p>
                    </TextBlock>

                    <Divider />

                    <TextBlock>
                        <h3>챌린저는 소비자에서 주인공으로</h3>
                        <p>정보를 찾아 헤매는 대신,<br /><strong>활동에 적극적으로 참여하는 주인공이 됩니다.</strong></p>
                    </TextBlock>

                    <Divider />

                    <TextBlock>
                        <h3>동아리는 관리 조직에서 성장 커뮤니티로</h3>
                        <p>행정 업무 중심에서 벗어나,<br /><strong>함께 배우고 성장하는 진짜 커뮤니티가 됩니다.</strong></p>
                    </TextBlock>
                </ContentBox>

                <HighlightText
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    우리는 믿습니다.<br />동아리의 본질은<br />
                    <span>'함께 성장하는 것'</span>
                </HighlightText>
            </Container>
        </Section>
    );
};

export default VisionSection;
