import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience'; // Problem Story
import StorySolution from './components/StorySolution'; // Solution Story
import VisionSection from './components/VisionSection'; // Philosophy
import FeatureShowcase from './components/FeatureShowcase';
import ModuleGrid from './components/ModuleGrid';
import ImpactSection from './components/ImpactSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

const MainContainer = styled.main`
  width: 100%;
  overflow: hidden;
  background-color: var(--bg-color);
  color: var(--text-primary);
`;

const NoiseOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJnoiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2cpIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+');
  pointer-events: none;
  z-index: 9999;
  opacity: 0.5;
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-main);
  transform-origin: 0%;
  z-index: 1000;
`;

// Wrapper divs for Anchor Linking
const SectionWrapper = styled.div`
  scroll-margin-top: 80px; // Offset for sticky navbar
`;

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <MainContainer>
      <NoiseOverlay />
      <ProgressBar style={{ scaleX }} />
      <Navbar />

      <Hero />

      {/* Storytelling Flow: Problem -> Solution -> Comparison -> Vision */}
      <SectionWrapper id="problem">
        <TargetAudience />
      </SectionWrapper>

      <SectionWrapper id="solution">
        <StorySolution />
      </SectionWrapper>


      <SectionWrapper id="vision">
        <VisionSection />
      </SectionWrapper>

      {/* Technical Proof & Details */}
      <SectionWrapper id="features">
        <FeatureShowcase />
      </SectionWrapper>

      <SectionWrapper id="modules">
        <ModuleGrid />
      </SectionWrapper>

      <SectionWrapper id="impact">
        <ImpactSection />
      </SectionWrapper>

      <SectionWrapper id="team">
        <TeamSection />
      </SectionWrapper>

      <Footer />
    </MainContainer>
  );
}

export default App;
