'use client';

import { Space } from '@mantine/core';
import { useState } from 'react';
import { Name } from '../components/Name/Name';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { About } from '@/components/About/About';
import { Exploration, type ExperienceDescriptor } from '@/components/Exploration/Exploration';
import { AbInitio, Cogito, Research, TeachingAssistant } from './experiences/Jobs';
import { Compiler, DTI } from './experiences/Projects';

const projectExperiences: ExperienceDescriptor[] = [
  {
    experienceTitle: 'Compiler',
    experienceRange: [55, 75],
    experienceContent: <Compiler />,
  },
  {
    experienceTitle: 'Cornell DTI',
    experienceRange: [10, 60],
    experienceContent: <DTI />,
  },
];

const workExperiences: ExperienceDescriptor[] = [
  {
    experienceTitle: 'Ab Initio',
    experienceRange: [75, 90],
    experienceContent: <AbInitio />,
  },
  {
    experienceTitle: 'Cogito Corp',
    experienceRange: [35, 55],
    experienceContent: <Cogito />,
  },
  {
    experienceTitle: 'CS Research',
    experienceRange: [10, 25],
    experienceContent: <Research />,
  },
  {
    experienceTitle: 'Course Staff',
    experienceRange: [10, 100],
    experienceContent: <TeachingAssistant />,
  },
];

export default function HomePage() {
  const [instructionsVisible, setInstructionsVisible] = useState<boolean>(true);
  return (
    <>
      <ColorSchemeToggle />
      <Name />
      <About />
      <Exploration
        accentColor="var(--mantine-color-blue-6)"
        title="Experiences"
        experiences={workExperiences}
        showInstructions={instructionsVisible}
        showInstructionsCallback={setInstructionsVisible}
      />
      <Space h="xl" />
      <Exploration
        accentColor="var(--mantine-color-red-6)"
        title="Projects"
        experiences={projectExperiences}
        showInstructions={instructionsVisible}
        showInstructionsCallback={setInstructionsVisible}
      />
      <Space h="sm" />
    </>
  );
}
