import React from "react";

const QintellLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bgPrimary text-brand-textPrimary">
      {/* Page Wrapper */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">

        {/* NAVBAR */}
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            {/* LOGO */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 ring-1 ring-brand-primary/40">
              <span className="text-lg font-semibold text-brand-primary">Q</span>
            </div>

            <div>
              <div className="text-lg font-semibold tracking-tight text-brand-textPrimary">
                Qintell
              </div>
              <div className="text-xs text-brand-textMuted">
                SDLC Intelligence Platform
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-brand-textSecondary md:flex">
            <a href="#what" className="hover:text-brand-textPrimary">What it does</a>
            <a href="#features" className="hover:text-brand-textPrimary">Capabilities</a>
            <a href="#who" className="hover:text-brand-textPrimary">Who it's for</a>
            <a href="#vision" className="hover:text-brand-textPrimary">Vision</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden rounded-lg border border-brand-bgSecondary px-3 py-1.5 text-xs font-medium text-brand-textSecondary hover:bg-brand-bgSecondary md:inline-flex">
              Download Overview
            </button>
            <button className="rounded-lg bg-brand-primary px-3.5 py-1.5 text-xs font-semibold text-brand-bgPrimary shadow-sm hover:bg-brand-primaryDark">
              Request Early Access
            </button>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="mt-8 flex flex-1 flex-col gap-12 pb-10 md:mt-16 md:gap-16">

          {/* HERO SECTION */}
          <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-bgSecondary bg-brand-bgTertiary px-3 py-1 text-[11px] font-medium text-brand-textSecondary">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-success" />
                AI-Driven SDLC Intelligence • Requirements • Tests • Traceability
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-brand-textPrimary sm:text-4xl lg:text-5xl">
                Intelligence for
                <span className="block text-brand-primary">
                  Modern Software Delivery.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-textSecondary sm:text-base">
                Qintell brings structure, intelligence, and real-time
                traceability to the entire Software Development Lifecycle —
                from unstructured documents to production-ready releases.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-brand-bgPrimary hover:bg-brand-primaryDark">
                  Talk to Us
                </button>
                <button className="rounded-lg border border-brand-bgSecondary px-4 py-2 text-sm font-medium text-brand-textSecondary hover:bg-brand-bgSecondary">
                  Explore the Platform
                </button>
              </div>

              {/* Quick stats */}
              <div className="mt-6 grid gap-4 text-xs text-brand-textSecondary sm:grid-cols-3 sm:text-sm">
                <div>
                  <div className="font-semibold text-brand-textPrimary">Requirements → Tests</div>
                  <div className="text-brand-textMuted">
                    Structured extraction, normalization and AI-generated coverage.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-brand-textPrimary">End-to-end Traceability</div>
                  <div className="text-brand-textMuted">
                    Requirement → Test → Defect → Release mapped and auditable.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-brand-textPrimary">SDLC Intelligence</div>
                  <div className="text-brand-textMuted">
                    Risk, gaps and quality health visible in one place.
                  </div>
                </div>
              </div>
            </div>

            {/* HERO CARD */}
            <div className="rounded-2xl border border-brand-bgSecondary bg-brand-bgSecondary/40 p-4 shadow-xl sm:p-6">
              <div className="mb-3 flex items-center justify-between text-xs text-brand-textMuted">
                <span>Live SDLC Snapshot</span>
                <span className="rounded-full bg-brand-success/10 px-2 py-0.5 text-[10px] font-medium text-brand-success">AI analysis</span>
              </div>

              {/* Internal grid */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="rounded-xl bg-brand-bgPrimary p-3">
                    <div className="text-brand-textMuted">Requirements</div>
                    <div className="mt-1 text-lg font-semibold text-brand-textPrimary">1,248</div>
                    <div className="mt-1 text-[11px] text-brand-success">92% normalized</div>
                  </div>

                  <div className="rounded-xl bg-brand-bgPrimary p-3">
                    <div className="text-brand-textMuted">Test Coverage</div>
                    <div className="mt-1 text-lg font-semibold text-brand-textPrimary">87%</div>
                    <div className="mt-1 text-[11px] text-brand-primary">320 gaps flagged</div>
                  </div>

                  <div className="rounded-xl bg-brand-bgPrimary p-3">
                    <div className="text-brand-textMuted">Risk Hotspots</div>
                    <div className="mt-1 text-lg font-semibold text-brand-textPrimary">14</div>
                    <div className="mt-1 text-[11px] text-brand-warning">Prioritized by impact</div>
                  </div>
                </div>

                {/* Example block */}
                <div className="rounded-xl border border-brand-bgSecondary bg-brand-bgPrimary p-3">
                  <div className="text-xs font-medium text-brand-textSecondary">Example: Funds Transfer Module</div>

                  <ul className="mt-2 space-y-1.5 text-[11px] text-brand-textSecondary">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-success" />
                      <span>26 new requirements auto-classified and linked.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                      <span>74 new test cases generated for high-value flows.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-warning" />
                      <span>3 regulatory gaps flagged against the configured rule-pack.</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between border-t border-brand-bgSecondary pt-3 text-[11px] text-brand-textMuted">
                  <span>LLM + RAG + Domain Models</span>
                  <span>Multi-tenant • Audit-ready</span>
                </div>
              </div>
            </div>
          </section>

          {/* WHAT IT DOES */}
          <section id="what" className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-brand-textPrimary sm:text-xl">
              The Intelligence Layer for Engineering, Product and Quality.
            </h2>

            <p className="max-w-3xl text-sm leading-relaxed text-brand-textSecondary">
              Qintell unifies requirements, test assets, documentation and
              quality signals into a single AI-driven platform. It turns messy
              specifications, change requests and regulatory documents into a
              consistent, queryable, and traceable SDLC knowledge system.
            </p>

            <div className="grid gap-4 text-sm text-brand-textSecondary md:grid-cols-3">

              <div className="rounded-xl border border-brand-bgSecondary bg-brand-bgTertiary p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  Requirement Intelligence
                </div>
                <p className="mt-2 text-sm text-brand-textSecondary">
                  Extract, normalize and structure requirements from PDFs,
                  Word docs, spreadsheets and images into a canonical
                  representation ready for analysis and automation.
                </p>
              </div>

              <div className="rounded-xl border border-brand-bgSecondary bg-brand-bgTertiary p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-success">
                  Test Intelligence
                </div>
                <p className="mt-2 text-sm text-brand-textSecondary">
                  Generate test cases, acceptance criteria, coverage views
                  and risk signals aligned to your true business workflows.
                </p>
              </div>

              <div className="rounded-xl border border-brand-bgSecondary bg-brand-bgTertiary p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-warning">
                  Traceability & Governance
                </div>
                <p className="mt-2 text-sm text-brand-textSecondary">
                  Maintain end-to-end traceability across Requirements →
                  Tests → Defects → Releases with versioning, audits and
                  configurable quality gates.
                </p>
              </div>

            </div>
          </section>

          {/* CAPABILITIES */}
          <section id="features" className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-brand-textPrimary sm:text-xl">
              Core Capabilities
            </h2>

            <div className="grid gap-4 text-sm text-brand-textPrimary md:grid-cols-2">

              <ul className="space-y-2 rounded-xl border border-brand-bgSecondary bg-brand-bgTertiary p-4 text-brand-textSecondary">
                <li>• AI-driven requirements extraction & classification</li>
                <li>• Intelligent user story and scenario generation</li>
                <li>• Automated test case design & prioritization</li>
                <li>• RAG-powered domain reasoning for Banking & beyond</li>
                <li>• Canonical Intermediate Representation (CIR)</li>
                <li>• Impact and change analysis across SDLC artifacts</li>
              </ul>

              <ul className="space-y-2 rounded-xl border border-brand-bgSecondary bg-brand-bgTertiary p-4 text-brand-textSecondary">
                <li>• Advanced traceability matrix and audit trail</li>
                <li>• Quality dashboards, KPIs and readiness views</li>
                <li>• Multi-tenant architecture and RBAC</li>
                <li>• Integration-friendly APIs (Jira, Git, CI/CD tools)</li>
                <li>• Versioning and document lineage tracking</li>
                <li>• Configurable rule-packs for regulatory checks</li>
              </ul>

            </div>
          </section>

          {/* WHO IT'S FOR */}
          <section id="who" className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-brand-textPrimary sm:text-xl">
              Built for Teams That Can&apos;t Afford Guesswork.
            </h2>

            <div className="grid gap-4 text-sm text-brand-textSecondary md:grid-cols-3">

              <div className="rounded-xl border border-brand-bgSecondary bg-brand-bgTertiary p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  Engineering & Product
                </div>
                <p className="mt-2">
                  Product managers, architects and leads who need clean
                  requirements, clear impact analysis and strong SDLC visibility.
                </p>
              </div>

              <div className="rounded-xl border border-brand-bgSecondary bg-brand-bgTertiary p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-success">
                  QA & Quality Engineering
                </div>
                <p className="mt-2">
                  QE organizations looking for automation beyond scripts:
                  coverage, intelligence, risk, governance — all in one place.
                </p>
              </div>

              <div className="rounded-xl border border-brand-bgSecondary bg-brand-bgTertiary p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-warning">
                  Consulting & Delivery
                </div>
                <p className="mt-2">
                  Service and consulting firms who want repeatable, IP-led
                  SDLC intelligence across every client engagement.
                </p>
              </div>

            </div>
          </section>

          {/* VISION */}
          <section id="vision" className="mt-2 rounded-2xl border border-brand-bgSecondary bg-brand-bgTertiary px-5 py-6 sm:px-7 sm:py-8">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">

              <div>
                <h3 className="text-base font-semibold tracking-tight text-brand-textPrimary sm:text-lg">
                  A clearer SDLC. A stronger quality practice.
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-brand-textSecondary">
                  Qintell is being built as a serious, long-term SDLC intelligence
                  platform — not a toy AI demo. The goal is simple: bring global
                  engineering teams to a higher level of clarity, quality and
                  predictability by unifying the SDLC into one AI-driven ecosystem.
                </p>
              </div>

              <div className="space-y-3 rounded-xl border border-brand-bgSecondary bg-brand-bgPrimary p-4 text-sm">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  Be part of the early conversations.
                </div>
                <p className="text-brand-textSecondary">
                  If you&apos;re leading engineering, QA, product or delivery and
                  want to influence how platforms like this should work in the
                  real world, we&apos;d like to speak with you.
                </p>
                <button className="mt-1 w-full rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-brand-bgPrimary hover:bg-brand-primaryDark">
                  Request an Early Access Discussion
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="mt-6 border-t border-brand-bgSecondary pt-4 text-xs text-brand-textMuted sm:mt-8 sm:pt-5">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div>© {new Date().getFullYear()} Qintell. All rights reserved.</div>
            <div className="flex flex-wrap gap-3">
              <span>AI-Driven SDLC Intelligence Platform</span>
              <span className="hidden sm:inline-block">•</span>
              <span>Requirements • Tests • Traceability • Quality</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default QintellLanding;