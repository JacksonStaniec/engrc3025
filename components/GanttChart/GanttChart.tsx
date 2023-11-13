import { IconArrowDown, IconArrowRight } from '@tabler/icons-react';
import { Center, Container, Grid, Stack, Text } from '@mantine/core';
import { Timeline } from '../Timeline/Timeline';
import classes from './GanttChart.module.css';
import { TimeAxis } from './TimeAxis';

export type GanttChartElement = { title: string; range: [number, number] };

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
          <Grid key={i} className={classes['column-arrangement']}>
            <Grid.Col span={{ base: 12, md: 1 }}>
              <Center>
                <div hidden={i !== selectedIndex}>
                  <IconArrowDown color={accentColor} className={classes['icon-mobile']} />
                  <IconArrowRight color={accentColor} className={classes['icon-desktop']} />
                </div>
              </Center>
            </Grid.Col>
            <Grid.Col span={{ base: 1, md: 0 }} />
            <Grid.Col span={{ base: 7, md: 7 }}>
              <Timeline
                accentColor={accentColor}
                key={i}
                id={i}
                range={range}
                selected={i === selectedIndex}
                clickCallback={selectCallback}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 4, md: 3 }}>
              <Text>{title}</Text>
            </Grid.Col>
          </Grid>
        ))}
        <Grid pb="lg">
          <Grid.Col span={{ base: 12, md: 1 }} />
          <Grid.Col span={{ base: 1, md: 0 }} />
          <Grid.Col pb="lg" span={{ base: 9, md: 8 }}>
            <TimeAxis />
          </Grid.Col>
          <Grid.Col span={{ base: 2, md: 3 }} />
        </Grid>
      </Stack>
    </Container>
  </>
);
