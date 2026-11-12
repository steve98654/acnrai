// Synthetic use cases for the gallery (/use-cases).
// These are ILLUSTRATIVE composites, not real clients or results. Every card
// on the page says so. Replace with approved case studies when available.
// Model lists follow GAO order: Gemini, Claude, GPT.

export type OfferingKey = 'assess' | 'govern' | 'redteam';

export const offerings: { key: OfferingKey; n: string; label: string; short: string; blurb: string }[] = [
  { key: 'assess', n: '01', label: 'Current state assessment', short: 'Assess', blurb: 'Inventory, model behaviour and maturity, with the Claude Fable rapid eval.' },
  { key: 'govern', n: '02', label: 'Governance, controls and security', short: 'Govern', blurb: 'Operating model, PRC controls and lifecycle gates built from the findings.' },
  { key: 'redteam', n: '03', label: 'Red teaming and monitoring', short: 'Red team', blurb: 'Expert and automated attacks before launch, then continuous evaluation.' },
];

export interface UseCase {
  id: string;
  offering: OfferingKey;
  industry: string;
  client: string;
  title: string;
  system: string;
  models: string[];
  weeks: number;
  stats: { k: string; v: string }[];
  challenge: string;
  approach: string;
  outcome: string;
}

export const useCases: UseCase[] = [
  // ---------------- 01 Assess ----------------
  {
    id: 'UC-01', offering: 'assess', industry: 'Banking', client: 'Global retail bank',
    title: 'Mapping 140 GenAI pilots in two weeks',
    system: 'Copilots, chat assistants and document agents across 9 business units',
    models: ['Gemini', 'Claude', 'GPT'], weeks: 2,
    stats: [{ k: 'Systems', v: '140' }, { k: 'Unregistered', v: '38%' }, { k: 'Tier 1', v: '12' }],
    challenge: 'The board asked which AI was live. Nobody could answer with confidence.',
    approach: 'Inventory sweep, risk tiering, and a Fable rapid eval on the 5 highest risk assistants.',
    outcome: 'A single AI register, a maturity profile, and a ranked list of 12 tier 1 systems to fix first.',
  },
  {
    id: 'UC-02', offering: 'assess', industry: 'Insurance', client: 'Specialty insurer',
    title: 'Claims assistant behaviour baseline',
    system: 'LLM assistant summarising claims files for adjusters',
    models: ['Claude', 'GPT'], weeks: 2,
    stats: [{ k: 'Scenarios', v: '6,200' }, { k: 'Hallucination', v: '4.1%' }, { k: 'High severity', v: '7' }],
    challenge: 'Adjusters trusted summaries that sometimes invented policy terms.',
    approach: 'Fable generated tests from the insurer’s own claims policies and graded every summary.',
    outcome: 'Seven verified high severity failure patterns, each mapped to a fix and an owner.',
  },
  {
    id: 'UC-03', offering: 'assess', industry: 'Healthcare', client: 'Hospital network',
    title: 'Clinical note drafting readiness check',
    system: 'Ambient scribe drafting discharge notes',
    models: ['Gemini'], weeks: 3,
    stats: [{ k: 'Dimensions', v: '5' }, { k: 'Data gaps', v: '11' }, { k: 'Maturity', v: '2 / 5' }],
    challenge: 'A pilot was about to scale with no view of privacy, bias or accountability.',
    approach: 'Five dimension assessment with clinical reviewers calibrating the grader.',
    outcome: 'Scale up gated on three controls; consent and retention gaps closed before go live.',
  },
  {
    id: 'UC-04', offering: 'assess', industry: 'Public sector', client: 'National tax agency',
    title: 'Citizen chatbot fairness review',
    system: 'Multilingual assistant answering tax questions',
    models: ['GPT'], weeks: 2,
    stats: [{ k: 'Languages', v: '6' }, { k: 'Accuracy gap', v: '9 pts' }, { k: 'Actions', v: '14' }],
    challenge: 'Answers were less accurate for some languages, a fairness and legal risk.',
    approach: 'Parallel test suites per language, graded against the agency’s published guidance.',
    outcome: 'Accuracy gap quantified, retrieval fixed for the weakest languages, retest scheduled.',
  },

  // ---------------- 02 Govern ----------------
  {
    id: 'UC-05', offering: 'govern', industry: 'Pharma', client: 'Global pharmaceutical company',
    title: 'One control set for three regulators',
    system: 'Enterprise AI policy across R&D, commercial and manufacturing',
    models: ['Gemini', 'Claude', 'GPT'], weeks: 10,
    stats: [{ k: 'Controls', v: '86' }, { k: 'Frameworks', v: '3' }, { k: 'Duplicates cut', v: '41%' }],
    challenge: 'Separate policies for EU AI Act, ISO/IEC 42001 and NIST AI RMF overlapped and conflicted.',
    approach: 'Unified PRC control library mapped once to all three, tied to lifecycle gates.',
    outcome: 'One evidence pack serves every audit; teams follow a single set of rules.',
  },
  {
    id: 'UC-06', offering: 'govern', industry: 'Retail', client: 'Omnichannel retailer',
    title: 'AI intake that product teams actually use',
    system: 'Idea to deploy intake and risk tiering for 60 product squads',
    models: ['Gemini', 'GPT'], weeks: 8,
    stats: [{ k: 'Squads', v: '60' }, { k: 'Intake time', v: '2 days' }, { k: 'Coverage', v: '100%' }],
    challenge: 'Shadow AI grew because the old review took six weeks.',
    approach: 'Self serve intake with automatic tiering; only tier 1 and 2 go to the RAI council.',
    outcome: 'Every new use case registered at idea stage, with low risk work approved in days.',
  },
  {
    id: 'UC-07', offering: 'govern', industry: 'Energy', client: 'Utility operator',
    title: 'Agent permissions and security by design',
    system: 'Maintenance agents with access to work orders and SCADA reports',
    models: ['Claude'], weeks: 6,
    stats: [{ k: 'Tools scoped', v: '23' }, { k: 'Privileges cut', v: '64%' }, { k: 'Gates', v: '5' }],
    challenge: 'Agents had broad tool access that nobody had reviewed.',
    approach: 'Least privilege permission model, tool allow lists and a validation gate before deploy.',
    outcome: 'Agent privileges cut by two thirds with no loss of task completion.',
  },
  {
    id: 'UC-08', offering: 'govern', industry: 'Telecom', client: 'Mobile network operator',
    title: 'Third party model risk with owners',
    system: 'Vendor due diligence for 30 AI suppliers',
    models: ['Gemini', 'Claude', 'GPT'], weeks: 6,
    stats: [{ k: 'Vendors', v: '30' }, { k: 'Contracts updated', v: '18' }, { k: 'Owner', v: 'Named' }],
    challenge: 'No one owned the risk of models bought from vendors.',
    approach: 'Vendor tiering, model due diligence questionnaire and contractual controls.',
    outcome: 'Procurement owns third party model risk with clear thresholds for reassessment.',
  },

  // ---------------- 03 Red team ----------------
  {
    id: 'UC-09', offering: 'redteam', industry: 'Banking', client: 'Digital bank',
    title: 'Prompt injection in the inbox',
    system: 'Customer service agent that reads inbound email and issues refunds',
    models: ['GPT'], weeks: 3,
    stats: [{ k: 'Attacks', v: '4,800' }, { k: 'Breaches found', v: '3' }, { k: 'Fixed before launch', v: '3 / 3' }],
    challenge: 'Hidden instructions in an email could trigger refunds.',
    approach: 'Faculty red team plus automated attack generation across email, PDF and image inputs.',
    outcome: 'All three exploit paths closed before launch; regression suite runs every release.',
  },
  {
    id: 'UC-10', offering: 'redteam', industry: 'Technology', client: 'Enterprise HR platform',
    title: 'HR assistant red team',
    system: 'Assistant answering employee questions on pay, leave and performance',
    models: ['Gemini'], weeks: 4,
    stats: [{ k: 'Personas', v: '40' }, { k: 'Leakage paths', v: '5' }, { k: 'Bias probes', v: '1,200' }],
    challenge: 'Sensitive employee data and fairness risk in one assistant.',
    approach: 'Adversarial personas probing for data leakage, biased advice and policy bypass.',
    outcome: 'Five leakage paths closed and fairness thresholds added to monitoring.',
  },
  {
    id: 'UC-11', offering: 'redteam', industry: 'Media', client: 'News publisher',
    title: 'Harmful output and jailbreak resilience',
    system: 'Public facing assistant summarising breaking news',
    models: ['Claude', 'GPT'], weeks: 2,
    stats: [{ k: 'Jailbreaks tried', v: '2,300' }, { k: 'Success rate', v: '0.6%' }, { k: 'Retest', v: 'Monthly' }],
    challenge: 'A public assistant could be pushed into misinformation or abuse.',
    approach: 'Expert jailbreak campaigns and harmful output probes, scored against editorial policy.',
    outcome: 'Jailbreak success rate held below 1% with a monthly automated retest.',
  },
  {
    id: 'UC-12', offering: 'redteam', industry: 'Manufacturing', client: 'Industrial manufacturer',
    title: 'Continuous evaluation in production',
    system: 'Engineering copilot answering safety procedure questions',
    models: ['Gemini', 'Claude'], weeks: 12,
    stats: [{ k: 'Live checks', v: 'Daily' }, { k: 'Drift alerts', v: '4' }, { k: 'Board report', v: 'Annual' }],
    challenge: 'Model updates changed answers on safety procedures without warning.',
    approach: 'Daily evaluation on a fixed safety test set, with drift alerts and incident playbooks.',
    outcome: 'Four regressions caught before workers saw them; annual assurance to the board.',
  },
];
