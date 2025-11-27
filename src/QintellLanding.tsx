import React from "react";
import QintellScenarioFlow from "./components/QintellScenarioFlow";

// ------------------------------------------------------
// MAIN LANDING PAGE
// ------------------------------------------------------
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
            <a href="#scenario" className="hover:text-cyan-300">
              Scenario Walkthrough
            </a>
            <a href="#domain-assets" className="hover:text-cyan-300">
              Domain Assets
            </a>
            <a href="#req-intel" className="hover:text-cyan-300">
              Requirement Intelligence
            </a>
            <a href="#test-intel" className="hover:text-cyan-300">
              Test Intelligence
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

        {/* ------------------------------------------------------ */}
        {/* SCENARIO-DRIVEN INTERACTIVE HERO                      */}
        {/* ------------------------------------------------------ */}
        <section id="scenario">
          <QintellScenarioFlow />
        </section>

        {/* ------------------------------------------------------ */}
        {/* UNDER THE HOOD (unchanged)                            */}
        {/* ------------------------------------------------------ */}
        <section className="mt-20 border-t border-slate-800/80 pt-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Under the hood
              </h2>
              <p className="mt-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
                Modern AI patterns, focused on banking delivery realities.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-200">
                Qintell uses AI where it adds leverage — combining language models,
                retrieval and reasoning to make requirements and tests more dependable.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 text-sm text-slate-200">
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  LLM-assisted parsing turns multi-format documents into structured requirement signals.
                </li>
                <li>
                  Domain-aware retrieval enriches interpretation using a lightweight RAG layer.
                </li>
                <li>
                  AI coherence checks surface ambiguity, conflict and missing logic.
                </li>
                <li>
                  Agent-style reasoning proposes scenario ideas tied to flows and rules.
                </li>
                <li>
                  Structured models generate coverage, impact and traceability insights.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* DOMAIN ASSETS (unchanged)                              */}
        {/* ------------------------------------------------------ */}
        <section id="domain-assets" className="mt-20 border-t border-slate-800/80 pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Foundation
          </h2>
          <p className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            Domain intelligence, built in from day one.
          </p>
          <p className="mt-3 max-w-2xl text-base text-slate-200">
            Qintell includes curated domain libraries that strengthen interpretation,
            scenario generation and coverage understanding across real banking and payments delivery.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="text-base font-semibold text-slate-50">Payments &amp; Corporate Banking</div>
              <ul className="mt-3 space-y-1 text-base text-slate-200">
                <li>• ACH/NACHA, Fedwire, SEPA, PSD2</li>
                <li>• IMPS/UPI, RTGS variants</li>
                <li>• Limits, returns, exceptions</li>
                <li>• Cash management & liquidity flows</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="text-base font-semibold text-slate-50">BRM &amp; Channels</div>
              <ul className="mt-3 space-y-1 text-base text-slate-200">
                <li>• Billing, rating, invoicing</li>
                <li>• Adjustments, dunning</li>
                <li>• Revenue protection controls</li>
                <li>• Channel journeys & entitlements</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="text-base font-semibold text-slate-50">Reference Intelligence</div>
              <ul className="mt-3 space-y-1 text-base text-slate-200">
                <li>• NACHA, ISO 20022-aligned elements</li>
                <li>• Domain glossaries & dictionaries</li>
                <li>• Coverage maps across key flows</li>
                <li>• QE accelerators and trace patterns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* REQUIREMENT INTELLIGENCE (unchanged)                   */}
        {/* ------------------------------------------------------ */}
        <section id="req-intel" className="mt-20 border-t border-slate-800/80 pt-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Requirement Layer
              </h2>
              <p className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
                A structured lens on all your requirements.
              </p>
              <p className="mt-3 text-base text-slate-200">
                Qintell builds a unified requirement model from the documents you already
                have, enriched with domain context so ambiguity, duplication and conflict
                surface early.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-6 text-sm text-slate-200">
              <div>
                <div className="text-base font-semibold text-slate-50">Unified requirement view</div>
                <p className="mt-1 text-sm text-slate-300">
                  Consolidates specs, decks, trackers and regulatory notes into a consistent,
                  navigable structure.
                </p>
              </div>
              <div>
                <div className="text-base font-semibold text-slate-50">Strengthened interpretation</div>
                <p className="mt-1 text-sm text-slate-300">
                  Domain signals help each requirement sit in context — flows, validations,
                  rules and dependencies.
                </p>
              </div>
              <div>
                <div className="text-base font-semibold text-slate-50">Cleaner baseline</div>
                <p className="mt-1 text-sm text-slate-300">
                  Unclear, duplicate and conflicting statements surface for early resolution,
                  reducing QA rework.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* TEST INTELLIGENCE (unchanged)                          */}
        {/* ------------------------------------------------------ */}
        <section id="test-intel" className="mt-20 border-t border-slate-800/80 pt-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="order-2 space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-6 text-sm text-slate-200 md:order-1">
              <div>
                <div className="text-base font-semibold text-slate-50">Scenario insight</div>
                <p className="mt-1 text-sm text-slate-300">
                  Scenario ideas are derived from structured requirements and domain patterns.
                </p>
              </div>
              <div>
                <div className="text-base font-semibold text-slate-50">Connected logic</div>
                <p className="mt-1 text-sm text-slate-300">
                  Links scenarios conceptually to flows, rules and validations so gaps and
                  overlaps become visible.
                </p>
              </div>
              <div>
                <div className="text-base font-semibold text-slate-50">Coverage engineering</div>
                <p className="mt-1 text-sm text-slate-300">
                  QA shifts from reactive defect finding to deliberate coverage design using
                  structure and risk.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Test Layer
              </h2>
              <p className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
                From requirements to meaningful test insight.
              </p>
              <p className="mt-3 text-base text-slate-200">
                Qintell connects requirements, flows and rules into a single picture so
                strategy is guided by structure, not guesswork.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* OUTCOMES (unchanged)                                   */}
        {/* ------------------------------------------------------ */}
        <section id="outcomes" className="mt-20 border-t border-slate-800/80 pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Measurable Outcomes
          </h2>
          <p className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            Clear improvements, not just new artefacts.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="text-3xl font-semibold text-cyan-300">30–50%</div>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                Faster analysis
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Structured modelling and context enrichment reduce ambiguity and re-reading cycles.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="text-3xl font-semibold text-cyan-300">40–60%</div>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                Less rework
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Cleaner requirements and traceability cut down on late discoveries and UAT rework.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="text-3xl font-semibold text-cyan-300">Higher</div>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                Coverage & confidence
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Requirements, flows and rules unified into one model give stronger basis for sign-off.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* CTA (unchanged)                                       */}
        {/* ------------------------------------------------------ */}
        <section className="mt-20 border-t border-slate-800/80 pt-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Next Step
              </h2>
              <p className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
                Bring one project. We’ll show you what Qintell reveals.
              </p>
              <p className="mt-3 text-base text-slate-200">
                Share a live initiative and we’ll map how Qintell fits your current tools &
                teams — without forcing change.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 text-sm text-slate-200">
              <p className="text-base font-semibold text-slate-50">
                A working session, not a brochure.
              </p>
              <p className="mt-2 text-sm text-slate-300">
                We’ll walk through how Qintell sees your requirements, scenarios and coverage —
                and where clarity appears instantly.
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
            <span className="text-sm font-semibold text-slate-200">qintell</span>
            <span className="text-xs text-slate-500">
              Requirement & Test Intelligence for Banking Platforms
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-cyan-300">About</a>
            <a href="#" className="hover:text-cyan-300">Capability Deck</a>
            <a href="#" className="hover:text-cyan-300">Contact</a>
            <a href="#" className="hover:text-cyan-300">LinkedIn</a>
            <a href="#" className="hover:text-cyan-300">Privacy</a>
            <a href="#" className="hover:text-cyan-300">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default QintellLanding;