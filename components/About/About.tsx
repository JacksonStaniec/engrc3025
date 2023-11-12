import { Container, Grid, Text } from '@mantine/core';
import { Socials } from '../Socials/Socials';

const aboutText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const About = () => (
  <Container m="xs" maw="100%">
    <Grid>
      <Grid.Col span={{ base: 12, md: 2 }}>
        <Socials />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 10 }}>
        <Text>{aboutText}</Text>
      </Grid.Col>
    </Grid>
  </Container>
);
