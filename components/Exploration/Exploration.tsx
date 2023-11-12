import { Container, Grid, Space, Title } from '@mantine/core';
import { ReactNode, useState } from 'react';
import { Experience } from '../Experience/Experience';
import { GanntChart, type GanntChartElement } from '../GanntChart/GanntChart';

type ExporationProps = {
  title: string;
  accentColor: string;
  experiences: ExperienceDescriptor[];
};

export type ExperienceDescriptor = {
  experienceTitle: string;
  experienceRange: [number, number];
  experienceContent: ReactNode;
};

export const Exploration = ({ title, accentColor, experiences }: ExporationProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const chartElements: GanntChartElement[] = experiences.map(
    (exp) =>
      ({
        title: exp.experienceTitle,
        range: exp.experienceRange,
      }) as GanntChartElement
  );

  return (
    <Container maw="100%">
      <Title ml="xs">{title}</Title>
      <Space h="md" />
      <Grid>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Experience
            title={experiences[selectedIndex].experienceTitle}
            content={experiences[selectedIndex].experienceContent}
            accentColor={accentColor}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <GanntChart
            accentColor={accentColor}
            chartElements={chartElements}
            selectedIndex={selectedIndex}
            selectCallback={setSelectedIndex}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};
