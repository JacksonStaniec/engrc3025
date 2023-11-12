'use client';

import { Group, ActionIcon, Text, Tooltip, Flex, Center } from '@mantine/core';
import { IconBrandYoutube, IconMail, IconFile } from '@tabler/icons-react';
import { useClipboard } from '@mantine/hooks';
import classes from './Socials.module.css';

const links = [
  { title: 'Youtube', link: 'https://www.youtube.com/', icon: <IconBrandYoutube stroke={1.5} /> },
  { title: 'Youtube', link: 'https://www.youtube.com/', icon: <IconBrandYoutube stroke={1.5} /> },
  { title: 'Youtube', link: 'https://www.youtube.com/', icon: <IconBrandYoutube stroke={1.5} /> },
];

const contactEmail = 'jks273@cornell.edu';

const Contact = () => {
  const clipboard = useClipboard();
  return (
    <Group gap="xs">
      <Tooltip
        label="Email copied!"
        offset={5}
        position="bottom"
        radius="xl"
        transitionProps={{ duration: 100, transition: 'slide-down' }}
        opened={clipboard.copied}
      >
        <ActionIcon
          onClick={() => clipboard.copy(contactEmail)}
          size="lg"
          variant="default"
          radius="xl"
          className={classes.icon}
        >
          <IconMail stroke={1.5} />
        </ActionIcon>
      </Tooltip>
      <Text>Contact</Text>
    </Group>
  );
};

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
    <Center>
      <Flex direction={{ base: 'row', md: 'column' }} gap="xs" mx="xs">
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
      </Flex>
    </Center>
  </div>
);
