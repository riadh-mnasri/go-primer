"use client";

import { useState } from "react";

const KEYWORDS = new Set([
  "break",
  "case",
  "chan",
  "const",
  "continue",
  "default",
  "defer",
  "else",
  "fallthrough",
  "for",
  "func",
  "go",
  "goto",
  "if",
  "import",
  "interface",
  "map",
  "package",
  "range",
  "return",
  "select",
  "struct",
  "switch",
  "type",
  "var",
  "true",
  "false",
  "nil",
]);

const TYPES = new Set([
  "string",
  "int",
  "int8",
  "int16",
  "int32",
  "int64",
  "uint",
  "uint8",
  "uint16",
  "uint32",
  "uint64",
  "float32",
  "float64",
  "bool",
  "byte",
  "rune",
  "error",
  "any",
]);

const TOKEN_RE =
  /(\/\/.*$)|("(?:[^"\\]|\\.)*")|(`[^`]*`)|('(?:[^'\\]|\\.)*')|(\b\d+\.?\d*\b)|([A-Za-z_][A-Za-z0-9_]*)(?=\()|([A-Za-z_][A-Za-z0-9_]*)|(\s+)|([^\sA-Za-z0-9_]+)/g;

type Token = { text: string; kind?: string };

function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  let match: RegExpExecArray | null;
  TOKEN_RE.lastIndex = 0;
  while ((match = TOKEN_RE.exec(line)) !== null) {
    const [
      full,
      comment,
      doubleStr,
      backtickStr,
      singleStr,
      number,
      funcCall,
      identifier,
    ] = match;

    if (comment !== undefined) tokens.push({ text: full, kind: "comment" });
    else if (doubleStr !== undefined || backtickStr !== undefined || singleStr !== undefined)
      tokens.push({ text: full, kind: "string" });
    else if (number !== undefined) tokens.push({ text: full, kind: "number" });
    else if (funcCall !== undefined) tokens.push({ text: full, kind: "func" });
    else if (identifier !== undefined) {
      if (KEYWORDS.has(identifier)) tokens.push({ text: full, kind: "keyword" });
      else if (TYPES.has(identifier)) tokens.push({ text: full, kind: "type" });
      else tokens.push({ text: full });
    } else tokens.push({ text: full });
  }
  return tokens;
}

const KIND_COLOR: Record<string, string> = {
  comment: "var(--code-comment)",
  string: "var(--code-string)",
  number: "var(--code-number)",
  func: "var(--code-func)",
  keyword: "var(--code-keyword)",
  type: "var(--code-keyword)",
};

const KIND_STYLE: Record<string, string> = {
  comment: "italic",
};

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const lines = code.split("\n");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable, ignore
    }
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg border"
      style={{ background: "var(--code-bg)", borderColor: "var(--border)" }}
    >
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-2 top-2 rounded-md border px-2 py-1 text-xs font-medium transition-colors"
        style={{
          borderColor: "var(--border)",
          color: "var(--code-fg)",
          background: "rgba(255,255,255,0.04)",
        }}
      >
        {copied ? "✓" : "copy"}
      </button>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono" style={{ color: "var(--code-fg)" }}>
          {lines.map((line, i) => (
            <div key={i}>
              {line.length === 0
                ? " "
                : tokenizeLine(line).map((token, j) => (
                    <span
                      key={j}
                      style={{
                        color: token.kind ? KIND_COLOR[token.kind] : undefined,
                        fontStyle: token.kind ? KIND_STYLE[token.kind] : undefined,
                      }}
                    >
                      {token.text}
                    </span>
                  ))}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
