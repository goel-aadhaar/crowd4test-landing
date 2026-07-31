import type { ReactNode } from "react";

/* Plain <img> for the cropped design assets so we don't fight the
   Next/Image lazy-load / optimizer on tiny source PNGs. */
function Img({
  src,
  alt,
  className,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} width={width} height={height} />;
}
import {
  ArrowRight,
  ChevronDown,
  Play,
  CircleCheck,
  Users,
  Globe,
  Clock4,
  Monitor,
  BadgeCheck,
  Brain,
  Rocket,
  Bug,
  ChartLine,
  Shield,
  Building2,
  HeartPulse,
  ShoppingCart,
  Phone,
  Gamepad2,
  MonitorPlay,
  Camera,
  Landmark,
  Heart,
  Banknote,
  Headset,
  Building,
  Store,
  Cloud,
  Bot,
  Mic,
  ImageIcon,
  Network,
  Sparkles,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Top navigation                                                              */
/* -------------------------------------------------------------------------- */

function Navbar() {
  const navItems = ["Solutions", "Industries", "Platform", "Resources", "Company", "Pricing"];
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 pt-7">
        <a href="#" className="flex flex-col leading-none">
          <span className="text-[22px] font-extrabold tracking-tight text-white">
            <span className="text-white">CROWD</span>
            <span className="text-brand-500">4</span>
            <span className="text-white">TEST</span>
          </span>
          <span className="mt-1 text-[10px] font-medium text-slate-300/80">
            AI-Powered Digital Quality Engineering
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((label) => (
            <li key={label}>
              <button
                type="button"
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:text-white"
              >
                {label}
                <ChevronDown className="h-4 w-4 opacity-80" strokeWidth={2} />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Login
          </button>
          <button
            type="button"
            className="rounded-md bg-brand-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Book a Demo
          </button>
        </div>
      </nav>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0a14] text-white">
      <div className="hero-glow hero-stars absolute inset-0" />
      <Navbar />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 pb-28 pt-40 lg:grid-cols-[1.05fr_1fr] lg:pb-36 lg:pt-44">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight lg:text-[48px] xl:text-[52px]">
            AI-Powered
            <br />
            Digital Quality Engineering
            <br />
            <span className="bg-gradient-to-r from-brand-400 to-brand-200 bg-clip-text text-transparent">
              with Human Intelligence
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
            Validate AI applications, web, mobile, APIs and enterprise software
            faster using AI Agents combined with a global community of expert
            testers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              Book a Demo
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/25">
                <ArrowRight className="h-3 w-3" strokeWidth={3} />
              </span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Start a Pilot
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>

          <p className="mt-12 text-sm font-medium text-slate-300">
            Trusted by leading global brands
          </p>
          <div className="mt-3 h-10 w-[500px] max-w-full">
            <Img
              src="/design/brand-logos.png"
              alt="Microsoft, intel, Adobe, SAMSUNG, JPMorganChase, airtel"
              className="h-full w-full object-contain object-left"
            />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[600px]">
          <div className="aspect-[4/3] w-full">
            <Img
              src="/design/hero-visual.png"
              alt="AI-powered digital quality engineering platform"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Trusted by enterprises bar                                                  */
/* -------------------------------------------------------------------------- */

function TrustedBar() {
  const items: { icon: ReactNode; label: string; tone: string }[] = [
    { icon: <Brain className="h-6 w-6" />, label: "AI Applications", tone: "bg-blue-50 text-blue-500" },
    { icon: <Cloud className="h-6 w-6" />, label: "SaaS Platforms", tone: "bg-sky-50 text-sky-500" },
    { icon: <Landmark className="h-6 w-6" />, label: "Banking & Finance", tone: "bg-emerald-50 text-emerald-500" },
    { icon: <HeartPulse className="h-6 w-6" />, label: "Healthcare", tone: "bg-rose-50 text-rose-500" },
    { icon: <ShoppingCart className="h-6 w-6" />, label: "Retail & Ecommerce", tone: "bg-orange-50 text-orange-500" },
    { icon: <Phone className="h-6 w-6" />, label: "Telecom", tone: "bg-violet-50 text-violet-500" },
    { icon: <Building className="h-6 w-6" />, label: "Government", tone: "bg-indigo-50 text-indigo-500" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto -mt-10 max-w-[1100px] rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.18)] md:px-12 md:py-10">
        <h3 className="text-center text-lg font-semibold text-slate-800">
          Trusted by enterprises building
        </h3>
        <ul className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-7 md:gap-2">
          {items.map((it) => (
            <li key={it.label} className="flex flex-col items-center gap-2">
              <span className={`grid h-12 w-12 place-items-center rounded-xl ${it.tone}`}>
                {it.icon}
              </span>
              <span className="text-[13px] font-medium text-slate-700">
                {it.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Services grid                                                               */
/* -------------------------------------------------------------------------- */

function Services() {
  const services: { icon: ReactNode; title: string; items: string[]; tone: string }[] = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & GenAI Testing",
      items: ["Prompt Testing", "Hallucination Detection", "AI Response Validation", "Bias & Safety Testing", "AI Agent Validation"],
      tone: "bg-indigo-50 text-indigo-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Crowd Testing",
      items: ["Real Users", "Real Devices", "Real Networks", "Real Countries"],
      tone: "bg-orange-50 text-orange-500",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Test Automation",
      items: ["Playwright", "Selenium", "Appium", "Cypress", "API Automation"],
      tone: "bg-emerald-50 text-emerald-500",
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: "Accessibility Testing",
      items: ["WCAG", "ADA", "Section 508"],
      tone: "bg-blue-50 text-blue-500",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Localization Testing",
      items: ["Languages", "Payments", "Regional UX"],
      tone: "bg-rose-50 text-rose-500",
    },
    {
      icon: <ChartLine className="h-6 w-6" />,
      title: "Performance Engineering",
      items: ["Load Testing", "Stress Testing", "Scalability", "Chaos Engineering"],
      tone: "bg-violet-50 text-violet-500",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Validation",
      items: ["OWASP", "API Security", "Authentication", "Vulnerability Testing"],
      tone: "bg-sky-50 text-sky-500",
    },
    {
      icon: <CircleCheck className="h-6 w-6" />,
      title: "Continuous QA",
      items: ["CI/CD Integration", "GitHub / GitLab", "Azure DevOps", "Jenkins"],
      tone: "bg-purple-50 text-purple-500",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-[34px]">
          Comprehensive{" "}
          <span className="text-brand-500">Quality</span> Engineering Services
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.slice(0, 5).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:flex-nowrap lg:justify-center lg:gap-4">
          {services.slice(5).map((s) => (
            <div key={s.title} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(20%-0.8rem)]">
              <ServiceCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  items,
  tone,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
  tone: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <span className={`grid h-10 w-10 place-items-center rounded-lg ${tone}`}>
          {icon}
        </span>
        <h3 className="text-[15px] font-semibold text-slate-900">{title}</h3>
      </div>
      <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-400" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600"
      >
        Explore <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* AI-Powered Testing Platform                                                 */
/* -------------------------------------------------------------------------- */

function Platform() {
  const cards: { title: string; desc: string; icon: string }[] = [
    {
      title: "AI Test Case Generator",
      desc: "Generate thousands of test cases from Requirements, User Stories, Jira, Figma and PRDs.",
      icon: "/design/platform-icon-1.png",
    },
    {
      title: "AI Exploratory Testing",
      desc: "AI agents + human testers explore your application like real users to find issues faster.",
      icon: "/design/platform-icon-2.png",
    },
    {
      title: "AI Bug Analysis",
      desc: "Automatically classify bugs, remove duplicates, prioritize defects and suggest root causes.",
      icon: "/design/platform-icon-3.png",
    },
    {
      title: "AI Regression Optimization",
      desc: "Run only high-risk tests using AI prediction to reduce test time and increase coverage.",
      icon: "/design/platform-icon-4.png",
    },
    {
      title: "AI Release Readiness Score",
      desc: "Get Quality Score, Risk Score, Coverage Score and Production Readiness insights.",
      icon: "/design/platform-icon-5.png",
    },
  ];

  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f0a1f] via-[#150a30] to-[#1a0a40] px-6 py-12 md:px-12 md:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(60% 50% at 80% 30%, rgba(124,58,237,0.45) 0%, rgba(124,58,237,0) 60%), radial-gradient(40% 40% at 20% 80%, rgba(56,189,248,0.25) 0%, rgba(56,189,248,0) 60%)",
            }}
          />
          <div className="relative">
            <h2 className="text-center text-2xl font-bold text-white md:text-[30px]">
              AI-Powered Testing Platform
            </h2>
            <p className="mt-2 text-center text-sm text-slate-300">
              Intelligent. Autonomous. Faster.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
                >
                  <div className="mx-auto h-20 w-full max-w-[120px]">
                    <Img src={c.icon} alt="" className="h-full w-full object-contain" />
                  </div>
                  <h3 className="mt-4 text-center text-[15px] font-semibold text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-center text-[13px] leading-5 text-slate-300">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Stats bar                                                                   */
/* -------------------------------------------------------------------------- */

function Stats() {
  const stats: { value: string; label: string; icon: ReactNode; tone: string }[] = [
    { value: "50,000+", label: "Expert Testers", icon: <Users className="h-5 w-5" />, tone: "bg-violet-50 text-violet-500" },
    { value: "150+", label: "Countries", icon: <Globe className="h-5 w-5" />, tone: "bg-blue-50 text-blue-500" },
    { value: "2M+", label: "Test Hours", icon: <Clock4 className="h-5 w-5" />, tone: "bg-indigo-50 text-indigo-500" },
    { value: "10,000+", label: "Devices", icon: <Monitor className="h-5 w-5" />, tone: "bg-sky-50 text-sky-500" },
    { value: "98%", label: "Customer Satisfaction", icon: <BadgeCheck className="h-5 w-5" />, tone: "bg-emerald-50 text-emerald-500" },
  ];

  return (
    <section className="bg-white pb-12">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-6 md:px-10">
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {stats.map((s) => (
              <li key={s.label} className="flex items-center gap-3">
                <span className={`grid h-10 w-10 place-items-center rounded-lg ${s.tone}`}>
                  {s.icon}
                </span>
                <div>
                  <div className="text-2xl font-extrabold text-brand-500">
                    {s.value}
                  </div>
                  <div className="text-xs font-medium text-slate-600">
                    {s.label}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Industry / Use cases / Dashboard row                                       */
/* -------------------------------------------------------------------------- */

function IndustryRow() {
  const industries: { icon: ReactNode; label: string }[] = [
    { icon: <Landmark className="h-6 w-6" />, label: "Banking & Finance" },
    { icon: <HeartPulse className="h-6 w-6" />, label: "Healthcare & Life Sciences" },
    { icon: <ShoppingCart className="h-6 w-6" />, label: "Ecommerce & Retail" },
    { icon: <Sparkles className="h-6 w-6" />, label: "Automotive" },
    { icon: <Phone className="h-6 w-6" />, label: "Telecom" },
    { icon: <Gamepad2 className="h-6 w-6" />, label: "Gaming" },
    { icon: <Bot className="h-6 w-6" />, label: "AI Products & Platforms" },
    { icon: <MonitorPlay className="h-6 w-6" />, label: "Media & Entertainment" },
  ];

  const useCases: string[] = [
    "Chatbots",
    "Voice AI",
    "LLM Applications",
    "Image AI",
    "RAG Systems",
    "Recommendation Engines",
    "AI Agents",
    "Copilots & Assistants",
  ];

  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-[1200px] gap-6 px-6 md:grid-cols-3">
        {/* Industry Solutions */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-bold text-slate-900">Industry Solutions</h3>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {industries.map((it) => (
              <div
                key={it.label}
                className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 px-3 py-4 text-center"
              >
                <span className="text-brand-500">{it.icon}</span>
                <span className="text-[11px] font-medium text-slate-700">
                  {it.label}
                </span>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600"
          >
            View all industries <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* AI Testing Use Cases */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-bold text-slate-900">AI Testing Use Cases</h3>
          <ul className="mt-5 grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-slate-700">
            {useCases.map((uc) => (
              <li key={uc} className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-brand-500" />
                <span>{uc}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600"
          >
            Explore all use cases <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Dashboard preview */}
        <div className="rounded-2xl border border-slate-200 bg-white p-3">
          <div className="aspect-[16/11] w-full overflow-hidden rounded-xl">
            <Img
              src="/design/dashboard.png"
              alt="Dashboard preview"
              className="h-full w-full object-cover object-left-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Testimonials                                                                */
/* -------------------------------------------------------------------------- */

function Testimonials() {
  const items = [
    {
      img: "/design/person-1.png",
      quote:
        "Crowd4Test's AI-powered approach and global crowd helped us release with confidence, 40% faster.",
      name: "Rahul Sharma",
      role: "Head of Quality, Fintech Company",
      playable: true,
    },
    {
      img: "/design/person-2.png",
      quote:
        "Their platform gives us unmatched visibility and quality intelligence across our releases.",
      name: "Priya Nair",
      role: "Director of QA, SaaS Company",
      playable: false,
    },
    {
      img: "/design/person-3.png",
      quote:
        "Real devices, real users, and AI insights — a winning combination!",
      name: "David Miller",
      role: "VP Engineering, Global Retailer",
      playable: true,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 md:text-[28px]">
          Loved by Quality Leaders
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t) => (
            <article
              key={t.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="grid grid-cols-[120px_1fr] items-stretch">
                <div className="relative h-[135px] w-[120px]">
                  <Img
                    src={t.img}
                    alt={t.name}
                    className="h-full w-full object-cover"
                    width={120}
                    height={135}
                  />
                  {t.playable && (
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow">
                        <Play className="h-4 w-4 fill-slate-800 text-slate-800" />
                      </span>
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm leading-6 text-slate-700">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600"
          >
            View all customer stories <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Resources & Insights                                                        */
/* -------------------------------------------------------------------------- */

function Resources() {
  const items = [
    { img: "/design/resource-1.png", title: "Ultimate Guide to Testing AI Applications" },
    { img: "/design/resource-2.png", title: "The State of AI in Software Testing 2026" },
    { img: "/design/resource-3.png", title: "GenAI Testing Checklist" },
    { img: "/design/resource-4.png", title: "Quality Engineering Benchmark Report" },
    { img: "/design/resource-5.png", title: "Top Testing Trends You Can't Ignore" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 md:text-[28px]">
          Resources &amp; Insights
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {items.map((it) => (
            <article
              key={it.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="aspect-[16/6] w-full">
                <Img
                  src={it.img}
                  alt={it.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-[15px] font-semibold leading-6 text-slate-900">
                  {it.title}
                </h3>
                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-500 hover:text-brand-600"
                >
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 text-right">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600"
          >
            View all resources <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Final CTA band                                                              */
/* -------------------------------------------------------------------------- */

function CTABand() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="cta-waves relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f0a1f] via-[#1a0f3a] to-[#0f0a1f] px-8 py-10 md:px-14 md:py-12">
          <div
            className="pointer-events-none absolute -bottom-10 left-0 right-0 h-24 opacity-40"
            style={{
              background:
                "repeating-linear-gradient(120deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 24px)",
            }}
          />
          <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-[30px]">
                Ready to Ship Better Software?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                Accelerate releases and deliver exceptional digital experiences
                with AI-powered testing combined with real human intelligence.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Book a Demo
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/25">
                  <ArrowRight className="h-3 w-3" strokeWidth={3} />
                </span>
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Start a Pilot
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                        */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBar />
      <Services />
      <Platform />
      <Stats />
      <IndustryRow />
      <Testimonials />
      <Resources />
      <CTABand />
    </>
  );
}
