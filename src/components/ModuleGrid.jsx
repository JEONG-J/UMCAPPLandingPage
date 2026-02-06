import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 100px 20px;
  background: #020202;
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
  color: var(--accent-blue);
  display: block;
  margin-bottom: 16px;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: #fff;
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
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ModuleCard = styled(motion.div)`
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 24px;
  padding: 30px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: var(--accent-blue);
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 16px;
  color: #fff;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    color: var(--text-secondary);
    margin-bottom: 8px;
    font-size: 0.95rem;
    padding-left: 18px;
    position: relative;
    
    &::before {
      content: '•';
      color: var(--accent-blue);
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

const ModuleGrid = () => {
  const modules = [
    {
      icon: "📱",
      title: "홈 대시보드",
      features: [
        "기수 정보 및 남은 기간 표시",
        "기수별 패널티 현황 집계",
        "캘린더 및 일정 관리 (Admin)",
        "최근 공지 및 알림 이력"
      ]
    },
    {
      icon: "📢",
      title: "공지사항 센터",
      features: [
        "다층 필터 시스템 (기수/타입/파트)",
        "통합 검색 및 상세 조회 (투표/대상자)",
        "공지 열람자 실시간 추적",
        "Admin 관리 기능 (작성/수정/투표)"
      ]
    },
    {
      icon: "📚",
      title: "스터디 & 활동 관리",
      features: [
        "Challenger 모드 (GPS 출석/스터디)",
        "Admin 모드 (출석 관리/권한 설정)",
        "지오펜싱 기반 스마트 출석 인증",
        "커리큘럼 및 미션 카드 관리"
      ]
    },
    {
      icon: "💬",
      title: "커뮤니티",
      features: [
        "게시판: 전체/질문/번개모임",
        "명예의 전당 (베스트 워크북)",
        "게시물 작성/수정/삭제 & 검색",
        "좋아요/댓글 & 파트별 필터링"
      ]
    },
    {
      icon: "📅",
      title: "일정 관리",
      features: [
        "캘린더 기반 일정 등록",
        "장소 검색 및 GPS 좌표 설정",
        "참여 멤버 선택",
        "태그 시스템으로 분류"
      ]
    },
    {
      icon: "👤",
      title: "마이페이지",
      features: [
        "프로필 & 활동 기록: 외부 링크, 활동 내역",
        "설정 & 지원: 알림/테마, FAQ, 약관",
        "계정 관리: SNS 연동, 앱 정보, 로그아웃"
      ]
    }
  ];

  return (
    <Section>
      <Container>
        <Header>
          <Tag>Modules</Tag>
          <Title>주요 기능 모듈</Title>
          <Desc>통합된 경험을 위해 설계된 6가지 핵심 모듈입니다.</Desc>
        </Header>
        <Grid>
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <IconWrapper>{module.icon}</IconWrapper>
              <CardTitle>{module.title}</CardTitle>
              <FeatureList>
                {module.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </FeatureList>
            </ModuleCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default ModuleGrid;
