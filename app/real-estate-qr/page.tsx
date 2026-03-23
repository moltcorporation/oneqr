import type { Metadata } from "next";
import Link from "next/link";
import InlineQRGenerator from "./qr-generator";

const baseUrl = "https://qr-code-tool-moltcorporation.vercel.app";

export const metadata: Metadata = {
  title: "QR Codes for Real Estate — Free Generator for Signs & Flyers | OneQR",
  description:
    "Create a QR code for real estate signs, open houses, and agent cards. Free QR code generator for real estate agents. Dynamic codes update per listing — $9.99 once, no monthly fees.",
  keywords: [
    "qr code for real estate",
    "qr code for real estate signs",
    "qr code for real estate agents",
    "qr code generator for real estate",
    "real estate qr code",
    "property listing qr code",
    "open house qr code",
    "virtual tour qr code",
  ],
  alternates: {
    canonical: `${baseUrl}/real-estate-qr`,
  },
  openGraph: {
    title: "QR Codes for Real Estate — Free Generator | OneQR",
    description:
      "QR codes for real estate signs, open houses, virtual tours, and agent cards. Free to create. Dynamic codes $9.99 once.",
    type: "website",
    siteName: "OneQR",
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Codes for Real Estate — Free Generator | OneQR",
    description:
      "QR codes for real estate signs, open houses, virtual tours, and agent cards. Free to create. Dynamic codes $9.99 once.",
  },
};

const competitors = [
  { name: "Curb Hero", price: "$30/mo", annual: "$360/yr", note: "Real estate specific" },
  { name: "QR Code Generator Pro", price: "$6.99/mo", annual: "$84/yr", note: "5 dynamic QR" },
  { name: "Beaconstac", price: "$5/mo", annual: "$60/yr", note: "1 QR code" },
  { name: "QR Tiger", price: "$7/mo", annual: "$84/yr", note: "Dynamic QR" },
];

const useCases = [
  {
    title: "Property listing signs",
    desc: "Add a QR code to your yard sign or sign rider. Drive-by buyers scan and instantly see photos, price, and details — no typing long URLs.",
  },
  {
    title: "Open house check-in",
    desc: "Replace paper sign-in sheets. Link to a Google Form or CRM intake page. Visitors scan, enter their info, and you get clean digital leads.",
  },
  {
    title: "Virtual tours",
    desc: "Link your QR code to a Matterport walkthrough, Zillow 3D Home, or video tour. Buyers explore the property from the sidewalk.",
  },
  {
    title: "Agent contact cards",
    desc: "Print a QR code on your business card that links to your agent profile, portfolio, or vCard. One scan adds your contact info to their phone.",
  },
];

const steps = [
  {
    num: 1,
    title: "Paste your listing URL",
    description:
      "Enter any URL — your Zillow listing, MLS page, virtual tour link, Google Form, or agent profile page.",
  },
  {
    num: 2,
    title: "Download your QR code",
    description:
      "Get a print-ready QR code as SVG (sharp at any size for sign shops) or PNG (quick prints for flyers and postcards).",
  },
  {
    num: 3,
    title: "Place on signs and materials",
    description:
      "When the listing sells, update the QR code to point to your next property. Same sign, new listing — no reprints.",
  },
];

const faqs = [
  {
    question: "How do real estate agents use QR codes?",
    answer:
      "Agents place QR codes on yard signs, flyers, postcards, brochure boxes, door hangers, and business cards. The QR code links to a virtual tour, listing page, open house sign-in form, or agent contact info. Buyers scan with their phone camera — no app needed.",
  },
  {
    question: "Can I reuse the same QR code for different listings?",
    answer:
      "Yes. With a dynamic QR code (Pro, $9.99 one-time), you update the destination URL whenever you get a new listing. Your printed yard sign QR code stays the same — it just points to the new property page. No reprinting signs.",
  },
  {
    question: "What size should the QR code be on a real estate sign?",
    answer:
      "For yard signs, at least 3 x 3 inches so buyers can scan from 3-4 feet away. For flyers and postcards, 1.5 x 1.5 inches minimum. For brochure boxes, 2 x 2 inches. Download as SVG for sharp printing at any size.",
  },
  {
    question: "How much does a real estate QR code cost?",
    answer:
      "Static QR codes are free forever — no account needed. Dynamic QR codes (where you can change the listing link after printing) are a one-time $9.99 payment. No monthly fees, no per-listing charges. Competitors like Curb Hero charge $30/mo.",
  },
  {
    question: "Can I track how many buyers scan my QR code?",
    answer:
      "Yes. OneQR Pro includes scan analytics — see total scans per day. Know exactly how many drive-by buyers engaged with your listing sign, which open houses got the most interest, and which marketing materials perform best.",
  },
  {
    question: "What should I link my real estate QR code to?",
    answer:
      "Best options: a Matterport virtual tour, your MLS or Zillow listing page, a landing page with photos and details, an open house sign-in form (Google Forms works great), or your agent contact/vCard page. Any URL works.",
  },
  {
    question: "Do QR codes work on all phones?",
    answer:
      "Yes. iPhone (iOS 11+) and Android phones scan QR codes with their built-in camera app. No special app needed. Point the camera, tap the notification, and the listing page opens instantly.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RealEstateQRPage() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-emerald-400">One</span>QR
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/pricing" className="text-sm text-zinc-400 hover:text-white">Pricing</Link>
            <Link href="/login" className="text-sm text-zinc-400 hover:text-white">Sign in</Link>
            <Link href="/register" className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-emerald-400">Get started</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Real Estate QR Codes
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          QR Codes for Real Estate
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
          Listings change. Your signs don&apos;t have to. Add a QR code to your
          yard signs, flyers, and business cards — link buyers to virtual tours,
          listing pages, or your agent profile. Update the destination when you
          get a new property. One payment, every listing.
        </p>

        {/* Trust bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {["Free to start", "No per-listing fees", "Track buyer scans"].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium text-zinc-300">{text}</span>
            </div>
          ))}
        </div>

        <Link href="https://qr-code-tool-moltcorporation.vercel.app" className="mt-8 inline-block rounded-md bg-emerald-500 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-emerald-400">
          Create Your Real Estate QR Code — Free
        </Link>
      </section>

      {/* Inline QR Generator */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <InlineQRGenerator />
      </section>

      {/* Use Cases */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            4 ways real estate agents use QR codes
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-zinc-500">
            From yard signs to business cards — one QR code, multiple use cases.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor pricing comparison */}
      <section className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            Real estate QR tools charge monthly. You sell one house at a time.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-zinc-500">
            Most QR tools bill per month even when your listing sits idle. OneQR is $9.99 once — no monthly rent on your QR codes.
          </p>

          <div className="mt-10 overflow-hidden rounded-xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900">
                  <th className="px-6 py-4 text-left font-medium text-zinc-400">Tool</th>
                  <th className="px-6 py-4 text-left font-medium text-zinc-400">Monthly</th>
                  <th className="px-6 py-4 text-left font-medium text-zinc-400">Annual cost</th>
                  <th className="px-6 py-4 text-left font-medium text-zinc-400">Limit</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr key={c.name} className="border-b border-zinc-800/50 bg-zinc-950">
                    <td className="px-6 py-4 text-zinc-300">{c.name}</td>
                    <td className="px-6 py-4 text-red-400 line-through">{c.price}</td>
                    <td className="px-6 py-4 text-zinc-500">{c.annual}</td>
                    <td className="px-6 py-4 text-zinc-500">{c.note}</td>
                  </tr>
                ))}
                <tr className="bg-emerald-950/30">
                  <td className="px-6 py-4 font-semibold text-emerald-400">OneQR</td>
                  <td className="px-6 py-4 font-bold text-emerald-400">$9.99 once</td>
                  <td className="px-6 py-4 text-emerald-300">$9.99 total</td>
                  <td className="px-6 py-4 text-emerald-300">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-zinc-600">
            Prices as of March 2026. All competitors require ongoing subscriptions.
          </p>
        </div>
      </section>

      {/* 3-step flow */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            Real estate QR code in 3 steps
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-zinc-500">
            From listing link to yard sign in under 2 minutes.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-6 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950 text-sm font-bold text-emerald-400">
                  {step.num}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-2 text-xs text-zinc-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="https://qr-code-tool-moltcorporation.vercel.app" className="inline-block rounded-md bg-emerald-500 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-emerald-400">
              Generate Your Real Estate QR Code
            </Link>
          </div>
        </div>
      </section>

      {/* CTA to OneQR Pro for dynamic QR */}
      <section className="border-t border-zinc-800 bg-emerald-950/20">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Dynamic QR: update your listing URL without reprinting signs
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            With OneQR Pro, your printed QR code stays the same — but the
            destination updates instantly. Sold a property? Point the same yard
            sign QR code to your new listing. No reprinting, no new stickers, no
            wasted sign riders. <span className="font-semibold text-emerald-400">$9.99 once</span> — not monthly.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            {["Update listing URL anytime", "Same sign, new property", "Scan analytics included"].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-zinc-300">{text}</span>
              </div>
            ))}
          </div>
          <a
            href="https://qr-code-tool-moltcorporation.vercel.app/register"
            className="mt-8 inline-block rounded-md bg-emerald-500 px-8 py-3 text-sm font-bold text-zinc-950 hover:bg-emerald-400"
          >
            Get OneQR Pro — $9.99 Once
          </a>
        </div>
      </section>

      {/* SEO Body Content (500+ words) */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight">
            Why real estate agents use QR codes on signs and marketing materials
          </h2>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-400">
            <p>
              Real estate marketing has shifted. Buyers don&apos;t call the number
              on your yard sign — they scan. A QR code on your property sign
              bridges the gap between a drive-by and a virtual tour in under two
              seconds. The buyer points their phone camera at your sign, taps the
              notification, and they&apos;re looking at listing photos, 3D
              walkthroughs, or your agent profile. No typing URLs, no
              downloading apps, no friction.
            </p>
            <p>
              The numbers back this up. According to Statista, QR code usage in
              the United States has grown steadily since 2020, with over 89
              million smartphone users scanning a QR code in 2022 — a figure
              projected to exceed 100 million by 2025. For real estate agents,
              this means the technology is no longer novel. Buyers expect it.
              A yard sign without a QR code is a missed opportunity to capture
              drive-by interest when it&apos;s highest.
            </p>

            <h3 className="pt-4 text-lg font-semibold text-white">
              Where to place QR codes for maximum scans
            </h3>
            <p>
              <strong className="text-zinc-200">Yard signs and sign riders:</strong>{" "}
              This is the highest-value placement. Buyers are already stopped in
              front of the property. Place the QR code at eye level on the sign
              rider (the attachment below the main sign). Use a minimum 3x3 inch
              QR code for scanning from 3-4 feet. Include a short call-to-action
              like &quot;Scan for virtual tour&quot; or &quot;Scan for listing
              details.&quot;
            </p>
            <p>
              <strong className="text-zinc-200">Flyers and brochure boxes:</strong>{" "}
              The take-one flyer box is still common in residential real estate.
              Adding a QR code to your flyer means even when the box is empty
              (or soaked from rain), the sign itself still drives traffic. Link
              to the same listing page you&apos;d put on the flyer — photos,
              price, square footage, and your contact info.
            </p>
            <p>
              <strong className="text-zinc-200">Postcards and door hangers:</strong>{" "}
              Farming a neighborhood? QR codes on postcards let recipients jump
              straight to your recent sales, market report, or agent page.
              Track scan rates to see which neighborhoods engage most.
            </p>
            <p>
              <strong className="text-zinc-200">Open house materials:</strong>{" "}
              Replace the paper sign-in sheet with a QR code that links to a
              Google Form or CRM intake page. You get cleaner data, legible
              contact info, and automatic follow-up triggers. Place the QR code
              on a table stand near the entrance.
            </p>
            <p>
              <strong className="text-zinc-200">Business cards:</strong>{" "}
              A QR code on your business card can link to your agent profile,
              portfolio of active listings, or a vCard that adds your contact
              info directly to the recipient&apos;s phone. One scan replaces
              manual contact entry.
            </p>

            <h3 className="pt-4 text-lg font-semibold text-white">
              Tracking scans to measure marketing ROI
            </h3>
            <p>
              One of the biggest advantages of QR codes over traditional real
              estate signage is measurability. With OneQR Pro, every scan is
              logged. You can see how many potential buyers scanned your yard
              sign each day, which helps you answer questions like: Is this
              listing getting drive-by traffic? Are my flyers actually being
              used? Which open house had the most engagement?
            </p>
            <p>
              This data is especially valuable during listing presentations.
              Showing a seller that their yard sign generated 47 scans in the
              first week demonstrates active marketing — something a traditional
              sign can&apos;t prove. It also helps you compare marketing
              channels: if your postcard campaign generated 12 scans but your
              yard sign generated 90, you know where to focus your budget.
            </p>

            <h3 className="pt-4 text-lg font-semibold text-white">
              Static vs. dynamic: which do real estate agents need?
            </h3>
            <p>
              A static QR code points to a fixed URL forever. If you create one
              for 123 Main Street, it will always link to that listing page.
              When the property sells, you&apos;d need to generate a new QR code
              for your next listing and reprint your sign.
            </p>
            <p>
              A dynamic QR code lets you change the destination URL anytime. The
              printed QR code stays the same, but where it sends scanners
              updates instantly. For real estate agents who cycle through
              listings regularly, this means one sign rider works for every
              property. Sell 123 Main Street, update the link to 456 Oak Avenue,
              and the same QR code keeps working. No reprinting, no waste.
            </p>
            <p>
              Most QR code tools charge $5-30/month for dynamic codes. OneQR
              charges $9.99 once. For an agent who might have a listing every
              few months, paying monthly for a QR code service that sits idle
              between listings doesn&apos;t make sense. A one-time payment
              matches how real estate agents actually work.
            </p>

            <h3 className="pt-4 text-lg font-semibold text-white">
              Best practices for real estate QR codes
            </h3>
            <p>
              <strong className="text-zinc-200">Size matters:</strong> A QR code
              that&apos;s too small won&apos;t scan reliably. For yard signs,
              3x3 inches minimum. For flyers, 1.5x1.5 inches. Test by scanning
              from the distance your buyers will be standing.
            </p>
            <p>
              <strong className="text-zinc-200">Add a call-to-action:</strong>{" "}
              Don&apos;t just slap a QR code on your sign. Add text like
              &quot;Scan for virtual tour&quot; or &quot;Scan for listing
              details.&quot; Buyers need to know what they&apos;ll get.
            </p>
            <p>
              <strong className="text-zinc-200">Test before printing:</strong>{" "}
              Always scan your QR code before sending it to the print shop.
              Test on both iPhone and Android. Make sure the destination page
              loads fast on mobile.
            </p>
            <p>
              <strong className="text-zinc-200">Use high contrast:</strong>{" "}
              Dark QR code on a light background works best. Avoid placing QR
              codes on busy or dark backgrounds. Download as SVG for the
              sharpest possible print quality.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            Real estate QR code FAQ
          </h2>
          <div className="mt-10 flex flex-col gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm text-zinc-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links to other use-case pages */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            More QR code use cases
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-zinc-500">
            OneQR works for every industry. Explore more use cases.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "WiFi QR Codes",
                desc: "Guests scan and connect to your network. No password typing.",
                href: "/use-cases/wifi",
              },
              {
                title: "Restaurant Menu QR",
                desc: "Update your menu anytime without reprinting table cards.",
                href: "/use-cases/restaurant-menu",
              },
              {
                title: "Business Card QR",
                desc: "One scan adds your contact info to any phone.",
                href: "/use-cases/business-cards",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-lg border border-zinc-800 bg-zinc-900 p-5 transition-colors hover:border-zinc-700"
              >
                <h3 className="font-semibold text-white group-hover:text-emerald-400">
                  {link.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-500">{link.desc}</p>
                <span className="mt-3 inline-flex items-center text-xs font-medium text-emerald-400">
                  Learn more
                  <svg className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Listings change. Your QR code keeps working.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Static QR codes are free — no account needed. Dynamic codes that update
            per listing are $9.99 once. Not monthly. Not per listing. Not per sign. Once.
          </p>
          <Link href="https://qr-code-tool-moltcorporation.vercel.app" className="mt-6 inline-block rounded-md bg-emerald-500 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-emerald-400">
            Create Your Real Estate QR Code — Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-zinc-600">
              <span className="font-medium text-emerald-400">One</span>
              <span className="font-medium text-zinc-400">QR</span>
              {" "}— Free QR code generator
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-zinc-500 hover:text-white">Generator</Link>
              <Link href="/pricing" className="text-zinc-500 hover:text-white">Pricing</Link>
              <Link href="/privacy" className="text-zinc-500 hover:text-white">Privacy</Link>
              <Link href="/terms" className="text-zinc-500 hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
