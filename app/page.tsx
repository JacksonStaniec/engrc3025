import { Name } from '../components/Name/Name';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Socials } from '@/components/Socials/Socials';

export default function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <Name />
      <Socials />
    </>
  );
}
