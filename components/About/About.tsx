import { Container, Stack, Text } from '@mantine/core';
import { Socials } from '../Socials/Socials';
import classnames from './About.module.css';

export const About = () => (
  <Container m="md" px="xl" maw="100%">
    <Stack>
      <Socials />
      <div className={classnames.about}>
        <Text span>
          Hi! I&apos;m currently a senior at <b>Cornell University</b> in the College of
          Engineering.{' '}
        </Text>
        <Text span>
          I&apos;m always looking for ways to improve my skills, and I think <b>mentorship</b> from
          more experienced engineers is one of the best opportunities for that.{' '}
        </Text>
        <Text span>
          I like to get involved in the <b>non-engineering</b> aspects of projects as well, so
          I&apos;d be interested in participating in discussions about end-user experience or the
          business needs that the project addresses.
        </Text>
      </div>
    </Stack>
  </Container>
);
