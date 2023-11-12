import { useState } from 'react';
import { IconArrowDown, IconArrowRight } from '@tabler/icons-react';
import { Center, Container, Grid, Stack, Text } from '@mantine/core';
import { Timeline } from '../Timeline/Timeline';
import classes from './GanntChart.module.css';
import { TimeAxis } from './TimeAxis';

type GanntChartElements = { title: string; range: [number, number] };

const experienceRanges = [
  { title: 'my first', range: [60, 80] },
  { title: 'my second', range: [40, 70] },
  { title: 'my third', range: [20, 50] },
] as GanntChartElements[];

export const GanntChart = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      <Container h={250} maw="100%">
        <Stack h="100%" justify="space-between">
          {experienceRanges.map(({ title, range }, i) => (
            <Grid className={classes['column-arrangement']}>
              <Grid.Col span={{ base: 12, md: 1 }}>
                <Center>
                  <div hidden={i !== selectedIndex}>
                    <IconArrowDown color="red" className={classes['icon-mobile']} />
                    <IconArrowRight color="red" className={classes['icon-desktop']} />
                  </div>
                </Center>
              </Grid.Col>
              <Grid.Col span={{ base: 10, md: 8 }}>
                <Timeline
                  key={i}
                  id={i}
                  range={range}
                  selected={i === selectedIndex}
                  clickCallback={setSelectedIndex}
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
};
