const ledgerEntries = [
  { label: "IEEE ICFT 2025", value: "DOI 10.1109/ICFT66708.2025.11336481" },
  { label: "IN PATENT", value: "202511092121 · filed" },
  { label: "MONAD MAINNET", value: "0xd24aD7B1d24A1c9983Dfb0f644aAaa0CE4917AD1" },
  { label: "ETH SEPOLIA", value: "dhrwas.vercel.app · live" },
  { label: "NEXUS OS", value: "nexus-intel.app · in production" },
  { label: "HACKVISION 2026", value: "top 100 finish" },
];

const systems = [
  {
    id: "TX 0001",
    status: "LIVE",
    name: "Predator Bot",
    role: "Sole developer",
    stack: "Solidity · Go/TypeScript · Monad",
    body:
      "A flash-loan arbitrage engine deployed on Monad. It sources live liquidity across LFJ, Uniswap V3, and PancakeV3 instead of trusting hardcoded fees or pool addresses — every fee tier, borrow size, and route is fetched at run time. Currently being extended with Uniswap V4 support.",
  },
  {
    id: "TX 0002",
    status: "PROD",
    name: "Nexus OS",
    role: "Sole developer · nexus-intel.app",
    stack: "Next.js 15 · Supabase · Upstash Redis · Vercel",
    body:
      "An institutional macro intelligence platform built as three products on one backbone: a macro terminal, a trader performance twin, and a multi-account execution bus. AI requests fall back across Groq, Gemini, and OpenRouter so the system stays up when any one provider doesn't. No mocked data, no lagging-indicator logic — only what can be verified live.",
  },
  {
    id: "TX 0003",
    status: "LIVE",
    name: "DHRWAS",
    role: "Research + implementation · dhrwas.vercel.app",
    stack: "Solidity · Ethereum Sepolia",
    body:
      "A protocol that maps human-readable names to wallet addresses, built with Mohd Saim under Dr. Seema Shukla at Sharda University. Published at IEEE ICFT 2025 and the basis of a filed Indian patent application.",
  },
  {
    id: "TX 0004",
    status: "SHIPPED",
    name: "Soroban Contracts",
    role: "Independent project",
    stack: "Rust · Stellar / Soroban",
    body:
      "Two contracts written from scratch: a Lost-and-Found reward escrow, and BabyFund, a timelocked savings contract for long-horizon goals.",
  },
];

const experience = [
  {
    org: "THE PHOENIX DAO",
    detail: "XDAO Labs, Singapore · Cert. ID CLL#16361274",
    title: "Founder",
    body: "Founded and incorporated a non-profit DAO (certificate of incorporation issued 1 Mar 2025, XDAO Labs, Singapore), applying on-chain governance mechanisms in a live setting rather than in theory.",
  },
  {
    org: "UPDOWN TRADE SARL",
    detail: "Supra blockchain",
    title: "Blockchain R&D Intern",
    body: "Researched and built on the Supra blockchain as part of the core R&D function.",
  },
  {
    org: "NUMA",
    detail: "Cross-disciplinary collaboration",
    title: "Sales Engineer",
    body: "Sat between engineering and sales, translating technical capability into terms clients could act on.",
  },
];

const certifications = [
  {
    org: "Anthropic",
    name: "Claude 101",
    when: "2026",
  },
  {
    org: "Anthropic",
    name: "AI Fluency",
    when: "2026",
  },
  {
    org: "Hacker's Unity / Trainzex AI",
    name: "Agentic AI Workshop: Mastery of Autonomous Systems",
    when: "Jul 2026",
  },
  {
    org: "HackVision (Hacker's Unity)",
    name: "Top 100 Finalist Team — 400+ competing teams",
    when: "Mar–Apr 2026",
  },
  {
    org: "XDAO Labs, Singapore",
    name: "Certificate of Incorporation — THE PHOENIX (non-profit DAO), CLL#16361274",
    when: "Mar 2025",
  },
  {
    org: "Infosys Springboard",
    name: "Solidity Smart Contract Programming for Ethereum Blockchain",
    when: "Feb 2025",
  },
  {
    org: "Oracle Academy",
    name: "Database Foundations — course + final exam",
    when: "Nov 2024",
  },
  {
    org: "Oracle Academy",
    name: "Database Programming with PL/SQL — course + Semester 1 & 2 final exams",
    when: "Nov 2024",
  },
  {
    org: "NPTEL",
    name: "Corporate Social Responsibility — 8-week course",
    when: "Jul–Sep 2024",
  },
  {
    org: "Oracle Academy",
    name: "Java Fundamentals — course + final exam",
    when: "Apr 2024",
  },
  {
    org: "NPTEL",
    name: "Foundation Course in Managerial Economics — 8-week course",
    when: "Jan–Mar 2024",
  },
  {
    org: "NPTEL",
    name: "Leadership and Team Effectiveness",
    when: "2024",
  },
  {
    org: "Oracle Academy",
    name: "Java Foundations — course + final exam",
    when: "Nov 2023",
  },
  {
    org: "Udemy",
    name: "The Complete Python Bootcamp: From Zero to Hero in Python (22 hrs) — Jose Portilla",
    when: "Oct 2023",
  },
  {
    org: "Coursera Project Network",
    name: "Create Your First Python Program",
    when: "Jul 2023",
  },
  {
    org: "EZ Trainings & Technologies / Sharda Informatics",
    name: "Summer Bootcamp — MERN Stack",
    when: "Sharda University",
  },
];

const skillGroups = [
  { label: "Languages", value: "Python, JavaScript, TypeScript, Go, Solidity, Java, SQL" },
  { label: "Blockchain", value: "Ethereum, Monad, Stellar/Soroban, Supra — smart contracts, AMM/DEX mechanics, flash loans" },
  { label: "Platform", value: "Next.js, Supabase, Vercel, Upstash Redis, Node.js" },
  { label: "AI systems", value: "Multi-provider orchestration (Groq, Gemini, OpenRouter), applied AI evaluation interest" },
];

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm text-mute hover:text-cyan transition-colors"
    >
      {children}
    </a>
  );
}

function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-cyan text-sm">{index}</span>
      <div className="hairline flex-1" />
      <h2 className="font-display font-semibold text-2xl md:text-3xl text-paper tracking-tight">
        {children}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      {/* Nav */}
      <header className="sticky top-0 z-20 backdrop-blur bg-ink/80 border-b border-line">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display font-semibold text-paper tracking-tight">
            FELIX HAUSIKU
          </span>
          <nav className="hidden sm:flex items-center gap-6">
            <NavLink href="#research">Research</NavLink>
            <NavLink href="#systems">Systems</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="https://github.com/Felixh1617"
              className="text-sm text-mute hover:text-cyan transition-colors"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-14">
        <p className="text-cyan text-sm mb-4">// blockchain & AI systems engineer</p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl leading-[1.05] text-paper tracking-tight max-w-3xl">
          I build systems that verify themselves — on-chain, and on the record.
        </h1>
        <p className="mt-6 text-mute text-base md:text-lg max-w-2xl leading-relaxed">
          B.Tech Computer Science Engineering (Blockchain Technology), Sharda University.
          Published, patent-filed research on blockchain naming systems, and solo-built
          production infrastructure for autonomous trading and institutional intelligence.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:felixh1617@gmail.com"
            className="px-5 py-2.5 bg-cyan text-ink text-sm font-medium rounded-sm hover:opacity-90 transition"
          >
            Email me
          </a>
          <a
            href="#systems"
            className="px-5 py-2.5 border border-line text-paper text-sm font-medium rounded-sm hover:border-cyan transition"
          >
            View systems
          </a>
        </div>
      </section>

      {/* Ledger ticker — signature element: a live-feed strip of real, verifiable artifacts */}
      <div className="border-y border-line bg-panel overflow-hidden py-3">
        <div className="flex w-max ticker-track">
          {[...ledgerEntries, ...ledgerEntries].map((entry, i) => (
            <div key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
              <span className="text-xs text-mute">{entry.label}</span>
              <span className="text-xs text-paper">{entry.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Research & IP */}
      <section id="research" className="max-w-5xl mx-auto px-6 py-20">
        <SectionLabel index="01">Research &amp; IP</SectionLabel>
        <div className="border border-line bg-panel rounded-sm p-6 md:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
            <h3 className="font-display font-semibold text-xl text-paper">
              DHRWAS — Decentralized Human-Readable Wallet Address System
            </h3>
            <span className="text-xs text-amber">IEEE ICFT 2025 · Scopus-indexed</span>
          </div>
          <p className="text-mute leading-relaxed mb-4">
            A protocol mapping human-readable names to wallet addresses, deployed on Ethereum
            Sepolia. Co-authored with Mohd Saim, under the supervision of Dr. Seema Shukla,
            Sharda University School of Engineering &amp; Technology. Filed as Indian Patent
            Application No. 202511092121.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-mute">
            <span>DOI: 10.1109/ICFT66708.2025.11336481</span>
            <span>Live: dhrwas.vercel.app</span>
          </div>
        </div>
      </section>

      {/* Systems built */}
      <section id="systems" className="max-w-5xl mx-auto px-6 py-4 pb-20">
        <SectionLabel index="02">Systems Built</SectionLabel>
        <div className="grid gap-4">
          {systems.map((s) => (
            <div
              key={s.id}
              className="border border-line bg-panel rounded-sm p-6 md:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs text-mute">{s.id}</span>
                <span className="text-[10px] px-2 py-0.5 border border-cyan/40 text-cyan rounded-sm tracking-wide">
                  {s.status}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-display font-semibold text-lg text-paper">{s.name}</h3>
                <span className="text-xs text-mute">{s.role}</span>
              </div>
              <p className="text-mute leading-relaxed mb-3">{s.body}</p>
              <p className="text-xs text-cyan">{s.stack}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-4 pb-20">
        <SectionLabel index="03">Experience</SectionLabel>
        <div className="grid gap-6">
          {experience.map((e) => (
            <div key={e.org} className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-8">
              <div>
                <p className="text-paper font-medium">{e.org}</p>
                <p className="text-xs text-mute">{e.detail}</p>
              </div>
              <div>
                <p className="text-sm text-cyan mb-1">{e.title}</p>
                <p className="text-mute leading-relaxed">{e.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm">
          <span className="text-mute">
            <span className="text-paper">Certification —</span> Proprietary Trader, Alpha Capital Group
          </span>
          <span className="text-mute">
            <span className="text-paper">Achievement —</span> Top 100, HackVision 2026
          </span>
        </div>
      </section>

      {/* Certifications & Coursework */}
      <section id="certifications" className="max-w-5xl mx-auto px-6 py-4 pb-20">
        <SectionLabel index="04">Certifications &amp; Coursework</SectionLabel>
        <div className="border border-line rounded-sm divide-y divide-line">
          {certifications.map((c, i) => (
            <div
              key={i}
              className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-3.5 bg-panel"
            >
              <div>
                <span className="text-paper text-sm">{c.name}</span>
                <span className="text-mute text-xs ml-2">— {c.org}</span>
              </div>
              <span className="text-xs text-cyan whitespace-nowrap">{c.when}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-4 pb-20">
        <SectionLabel index="05">Skills</SectionLabel>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {skillGroups.map((g) => (
            <div key={g.label} className="border-b border-line pb-4">
              <p className="text-xs text-cyan mb-1">{g.label}</p>
              <p className="text-mute text-sm leading-relaxed">{g.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <div className="hairline mb-10" />
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-paper mb-4">
          Open to fellowships, research, and engineering roles.
        </h2>
        <p className="text-mute mb-8 max-w-xl leading-relaxed">
          Based in Windhoek, Namibia. Reach out directly — I read every message myself.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="mailto:felixh1617@gmail.com"
            className="text-cyan text-lg hover:opacity-80 transition"
          >
            felixh1617@gmail.com
          </a>
          <a
            href="https://github.com/Felixh1617"
            className="text-mute text-sm hover:text-cyan transition"
          >
            github.com/Felixh1617
          </a>
        </div>
        <p className="text-xs text-mute mt-16">© {new Date().getFullYear()} Felix Hausiku</p>
      </footer>
    </main>
  );
}
