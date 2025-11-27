import React from "react";

// ---------------------------------------------
// 1. Persona + Challenge Data
// ---------------------------------------------
type Challenge = {
  id: string;
  label: string;
  summary: string[];
  qintellSteps: string[];
  outcomes: string[];
};

type Persona = {
  id: string;
  label: string;
  roleTagline: string;
  challenges: Challenge[];
};

export const PERSONAS: Persona[] = [
  {
    id: "pm",
    label: "Project Manager",
    roleTagline: "Owns scope, timelines and delivery pressure.",
    challenges: [
      {
        id: "pm-unclear-req",
        label: "Slippage due to unclear requirements",
        summary: [
          "Scope and understanding move faster than documentation.",
          "Teams lose alignment and QA chases a moving target."
        ],
        qintellSteps: [
          "Consolidate all documents into one requirement view.",
          "Highlight unclear, conflicting or duplicate logic.",
          "Show ripple effects across flows and tests."
        ],
        outcomes: [
          "Fewer late rework loops.",
          "Clearer conversations with business.",
          "Lower risk in steering meetings."
        ]
      },
      {
        id: "pm-qa-rework",
        label: "High QA/UAT rework & late surprises",
        summary: [
          "Test teams work from partial or outdated knowledge.",
          "Critical cases slip past into UAT or PROD."
        ],
        qintellSteps: [
          "Connect requirements, flows and rules into one model.",
          "Expose missing and weak coverage.",
          "Drive QA focus using risk and structure."
        ],
        outcomes: [
          "Fewer UAT escalations.",
          "Higher predictability in release cycles.",
          "Less firefighting under pressure."
        ]
      }
    ]
  },

  {
    id: "po",
    label: "Product Owner / BA",
    roleTagline: "Owns requirement clarity and business understanding.",
    challenges: [
      {
        id: "po-clarity",
        label: "Hard to maintain requirement clarity",
        summary: [
          "Requirements live across emails, docs and decks.",
          "Nobody fully trusts a single source of truth."
        ],
        qintellSteps: [
          "Unify all requirement inputs into a coherent structure.",
          "Surface unclear and conflicting statements.",
          "Show functional context around each requirement."
        ],
        outcomes: [
          "Cleaner requirement baselines.",
          "Faster alignment with tech and QA.",
          "Better change-impact visibility."
        ]
      },
      {
        id: "po-churn",
        label: "Too much back-and-forth with tech & QA",
        summary: [
          "Ambiguity leads to repetitive clarification cycles.",
          "Teams interpret requirements differently."
        ],
        qintellSteps: [
          "Enrich requirements with domain context.",
          "Expose disconnects between rules and flows.",
          "Give QA a structured functional foundation."
        ],
        outcomes: [
          "Reduced clarification cycles.",
          "Fewer misunderstandings with engineering.",
          "Cleaner handoffs and faster refinement."
        ]
      }
    ]
  },

  {
    id: "qa",
    label: "QA / Test Lead",
    roleTagline: "Owns coverage, leakage and test strategy.",
    challenges: [
      {
        id: "qa-reinvent",
        label: "Writing tests from scratch each time",
        summary: [
          "Each project reinvents test ideas.",
          "Hard-won test IP isn't reused."
        ],
        qintellSteps: [
          "Provide reusable domain test patterns.",
          "Generate scenario ideas from structured requirements.",
          "Map tests to flows, rules and validations."
        ],
        outcomes: [
          "Faster test design.",
          "Better reuse of test IP.",
          "More focus on high-value scenarios."
        ]
      },
      {
        id: "qa-leakage",
        label: "Defects leaking into UAT/production",
        summary: [
          "Critical gaps remain invisible until too late.",
          "Test design relies too much on memory."
        ],
        qintellSteps: [
          "Expose weak coverage areas.",
          "Highlight rule/flow gaps.",
          "Link scenarios to requirement slices."
        ],
        outcomes: [
          "Lower leakage into UAT/PROD.",
          "Stronger test strategy.",
          "Higher confidence at release time."
        ]
      }
    ]
  }
];

// ---------------------------------------------
// 2. Persona-Level Console Animation
// ---------------------------------------------
const FLOW_CONSOLE_PERSONA: Record<string, string[]> = {
  pm: [
    "> Uploading: Project-Plan-v7.xlsx",
    "> Uploading: Requirements-Deck-v3.pptx",
    "> Uploading: UAT-Findings.xlsx",
    "> Parsing documents…",
    "> Building structured requirement model…",
    "> Detecting unclear/conflicting requirement statements…",
    "> Mapping requirement changes to flows/tests…",
    "> Done. PM-focused insights ready."
  ],

  po: [
    "> Uploading: BRD-v5.docx",
    "> Uploading: Change-Requests.xlsx",
    "> Uploading: Regulatory-Notes.pdf",
    "> Parsing content…",
    "> Structuring requirement slices…",
    "> Enriching with domain context…",
    "> Detecting ambiguity & duplication…",
    "> Done. PO-focused insights ready."
  ],

  qa: [
    "> Uploading: Test-Cases.xlsx",
    "> Uploading: Requirements-v3.docx",
    "> Uploading: Defect-Patterns.xlsx",
    "> Parsing requirements…",
    "> Mapping requirements to flows/rules…",
    "> Generating scenario ideas…",
    "> Highlighting coverage gaps…",
    "> Done. QA-focused insights ready."
  ]
};

// ---------------------------------------------
// 3. Main Component
// ---------------------------------------------
const QintellScenarioFlow: React.FC = () => {
  const [selectedPersonaId, setSelectedPersonaId] = React.useState<string>("");
  const [selectedChallengeId, setSelectedChallengeId] = React.useState<string>("");

  const [phase, setPhase] =
    React.useState<"select" | "challenge" | "flow" | "outcome">("select");

  const persona = PERSONAS.find((p) => p.id === selectedPersonaId);
  const challenge =
    persona?.challenges.find((c) => c.id === selectedChallengeId) || null;

  // Animation state
  const [visibleLines, setVisibleLines] = React.useState(0);

  const consoleLines = FLOW_CONSOLE_PERSONA[selectedPersonaId] || [];

  React.useEffect(() => {
    if (phase !== "flow") return;

    if (visibleLines >= consoleLines.length) return;

    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 1200); // SLOWER

    return () => clearTimeout(timer);
  }, [visibleLines, phase, consoleLines.length]);

  const resetFlow = () => {
    setVisibleLines(0);
    setPhase("select");
  };

  const disabledClass = "opacity-40 pointer-events-none";

  return (
    <section className="mt-14 border border-slate-800 rounded-3xl p-8 bg-slate-950/60">
      <h2 className="text-2xl font-semibold mb-8 text-slate-50">
        Qintell Guided Scenario
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {/* STEP 1a */}
        <div
          className={`border border-slate-800 rounded-xl p-5 bg-slate-900/60 ${
            phase !== "select" ? "opacity-80" : ""
          }`}
        >
          <h3 className="text-sm font-semibold text-slate-200">
            Step 1a · Select your role
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {PERSONAS.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedPersonaId(p.id);
                  setSelectedChallengeId("");
                  resetFlow();
                }}
                className={`rounded-full border px-3 py-1 text-sm ${
                  selectedPersonaId === p.id
                    ? "border-cyan-400 bg-cyan-500/20 text-cyan-100"
                    : "border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-400"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {persona && (
            <>
              <p className="mt-3 text-xs text-slate-400">{persona.roleTagline}</p>

              {/* STEP 1b */}
              <h4 className="mt-4 text-sm font-semibold text-slate-200">
                Step 1b · What’s your challenge?
              </h4>

              <div className="mt-2 flex flex-wrap gap-2">
                {persona.challenges.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setSelectedChallengeId(c.id);
                      setPhase("challenge");
                    }}
                    className={`rounded-full border px-3 py-1 text-sm ${
                      selectedChallengeId === c.id
                        ? "border-cyan-400 bg-cyan-500/20 text-cyan-100"
                        : "border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-400"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* STEP 2 */}
        <div
          className={`border border-slate-800 rounded-xl p-5 bg-slate-900/60 ${
            phase === "select" ? disabledClass : ""
          }`}
        >
          <h3 className="text-sm font-semibold text-slate-200">
            Step 2 · Let’s focus on your challenge
          </h3>

          {!challenge ? (
            <p className="mt-3 text-slate-400 text-sm">
              Select a challenge to continue.
            </p>
          ) : (
            <>
              <p className="mt-2 text-base text-slate-50">{challenge.label}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc pl-5">
                {challenge.summary.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setVisibleLines(0);
                  setPhase("flow");
                }}
                className="mt-4 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Talk through this scenario →
              </button>
            </>
          )}
        </div>

        {/* STEP 3 */}
        <div
          className={`border border-slate-800 rounded-xl p-5 bg-slate-900/60 ${
            phase !== "flow" ? disabledClass : ""
          }`}
        >
          <h3 className="text-sm font-semibold text-slate-200">
            Step 3 · How Qintell thinks through your problem
          </h3>

          {phase !== "flow" ? (
            <p className="mt-3 text-slate-400 text-sm">
              Click the button in Step 2 to see Qintell process your scenario.
            </p>
          ) : (
            <div className="mt-3 rounded-xl bg-slate-950 p-4 font-mono text-xs text-slate-200 border border-slate-800">
              {consoleLines.slice(0, visibleLines).map((line, idx) => {
                const isDone = idx === consoleLines.length - 1;
                const isProcess =
                  idx >= 3 && idx < consoleLines.length - 1;

                return (
                  <div
                    key={idx}
                    className={
                      isDone
                        ? "mt-1 text-emerald-400"
                        : isProcess
                        ? "text-slate-400"
                        : ""
                    }
                  >
                    {line}
                  </div>
                );
              })}

              {visibleLines < consoleLines.length && (
                <div className="mt-1 text-slate-600 animate-pulse">▍</div>
              )}

              {visibleLines >= consoleLines.length && (
                <button
                  onClick={() => setPhase("outcome")}
                  className="mt-4 rounded-lg bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-cyan-300"
                >
                  Proceed →
                </button>
              )}
            </div>
          )}
        </div>

        {/* STEP 4 */}
        <div
          className={`border border-slate-800 rounded-xl p-5 bg-slate-900/60 ${
            phase !== "outcome" ? disabledClass : ""
          }`}
        >
          <h3 className="text-sm font-semibold text-slate-200">
            Step 4 · What changes for your teams
          </h3>

          {!challenge || phase !== "outcome" ? (
            <p className="mt-3 text-slate-400 text-sm">
              Complete Step 3 to reveal this.
            </p>
          ) : (
            <>
              <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc pl-5">
                {challenge.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>

              <button
                onClick={resetFlow}
                className="mt-4 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
              >
                Try another scenario
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default QintellScenarioFlow;
