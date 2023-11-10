import { Title, Text } from '@mantine/core';
import classes from './Name.module.css';

export const Name = () => {
  return (
    <>
      <Title className={classes.title} ta="center">
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Jackson Staniec
        </Text>
      </Title>
    </>
  );
};
