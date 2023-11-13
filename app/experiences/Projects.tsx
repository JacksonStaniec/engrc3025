import { Group, Pill, Text, Title } from '@mantine/core';
import classes from './Jobs.module.css';

export const DTI = () => (
  <>
    <Text my="xs">September 2021 - May 2023</Text>
    <Group my="xs" gap="xs">
      <Pill className={classes.pill}>Extracurricular</Pill>
      <Pill className={classes.pill}>TypeScript</Pill>
      <Pill className={classes.pill}>React</Pill>
      <Pill className={classes.pill}>CSS</Pill>
    </Group>
    <Text>
      I developed an extensible framework to automatically detect configuration issues and alert
      system administrators with the built-in issue management system. By the end of the summer, we
      were able to fully integrate my code with the rest of the system, and begin detecting simple
      problems like references that are no longer valid.
    </Text>
    <Title mt="xs" order={4}>
      Background
    </Title>
    <Text>
      One of the product offerings of Ab Initio is called the Metadata Hub, which gives tools to
      business users to easily manage and analyze extremely large quanities of data. Handling this
      much data can require many system administrators, and confiuring many customizable options to
      cater the Metadata Hub to their specific business needs. One of the goals of Ab Initio is to
      move their product line to the cloud marketplace. However, products in that space are expected
      to be self-managed and self-repairing. So, one of the tasks I worked on over the summer was
      creating this automatic issue detection system to be able to notify administrators of problems
      that arise when configuration changes are made to the Metadata Hub.
    </Text>
    <Title mt="xs" order={4}>
      Architecture
    </Title>
    <Text>
      The existing issue management center of the Metadata Hub provides an interface to reference,
      assign, and resolve problems with the system. So, the main functionality of the automatic
      issue detector should be to publish issues to this center, and automatically close issues when
      they are no longer detected. To accomplish this, there is a central issue synchronizer that
    </Text>
    <ol>
      <li>
        Dispatched different issue detection routines to find problems in different areas of the
        system
      </li>
      <li>Query for the most recent issues already in the database</li>
      <li>
        Compared the existing issues with the new found issues to determine how to update the
        databases, which could include creating a new issue for problems that haven&apos;t been seen
        before, updating existing issues with any new information found, and closing issues that
        were not found again.
      </li>
    </ol>
    <Text>
      This issue synchronizer would run once a day as a background maintanence task, but could also
      be run manually by adminsitrators.
    </Text>
    <Title mt="xs" order={4}>
      Results
    </Title>
    <Text>
      By the end of the summer, I was able to integrate the issue synchronizer with the rest of the
      system, and it was able to run two different types of issues:
    </Text>
    <ul>
      <li>Invalid references in report columns that refer to some object that no longer exists</li>

      <li>
        Problems with configured object inheritance that are detected on startup, but were
        previously skipped
      </li>
    </ul>
    <Text>
      I was also able to discuss accessbility concerns from the frontend changes with the UX team,
      and prempt concerns about localizing the appearance and language used in the issues created by
      the issue detector with the localization department.
    </Text>
  </>
);
