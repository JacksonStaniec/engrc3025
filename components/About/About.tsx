import { Container, Stack, Text } from '@mantine/core';
import { Socials } from '../Socials/Socials';
import classnames from './About.module.css';

const aboutText = `
Hi! I'm currently a senior at Cornell University in the College of Engineering, 
and my goal is to find a specialization in the broad field of computer science 
once I graduate. 

I'm always looking for ways to improve my skills, and I think mentorship from more 
experienced engineers is one of the best opportunities for that. 
I like to get involved in the non-engineering aspects of projects as well, so I'd 
be interested in participating in discussions about end-user experience or the 
business needs that the project addresses.
`;

export const About = () => (
  <Container m="md" px="xl" maw="100%">
    <Stack>
      <Socials />
      <Text className={classnames.about}>{aboutText}</Text>
    </Stack>
  </Container>
);
