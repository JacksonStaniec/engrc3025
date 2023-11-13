import { Title, Text } from '@mantine/core';
import classes from './Name.module.css';

export const Name = () => (
  <>
    <Title order={1} className={classes.title} ta="center">
      <Text
        inherit
        variant="gradient"
        component="span"
        gradient={{ from: 'var(--mantine-color-blue-6)', to: 'var(--mantine-color-red-6)' }}
      >
        Jackson Staniec
      </Text>
    </Title>
  </>
);
