import { RangeSlider } from '@mantine/core';
import { useState } from 'react';
import classes from './TimeAxis.module.css';

export const TimeAxis = () => {
  const [value, setValue] = useState<[number, number]>([0, 100]);
  return (
    <RangeSlider
      label={null}
      marks={[
        { value: 0, label: 2021 },
        { value: 33, label: 2022 },
        { value: 66, label: 2023 },
        { value: 100, label: 2024 },
      ]}
      value={value}
      defaultValue={value}
      onChange={() => setValue([0, 100])}
      thumbSize={0}
      classNames={{ markLabel: classes.markLabel }}
    />
  );
};
