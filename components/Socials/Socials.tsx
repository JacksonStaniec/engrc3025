'use client';

import { Group, ActionIcon, rem, Stack, CopyButton, Notification, Text } from '@mantine/core';
import { IconBrandYoutube, IconMail, IconFile } from '@tabler/icons-react';
import classes from './Socials.module.css';

const links = [
  { title: 'Youtube', link: 'https://www.youtube.com/', icon: <IconBrandYoutube stroke={1.5} /> },
  { title: 'Youtube', link: 'https://www.youtube.com/', icon: <IconBrandYoutube stroke={1.5} /> },
  { title: 'Youtube', link: 'https://www.youtube.com/', icon: <IconBrandYoutube stroke={1.5} /> },
];

const contactEmail = 'jks273@cornell.edu';

// TODO: download resume butto
// TODO: about me section

// TODO: change to tooltip https://ui.mantine.dev/category/buttons/
const Contact = () => (
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

const Resume = () => (
  <>
    <Group gap="xs">
      <ActionIcon
        component="a"
        size="lg"
        variant="default"
        radius="xl"
        className={classes.icon}
        href="/data/Resume.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconFile stroke={1.5} />
      </ActionIcon>
      <Text>Resume</Text>
    </Group>
  </>
);

export const Socials = () => (
  <div className={classes.inner}>
    <Stack gap="xs" mx="xs">
      {links.map(({ title, link, icon }, i) => (
        <Group gap="xs" key={i}>
          <ActionIcon
            component="a"
            size="lg"
            variant="default"
            radius="xl"
            className={classes.icon}
            href={link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {icon}
          </ActionIcon>
          <Text>{title}</Text>
        </Group>
      ))}
      <Resume />
      <Contact />
    </Stack>
  </div>
);
