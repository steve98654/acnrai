// Worked example (/example): a FICTITIOUS financial services firm taken through
// the full offer. Every name, number and finding here is invented for
// illustration. House style: no hyphens or dashes in visible copy.

export const firm = {
  name: 'Corvane Financial',
  tagline: 'A fictitious diversified financial services group',
  facts: [
    { k: 'Lines of business', v: 'Retail banking, wealth, insurance' },
    { k: 'Employees', v: '18,000' },
    { k: 'Markets', v: 'UK, EU and US' },
    { k: 'Models in use', v: 'Gemini, Claude, GPT and two open weight models' },
  ],
  trigger:
    'A mortgage assistant quoted a rate that did not exist. The board asked three questions nobody could answer: which AI do we run, how does it behave under attack, and who owns the risk?',
};

export const journey = [
  { n: '01', stage: 'Assess', when: 'Weeks 1 to 2', body: 'Inventory and Claude Fable rapid eval' },
  { n: '02', stage: 'Design', when: 'Weeks 3 to 6', body: 'Governance model built from findings' },
  { n: '03', stage: 'Implement', when: 'Months 2 to 5', body: 'PRC controls in the lifecycle' },
  { n: '04', stage: 'Assure', when: 'Month 2 onward', body: 'Red teaming and live monitoring' },
];

// ---------------- 01 Assess ----------------
export const inventory = [
  { k: 'AI systems found', v: '96' },
  { k: 'Missing from any register', v: '31' },
  { k: 'Tier 1 (highest risk)', v: '9' },
  { k: 'Business owners named', v: '42%' },
];

// Maturity 1 to 5, current vs target
export const maturity = [
  { d: 'Inventory', now: 1.5, target: 4 },
  { d: 'Model behaviour', now: 2.5, target: 4 },
  { d: 'Data and privacy', now: 3, target: 4 },
  { d: 'Security and misuse', now: 1.5, target: 4 },
  { d: 'Accountability', now: 2, target: 3.5 },
];

export const rapidEval = [
  { system: 'Mortgage assistant', model: 'GPT', tests: '2,400', pass: '91.2%', high: 4 },
  { system: 'Claims summariser', model: 'Claude', tests: '1,800', pass: '96.8%', high: 1 },
  { system: 'Advisor copilot (wealth)', model: 'Gemini', tests: '2,100', pass: '93.5%', high: 3 },
  { system: 'Complaints triage agent', model: 'Claude', tests: '1,500', pass: '89.4%', high: 5 },
  { system: 'KYC document reader', model: 'Open weight', tests: '1,200', pass: '94.1%', high: 2 },
];

export const topFindings = [
  { sev: 'High', text: 'Complaints agent can be steered by instructions hidden in customer emails.' },
  { sev: 'High', text: 'Mortgage assistant invents product terms when rates change mid conversation.' },
  { sev: 'High', text: 'Advisor copilot gives less complete answers for some customer segments.' },
  { sev: 'Medium', text: 'A third of GenAI tools sit outside the model risk inventory.' },
  { sev: 'Medium', text: 'No owner for risk in models bought from vendors.' },
];

// ---------------- 02 Design ----------------
export const actions = [
  { finding: '31 unregistered systems', action: 'Mandatory AI intake with automatic risk tiering', owner: 'Chief Data Office' },
  { finding: 'Prompt injection in complaints agent', action: 'Red team sign off gate for tier 1 and 2 releases', owner: 'CISO' },
  { finding: 'Uneven answers across segments', action: 'Fairness thresholds and monitoring per use case', owner: 'Model risk' },
  { finding: 'Invented product terms', action: 'Grounding to the product catalogue and a factuality test set', owner: 'Mortgages product owner' },
  { finding: 'Vendor model risk unowned', action: 'Due diligence and contract clauses for AI suppliers', owner: 'Procurement' },
];

export const council = [
  { role: 'Chair', who: 'Chief Risk Officer' },
  { role: 'Members', who: 'CDO, CISO, General Counsel, Head of Model Risk, business line heads' },
  { role: 'Cadence', who: 'Monthly, with tier 1 decisions escalated within five days' },
  { role: 'Independent challenge', who: 'Internal audit, supported by Faculty' },
];

// ---------------- 03 Implement ----------------
export const prcBuild = [
  { letter: 'P', title: 'Policy', n: '4', unit: 'policies', items: ['AI acceptable use', 'Model and agent standard', 'GenAI data handling', 'Third party AI'] },
  { letter: 'R', title: 'Risk', n: '57', unit: 'risks registered', items: ['Taxonomy of 12 AI risk types', 'Tiering tied to the inventory', 'Eight key risk indicators'] },
  { letter: 'C', title: 'Controls', n: '112', unit: 'controls', items: ['Mapped once to EU AI Act, ISO/IEC 42001 and NIST AI RMF', '64% tested automatically', 'Evidence stored per release'] },
];

export const securityWins = [
  { k: 'Agent tool permissions removed', v: '61%' },
  { k: 'Systems behind injection filters', v: '9 of 9 tier 1' },
  { k: 'Vendors through AI due diligence', v: '22' },
];

// ---------------- 04 Assure ----------------
export const redTeam = {
  target: 'Complaints triage agent, before relaunch',
  stats: [
    { k: 'Attack attempts', v: '5,600' },
    { k: 'Expert campaigns', v: '14' },
    { k: 'Exploit paths found', v: '6' },
    { k: 'Closed before relaunch', v: '6 of 6' },
  ],
  vectors: [
    { t: 'Prompt injection in email', found: 3 },
    { t: 'Data leakage', found: 1 },
    { t: 'Agent tool misuse', found: 2 },
    { t: 'Jailbreaks', found: 0 },
    { t: 'Harmful output', found: 0 },
  ],
};

// Open high severity findings per month (monitoring view)
export const openHigh = [
  { m: 'M1', v: 15 }, { m: 'M2', v: 12 }, { m: 'M3', v: 8 }, { m: 'M4', v: 5 }, { m: 'M5', v: 3 }, { m: 'M6', v: 2 },
];

export const monitors = [
  { k: 'Live evaluations', v: 'Daily on all tier 1 systems' },
  { k: 'Regression suite', v: 'Every release, 3,200 attacks' },
  { k: 'Drift alerts caught', v: '7 in six months' },
  { k: 'Board assurance', v: 'Quarterly report, annual independent review' },
];

// ---------------- Outcome ----------------
export const beforeAfter = [
  { k: 'AI systems registered', before: '65 of 96', after: '96 of 96' },
  { k: 'Tier 1 systems red teamed', before: '0', after: '9' },
  { k: 'Open high severity findings', before: '15', after: '2' },
  { k: 'Named risk owners', before: '42%', after: '100%' },
  { k: 'Time to approve a low risk use case', before: '6 weeks', after: '3 days' },
];
