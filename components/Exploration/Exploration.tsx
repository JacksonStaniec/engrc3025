import { Container, Grid, Space, Title } from '@mantine/core';
import { Experience } from '../Experience/Experience';
import { GanntChart } from '../GanntChart/GanntChart';

type ExporationProps = {
  title: string;
};

export const Exploration = ({ title }: ExporationProps) => (
  <Container m="xs" maw="100%">
    <Title>{title}</Title>
    <Space h="md" />
    <Grid>
      <Grid.Col span={{ base: 12, md: 7 }}>
        <Experience />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 5 }}>
        <GanntChart />
      </Grid.Col>
    </Grid>
  </Container>
);
