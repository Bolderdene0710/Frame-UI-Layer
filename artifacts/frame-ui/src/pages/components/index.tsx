import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const components = [
  {
    slug: "modal",
    name: "Modal",
    description: "Focus-trapped dialog overlay with ESC dismiss and scroll lock.",
    tags: ["overlay", "dialog", "focus"],
  },
  {
    slug: "dropdown",
    name: "Dropdown Menu",
    description: "Contextual menu with full keyboard navigation and ARIA roles.",
    tags: ["menu", "navigation"],
  },
  {
    slug: "accordion",
    name: "Accordion",
    description: "Expandable sections supporting single or multiple open items.",
    tags: ["disclosure", "collapsible"],
  },
  {
    slug: "tabs",
    name: "Tabs",
    description: "Tabbed panels with ARIA Tabs pattern and arrow key navigation.",
    tags: ["navigation", "panels"],
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description: "Floating label on hover or focus with four placement options.",
    tags: ["overlay", "informational"],
  },
  {
    slug: "select",
    name: "Select",
    description: "Custom-styled combobox replacing native select with full a11y.",
    tags: ["form", "input"],
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    description: "Accessible binary input with label association and disabled state.",
    tags: ["form", "input"],
  },
  {
    slug: "switch",
    name: "Switch",
    description: "Toggle control using role=switch for clear on/off semantics.",
    tags: ["form", "input"],
  },
];

export default function ComponentsIndex() {
  return (
    <Layout>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Components</h1>
        <p className="text-muted-foreground mb-10">
          All components are unstyled — they ship with accessibility and interaction logic only. Apply your own classes to match any design system.
        </p>

        <div className="grid gap-3">
          {components.map((component) => (
            <Link
              key={component.slug}
              href={`/components/${component.slug}`}
              data-testid={`link-component-${component.slug}`}
              className="group flex items-center justify-between rounded-lg border bg-card p-5 shadow-sm hover:border-foreground/30 hover:shadow-md transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-semibold text-sm">{component.name}</h2>
                  <div className="flex gap-1.5">
                    {component.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded px-1.5 py-0.5 text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{component.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground ml-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
