// All site copy lives here so it can be edited without touching layout.
// Mirrors the LaTeX decks (rai_pitch.tex, rai_short.tex) and the one-pager.
//
// Partner order everywhere: Google, Anthropic, OpenAI (GAO).
// ASSUMPTION: PRC = Policy, Risk & Controls. Change PRC_FULL if that is wrong.
// Partnership wording is deliberately generic until the alliance leads validate it.

export const PRC = 'PRC';
export const PRC_FULL = 'Policy, Risk & Controls';

/** While true the site carries a draft mark and asks search engines not to index it. */
export const DRAFT = false;

export const meta = {
  title: 'Responsible AI, operationalised | Accenture and Faculty',
  description:
    'Assess, govern and red team the AI you already run. One Accenture and Faculty team, across Google, Anthropic and OpenAI models.',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/#offer', label: 'Offer' },
  { href: '/#assess', label: 'Assess' },
  { href: '/#govern', label: 'Govern' },
  { href: '/#assure', label: 'Red team' },
  { href: '/onepager', label: 'One Pager' },
  { href: '/usecases', label: 'Use cases' },
  { href: '/example', label: 'Example' },
  { href: '/history', label: 'History' },
  { href: '/#start', label: 'Point of Contact', short: 'Contact', cta: true },
];

export const moment = [
  {
    title: 'Frontier models are in production',
    body: 'Agents built on models from our GAO Partnerships now touch customers, code and decisions.',
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
    body: 'Frontier AI safety science, model evaluation and red teaming expertise, and decision grade data science.',
  },
];

export const dimensions = [
  { n: '01', short: 'Inventory', title: 'Inventory', body: 'Which AI systems, models and vendors are in use, and where.', current: 0.4 },
  { n: '02', short: 'Model', title: 'Model behaviour', body: 'Accuracy, robustness, bias and hallucination on real tasks.', current: 0.6 },
  { n: '03', short: 'Data', title: 'Data and privacy', body: 'Lineage, consent, leakage and retention.', current: 0.6 },
  { n: '04', short: 'Security', title: 'Security and misuse', body: 'Prompt injection, jailbreaks, agent permissions.', current: 0.2 },
  { n: '05', short: 'Accountability', title: 'Accountability', body: 'Owners, policies, decision rights, regulatory readiness.', current: 0.4 },
  { n: '06', short: 'Third party', title: 'Third party and vendor risk', body: 'Model providers, embedded AI in vendor tools, contracts and due diligence.', current: 0.2 },
  { n: '07', short: 'Monitoring', title: 'Monitoring and incidents', body: 'Drift, incident response and retesting in production.', current: 0.4 },
];

export const outputs = ['AI system register', 'Maturity profile', 'Prioritised risks', 'Executive readout'];

export const rapidEval = [
  { when: 'Days 1 to 2', title: 'Scope', body: 'Use cases, policies, risk appetite.' },
  { when: 'Days 3 to 5', title: 'Generate', body: 'Accent rapid eval builds test suites from your policies.' },
  { when: 'Week 2', title: 'Run and grade', body: 'Automated runs, expert calibrated grading.' },
  { when: 'Week 2', title: 'Read out', body: 'Scored findings and priority actions.' },
];

export const loop = [
  { n: '01', title: 'Your policies', body: 'and risk appetite in.' },
  { n: '02', title: 'Generate', body: 'Thousands of realistic and adversarial tests.' },
  { n: '03', title: 'Run', body: 'Against your models and agents.' },
  { n: '04', title: 'Grade', body: 'Every response against policy.' },
  { n: '05', title: 'Calibrate', body: 'Faculty experts verify high severity findings.' },
  { n: '06', title: 'Evidence', body: 'Scored findings and an audit ready pack.' },
];

export const maturityLevels = ['Initial', 'Developing', 'Defined', 'Managed', 'Optimised'];
export const heatmap = [
  { label: 'Inventory', score: 2 },
  { label: 'Model behaviour', score: 3 },
  { label: 'Data & privacy', score: 3 },
  { label: 'Security', score: 1 },
  { label: 'Accountability', score: 2 },
  { label: 'Third party', score: 1 },
  { label: 'Monitoring', score: 2 },
];
export const findings = [
  'Customer agent open to prompt injection hidden in inbound email.',
  'A third of GenAI use cases missing from any register.',
  'No named owner for third party model risk.',
];

export const findingToAction = [
  { finding: 'Use cases missing from the register', action: 'Mandatory AI intake, inventory and risk tiering at idea stage', owner: 'AI office' },
  { finding: 'Agents open to prompt injection', action: 'Release gate needs red team sign off for tier 1 and 2 systems', owner: 'ISO' },
  { finding: 'Bias untested on live populations', action: 'Fairness thresholds and monitoring KPIs per use case', owner: 'Model risk' },
  { finding: 'No owner for third party model risk', action: 'Vendor and model due diligence with contractual controls', owner: 'Procurement' },
  { finding: 'Policies not mapped to regulation', action: 'One control set mapped to EU AI Act, ISO/IEC 42001 and NIST AI RMF', owner: 'Compliance' },
];

export const lifecycle = [
  { stage: 'Ideate', gate: 'Intake and risk tier' },
  { stage: 'Build', gate: 'Data and design review' },
  { stage: 'Validate', gate: 'Eval and red team gate', key: true },
  { stage: 'Deploy', gate: 'Approval and sign off' },
  { stage: 'Monitor', gate: 'Drift, incidents, retest' },
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
  'Least privilege agent and tool permissions',
  'Vendor and model due diligence',
];

export const attacks = ['Prompt injection', 'Harmful output', 'Agent tool misuse', 'Data leakage', 'Jailbreaks'];

export const cadence = [
  { when: 'Before launch', body: 'Full red team, tier 1 and 2 systems.' },
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

// ---------------------------------------------------------------------
// History page: engagements with the GAO labs (Google, Anthropic, OpenAI).
// Engagements with the GAO Partnerships, each with its source where public.
// ---------------------------------------------------------------------
export const FACULTY_EVALS_URL = 'https://faculty.ai/en-gb/ai-evaluations-redteaming';

export interface Engagement {
  when: string;
  who: string;
  title: string;
  body: string;
  source?: { label: string; href: string };
}

export const history: {
  logo: 'google' | 'anthropic' | 'openai';
  name: string;
  model: string;
  summary: string;
  items: Engagement[];
}[] = [
  {
    logo: 'google',
    name: 'Google',
    model: 'Gemini',
    summary: 'Red teaming and evaluation of generative AI in an enterprise HR setting, alongside safety evaluation of Gemini.',
    items: [
      {
        when: 'Accenture',
        who: 'Accenture Responsible AI',
        title: 'Google HR red teaming and evaluations',
        body: 'Red teaming and evaluation of generative AI used in Google’s HR processes.',
      },
      {
        when: 'Gemini 4',
        who: 'Faculty',
        title: 'Gemini 4 Safety & Security Report',
        body: 'Listed by Faculty among the frontier model safety reports connected to its evaluation and red teaming work.',
        source: { label: 'faculty.ai', href: FACULTY_EVALS_URL },
      },
    ],
  },
  {
    logo: 'anthropic',
    name: 'Anthropic',
    model: 'Claude',
    summary: 'Biosecurity evaluation design for Claude 4, and Claude as the engine of our rapid evaluation.',
    items: [
      {
        when: '2025',
        who: 'Faculty',
        title: 'Claude 4 biosecurity evaluations',
        body: 'Faculty helped design the biosecurity evaluations for Anthropic’s Claude Opus 4 and Sonnet 4 models, documented in the Claude 4 system card.',
        source: { label: 'faculty.ai', href: FACULTY_EVALS_URL },
      },
      {
        when: '2025',
        who: 'Faculty',
        title: 'Claude Opus 4.5 system card',
        body: 'Faculty cites the Claude Opus 4.5 system card among the frontier model reports tied to its evaluation work.',
        source: { label: 'faculty.ai', href: FACULTY_EVALS_URL },
      },
      {
        when: 'Today',
        who: 'Accenture and Faculty',
        title: 'Claude Fable rapid evaluation',
        body: 'Claude Fable writes, runs and grades the test suites in our two week rapid evaluation; Faculty scientists verify high severity findings.',
      },
    ],
  },
  {
    logo: 'openai',
    name: 'OpenAI',
    model: 'GPT',
    summary: 'Red teaming before launch of OpenAI’s o1 reasoning model.',
    items: [
      {
        when: '2024',
        who: 'Faculty',
        title: 'o1 red teaming before launch',
        body: 'Faculty red teamed OpenAI’s o1 model before launch, as documented in the o1 system card.',
        source: { label: 'faculty.ai', href: FACULTY_EVALS_URL },
      },
    ],
  },
];

export const historyQuote = {
  text: 'It’s absolutely paramount that foundation models are built safely.',
  who: 'Sam Altman, CEO, OpenAI',
  context: 'on working with Faculty',
  source: FACULTY_EVALS_URL,
};

export const facultyFacts = [
  { k: '50+', v: 'PhD level evaluation and red teaming experts at Faculty' },
  { k: '3 labs', v: 'Evaluation and red teaming work with Google, Anthropic and OpenAI' },
  { k: 'CBRNE', v: 'Misuse evaluations, plus systemic harms such as manipulation and radicalisation' },
];

// Closing section contacts. Email addresses are never stored or shipped in
// plain text: `mail` is base64 of the reversed address, decoded in the browser
// on click, and `mailImg` is a rendered image of the address for display.
// Regenerate the image with: node scripts/email-image.mjs <address> <out.png>
export const contacts: { firm: string; name?: string; title?: string; mail?: string; mailImg?: string }[] = [
  { firm: 'Accenture', name: 'Kedus Bekele', mail: 'bW9jLmVydXRuZWNjYUBlbGVrZWIuc3VkZWs=', mailImg: '/contact/kedus.png' },
];

// Landing page "how it works" strip under the hero.
export const howItWorks = [
  { key: 'assess', title: 'Assess', body: 'Baseline every AI system against your own policies.', href: '#assess' },
  { key: 'govern', title: 'Govern', body: 'Turn findings into owned controls and decision rights.', href: '#govern' },
  { key: 'redteam', title: 'Red team', body: 'Attack your models and agents before anyone else does.', href: '#assure' },
  { key: 'monitor', title: 'Monitor', body: 'Retest continuously so the evidence stays current.', href: '#implement' },
];

// Landing page quote. Attribution requested as Abraham Lincoln; the line is also
// widely credited to Peter Drucker or Alan Kay. Change `who` here if needed.
export const landingQuote = {
  text: 'The best way to predict the future is to create it.',
  who: 'Abraham Lincoln',
};

// Cloudflare Web Analytics. Paste the site token from the Cloudflare dashboard
// (Analytics and logs, Web Analytics, acnr.ai, Manage site, JS snippet) to turn
// the beacon on. Empty means no analytics script is loaded.
export const CF_ANALYTICS_TOKEN = '';
