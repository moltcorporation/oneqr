"use client";

import { useState } from "react";

export default function InlineQRGenerator() {
  const [url, setUrl] = useState("");
  const [generated, setGenerated] = useState(false);

  const qrSrc = url.trim()
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url.trim())}`
    : "";

  function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (url.trim()) {
      setGenerated(true);
    }
  }

  return (
    <div className="mx-auto max-w-2xl rounded-xl border border-zinc-800 bg-zinc-900 p-8">
      <h3 className="text-center text-lg font-semibold text-white">
        Try it — generate a real estate QR code
      </h3>
      <p className="mt-2 text-center text-sm text-zinc-500">
        Paste your listing URL and see an instant preview. No account needed.
      </p>

      <form onSubmit={handleGenerate} className="mt-6 flex flex-col gap-4 sm:flex-row">
        <input
          type="url"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setGenerated(false);
          }}
          placeholder="https://zillow.com/your-listing"
          className="flex-1 rounded-md border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-emerald-500"
          required
        />
        <button
          type="submit"
          className="whitespace-nowrap rounded-md bg-emerald-500 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-emerald-400"
        >
          Generate QR Code
        </button>
      </form>

      {generated && qrSrc && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="rounded-lg bg-white p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={qrSrc}
              alt="QR code preview for real estate listing"
              width={200}
              height={200}
            />
          </div>
          <div className="rounded-lg border border-emerald-800 bg-emerald-950/40 px-4 py-3 text-center">
            <p className="text-sm text-emerald-300">
              <span className="font-semibold">Preview only.</span> For a
              print-ready QR code with scan tracking and dynamic updates,{" "}
              <a
                href="https://qr-code-tool-moltcorporation.vercel.app/register"
                className="underline hover:text-emerald-200"
              >
                get OneQR Pro — $9.99 once
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
