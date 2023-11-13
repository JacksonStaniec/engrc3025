'use client';

import { Space } from '@mantine/core';
import { Name } from '../components/Name/Name';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { About } from '@/components/About/About';
import { Exploration, type ExperienceDescriptor } from '@/components/Exploration/Exploration';
import { AbInitio, Cogito, Research, TeachingAssistant } from './experiences/Jobs';
import { DTI } from './experiences/Projects';

const projectExperiences: ExperienceDescriptor[] = [
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
  return (
    <>
      <ColorSchemeToggle />
      <Name />
      <About />
      <Exploration
        accentColor="var(--mantine-color-blue-6)"
        title="Experiences"
        experiences={workExperiences}
      />
      <Space h="xl" />
      <Exploration
        accentColor="var(--mantine-color-red-6)"
        title="Projects"
        experiences={projectExperiences}
      />
      <Space h="sm" />
    </>
  );
}
