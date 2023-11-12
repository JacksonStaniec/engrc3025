import { RangeSlider } from '@mantine/core';
import { useState } from 'react';
import classes from './Timeline.module.css';

type TimeLineProps = {
  accentColor: string;
  id: number;
  selected: boolean;
  range: [number, number];
  clickCallback: (id: number) => void;
};

export const Timeline = ({ accentColor, id, selected, range, clickCallback }: TimeLineProps) => {
  const [value, setValue] = useState<[number, number]>(range);
  return (
    <RangeSlider
      color={selected ? accentColor : 'gray'}
      label={null}
      value={value}
      defaultValue={value}
      onChange={() => setValue(range)}
      onClick={() => clickCallback(id)}
      thumbSize={0}
      classNames={{
        bar: classes.bar,
        track: classes.track,
        thumb: classes.thumb,
        root: classes.root,
      }}
    />
  );
};
