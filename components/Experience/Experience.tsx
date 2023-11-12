import { Container, ScrollArea, Title } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './Experience.module.css';

type ExperienceProps = {
  title: string;
  content: ReactNode;
};

export const Experience = ({ title, content }: ExperienceProps) => (
  <Container className={classes.experience}>
    <ScrollArea h={250} type="hover" offsetScrollbars scrollbarSize={8} scrollHideDelay={250}>
      <Title order={5}>{title}</Title>
      {content}
    </ScrollArea>
  </Container>
);
