import { Center, Group, Pill, Spoiler, Text, Title } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';
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
      As a technical project manager on the Cornell DTI project team, I oversaw a small team of 3-6
      developers that implemented several new product features.
    </Text>
    <Title mt="xs" order={4}>
      Background
    </Title>
    <Spoiler maxHeight={50} showLabel="Read more" hideLabel="Hide">
      <Text>
        Cornell DTI is a project team that create web applications for commnity use -- like
        QueueMeIn that professors use to manage office hours. The IDOL (Internal DTI Organization
        Logic) subteam is responsible for creating and maintaining tools for the team leads to more
        easily manage the ~100 members of the project team. assignemtns for debs is the portfolio.
        All hands meetings. Team events.
      </Text>
      <Text mt="sm">
        Since project teams are for credit, team members have several assignments to fulfill
        throughout the semester:
      </Text>
      <ul>
        <li>
          <b>Developer Portfolios. </b>
          Each developer on the team must periodically submit a link to the GitHub PRs that they
          have made, so we can check that they are making steady contributions.
        </li>
        <li>
          <b>All-Hands Meetings. </b>
          Each member is expected to attend the biweekly all-hands meeting so that general team
          updates can be given and so that subteams remain in sync.
        </li>
        <li>
          <b>Team Event Credits. </b>
          Each member must complete 3 team event credits, which can be gained by participating in
          broader initiatives or outings from the team in order to promote community and club
          engagement. updates can be given and so that subteams remain in sync.
        </li>
      </ul>
    </Spoiler>
    <Title mt="xs" order={4}>
      Architecture
    </Title>
    <Spoiler maxHeight={150} showLabel="Read more" hideLabel="Hide">
      <Text>
        One product we released was an autograder that uses GitHub APIs to verify developer
        portfolios based on all 3 criteria holding.
      </Text>
      <ol>
        <li>PRs must be made within a certain time period.</li>
        <li>At least 2 PR links must be reviews for another team member&apos;s PR.</li>
        <li>
          At least 2 PR links must be an original, meaningful contribution, measured in terms of
          lines of code.
        </li>
      </ol>
      <Text>
        Members would submit these portfolios through a form on the IDOL website, and admins would
        be able to review the grades, override the determination based on exceptions, and manage
        portfolio assignments.
      </Text>
      <Text mt="xs">
        Another product that was revitalized was Shoutouts, which allow for members to send
        anonymous messages praising certain other members that would be read during the all-hands
        meetings.
      </Text>
    </Spoiler>
    <Title mt="xs" order={4}>
      Results
    </Title>
    <Spoiler maxHeight={50} showLabel="Read more" hideLabel="Hide">
      <Text>
        Overseeing these feature developments allowed me to participate in user outreach by directly
        interface with the team development leads, who are the stakeholders and users for the admin
        side of our products. Throughout the semesters, we were also able to quickly iterate on user
        feedback, and met strict external deadlines with a comfortable and productive development
        velocity.
      </Text>
    </Spoiler>
  </>
);

export const Compiler = () => {
  const etaProg = ` 
use io

main(args: int[][]) {
  print("Hello, Worl\\x{64}!\\n")
  c3po: int = 'x' + 47;
  r2d2: int = c3po // No Han Solo
}
`;

  const etaLex = `
1:1 use
1:5 id io
3:1 id main
3:5 (
3:6 id args
3:10 :
3:12 int
3:15 [
3:16 ]
3:17 [
3:18 ]
3:19 )
3:21 {
4:3 id print
4:8 (
4:9 string Hello, World!\\n
4:31 )
5:3 id c3po
5:7 :
5:9 int
5:13 =
5:15 character x
5:19 +
5:21 integer 47
5:23 ;
6:3 id r2d2
6:7 :
6:9 int
6:13 =
6:15 id c3po
7:1 }
`;

  const etaParse = `
(((use io)) (
  (main ( (args ([] ([] int))) ) ( )  (
  (print "Hello, World!\\n")
  (= (c3po int) (+ 'x' 47))
  (= (r2d2 int) c3po)))))  
`;

  const etaTyped = `
Valid Eta Program
`;

  const etaInter = `
(COMPUNIT source
  (DATA _string_const1 (14 72 101 108 108 
    111 44 32 87 111 114 108 100 33 10))
  (FUNC _Imain_paai
    (SEQ
      (MOVE (TEMP args) (TEMP _ARG1))
      (CALL_STMT 0 (NAME _Iprint_pai) 
        (ADD (NAME _string_const1) (CONST 8)))
      (RETURN))))
`;

  const etaAssem = `
.file "source.eta"
.intel_syntax noprefix
.section data
.data 
.globl _string_const1
.type _string_const1 @object
_string_const1:
.quad 14
.quad 72
.quad 101
.quad 108
.quad 108
.quad 111
.quad 44
.quad 32
.quad 87
.quad 111
.quad 114
.quad 108
.quad 100
.quad 33
.quad 10
.section text
.text 
.globl _Imain_paai
.type _Imain_paai @function
_Imain_paai:
push rbp
mov rbp, rsp
push r15
push r14
push r13
sub rsp, 24
mov r15, rdi
mov QWORD PTR [rbp-32], r15
mov r15, OFFSET FLAT:_string_const1
mov QWORD PTR [rbp-40], r15
mov r14, QWORD PTR [rbp-40]
lea r15, QWORD PTR [r14 + 8]
mov QWORD PTR [rbp-48], r15
mov r15, QWORD PTR [rbp-48]
mov rdi, r15
call _Iprint_pai
jmp .L_Imain_paai_shared_epilogue
.L_Imain_paai_shared_epilogue:
mov r13, QWORD PTR [rbp-24]
mov r14, QWORD PTR [rbp-16]
mov r15, QWORD PTR [rbp-8]
leave
ret
`;
  return (
    <>
      <Text my="xs">January 2023 - May 2023</Text>
      <Group my="xs" gap="xs">
        <Pill className={classes.pill}>Class Project</Pill>
        <Pill className={classes.pill}>Java</Pill>
      </Group>
      <Spoiler maxHeight={50} showLabel="Read more" hideLabel="Hide">
        <Text>
          As part of the project course requirment for CS at Cornell, my group and I completed a
          semester-long project to build a complete compiler for a new language called Eta.
          Compilation steps included lexing, parsing, typechecking, abstract syntax tree (AST)
          generation, intermediate representation (IR) generation, and assembly instruction
          selection.
        </Text>
      </Spoiler>
      <Title mt="xs" order={4}>
        Background
      </Title>

      <Text>
        The Eta language being implemented is statically typed, similar in syntax to C or Java, and
        comes with a standard library for IO capabilities. An example program in Eta:
      </Text>
      <Center>
        <CodeHighlight code={etaProg} language="c" withCopyButton={false} />
      </Center>
      <Title mt="xs" order={4}>
        Architecture
      </Title>
      <Spoiler maxHeight={150} showLabel="Read more" hideLabel="Hide">
        <Text>
          The lexing step was accomplished by configuring JFlex for the Eta language. The example
          program once lexed:
        </Text>
        <Center>
          <CodeHighlight code={etaLex} language="c" withCopyButton={false} />
        </Center>
        <Text>
          The parsing step was accomplished by configuring a JCup grammar for the Eta language. The
          example program once parsed:
        </Text>
        <Center>
          <CodeHighlight code={etaParse} language="c" withCopyButton={false} />
        </Center>
        <Text>Then, the parsed program AST was typechecked:</Text>
        <Center>
          <CodeHighlight code={etaTyped} language="c" withCopyButton={false} />
        </Center>
        <Text>Then, the AST was lowered to the IR:</Text>
        <Center>
          <CodeHighlight code={etaInter} language="c" withCopyButton={false} />
        </Center>
        <Text>Finally, the IR is transformed into assembly instructions based on context:</Text>
        <Center>
          <CodeHighlight code={etaAssem} language="c" withCopyButton={false} />
        </Center>
      </Spoiler>
    </>
  );
};
