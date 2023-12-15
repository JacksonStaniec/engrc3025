import { Container, ScrollArea, Title, rem } from '@mantine/core';
import { ReactNode, useEffect, useRef } from 'react';
import classes from './Experience.module.css';

type ExperienceProps = {
  title: string;
  content: ReactNode;
  accentColor: string;
};

export const Experience = ({ title, content, accentColor }: ExperienceProps) => {
  const viewport = useRef<HTMLDivElement>(null);
  useEffect(() => viewport.current!.scrollTo({ top: 0, behavior: 'smooth' }), [title]);

  return (
    <Container
      className={classes.experience}
      style={{
        borderLeftStyle: 'solid',
        borderColor: accentColor,
        borderLeftWidth: rem(8),
      }}
    >
      <ScrollArea
        h={375}
        type="auto"
        offsetScrollbars
        scrollbarSize={8}
        scrollHideDelay={250}
        className={classes.scroll}
        viewportRef={viewport}
      >
        <Title order={5}>{title}</Title>
        {content}
      </ScrollArea>
    </Container>
  );
};
