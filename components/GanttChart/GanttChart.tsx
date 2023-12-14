import { Container, Grid, Stack } from '@mantine/core';
import { ReactNode } from 'react';
import { Timeline } from '../Timeline/Timeline';
import classes from './GanttChart.module.css';
import { TimeAxis } from './TimeAxis';

export type GanttChartElement = { title: ReactNode; range: [number, number] };

type GanttChartProps = {
  accentColor: string;
  chartElements: GanttChartElement[];
  selectedIndex: number;
  selectCallback: (id: number) => void;
};

export const GanttChart = ({
  accentColor,
  chartElements,
  selectedIndex,
  selectCallback,
}: GanttChartProps) => (
  <>
    <Container maw="100%">
      <Stack h="100%" justify="space-between">
        {chartElements.map(({ title, range }, i) => (
          <Grid gutter="xs" ml={0} key={i} className={classes['column-arrangement']}>
            <Grid.Col span={{ base: 8 }}>
              <Timeline
                accentColor={accentColor}
                key={i}
                id={i}
                range={range}
                selected={i === selectedIndex}
                clickCallback={selectCallback}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 4 }}>{title}</Grid.Col>
          </Grid>
        ))}
        <Grid pb="lg">
          <Grid.Col span={{ base: 0.5 }} />
          <Grid.Col pb="lg" span={{ base: 7.5 }}>
            <TimeAxis />
          </Grid.Col>
          <Grid.Col span={{ base: 4 }} />
        </Grid>
      </Stack>
    </Container>
  </>
);
