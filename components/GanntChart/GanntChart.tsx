import { IconArrowDown, IconArrowRight } from '@tabler/icons-react';
import { Center, Container, Grid, Stack, Text } from '@mantine/core';
import { Timeline } from '../Timeline/Timeline';
import classes from './GanntChart.module.css';
import { TimeAxis } from './TimeAxis';

export type GanntChartElement = { title: string; range: [number, number] };

type GanntChartProps = {
  accentColor: string;
  chartElements: GanntChartElement[];
  selectedIndex: number;
  selectCallback: (id: number) => void;
};

export const GanntChart = ({
  accentColor,
  chartElements,
  selectedIndex,
  selectCallback,
}: GanntChartProps) => (
  <>
    <Container h={250} maw="100%">
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
            <Grid.Col span={{ base: 10, md: 8 }}>
              <Timeline
                accentColor={accentColor}
                key={i}
                id={i}
                range={range}
                selected={i === selectedIndex}
                clickCallback={selectCallback}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 2, md: 3 }}>
              <Center>
                <Text>{title}</Text>
              </Center>
            </Grid.Col>
          </Grid>
        ))}
        <Grid pb="lg">
          <Grid.Col span={{ base: 12, md: 1 }} />
          <Grid.Col pb="lg" span={{ base: 10, md: 8 }}>
            <TimeAxis />
          </Grid.Col>
          <Grid.Col span={{ base: 2, md: 3 }} />
        </Grid>
      </Stack>
    </Container>
  </>
);
