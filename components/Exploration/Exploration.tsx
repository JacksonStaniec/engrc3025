import { Container, Grid, Title, Text } from '@mantine/core';
import { ReactNode, useEffect, useState } from 'react';
import { Experience } from '../Experience/Experience';
import { GanttChart, type GanttChartElement } from '../GanttChart/GanttChart';
import classes from './Exploration.module.css';

type ExporationProps = {
  title: string;
  accentColor: string;
  experiences: ExperienceDescriptor[];
  showInstructions: boolean;
  showInstructionsCallback: (a: boolean) => void;
};

export type ExperienceDescriptor = {
  experienceTitle: string;
  experienceThumbnail: ReactNode;
  experienceRange: [number, number];
  experienceContent: ReactNode;
};

export const Exploration = ({
  title,
  accentColor,
  experiences,
  showInstructions,
  showInstructionsCallback,
}: ExporationProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // fade out instructions once they start using it
  useEffect(() => {
    if (selectedIndex !== 0) {
      showInstructionsCallback(false);
    }
  }, [selectedIndex]);

  const chartElements: GanttChartElement[] = experiences.map(
    (exp) =>
      ({
        title: exp.experienceThumbnail,
        range: exp.experienceRange,
      }) as GanttChartElement
  );

  return (
    <Container maw="100%">
      <Title ml="xs">{title}</Title>
      <Grid gutter="xs">
        <Grid.Col span={{ base: 10, md: 7 }}>
          <Text
            fs="italic"
            mb="sm"
            ml="sm"
            className={showInstructions ? '' : classes['instructions-hidden']}
          >
            (View the experience here)
          </Text>
          <Experience
            title={experiences[selectedIndex].experienceTitle}
            content={experiences[selectedIndex].experienceContent}
            accentColor={accentColor}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Text
            fs="italic"
            mb="sm"
            ml="sm"
            className={showInstructions ? '' : classes['instructions-hidden']}
          >
            (Click bars to change view)
          </Text>
          <GanttChart
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
