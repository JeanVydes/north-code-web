"use client";

import { useState } from "react";

/**
 * The install command, with a button that copies it.
 */
export function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const command = "curl -fsSL https://norte.vyde.dev/install.sh | sh";

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <code className="group flex flex-1 items-center gap-3 rounded-lg border border-line bg-[#0f1216] px-4 py-3.5 font-mono text-[13px] leading-6 text-[#d7dae0] sm:text-sm">
        <span className="select-none text-cyan">$</span>
        <span className="truncate">{command}</span>
      </code>
      <button
        type="button"
        onClick={copy}
        className="rounded-lg border border-line bg-white/[0.03] px-4 py-3.5 text-sm font-medium text-[#d7dae0] transition hover:border-[#3a4149] hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
