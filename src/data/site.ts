// All site copy lives here so it can be edited without touching layout.
// Mirrors the LaTeX decks (rai_pitch.tex, rai_short.tex) and the one-pager.
//
// Partner order everywhere: Google, Anthropic, OpenAI (GAO).
// ASSUMPTION: PRC = Policy, Risk & Controls. Change PRC_FULL if that is wrong.
// Partnership wording is deliberately generic until the alliance leads validate it.

export const PRC = 'PRC';
export const PRC_FULL = 'Policy, Risk & Controls';

/** While true the site carries a draft mark and asks search engines not to index it. */
export const DRAFT = true;

export const meta = {
  title: 'Responsible AI, operationalised | Accenture and Faculty',
  description:
    'Assess, govern and red team the AI you already run. One Accenture and Faculty team, across Google, Anthropic and OpenAI models.',
};

export const nav = [
  { href: '#offer', label: 'Offer' },
  { href: '#assess', label: 'Assess' },
  { href: '#govern', label: 'Govern' },
  { href: '#assure', label: 'Red team' },
  { href: '#start', label: 'Start' },
];

export const moment = [
  {
    title: 'Frontier models are in production',
    body: 'Agents built on GAO models now touch customers, code and decisions.',
  },
  {
    title: 'Regulation has teeth',
    body: 'EU AI Act obligations phase in through 2027. ISO/IEC 42001 and NIST AI RMF are becoming the audit baseline.',
  },
  {
    title: 'Boards want evidence',
    body: 'Principles are no longer enough. Leaders need tested models, owned risks and controls they can show.',
  },
];

export const partners = [
  {
    logo: 'google' as const,
    name: 'Google',
    model: 'Gemini',
    body: 'Responsible AI tooling for Gemini on Vertex AI, with evaluation in Google Cloud pipelines.',
  },
  {
    logo: 'anthropic' as const,
    name: 'Anthropic',
    model: 'Claude',
    body: 'Claude Fable powers our rapid evaluation engine. A shared focus on AI safety.',
  },
  {
    logo: 'openai' as const,
    name: 'OpenAI',
    model: 'GPT',
    body: 'Evaluation and red teaming of GPT models and agent deployments, building on Faculty’s evaluation heritage.',
  },
];

export const offer = [
  { n: '01', title: 'Assess', body: 'Current state assessment and rapid model evaluation.' },
  { n: '02', title: 'Design', body: 'A governance operating model built from the findings.' },
  { n: '03', title: 'Implement', body: `${PRC_FULL} embedded in the AI lifecycle.` },
  { n: '04', title: 'Assure', body: 'Red teaming and continuous evaluation in production.' },
];

export const brings = [
  {
    who: 'Accenture brings',
    body: 'Delivery at scale, industry depth, risk and regulatory practice, and alliances with the model providers.',
  },
  {
    who: 'Faculty brings',
    body: 'Frontier AI safety science, model evaluation and red-teaming expertise, and decision-grade data science.',
  },
];

export const dimensions = [
  { n: '01', short: 'Inventory', title: 'Inventory', body: 'Which AI systems, models and vendors are in use, and where.', current: 0.4 },
  { n: '02', short: 'Model', title: 'Model behaviour', body: 'Accuracy, robustness, bias and hallucination on real tasks.', current: 0.6 },
  { n: '03', short: 'Data', title: 'Data and privacy', body: 'Lineage, consent, leakage and retention.', current: 0.6 },
  { n: '04', short: 'Security', title: 'Security and misuse', body: 'Prompt injection, jailbreaks, agent permissions.', current: 0.2 },
  { n: '05', short: 'Accountability', title: 'Accountability', body: 'Owners, policies, decision rights, regulatory readiness.', current: 0.4 },
];

export const outputs = ['AI system register', 'Maturity profile', 'Prioritised risks', 'Executive readout'];

export const rapidEval = [
  { when: 'Days 1–2', title: 'Scope', body: 'Use cases, policies, risk appetite.' },
  { when: 'Days 3–5', title: 'Generate', body: 'Fable builds test suites from your policies.' },
  { when: 'Week 2', title: 'Run and grade', body: 'Automated runs, expert-calibrated grading.' },
  { when: 'Week 2', title: 'Read out', body: 'Scored findings and priority actions.' },
];

export const loop = [
  { n: '01', title: 'Your policies', body: 'and risk appetite in.' },
  { n: '02', title: 'Generate', body: 'Thousands of realistic and adversarial tests.' },
  { n: '03', title: 'Run', body: 'Against your models and agents.' },
  { n: '04', title: 'Grade', body: 'Every response against policy.' },
  { n: '05', title: 'Calibrate', body: 'Faculty experts verify high-severity findings.' },
  { n: '06', title: 'Evidence', body: 'Scored findings and an audit-ready pack.' },
];

export const maturityLevels = ['Initial', 'Developing', 'Defined', 'Managed', 'Optimised'];
export const heatmap = [
  { label: 'Inventory', score: 2 },
  { label: 'Model behaviour', score: 3 },
  { label: 'Data & privacy', score: 3 },
  { label: 'Security', score: 1 },
  { label: 'Accountability', score: 2 },
];
export const findings = [
  'Customer agent open to prompt injection hidden in inbound email.',
  'A third of GenAI use cases missing from any register.',
  'No named owner for third-party model risk.',
];

export const findingToAction = [
  { finding: 'Use cases missing from the register', action: 'Mandatory AI intake, inventory and risk tiering at idea stage', owner: 'AI office' },
  { finding: 'Agents open to prompt injection', action: 'Release gate needs red-team sign-off for tier 1 and 2 systems', owner: 'CISO' },
  { finding: 'Bias untested on live populations', action: 'Fairness thresholds and monitoring KPIs per use case', owner: 'Model risk' },
  { finding: 'No owner for third-party model risk', action: 'Vendor and model due diligence with contractual controls', owner: 'Procurement' },
  { finding: 'Policies not mapped to regulation', action: 'One control set mapped to EU AI Act, ISO/IEC 42001 and NIST AI RMF', owner: 'Compliance' },
];

export const lifecycle = [
  { stage: 'Ideate', gate: 'Intake and risk tier' },
  { stage: 'Build', gate: 'Data and design review' },
  { stage: 'Validate', gate: 'Eval and red-team gate', key: true },
  { stage: 'Deploy', gate: 'Approval and sign-off' },
  { stage: 'Monitor', gate: 'Drift, incidents, re-test' },
];

export const operate = [
  { k: 'Decide', body: 'RAI council with clear decision rights and escalation by risk tier.' },
  { k: 'Operate', body: 'Product teams own risk day to day, with controls built into tooling.' },
  { k: 'Assure', body: 'Independent challenge plus continuous red teaming and evaluation.' },
];

export const prc = [
  { letter: 'P', title: 'Policy', items: ['AI policy and acceptable use', 'Model, data and agent standards', 'Mapped to EU AI Act, ISO 42001, NIST'] },
  { letter: 'R', title: 'Risk', items: ['AI risk taxonomy and tiering', 'Living risk register tied to the inventory', 'Risk appetite and key risk indicators'] },
  { letter: 'C', title: 'Controls', items: ['Control library tied to lifecycle gates', 'Automated tests and evidence', 'Continuous monitoring'] },
];

export const security = [
  'Prompt injection and jailbreak defences',
  'Least-privilege agent and tool permissions',
  'Vendor and model due diligence',
];

export const attacks = ['Prompt injection', 'Harmful output', 'Agent tool misuse', 'Data leakage', 'Jailbreaks'];

export const cadence = [
  { when: 'Pre-launch', body: 'Full red team, tier 1 and 2 systems.' },
  { when: 'Every release', body: 'Automated regression attack suite.' },
  { when: 'Continuous', body: 'Live monitoring, drift, new threat intel.' },
  { when: 'Annually', body: 'Independent assurance to the board.' },
];

// Gantt rows: start and end in months (0–6).
export const roadmap = [
  { label: 'Current state assessment', start: 0, end: 0.55, tone: 'purple', note: 'Fable rapid eval readout' },
  { label: 'Governance design', start: 0.5, end: 1.8, tone: 'deep' },
  { label: `${PRC} build and rollout`, start: 1.4, end: 4.2, tone: 'ink' },
  { label: 'Red teaming and continuous eval', start: 1.0, end: 6, tone: 'purple' },
  { label: 'Tooling, monitoring, training', start: 2.0, end: 5.5, tone: 'grey' },
];

export const nextSteps = [
  { week: 1, n: '01', title: 'Confirm sponsor and use cases', owner: 'Client sponsor' },
  { week: 1, n: '02', title: `Agree scope, risk appetite, ${PRC}`, owner: 'Joint team' },
  { week: 2, n: '03', title: 'Share models and policies', owner: 'Client AI office' },
  { week: 2, n: '04', title: 'Launch the Fable rapid eval', owner: 'Accenture, Faculty' },
  { week: 3, n: '—', title: 'Rapid eval in flight', owner: 'Tests generated, run and graded; findings verified by Faculty' },
  { week: 4, n: '05', title: 'Executive readout and governance design workshop', owner: 'Joint team' },
];
