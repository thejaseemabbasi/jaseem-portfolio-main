import type { FaqItem } from '~/types';

export const faq: FaqItem[] = [
  {
    question: 'Which roles and engagement models are you open to?',
    answer:
      'I am open to full-time remote roles as a Technical Project Manager, Scrum Master, or Product Manager across MENA, North America, and Europe, as well as structured delivery leadership for fixed-scope or retainer engagements.',
  },
  {
    question: 'How do you govern fixed-price vs. time-and-materials (T&M) engagements?',
    answer:
      'For fixed-price SOWs, I establish strict work breakdown structures, cost baselines, and change-control gates before sprint one. For evolving products, I transition or structure T&M and SLA-governed retainers with transparent weekly reporting.',
  },
  {
    question: 'Can you step into an in-flight program that is slipping?',
    answer:
      'Yes. In the first week, I audit the active backlog, surface critical-path dependencies and risks, reset sprint cadences with engineering and QA, and put a clear weekly reporting rhythm in place for stakeholders.',
  },
  {
    question: 'Which project management and engineering tools do you work in?',
    answer:
      'Day to day, I run backlogs, sprints, and release tracking in Jira and Azure DevOps—alongside Sitecore, Optimizely DXP, Figma, and automated triage workflows across Microsoft Teams and email.',
  },
  {
    question: 'How do you handle teams across MENA, US, and European time zones?',
    answer:
      'I have led 25+ specialists across multiple regions using clear asynchronous documentation, well-defined acceptance criteria, and dedicated overlap windows for sprint planning, demos, and blocker resolution.',
  },
  {
    question: 'What governance and handover documentation do teams receive?',
    answer:
      'Every program includes structured PRDs or WBS baselines, sprint and risk logs, release checklists, and clean operational handovers—plus automated meeting minutes and action trackers so decisions stay searchable.',
  },
];

export const faqHeading = {
  eyebrow: 'FAQ',
  title: 'Asked before nearly every engagement.',
  asideTitle: 'Not sure if it’s a fit?',
  asideBody:
    'Send a short note about your role, team size, or delivery challenge. I will respond directly with how I would approach it.',
};
