import React from "react";

const QintellLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Page wrapper */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        {/* Top nav */}
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 ring-1 ring-sky-500/40">
              <span className="text-lg font-semibold text-sky-400">Q</span>
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">
                Qintell
              </div>
              <div className="text-xs text-slate-400">
                SDLC Intelligence Platform
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#what" className="hover:text-slate-50">
              What it does
            </a>
            <a href="#features" className="hover:text-slate-50">
              Capabilities
            </a>
            <a href="#who" className="hover:text-slate-50">
              Who it&apos;s for
            </a>
            <a href="#vision" className="hover:text-slate-50">
              Vision
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-900 md:inline-flex">
              Download Overview
            </button>
            <button className="rounded-lg bg-sky-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 shadow-sm hover:bg-sky-400">
              Request Early Access
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="mt-8 flex flex-1 flex-col gap-12 pb-10 md:mt-16 md:gap-16">
          {/* Hero section */}
          <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-[11px] font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                AI-Driven SDLC Intelligence • Requirements • Tests • Traceability
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Intelligence for
                <span className="block text-sky-400">
                  Modern Software Delivery.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Qintell brings structure, intelligence, and real-time
                traceability to the entire Software Development Lifecycle —
                from unstructured documents to production-quality releases.
                Powered by LLMs, RAG, and domain-aware reasoning.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-sky-400">
                  Talk to Us
                </button>
                <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-900">
                  Explore the Platform
                </button>
              </div>

              <div className="mt-6 grid gap-4 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm">
                <div>
                  <div className="font-semibold text-slate-100">
                    Requirements → Tests
                  </div>
                  <div className="text-slate-400">
                    Structured extraction, normalization and AI-generated
                    coverage.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-slate-100">
                    End-to-end Traceability
                  </div>
                  <div className="text-slate-400">
                    Requirement → Test → Defect → Release mapped and auditable.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-slate-100">
                    SDLC Intelligence
                  </div>
                  <div className="text-slate-400">
                    Risk, gaps and quality health visible in one place.
                  </div>
                </div>
              </div>
            </div>

            {/* Hero "product" card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl shadow-sky-900/20 sm:p-6">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                <span>Live SDLC Snapshot</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                  AI analysis
                </span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="rounded-xl bg-slate-900/70 p-3">
                    <div className="text-slate-400">Requirements</div>
                    <div className="mt-1 text-lg font-semibold text-slate-50">
                      1,248
                    </div>
                    <div className="mt-1 text-[11px] text-emerald-400">
                      92% normalized
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-900/70 p-3">
                    <div className="text-slate-400">Test Coverage</div>
                    <div className="mt-1 text-lg font-semibold text-slate-50">
                      87%
                    </div>
                    <div className="mt-1 text-[11px] text-sky-400">
                      320 gaps flagged
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-900/70 p-3">
                    <div className="text-slate-400">Risk Hotspots</div>
                    <div className="mt-1 text-lg font-semibold text-slate-50">
                      14
                    </div>
                    <div className="mt-1 text-[11px] text-amber-400">
                      Prioritized by impact
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <div className="text-xs font-medium text-slate-300">
                    Example: Funds Transfer Module
                  </div>
                  <ul className="mt-2 space-y-1.5 text-[11px] text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>
                        26 new requirements auto-classified and linked to
                        existing stories.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>
                        74 new test cases generated for high-value payment
                        flows.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span>
                        3 regulatory gaps flagged against configured rule packs.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] text-slate-400">
                  <span>LLM + RAG + Domain Models</span>
                  <span>Multi-tenant • Audit-ready</span>
                </div>
              </div>
            </div>
          </section>

          {/* What it does */}
          <section id="what" className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
              The Intelligence Layer for Engineering, Product and Quality.
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
              Qintell unifies requirements, test assets, documentation and
              quality signals into a single AI-driven platform. It turns messy
              specifications, change requests and regulatory documents into a
              consistent, queryable, and traceable source of truth for your SDLC.
            </p>

            <div className="grid gap-4 text-sm text-slate-300 md:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                  Requirement Intelligence
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Extract, normalize and structure requirements from PDFs, Word
                  docs, spreadsheets and images into a canonical representation
                  that’s ready for analysis and automation.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
                  Test Intelligence
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Generate test cases, acceptance criteria, data hints and
                  coverage views automatically, aligned to your real
                  requirements and business flows.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-amber-400">
                  Traceability & Governance
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Maintain end-to-end traceability across Requirements → Tests
                  → Defects → Releases with versioning, audits and configurable
                  governance rules.
                </p>
              </div>
            </div>
          </section>

          {/* Capabilities */}
          <section id="features" className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
              Core Capabilities
            </h2>

            <div className="grid gap-4 text-sm text-slate-200 md:grid-cols-2">
              <ul className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <li>• AI-driven requirements extraction & classification</li>
                <li>• Intelligent user story and scenario generation</li>
                <li>• Automated test case design & prioritization</li>
                <li>• RAG-powered domain reasoning for Banking & beyond</li>
                <li>• Canonical Intermediate Representation (CIR)</li>
                <li>• Impact and change analysis across SDLC artifacts</li>
              </ul>
              <ul className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <li>• Advanced traceability matrix and audit trail</li>
                <li>• Quality dashboards, KPIs and readiness views</li>
                <li>• Multi-tenant architecture and RBAC</li>
                <li>• Integration-friendly APIs (Jira, Git, CI/CD tools)</li>
                <li>• Versioning and document lineage tracking</li>
                <li>• Configurable rule-packs for regulatory checks</li>
              </ul>
            </div>
          </section>

          {/* Who it's for */}
          <section id="who" className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
              Built for Teams That Can&apos;t Afford Guesswork.
            </h2>

            <div className="grid gap-4 text-sm text-slate-300 md:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                  Engineering & Product
                </div>
                <p className="mt-2">
                  Product managers, architects and leads who need clean
                  requirements, clear impact analysis and less fragmentation
                  across tools.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
                  QA & Quality Engineering
                </div>
                <p className="mt-2">
                  QE organizations looking for automation beyond scripts:
                  coverage, risk, gaps and governance driven by real intelligence.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-amber-400">
                  Consulting & Delivery
                </div>
                <p className="mt-2">
                  Service providers and consulting firms who want to bring
                  repeatable, IP-led SDLC intelligence to every client engagement.
                </p>
              </div>
            </div>
          </section>

          {/* Vision / CTA */}
          <section id="vision" className="mt-2 rounded-2xl border border-slate-800 bg-slate-950/60 px-5 py-6 sm:px-7 sm:py-8">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
              <div>
                <h3 className="text-base font-semibold tracking-tight text-slate-50 sm:text-lg">
                  A clearer SDLC. A stronger quality practice.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Qintell is being built as a serious, long-term SDLC
                  intelligence platform — not a toy AI demo. The goal is simple:
                  bring global engineering teams to a higher level of clarity,
                  quality and predictability by unifying the SDLC into one
                  AI-driven ecosystem.
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm">
                <div className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                  Be part of the early conversations.
                </div>
                <p className="text-slate-300">
                  If you&apos;re leading engineering, QA, product or delivery and
                  want to influence how platforms like this should work in the
                  real world, we&apos;d like to speak with you.
                </p>
                <button className="mt-1 w-full rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400">
                  Request an Early Access Discussion
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-500 sm:mt-8 sm:pt-5">
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
