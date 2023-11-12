'use client';

import { Name } from '../components/Name/Name';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { About } from '@/components/About/About';

export default function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <Name />
      <About />
    </>
  );
}
