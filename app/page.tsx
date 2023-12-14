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
    experienceTitle: 'Semester-Long Compiler Project',
    experienceThumbnail: (
      <div>
        Compiler,{' '}
        <span>
          <i>Engineer</i>
        </span>
      </div>
    ),
    experienceRange: [65, 85],
    experienceContent: <Compiler />,
  },
  {
    experienceTitle: 'Technical Project Manager for Cornell Design and Tech Initiative',
    experienceThumbnail: (
      <div>
        Cornell DTI,{' '}
        <span>
          <i>Team Lead</i>
        </span>
      </div>
    ),
    experienceRange: [10, 85],
    experienceContent: <DTI />,
  },
];

const workExperiences: ExperienceDescriptor[] = [
  {
    experienceTitle: 'Software Engineer for Ab Initio',
    experienceThumbnail: (
      <div>
        Ab Initio,{' '}
        <span>
          <i>Engineer</i>
        </span>
      </div>
    ),
    experienceRange: [75, 90],
    experienceContent: <AbInitio />,
  },
  {
    experienceTitle: 'Telephony Software Engineer for Cogito Corp',
    experienceThumbnail: (
      <div>
        Cogito Corp,{' '}
        <span>
          <i>Engineer</i>
        </span>
      </div>
    ),
    experienceRange: [35, 55],
    experienceContent: <Cogito />,
  },
  {
    experienceTitle: 'Research Assistant for Python Module Dependency Analysis',
    experienceThumbnail: (
      <div>
        CS Research,{' '}
        <span>
          <i>Assistant</i>
        </span>
      </div>
    ),
    experienceRange: [10, 25],
    experienceContent: <Research />,
  },
  {
    experienceTitle: 'Autograder Developer for CS 3110 Functional Programming',
    experienceThumbnail: (
      <div>
        Course Staff,{' '}
        <span>
          <i>TA</i>
        </span>
      </div>
    ),
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
