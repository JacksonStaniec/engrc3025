'use client';

import { Space } from '@mantine/core';
import { Name } from '../components/Name/Name';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { About } from '@/components/About/About';
import { Exploration } from '@/components/Exploration/Exploration';

export default function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <Name />
      <About />
      <Exploration title="Projects" />
      <Space h="md" />
      <Exploration title="Experiences" />
      <Space h="sm" />
    </>
  );
}
