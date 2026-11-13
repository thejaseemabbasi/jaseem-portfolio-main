import type { ProcessStep } from '~/types';

export const process: ProcessStep[] = [
  {
    stage: 'Stage 01',
    title: 'Scope & Align',
    body: 'Audit business goals, technical constraints, and stakeholder expectations. Establish a clear work breakdown structure, cost baseline, and initial risk register before sprint one begins.',
    timing: 'Discovery',
  },
  {
    stage: 'Stage 02',
    title: 'Plan & Prioritize',
    body: 'Translate PRDs and RFP commitments into a structured backlog in Jira or Azure DevOps—locking dependencies, acceptance criteria, and balanced capacity across engineering, content, and QA.',
    timing: 'Planning',
  },
  {
    stage: 'Stage 03',
    title: 'Execute & Govern',
    body: 'Run disciplined Scrum or hybrid cadences with clear sprint demos and retrospectives. Surface blockers early, enforce vendor SLAs, and keep leadership informed with concise milestone reporting.',
    timing: 'Execution',
  },
  {
    stage: 'Stage 04',
    title: 'Launch & Transition',
    body: 'Coordinate UAT, security and performance checks, and go-live readiness—then transition cleanly from fixed-price launch into SLA-governed maintenance or Live Ops.',
    timing: 'Handover',
  },
];

export const processHeading = {
  eyebrow: 'Delivery cadence',
  title: 'Four stages from ambiguous brief to predictable launch.',
  intro:
    'Each stage locks the decisions the next team depends on—preventing late-stage scope drift, localization bottlenecks, and surprise release delays.',
};
