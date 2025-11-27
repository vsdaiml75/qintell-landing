import React from "react";

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

const PERSONAS: Persona[] = [
  {
    id: "pm",
    label: "Project / Delivery Manager",
    roleTagline: "Owns scope, dates and stakeholder pressure.",
    challenges: [
      {
        id: "slippage-unclear-req",
        label: "Slippage due to unclear / changing requirements",
        summary: [
          "Scope and understanding move faster than documentation.",
          "QA ends up chasing a moving target."
        ],
        qintellSteps: [
          "Ingest specs, decks and trackers into a single canonical requirement model.",
          "Flag unclear, conflicting and duplicate requirements before build starts.",
          "Tie each change to impacted flows and tests, so blast radius is visible early."
        ],
        outcomes: [
          "Fewer late rework loops in QA/UAT.",
          "Clearer conversations with business on scope changes.",
          "Lower risk of last-minute surprises in steering meetings."
        ]
      },
      {
        id: "qa-rework",
        label: "Too much QA/UAT rework",
        summary: [
          "Tests are written from memory and local knowledge.",
          "No shared requirement model behind the tests."
        ],
        qintellSteps: [
          "Generate scenario ideas from canonical requirements and domain packs instead of starting from scratch.",
          "Map tests back to requirements and regulatory rules to expose gaps.",
          "Use coverage views to decide what must be fixed now vs what can move out."
        ],
        outcomes: [
          "40–60% reduction in QA rework.",
          "Higher confidence when signing off a release.",
          "Less firefighting in UAT and production."
        ]
      },
      {
        id: "no-coverage-view",
        label: "No clear view of coverage vs scope",
        summary: [
          "Everyone claims coverage is 'good' but nobody can show it by module, flow or regulation."
        ],
        qintellSteps: [
          "Structure requirements by business area, module and flow.",
          "Link tests and scenarios directly to that model.",
          "Give you a coverage view by release, module, rail and risk level."
        ],
        outcomes: [
          "Objective view of where you’re exposed.",
          "Fewer debates about 'enough testing'.",
          "Stronger story for management and regulators."
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
        id: "write-tests-from-scratch",
        label: "Writing tests from scratch every time",
        summary: [
          "Each project reinvents test ideas.",
          "Little reuse of hard-won test IP."
        ],
        qintellSteps: [
          "Use pre-built payments and banking packs as a baseline.",
          "Layer project-specific requirements on top of domain flows.",
          "Feed gaps and new patterns back into reusable libraries."
        ],
        outcomes: [
          "Faster test design and reviews.",
          "Better reuse of test IP across projects.",
          "More time spent on edge cases, less on basics."
        ]
      },
      {
        id: "leakage",
        label: "Defects leaking into UAT / production",
        summary: [
          "Important scenarios slip because nobody sees the connection between rules, flows and tests."
        ],
        qintellSteps: [
          "Map requirements, rules and tests into one model.",
          "Highlight flows with weak coverage or high risk.",
          "Use defect patterns to strengthen the right areas over time."
        ],
        outcomes: [
          "Reduced leakage into UAT / production.",
          "Stronger defence when defects do appear.",
          "Data, not gut feel, driving test focus."
        ]
      }
    ]
  },
  {
    id: "po",
    label: "Product Owner / Business Analyst",
    roleTagline: "Owns requirements, scope clarity and business value.",
    challenges: [
      {
        id: "req-quality",
        label: "Difficulty keeping requirements clean & consistent",
        summary: [
          "Requirements live across emails, decks and documents.",
          "Nobody fully trusts a single source of truth."
        ],
        qintellSteps: [
          "Normalize all inputs into a canonical requirement view.",
          "Run clarity checks and conflict detection across documents.",
          "Track versions and changes with explicit impact on flows and tests."
        ],
        outcomes: [
          "Cleaner baseline requirements.",
          "Less negotiation noise with tech and QA.",
          "Faster change impact assessment."
        ]
      }
    ]
  },
  {
    id: "arch",
    label: "Head of Technology / Architect",
    roleTagline: "Owns architecture integrity and delivery risk.",
    challenges: [
      {
        id: "visibility",
        label: "No structured view of what is actually being built",
        summary: [
          "Architecture decisions are made while requirements remain fuzzy and scattered."
        ],
        qintellSteps: [
          "Expose a canonical requirement and flow view across modules and channels.",
          "Map requirements and tests to technical components.",
          "Surface hotspots where complexity and weak coverage coincide."
        ],
        outcomes: [
          "Clearer alignment between architecture and scope.",
          "Earlier detection of dangerous combinations of change.",
          "Better input into release gating decisions."
        ]
      }
    ]
  }
];

const QintellHeroInteractive: React.FC = () => {
  const [selectedPersonaId, setSelectedPersonaId] = React.useState<string>(
    PERSONAS[0].id
  );
  const [selectedChallengeIds, setSelectedChallengeIds] = React.useState<
    string[]
  >([]);

  const persona = PERSONAS.find((p) => p.id === selectedPersonaId)!;

  const toggleChallenge = (id: string) => {
    setSelectedChallengeIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((c) => c !== id);
        }
      if (prev.length >= 2) {
        return [prev[1], id];
      }
      return [...prev, id];
    });
  };

  const selectedChallenges = persona.challenges.filter((c) =>
    selectedChallengeIds.includes(c.id)
  );

  return (
    <section className="grid gap-10 md:grid-cols-2 md:items-start">
      {/* LEFT: persona + challenges */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/60 px-3 py-1 text-xs font-medium text-cyan-200">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Qintell · Requirement &amp; Test Intelligence for Banking Platforms
        </div>

        <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          How qintell addresses your top challenges
        </h1>

        <p className="mt-3 text-base text-slate-200">
          Qintell adapts the way it explains itself based on your role and your
          current pain. Pick your persona and top challenges.
        </p>

        {/* Persona buttons */}
        <div className="mt-5 flex flex-wrap gap-3">
          {PERSONAS.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setSelectedPersonaId(p.id);
                setSelectedChallengeIds([]);
              }}
              className={`rounded-full border px-4 py-2 text-sm ${
                p.id === selectedPersonaId
                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-100"
                  : "border-slate-600 bg-slate-900/80 text-slate-200 hover:border-cyan-400/70"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <p className="mt-3 text-sm text-slate-400">{persona.roleTagline}</p>

        {/* Challenge chips */}
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Select up to 2 challenges
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {persona.challenges.map((c) => {
            const active = selectedChallengeIds.includes(c.id);
            return (
              <button
                key={c.id}
                onClick={() => toggleChallenge(c.id)}
                className={`rounded-full border px-3.5 py-2 text-sm text-left ${
                  active
                    ? "border-cyan-400 bg-cyan-500/20 text-cyan-100"
                    : "border-slate-600 bg-slate-900/80 text-slate-200 hover:border-cyan-400/70"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT: Qintell response */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-6">
        {selectedChallenges.length === 0 ? (
          <div className="flex h-full items-center justify-center text-center text-base text-slate-300">
            Pick 1–2 challenges on the left. Qintell will show you how it
            tackles them end-to-end.
          </div>
        ) : (
          <div className="space-y-6 text-sm text-slate-200">
            {selectedChallenges.map((c) => (
              <div
                key={c.id}
                className="space-y-4 border-b border-slate-800 pb-4 last:border-b-0 last:pb-0"
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
                    Challenge
                  </div>
                  <div className="mt-1 text-base font-semibold text-slate-50">
                    {c.label}
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {c.summary.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                    How Qintell responds
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {c.qintellSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                    What you get
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {c.outcomes.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <button className="mt-2 rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300">
              Talk through this scenario in detail
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const QintellLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 ring-1 ring-cyan-400/50">
              <span className="text-xl font-semibold text-cyan-300">q</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-slate-50">
                qintell
              </div>
              <div className="text-xs text-slate-400">
                Req &amp; Test Intelligence
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-slate-300 md:flex">
            <a href="#domain-assets" className="hover:text-cyan-300">
              Domain Assets
            </a>
            <a href="#req-intel" className="hover:text-cyan-300">
              Requirement Intelligence
            </a>
            <a href="#test-intel" className="hover:text-cyan-300">
              Test Intelligence
            </a>
            <a href="#focus" className="hover:text-cyan-300">
              Focus Areas
            </a>
            <a href="#outcomes" className="hover:text-cyan-300">
              Outcomes
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <button className="hidden rounded-lg border border-slate-600 bg-slate-900/80 px-4 py-2 text-sm font-normal text-slate-100 hover:border-cyan-400 hover:text-cyan-100 lg:inline-flex">
              Download Deck
            </button>
            <button className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300">
              Start a Conversation
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        {/* INTERACTIVE HERO */}
        <QintellHeroInteractive />

        {/* UNDER THE HOOD */}
        <section className="mt-16 border-t border-slate-800/80 pt-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Under the hood
              </h2>
              <p className="mt-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
                Qintell is an intelligent brain!.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-200">
                It takes everything you have — specs, decks, trackers,
                regulatory docs — turns them into a canonical requirement model,
                then links that model to test ideas, domain assets and coverage
                views.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 text-sm text-slate-200">
              <ol className="list-decimal space-y-2 pl-5">
                <li>Transforms multi-format requirements into a structured model using LLM-assisted parsing and normalization.</li>
                <li>Enriches requirement understanding through domain-aware retrieval using a lightweight RAG layer.</li>
                <li>
                  Applies AI-driven coherence checks to flag ambiguities, inconsistencies, and missing functional links.
                </li>
                <li>Uses an agent-style reasoning loop to propose scenario ideas and map them to relevant flows and rules.</li>
                <li>
                  Generates coverage and impact views by combining structured models with RAG-backed context retrieval.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* DOMAIN ASSETS */}
        <section
          id="domain-assets"
          className="mt-16 border-t border-slate-800/80 pt-10"
        >
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Foundation
          </h2>
          <p className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            Domain Intelligence Assets
          </p>
          <p className="mt-3 max-w-2xl text-base text-slate-200">
            Qintell starts with pre-built banking and payments assets so you
            aren’t inventing everything from scratch.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="text-base font-semibold text-slate-50">
                Payments &amp; Corporate Banking
              </div>
              <ul className="mt-3 space-y-1 text-base text-slate-200">
                <li>• ACH/NACHA, Fedwire, SEPA, PSD2</li>
                <li>• IMPS/UPI, RTGS variants</li>
                <li>• Limits, returns, exceptions</li>
                <li>• Cash management and liquidity flows</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="text-base font-semibold text-slate-50">
                BRM &amp; Channels
              </div>
              <ul className="mt-3 space-y-1 text-base text-slate-200">
                <li>• Billing, rating, invoicing</li>
                <li>• Adjustments, dunning</li>
                <li>• Revenue protection controls</li>
                <li>• Channel journeys &amp; entitlements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="text-base font-semibold text-slate-50">
                Reference Libraries
              </div>
              <ul className="mt-3 space-y-1 text-base text-slate-200">
                <li>• NACHA, ISO 20022 references</li>
                <li>• Domain glossaries and dictionaries</li>
                <li>• Coverage maps across key flows</li>
                <li>• QE accelerators, BDD &amp; traceability templates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* REQUIREMENT INTELLIGENCE */}
        <section
          id="req-intel"
          className="mt-16 border-t border-slate-800/80 pt-10"
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Requirement Layer
              </h2>
              <p className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
                AI-Driven Requirement Intelligence
              </p>
              <p className="mt-3 text-base text-slate-200">
                Multi-format ingestion, canonical modelling and AI-assisted
                clarity checks — so you know what you’re really building.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-6 text-sm text-slate-200">
              <div>
                <div className="text-base font-semibold text-slate-50">
                  Multi-format ingestion
                </div>
                <p className="mt-1 text-sm text-slate-300">
                  PDFs, DOCX, spreadsheets, HTML and images merged into a
                  Canonical Intermediate Representation (CIR).
                </p>
              </div>
              <div>
                <div className="text-base font-semibold text-slate-50">
                  Structured requirement model
                </div>
                <p className="mt-1 text-sm text-slate-300">
                  Business Area → Module → Feature → Requirement Slice, with
                  versions and traceability.
                </p>
              </div>
              <div>
                <div className="text-base font-semibold text-slate-50">
                  Clarity &amp; conflict checks
                </div>
                <p className="mt-1 text-sm text-slate-300">
                  AI-based clarity scoring, duplicate detection and
                  cross-document conflict spotting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TEST INTELLIGENCE */}
        <section
          id="test-intel"
          className="mt-16 border-t border-slate-800/80 pt-10"
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div className="order-2 space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-6 text-sm text-slate-200 md:order-1">
              <div>
                <div className="text-base font-semibold text-slate-50">
                  Scenario generation
                </div>
                <p className="mt-1 text-sm text-slate-300">
                  From requirements and domain flows to structured, reviewable
                  test scenarios.
                </p>
              </div>
              <div>
                <div className="text-base font-semibold text-slate-50">
                  Coverage &amp; risk views
                </div>
                <p className="mt-1 text-sm text-slate-300">
                  Map tests back to requirements, rules and flows; see where
                  you’re thin or over-testing.
                </p>
              </div>
              <div>
                <div className="text-base font-semibold text-slate-50">
                  Quality governance
                </div>
                <p className="mt-1 text-sm text-slate-300">
                  Coverage thresholds, defect patterns and release readiness
                  metrics you can show to management.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Test &amp; QE Layer
              </h2>
              <p className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
                Test Intelligence &amp; Quality Engineering
              </p>
              <p className="mt-3 text-base text-slate-200">
                Qintell connects requirements, domain rules and tests so QA
                stops being just defect-finding and becomes coverage
                engineering.
              </p>
            </div>
          </div>
        </section>

        {/* FOCUS AREAS */}
        <section
          id="focus"
          className="mt-16 border-t border-slate-800/80 pt-10"
        >
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Focus
          </h2>
          <p className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            Built for complex banking platforms
          </p>

          <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <div className="text-base font-semibold text-slate-50">
                Corporate Banking
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Cash management, liquidity, trade finance and entitlements.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <div className="text-base font-semibold text-slate-50">
                Payments
              </div>
              <p className="mt-2 text-sm text-slate-300">
                ACH/NACHA, Fedwire, SEPA, PSD2, UPI/IMPS, RTGS and local
                variants.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <div className="text-base font-semibold text-slate-50">
                Digital Channels
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Journeys, onboarding, authentication, MFA and entitlements.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <div className="text-base font-semibold text-slate-50">
                BRM Platforms
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Billing, charging, adjustments and revenue protection.
              </p>
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section
          id="outcomes"
          className="mt-16 border-t border-slate-800/80 pt-10"
        >
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Measurable impact
          </h2>
          <p className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            Outcomes, not just artefacts
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="text-3xl font-semibold text-cyan-300">30–50%</div>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                Faster requirement analysis
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Domain templates and structured modelling reduce ambiguity and
                cycle time.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="text-3xl font-semibold text-cyan-300">40–60%</div>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                Reduction in QA rework
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Clearer requirements and stronger traceability cut down rework
                and late surprises.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="text-3xl font-semibold text-cyan-300">Higher</div>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                Coverage &amp; compliance confidence
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Requirements, tests and regulatory rules seen through one
                coherent model.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 border-t border-slate-800/80 pt-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Next step
              </h2>
              <p className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
                Bring one project. We’ll show you where Qintell fits.
              </p>
              <p className="mt-3 text-base text-slate-200">
                Pick a live or upcoming initiative and we’ll map how Qintell
                could sit alongside your existing tools and teams — without
                forcing a big-bang change.
              </p>
            </div>
            <div className="rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 text-sm text-slate-200">
              <p className="text-base font-semibold text-slate-50">
                Let’s bring order to complexity.
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Start with a focused 30-minute discussion. No slide show. Just a
                working session on your reality.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300">
                  Book a Discussion
                </button>
                <button className="rounded-lg border border-slate-600 bg-slate-900/80 px-5 py-2 text-sm text-slate-100 hover:border-cyan-400 hover:text-cyan-100">
                  Download Capability Deck
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-200">
              qintell
            </span>
            <span className="text-xs text-slate-500">
              Requirement &amp; Test Intelligence for Banking Platforms
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-cyan-300">
              About
            </a>
            <a href="#" className="hover:text-cyan-300">
              Capability Deck
            </a>
            <a href="#" className="hover:text-cyan-300">
              Contact
            </a>
            <a href="#" className="hover:text-cyan-300">
              LinkedIn
            </a>
            <a href="#" className="hover:text-cyan-300">
              Privacy
            </a>
            <a href="#" className="hover:text-cyan-300">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QintellLanding;
