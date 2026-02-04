import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import jeongImg from '../assets/Profile/JeOng.jpg';
import riverImg from '../assets/Profile/River.png';
import jonathanImg from '../assets/Profile/Jonathan.jpeg';
import haneulImg from '../assets/Profile/Haneul.jpeg';
import euheotchaImg from '../assets/Profile/Euheotcha.jpg';
import samiImg from '../assets/Profile/Sami.jpg';
import martiImg from '../assets/Profile/Marti.jpeg';
import sophieImg from '../assets/Profile/Sophie.jpg';
import naruImg from '../assets/Profile/Naru.png';
import doriImg from '../assets/Profile/Dori.png';
import wanaImg from '../assets/Profile/Wana.jpg';
import parkparkImg from '../assets/Profile/ParkPark.jpeg';
import seniImg from '../assets/Profile/Seni.jpeg';
import seueupImg from '../assets/Profile/Seueup.png';

const Section = styled.section`
  padding: 120px 20px;
  background: #020202;
  border-top: 1px solid var(--card-border);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
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
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }
`;

const TeamCard = styled(motion.div)`
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    border-color: var(--accent-blue);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  }
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background-size: 110%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => props.$image ? `url(${props.$image})` : 'none'};
  background-color: ${props => props.$image ? 'transparent' : 'linear-gradient(135deg, #333, #1a1a1a)'};
  background: ${props => props.$image ? `url(${props.$image}) center / 110% no-repeat` : 'linear-gradient(135deg, #333, #1a1a1a)'};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--card-border);
  font-size: 1.5rem;
  font-weight: bold;
  color: #666;
`;

const Name = styled.h4`
  font-size: 1rem;
  margin-bottom: 6px;
  color: #fff;
`;

const Role = styled.p`
  font-size: 0.85rem;
  color: var(--accent-purple);
  font-weight: 600;
`;

// Modal Styles
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ModalContent = styled(motion.div)`
  background: #151515;
  border: 1px solid var(--card-border);
  border-radius: 24px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: #888;
  font-size: 1.5rem;
  cursor: pointer;
  
  &:hover {
    color: #fff;
  }
`;

const ModalAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  font-size: 2.5rem;
  margin-bottom: 24px;
  border-color: var(--accent-blue);
`;

const ModalName = styled.h3`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 8px;
`;

const ModalRole = styled.p`
  font-size: 1.1rem;
  color: var(--accent-purple);
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
`;

const DetailList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  
  .label {
    color: #888;
    font-size: 0.9rem;
  }
  
  .content {
    color: #eee;
    font-weight: 500;
    font-size: 1.05rem;
  }
`;

const LinkRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: #fff;
  transition: all 0.2s;
  
  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }

  &:hover {
    background: var(--accent-blue);
    border-color: var(--accent-blue);
    transform: translateY(-3px);
  }
`;

// Icons
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
);

const BlogIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M22 6c0-1.104-.896-2-2-2h-16c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-12zm-2 0l-8 5-8-5h16zm0 12h-16v-10l8 5 8-5v10z" /></svg> // Using mail icon shape for generic web link representation if specific blog icon is needed or simple document icon
);

// Better Blog Icon (Document/Edit style)
const NoteIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
);

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    { id: 1, name: '정의찬 (제옹)', role: 'Team Leader / PM / iOS Design / iOS', stack: 'Notion, Swift, Figma', comment: '모든 파트를 아우르는 리더입니다. 👑', image: jeongImg, social: { github: 'https://github.com/JEONG-J', linkedin: '#', blog: 'https://medium.com/@euijjang97', instagram: 'https://www.instagram.com/eui_chan.97/' } },
    { id: 2, name: '이재원 (리버)', role: 'Vice Leader / iOS Leader', stack: 'SwiftUI, CleanArchitecture, MapKit, CoreLocation', comment: 'iOS 파트를 이끌고 있습니다. 🍎', image: riverImg, social: { github: '#', linkedin: '#', blog: '#', instagram: '#' } },
    { id: 3, name: '박경운 (하늘)', role: 'Server Leader', stack: 'SpringBoot, Nest.js, Next.js', comment: '프로덕트팀 내에서 공용으로 사용되는 서버를 제작하는 팀을 이끌고 있습니다. 🌱', image: haneulImg, social: { github: 'https://github.com/kyeoungwoon', linkedin: 'https://www.linkedin.com/in/kyeoungwoon/', blog: 'https://velog.io/@kyeoungwoon/posts', instagram: 'https://www.instagram.com/kyeoungwoon/' } },
    { id: 4, name: '박유수 (어헛차)', role: 'Android Leader', stack: 'Kotlin, Jetpack Compose', comment: '안드로이드 개발을 리딩합니다. 🤖', image: euheotchaImg, social: { github: '#', linkedin: '', blog: '#', instagram: '#' } },
    { id: 5, name: '이희원 (삼이)', role: 'Android Design / iOS Design', stack: 'Figma, Adobe Illustrator', comment: 'UX 관점에서 화면 흐름을 설계합니다💡', image: samiImg, social: { github: 'https://github.com/lhwowhl', linkedin: 'https://www.linkedin.com/in/l3l3w0w/', blog: '#', instagram: 'https://www.instagram.com/lhwowhl/' } },
    { id: 6, name: '김미주 (마티)', role: 'iOS Developer', stack: 'Swift, UIKit', comment: '직관적인 인터페이스를 구현합니다.', image: martiImg, social: { github: '#', linkedin: '#', blog: '#', instagram: '#' } },
    { id: 7, name: '이예지 (소피)', role: 'iOS Developer', stack: 'Swift, SwiftUI', comment: '부드러운 모션과 인터랙션을 담당합니다.', image: sophieImg, social: { github: '#', linkedin: '#', blog: '#', instagram: '#' } },
    { id: 8, name: '양지애 (나루)', role: 'Android Developer', stack: 'Kotlin, Android SDK', comment: '안정적인 앱 성능을 최적화합니다.', image: naruImg, social: { github: '#', linkedin: '#', blog: '#', instagram: '#' } },
    { id: 9, name: '조경석 (조나단)', role: 'Android Developer', stack: 'Kotlin, Coroutines', comment: '복잡한 비즈니스 로직을 해결합니다.', image: jonathanImg, social: { github: '#', linkedin: '#', blog: '#', instagram: '#' } },
    { id: 10, name: '김도연 (도리)', role: 'Android Developer', stack: 'Kotlin, Compose', comment: '깔끔한 UI/UX를 구현합니다.', image: doriImg, social: { github: '#', linkedin: '#', blog: '#', instagram: '#' } },
    { id: 11, name: '강하나 (와나)', role: 'Server Developer', stack: 'Java, Spring Data JPA', comment: '데이터베이스 설계와 API를 개발합니다.', image: wanaImg, social: { github: '#', linkedin: '#', blog: '#', instagram: '#' } },
    { id: 12, name: '박지현 (박박지현)', role: 'Server Developer', stack: 'Java, Spring Security', comment: '보안과 인증 시스템을 담당합니다.', image: parkparkImg, social: { github: '#', linkedin: '#', blog: '#', instagram: '#' } },
    { id: 13, name: '박세은 (세니)', role: 'Server Developer', stack: 'Java, Docker, Redis', comment: '서버 배포와 인프라를 구축합니다.', image: seniImg, social: { github: '#', linkedin: '#', blog: '#', instagram: '#' } },
    { id: 14, name: '이예은 (스읍)', role: 'Server Developer', stack: 'Java, Spring Boot', comment: '효율적인 API 통신을 구현합니다.', image: seueupImg, social: { github: '#', linkedin: '#', blog: '#', instagram: '#' } }
  ];

  return (
    <Section id="team">
      <Container>
        <SectionHeader>
          <Tag>Our Team</Tag>
          <Title>함께 만드는 사람들</Title>
          <Desc>14명의 챌린저들이 모여 새로운 가치를 만들어갑니다.</Desc>
        </SectionHeader>

        <Grid>
          {members.map((member, index) => (
            <TeamCard
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              onClick={() => setSelectedMember(member)}
              layoutId={`card-${member.id}`}
            >
              <Avatar $image={member.image}>
                {!member.image && member.name.split('(')[1].replace(')', '')}
              </Avatar>
              <Name>{member.name}</Name>
              <Role>{member.role}</Role>
            </TeamCard>
          ))}
        </Grid>
      </Container>

      <AnimatePresence>
        {selectedMember && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <ModalContent
              layoutId={`card-${selectedMember.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setSelectedMember(null)}>×</CloseButton>

              <ModalAvatar $image={selectedMember.image}>
                {!selectedMember.image && selectedMember.id}
              </ModalAvatar>
              <ModalName>{selectedMember.name}</ModalName>
              <ModalRole>{selectedMember.role}</ModalRole>

              <DetailList>
                <DetailItem>
                  <span className="label">Main Stack</span>
                  <span className="content">{selectedMember.stack}</span>
                </DetailItem>
                <DetailItem>
                  <span className="label">Comment</span>
                  <span className="content">"{selectedMember.comment}"</span>
                </DetailItem>

                <LinkRow>
                  {selectedMember.social.github && selectedMember.social.github !== '#' && (
                    <SocialLink href={selectedMember.social.github} target="_blank" title="GitHub">
                      <GitHubIcon />
                    </SocialLink>
                  )}
                  {selectedMember.social.linkedin && selectedMember.social.linkedin !== '#' && (
                    <SocialLink href={selectedMember.social.linkedin} target="_blank" title="LinkedIn">
                      <LinkedInIcon />
                    </SocialLink>
                  )}
                  {selectedMember.social.instagram && selectedMember.social.instagram !== '#' && (
                    <SocialLink href={selectedMember.social.instagram} target="_blank" title="Instagram">
                      <InstagramIcon />
                    </SocialLink>
                  )}
                  {selectedMember.social.blog && selectedMember.social.blog !== '#' && (
                    <SocialLink href={selectedMember.social.blog} target="_blank" title="Blog">
                      <NoteIcon />
                    </SocialLink>
                  )}
                </LinkRow>
              </DetailList>
            </ModalContent>
          </Overlay>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default TeamSection;
