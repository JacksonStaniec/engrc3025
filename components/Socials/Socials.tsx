'use client';

import {
  Anchor,
  Group,
  ActionIcon,
  rem,
  Stack,
  CopyButton,
  Notification,
  Text,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconMail } from '@tabler/icons-react';
import classes from './Socials.module.css';

const links = [
  { title: 'Youtube', link: 'https://www.youtube.com/', icon: <IconBrandYoutube stroke={1.5} /> },
  { title: 'Youtube', link: 'https://www.youtube.com/', icon: <IconBrandYoutube stroke={1.5} /> },
  { title: 'Youtube', link: 'https://www.youtube.com/', icon: <IconBrandYoutube stroke={1.5} /> },
];

const contactEmail = 'jks273@cornell.edu';

const Contact = () => {
  return (
    <CopyButton value={contactEmail} timeout={1000}>
      {({ copied, copy }) => (
        <>
          <Group gap="xs">
            <ActionIcon
              onClick={copy}
              size="lg"
              variant="default"
              radius="xl"
              className={classes.icon}
            >
              <IconMail stroke={1.5} />
            </ActionIcon>
            <Text>Contact</Text>
          </Group>
          {copied && (
            <Notification
              withCloseButton={false}
              title="Email copied!"
              miw={rem(100)}
              maw={rem(150)}
            />
          )}
        </>
      )}
    </CopyButton>
  );
};

export const Socials = () => {
  return (
    <div className={classes.inner}>
      <Stack gap="xs" mx="xs">
        {links.map(({ title, link, icon }, i) => {
          return (
            <Group gap="xs" key={i}>
              <ActionIcon
                component="a"
                size="lg"
                variant="default"
                radius="xl"
                className={classes.icon}
                href={link}
                target="_blank"
              >
                {icon}
              </ActionIcon>
              <Text>{title}</Text>
            </Group>
          );
        })}
        <Contact />
      </Stack>
    </div>
  );
};
