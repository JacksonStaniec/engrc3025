import { Container, ScrollArea, Title, rem } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './Experience.module.css';

type ExperienceProps = {
  title: string;
  content: ReactNode;
  accentColor: string;
};

export const Experience = ({ title, content, accentColor }: ExperienceProps) => (
  <Container
    className={classes.experience}
    style={{ borderLeftStyle: 'solid', borderLeftColor: accentColor, borderLeftWidth: rem(8) }}
  >
    <ScrollArea
      h={250}
      type="hover"
      offsetScrollbars
      scrollbarSize={8}
      scrollHideDelay={250}
      className={classes.scroll}
    >
      <Title order={5}>{title}</Title>
      {content}
    </ScrollArea>
  </Container>
);
