import { InstallCommand } from "./install-command";

const FEATURES = [
  {
    title: "It works the whole ticket",
    body: "Point it at an issue. It explores the codebase, plans the change, writes the code, runs the tests and hands back a diff that already passes. The context is the whole repository, not a snippet of it.",
  },
  {
    title: "It steers in flight",
    body: "Type while it works. The message reaches the very next request it makes, and the engine reports back which ones landed. No queues, no waiting for the turn to end.",
  },
  {
    title: "Governance security will sign off",
    body: "Human approval on the calls that matter, commands inside a sandbox, a per-team budget that stops the work before the money does, and secrets that never reach a log, a prompt or a child process.",
  },
  {
    title: "Cost you can defend",
    body: "Every request reports its tokens, its cache hit rate, its time to first token and its price — per session, per model, per provider. Finance gets an answer, not an estimate.",
  },
  {
    title: "Context that never runs out",
    body: "Long work is compacted into a handoff summary, so a two-hour task keeps its thread instead of waking up with an empty window and a vague memory.",
  },
  {
    title: "Your stack, your keys",
    body: "OpenAI, Anthropic, Gemini, OpenRouter or any OpenAI-compatible vendor. Your keys stay in the environment or in a file, never in a config file in plain text.",
  },
];

const STEPS = [
  {
    title: "Install",
    body: "One command. The right binary for your system, checksum-verified, and in your PATH.",
  },
  {
    title: "Connect your stack",
    body: "norte-code models lists the catalogue. Pick a provider, point it at your key, and your team's model overrides come along.",
  },
  {
    title: "Delegate the work",
    body: "norte-code \"migrate the auth module to the new API\". It works the task and shows every step it took.",
  },
];

const FAQ = [
  {
    question: "Where do the API keys live?",
    answer:
      "In an environment variable or a file on disk, never in the config in plain text. They are held in a redacted secret type: they do not reach a model event, a log line or a command.",
  },
  {
    question: "What leaves our machines?",
    answer:
      "The requests you approved, and nothing else. The agent runs where your engineers work; the repository, the tools and the skills stay on your side.",
  },
  {
    question: "How do we control the spend?",
    answer:
      "A limit per message, per session or per day. The gate measures what it just let through, inside the engine, so a request the limit should have stopped never goes out.",
  },
  {
    question: "Can we review what it did?",
    answer:
      "Every request is recorded with its tokens, its timing and its price, and the telemetry report breaks it down per session, per model and per provider.",
  },
];

const PROVIDERS = [
  "OpenAI",
  "Anthropic",
  "Gemini",
  "OpenRouter",
  "Any OpenAI-compatible vendor",
];

export default function Page() {
  return (
    <main className="flex-1">
      <section className="glow relative overflow-hidden">
        <div className="grid-lines absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 sm:pt-32">
          <p className="font-mono text-[13px] tracking-[0.2em] text-cyan uppercase">
            AI coding agent · for engineering teams
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Engineering leverage, in your terminal.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted text-pretty">
            Norte Code is an autonomous coding agent for the terminal. It reads
            the repository, follows your conventions, runs the tools and ships
            the change — while your team keeps every approval, every budget and
            every token on the record.
          </p>

          <div className="mt-10 max-w-3xl">
            <InstallCommand />
          </div>
          <p className="mt-4 font-mono text-[13px] text-muted">
            macOS and Linux, x64 and arm64. Bring your own keys.
          </p>

          <div className="mt-14 overflow-hidden rounded-xl border border-line bg-[#0f1216] font-mono text-[13px] leading-6">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="size-2.5 rounded-full bg-[#3a4149]" />
              <span className="size-2.5 rounded-full bg-[#3a4149]" />
              <span className="size-2.5 rounded-full bg-[#3a4149]" />
              <span className="ml-2 text-muted">norte-code</span>
            </div>
            <pre className="overflow-x-auto px-4 py-4 text-[#d7dae0]">
              <code>
                {`$ norte-code "add a test for the parser"

  reading   src/parser.rs
  running   cargo test --lib parser
  ✓ 42 passed · 0 failed · 380ms

  wrote  src/parser_test.rs
  1.2k in · 340 out · 0.01$`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
            <div>
              <p className="font-mono text-[13px] tracking-[0.2em] text-cyan uppercase">
                Why now
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                The bottleneck was never the typing.
              </h2>
            </div>
            <div className="space-y-5 text-[17px] leading-8 text-muted">
              <p>
                It was the context, the tooling and the trust. Every engineer
                spent the first hour of a task reconstructing what the codebase
                already knew, and the last hour proving the change was safe.
              </p>
              <p>
                Norte Code closes all three. The whole repository is the
                context. The tools are the ones your team already uses. And
                every step it takes is on the record — the approvals, the
                sandbox, the tokens, the price — so a reviewer, an auditor or a
                CFO gets an answer instead of a story.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            What your team gets
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="bg-[#0b0d10] p-6">
                <h3 className="font-medium text-[#e8eaed]">{feature.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-muted">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-center font-mono text-[13px] tracking-[0.2em] text-muted uppercase">
            Runs against the providers you already use
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[#cfd3d9]">
            {PROVIDERS.map((provider) => (
              <span key={provider} className="text-sm font-medium">
                {provider}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            Live in your workflow in three steps
          </h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title}>
                <span className="font-mono text-[13px] text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-medium text-[#e8eaed]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            The questions your team will ask
          </h2>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {FAQ.map((entry) => (
              <div key={entry.question} className="grid gap-3 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10">
                <dt className="font-medium text-[#e8eaed]">{entry.question}</dt>
                <dd className="text-[15px] leading-7 text-muted">{entry.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Give your team a queue that never piles up.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-8 text-muted">
            Start with one ticket. See what it does. Then give it the rest.
          </p>
          <div className="mx-auto mt-10 max-w-2xl text-left">
            <InstallCommand />
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Norte Code — the AI coding agent for engineering teams.</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/JeanVydes/NorteCode"
              className="text-cyan underline-offset-4 hover:underline"
            >
              Repository
            </a>
            <a
              href="https://github.com/JeanVydes/NorteCode/releases"
              className="text-cyan underline-offset-4 hover:underline"
            >
              Releases
            </a>
            <a
              href="https://github.com/JeanVydes/Norte"
              className="text-cyan underline-offset-4 hover:underline"
            >
              Built on Norte
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
