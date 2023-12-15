import { Center, Group, Pill, Text, Title, Image, Code, Spoiler } from '@mantine/core';
import NextImage from 'next/image';
import VennDiagram from '../../public/data/abinitio.svg';
import DarkVennDiagram from '../../public/data/abinitiodark.svg';
import Dashboard1 from '../../public/data/module1.png';
import Dashboard2 from '../../public/data/module2.png';
import Telephony from '../../public/data/telephony.png';
import Sip from '../../public/data/sip-protocol.png';
import classes from './Jobs.module.css';

export const AbInitio = () => (
  <>
    <Text my="xs">June 2023 - August 2023</Text>
    <Group my="xs" gap="xs">
      <Pill className={classes.pill}>Internship</Pill>
      <Pill className={classes.pill}>Java</Pill>
    </Group>
    <Spoiler maxHeight={50} showLabel="Read more" hideLabel="Hide">
      <Text>
        I developed an extensible framework to automatically detect configuration issues and alert
        system administrators with the built-in issue management system. By the end of the summer,
        we were able to fully integrate my code with the rest of the system, and begin detecting
        simple problems like references that are no longer valid.
      </Text>
    </Spoiler>
    <Title mt="xs" order={4}>
      Background
    </Title>
    <Spoiler maxHeight={50} showLabel="Read more" hideLabel="Hide">
      <Text>
        One of the goals of Ab Initio is to move their product line to the cloud marketplace.
        However, products in that space are expected to be self-managed and self-repairing. One of
        the product offerings of Ab Initio is called the Metadata Hub, which gives tools to business
        users to easily manage and analyze extremely large quanities of data. Handling this much
        data can require many system administrators, and confiuring many customizable options to
        cater the Metadata Hub to their specific business needs. So, one of the tasks I worked on
        over the summer was creating this automatic issue detection system to be able to notify
        administrators of problems that arise when configuration changes are made to the Metadata
        Hub.
      </Text>
    </Spoiler>
    <Title mt="xs" order={4}>
      Architecture
    </Title>
    <Spoiler maxHeight={325} showLabel="Read more" hideLabel="Hide">
      <Center>
        <Image
          component={NextImage}
          src={VennDiagram}
          alt="Venn diagram explaining possible tasks that issue synchronizer can execute."
          darkHidden
        />
        <Image
          component={NextImage}
          src={DarkVennDiagram}
          alt="Venn diagram explaining possible tasks that issue synchronizer can execute."
          lightHidden
        />
      </Center>
      <Text>
        The existing issue management center of the Metadata Hub provides an interface to reference,
        assign, and resolve problems with the system. So, the main functionality of the automatic
        issue detector should be to publish issues to this center, and automatically close issues
        when they are no longer detected. To accomplish this, there is a central issue synchronizer
        that
      </Text>
      <ol>
        <li>
          Dispatched different issue detection routines to find problems in different areas of the
          system
        </li>
        <li>Query for the most recent issues already in the database</li>
        <li>
          Compared the existing issues with the new found issues to determine how to update the
          databases, which could include creating a new issue for problems that haven&apos;t been
          seen before, updating existing issues with any new information found, and closing issues
          that were not found again.
        </li>
      </ol>

      <Text>
        This issue synchronizer would run once a day as a background maintanence task, but could
        also be run manually by adminsitrators.
      </Text>
    </Spoiler>
    <Title mt="xs" order={4}>
      Results
    </Title>
    <Spoiler maxHeight={150} showLabel="Read more" hideLabel="Hide">
      <Text>
        By the end of the summer, the issue synchronizer was able to find two different types of
        issues:
      </Text>
      <ul>
        <li>
          Invalid references in report columns that refer to some object that no longer exists
        </li>

        <li>
          Problems with configured object inheritance that are detected on startup, but were
          previously skipped
        </li>
      </ul>
      <Text>
        I was also able to discuss accessbility concerns from the frontend changes with the UX team,
        and preempt concerns about localizing the appearance and language used in the issues created
        by the issue detector with the localization department.
      </Text>
    </Spoiler>
  </>
);

export const Cogito = () => (
  <>
    <Text my="xs">January 2022 - July 2022</Text>
    <Group my="xs" gap="xs">
      <Pill className={classes.pill}>Co-op</Pill>
      <Pill className={classes.pill}>Python</Pill>
      <Pill className={classes.pill}>XML</Pill>
    </Group>
    <Text>
      I improved the realism of the call simulating tool used for the loadtesting the company&apos;s
      flagship AI call analysis product.
    </Text>
    <Title mt="xs" order={4}>
      Background
    </Title>
    <Spoiler maxHeight={300} showLabel="Read more" hideLabel="Hide">
      <Text>
        <Text fs="italic" span>
          Internet telephony
        </Text>{' '}
        is the method by which calls are able to be initiated and carried out over the internet.
        <Center>
          <Image
            component={NextImage}
            src={Telephony}
            alt="Explanation of basic architecture of internet telephony"
            h="auto"
            maw="100%"
          />
        </Center>
        The company makes a product that uses AI to analyze conversations and gives feedback for
        emotion, speaking rate, periods of uninterrupted speaking, and other metrics. The company
        regularly runs a load testing tool, since their products are used in call centers with very
        large volumes of calls. Their current software could only load test at a constant rate,
        which does not follow actual patterns -- which usually follows a large acceleration of calls
        being placed at the beginning of the day, peaking around midday working hours, and declining
        until evening.
      </Text>
    </Spoiler>
    <Title mt="xs" order={4}>
      Architecture
    </Title>
    <Spoiler maxHeight={325} showLabel="Read more" hideLabel="Hide">
      <Text>
        The load test calls places calls using an XML template that employs the SIP communication
        protocol.
        <Center>
          <Image
            component={NextImage}
            src={Sip}
            alt="SIP internet telephony protocol"
            h="auto"
            maw="50%"
          />
        </Center>
        Previously, these XML documents were manually created, and thus only had one set rate to
        place calls. So, in order to faciliate dynamic call rates, I needed to implement:
      </Text>
      <ol>
        <li>An interface for specifying what rate distribution to follow.</li>
        <li>
          A method to dynamically generate an XML file that adheres to the specified rate
          distribution.
        </li>
      </ol>
      <Text>
        The interface was a text file that defined the rate distribution in terms of a piecewise
        function. Some computation was necessary to compute the actual number of calls to place per
        minute to follow this rate, given the time constraint and the total number of calls to
        place.
      </Text>
    </Spoiler>
    <Title mt="xs" order={4}>
      Results
    </Title>
    <Spoiler maxHeight={50} showLabel="Read more" hideLabel="Hide">
      <Text>
        This new dynamic rate loading testing opened new testing capabilities, including the ability
        to ascertain the correct autoscaling of containers resulting from increasing loads. These
        new testing avenues preceded a major product release, and the company&apos;s full transition
        from on-prem infrastructure to cloud-based software service.
      </Text>
    </Spoiler>
  </>
);

export const Research = () => (
  <>
    <Text my="xs">May 2021 - July 2021</Text>
    <Group my="xs" gap="xs">
      <Pill className={classes.pill}>Internship</Pill>
      <Pill className={classes.pill}>Python</Pill>
    </Group>
    <Text>
      I assisted a Cornell lecturer on module composition research by creating a tool to analyze the
      relationships between module structure and ease of modifiability.
    </Text>
    <Title mt="xs" order={4}>
      Background
    </Title>
    <Spoiler maxHeight={50} showLabel="Read more" hideLabel="Hide">
      <Text>
        Ease of code modifiability is a prominent concern in good software engineering; software
        that is hard to modify from its original construction will be difficult to maintain and
        unable to effectively adapt to changing business requirements or new desired functionality.
      </Text>
      <Text mt="sm">
        One measure of modifiability is coupling: the degree of interdependence between modules. Low
        coupling means that modules are fairly independent, while high degrees of coupling means
        that changing one module likely requires changing another module that uses it -- meaning
        that small changes in one module may require multiple changes in several other files. So,
        the goal of our project was to create a tool that allows an arbitrary Python repository to
        be analyzed for various dependency relationships, and provide an interface for users to
        explore these relationships visually.
      </Text>
    </Spoiler>
    <Title mt="xs" order={4}>
      Architecture
    </Title>
    <Spoiler maxHeight={325} showLabel="Read more" hideLabel="Hide">
      <Center>
        <Image component={NextImage} src={Dashboard1} alt="" h={300} w="auto" />
      </Center>
      <Text>
        To analyze code structure, we traversed the Python abstract syntax trees (ASTs) of a
        repository and constructed a directed multigraph with edges reprenting a variety of
        relationships -- like import dependencies, inheritance dependencies, and even functional
        dependencies within modules. We developed a frontend dashboard to allow users to graphically
        explore these relationships. For example, in this Python repository, the central node
        represents a <Code>types</Code> file, which has an extremely high degree of coupling, since
        every other modules depends on it for its typing defintions.
      </Text>
    </Spoiler>
    <Title mt="xs" order={4}>
      Results
    </Title>
    <Spoiler maxHeight={325} showLabel="Read more" hideLabel="Hide">
      <Center>
        <Image component={NextImage} src={Dashboard2} alt="" h={300} w="auto" />
      </Center>
      <Text>
        By the end of the summer, we were able to represent various relationships, and presented our
        preliminary results to a Cornell CS professor for guidance on next steps and potential
        publication.
      </Text>
    </Spoiler>
  </>
);
export const TeachingAssistant = () => (
  <>
    <Text my="xs">May 2021 - July 2021</Text>
    <Group my="xs" gap="xs">
      <Pill className={classes.pill}>Part Time</Pill>
      <Pill className={classes.pill}>Python</Pill>
      <Pill className={classes.pill}>OCaml</Pill>
    </Group>
    <Text>
      As a TA for CS 3110 - Functional Programming and Data Structures, I lead discussion sections
      with ~30 students and helped to develop and improve the autograder used for assignments.
    </Text>
    <Title mt="xs" order={4}>
      Background
    </Title>
    <Spoiler maxHeight={50} showLabel="Read more" hideLabel="Hide">
      <Text>
        We give several programming assignments throughout the year, and in a course that has
        enrollment size of about 400 students per semester, using an autograder is absolutely
        necessary for the course to function. However, while the vast majority of student
        assignments are able to be graded, a small number of submissions per project are malformed
        in such a way that the autograder cannot run. Since this results in an automatic zero score
        for the student, we want to avoid these stressful situations whenever possible.
      </Text>
    </Spoiler>
    <Title mt="xs" order={4}>
      Results
    </Title>
    <Spoiler maxHeight={50} showLabel="Read more" hideLabel="Hide">
      <Text>
        To minimize the number of ungradeable submissions, we created a script to search for the
        source code in student submissions regardless of file structure, and reposition it in the
        format that the autograder is expecting. In Fall 2023, I also helped develop the autograder
        and testing suite for two new assignments that were created that semester.
      </Text>
    </Spoiler>
  </>
);
