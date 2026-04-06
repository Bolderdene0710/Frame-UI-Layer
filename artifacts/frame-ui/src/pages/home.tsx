import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { ArrowRight, Shield, Layers, Palette, Code2 } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Unstyled by design",
    description: "No CSS to override. Bring Tailwind, CSS Modules, or any styling solution — FrameUI stays out of your way.",
  },
  {
    icon: Shield,
    title: "Accessibility built-in",
    description: "WAI-ARIA compliance, focus management, and keyboard navigation handled automatically for every component.",
  },
  {
    icon: Layers,
    title: "Progressive composition",
    description: "Start simple with a single import. Decompose into sub-components when you need fine-grained control.",
  },
  {
    icon: Code2,
    title: "asChild support",
    description: "Merge accessibility and event props onto your existing elements — no extra DOM wrappers.",
  },
];

const componentList = ["Modal", "Dropdown", "Accordion", "Tabs", "Tooltip", "Select", "Checkbox", "Switch"];

export default function Home() {
  return (
    <Layout>
      <div className="max-w-3xl space-y-16">
        <section>
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
            Headless UI library for React
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-5 leading-tight">
            The logic layer<br />
            for your components.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            FrameUI handles accessibility, keyboard navigation, and ARIA attributes. You define the markup and styles — using any CSS system you prefer.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/components"
              data-testid="link-browse-components"
              className="inline-flex h-9 items-center gap-2 justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Browse components
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              data-testid="link-github"
              className="inline-flex h-9 items-center gap-2 justify-center rounded-md border border-input bg-background px-5 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              GitHub
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-6">Why FrameUI?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-lg border bg-card p-5 shadow-sm">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border bg-muted">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Quick start</h2>
          <div className="rounded-lg border bg-muted/40 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b bg-muted/60">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>
            <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
                <span className="text-muted-foreground"># Install via npm</span>{"\n"}
                <span className="text-foreground">npm install frame-ui</span>{"\n\n"}
                <span className="text-muted-foreground"># or pnpm</span>{"\n"}
                <span className="text-foreground">pnpm add frame-ui</span>{"\n\n"}
                <span className="text-muted-foreground"># Import what you need</span>{"\n"}
                <span className="text-foreground">{"import { Modal, Accordion, Tabs } from 'frame-ui';"}</span>
              </code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Available components</h2>
          <div className="flex flex-wrap gap-2">
            {componentList.map((name) => (
              <Link
                key={name}
                href={`/components/${name.toLowerCase()}`}
                data-testid={`link-component-tag-${name.toLowerCase()}`}
                className="rounded-md border bg-card px-3 py-1.5 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
