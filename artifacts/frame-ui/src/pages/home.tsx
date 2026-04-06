import { useState } from "react";
import { Link } from "wouter";
import { useTheme } from "@/components/theme-provider";
import {
  ArrowRight,
  Shield,
  Layers,
  Palette,
  Code2,
  Sun,
  Moon,
  Check,
  ChevronDown,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

const NAV_COMPONENTS = [
  "Modal", "Dropdown", "Accordion", "Tabs",
  "Tooltip", "Select", "Checkbox", "Switch",
];

const FEATURES = [
  {
    icon: Palette,
    title: "Unstyled by design",
    description:
      "Zero CSS shipped. Bring Tailwind, CSS Modules, or CSS-in-JS — FrameUI never fights your styles.",
  },
  {
    icon: Shield,
    title: "Accessibility first",
    description:
      "WAI-ARIA patterns, focus management, and keyboard navigation are handled automatically, for every component.",
  },
  {
    icon: Layers,
    title: "Progressive composition",
    description:
      "Start with a single import. Break into sub-components only when you need fine-grained control.",
  },
  {
    icon: Code2,
    title: "asChild support",
    description:
      "Merge props onto your existing elements. No extra DOM wrappers, no style conflicts.",
  },
];

const COMPONENTS_PREVIEW = [
  { slug: "modal",     label: "Modal",     desc: "Focus-trapped dialog overlay" },
  { slug: "dropdown",  label: "Dropdown",  desc: "Keyboard-navigable context menu" },
  { slug: "accordion", label: "Accordion", desc: "Expandable disclosure sections" },
  { slug: "tabs",      label: "Tabs",      desc: "ARIA Tabs pattern" },
  { slug: "tooltip",   label: "Tooltip",   desc: "Hover / focus floating label" },
  { slug: "select",    label: "Select",    desc: "Custom combobox input" },
  { slug: "checkbox",  label: "Checkbox",  desc: "Accessible binary input" },
  { slug: "switch",    label: "Switch",    desc: "role=switch toggle" },
];

const CODE_SAMPLE = `import { useState } from "react";
import { Modal } from "frame-ui";

export function ConfirmDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Delete account
      </button>

      {/* FrameUI handles ESC, focus trap, scroll lock */}
      <Modal open={open} onOpenChange={setOpen}>
        <div className="bg-white rounded-xl p-6 shadow-xl">
          <h2 className="font-semibold text-lg">Are you sure?</h2>
          <p className="mt-2 text-sm text-gray-500">
            This action cannot be undone.
          </p>
          <div className="mt-6 flex gap-3 justify-end">
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button onClick={() => setOpen(false)}>Confirm</button>
          </div>
        </div>
      </Modal>
    </>
  );
}`;

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-foreground text-background text-xs font-bold">
              F
            </span>
            FrameUI
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/components" className="hover:text-foreground transition-colors">
              Components
            </Link>
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#quick-start" className="hover:text-foreground transition-colors">
              Quick start
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            data-testid="link-header-github"
            className="flex h-8 w-8 items-center justify-center rounded-md border bg-background hover:bg-accent transition-colors"
          >
            <SiGithub className="h-4 w-4" />
          </a>
          <button
            data-testid="button-toggle-theme"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-8 w-8 items-center justify-center rounded-md border bg-background hover:bg-accent transition-colors"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04] dark:opacity-[0.06]">
        <div className="h-[600px] w-[600px] rounded-full bg-foreground blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          v1.0 — Now available
        </div>
        <h1 className="mb-6 text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
          Headless UI primitives<br />
          <span className="text-muted-foreground font-normal">for React developers.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
          FrameUI gives you accessibility, keyboard navigation, and ARIA attributes. You own the markup and styles — no overrides, no conflicts.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/components"
            data-testid="link-hero-browse"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Browse components
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#quick-start"
            data-testid="link-hero-quickstart"
            className="inline-flex h-10 items-center gap-2 rounded-md border bg-background px-6 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Quick start
          </a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {["Zero styles", "WAI-ARIA", "TypeScript ready", "Tree-shakeable", "asChild pattern"].map((tag) => (
            <span key={tag} className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-green-500" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="border-b border-border/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Why FrameUI?
          </p>
          <h2 className="text-3xl font-bold tracking-tight">
            The missing layer between<br />your design and your code.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border bg-muted">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mb-2 text-sm font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ComponentsSection() {
  return (
    <section className="border-b border-border/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Components
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              8 headless primitives,<br />infinitely styleable.
            </h2>
          </div>
          <Link
            href="/components"
            data-testid="link-all-components"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {COMPONENTS_PREVIEW.map((c) => (
            <Link
              key={c.slug}
              href={`/components/${c.slug}`}
              data-testid={`link-component-card-${c.slug}`}
              className="group rounded-xl border bg-card p-5 shadow-sm hover:border-foreground/25 hover:shadow-md transition-all"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border bg-muted text-xs font-mono font-medium text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                {c.label.slice(0, 2)}
              </div>
              <h3 className="text-sm font-semibold mb-1">{c.label}</h3>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CODE_SAMPLE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="quick-start" className="border-b border-border/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Quick start
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight">
              Install once.<br />Style forever.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              FrameUI ships zero CSS. Every component receives your classes directly — no specificity wars, no overrides required.
            </p>
            <div className="space-y-4">
              {[
                { step: "1", label: "Install the package", cmd: "npm install frame-ui" },
                { step: "2", label: "Import what you need", cmd: "import { Modal } from 'frame-ui'" },
                { step: "3", label: "Add your styles", cmd: "<Modal className=\"your-styles\">" },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold mt-0.5">
                    {s.step}
                  </span>
                  <div>
                    <p className="text-sm font-medium mb-0.5">{s.label}</p>
                    <code className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      {s.cmd}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border bg-muted/40 overflow-hidden shadow-sm">
            <div className="flex items-center justify-between px-4 py-2.5 border-b bg-muted/70">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">ConfirmDialog.tsx</span>
              </div>
              <button
                data-testid="button-copy-hero-code"
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {copied ? <Check className="h-3 w-3" /> : null}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto">
              <code>
                {CODE_SAMPLE.split("\n").map((line, i) => {
                  const keyword = /^(import|export|const|return|function)\b/.test(line.trim());
                  const comment = line.trim().startsWith("{/*") || line.trim().startsWith("//");
                  return (
                    <span
                      key={i}
                      className={`block ${comment ? "text-muted-foreground/60" : keyword ? "text-foreground" : "text-foreground/80"}`}
                    >
                      {line || "\u00A0"}
                    </span>
                  );
                })}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="border-b border-border/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Philosophy
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            FrameUI handles the hard parts.
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The semantic layer — so you can focus entirely on the visual layer.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {[
            {
              label: "FrameUI owns",
              color: "border-green-500/30 bg-green-50/50 dark:bg-green-950/20",
              badge: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
              items: [
                "ARIA roles and attributes",
                "Keyboard navigation",
                "Focus management",
                "Open/close state logic",
                "ESC / click-outside dismiss",
                "Screen reader announcements",
              ],
            },
            {
              label: "You own",
              color: "border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20",
              badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
              items: [
                "All CSS and styling",
                "HTML structure / markup",
                "Colors and typography",
                "Animations and transitions",
                "Component composition",
                "Design system tokens",
              ],
            },
            {
              label: "Both control",
              color: "border-purple-500/30 bg-purple-50/50 dark:bg-purple-950/20",
              badge: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
              items: [
                "Component API surface",
                "Slot / asChild behavior",
                "Event handler wiring",
                "Default + controlled state",
                "Render prop overrides",
                "TypeScript types",
              ],
            },
          ].map((col) => (
            <div key={col.label} className={`rounded-xl border p-5 ${col.color}`}>
              <span className={`mb-4 inline-block rounded-md px-2.5 py-1 text-xs font-semibold ${col.badge}`}>
                {col.label}
              </span>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="h-3.5 w-3.5 shrink-0 opacity-60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-5 text-4xl font-bold tracking-tight">
          Start building today.
        </h2>
        <p className="mb-10 text-lg text-muted-foreground max-w-md mx-auto">
          8 components. Zero styles. Full accessibility. Works with any CSS system.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/components"
            data-testid="link-cta-browse"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Browse components
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            data-testid="link-cta-github"
            className="inline-flex h-10 items-center gap-2 rounded-md border bg-background px-6 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <SiGithub className="h-4 w-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-foreground text-background text-[10px] font-bold">F</span>
          <span className="font-medium text-foreground">FrameUI</span>
          <span className="text-border">·</span>
          <span>Headless React UI</span>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/components" className="hover:text-foreground transition-colors">Components</Link>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ComponentsSection />
        <CodeSection />
        <ComparisonSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
