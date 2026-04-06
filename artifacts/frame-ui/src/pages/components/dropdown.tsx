import { useState } from "react";
import { Layout } from "@/components/layout";
import { ComponentDemo } from "@/components/component-demo";
import { Dropdown } from "@/components/frame-ui/dropdown";
import { ChevronDown } from "lucide-react";

export default function DropdownPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Layout>
      <ComponentDemo
        title="Dropdown Menu"
        description="A contextual menu that appears near a trigger element. Supports full keyboard navigation, disabled items, and ARIA roles."
        demo={
          <div className="flex flex-col items-center gap-3">
            <Dropdown
              trigger={
                <button
                  data-testid="button-open-dropdown"
                  type="button"
                  className="inline-flex h-9 items-center gap-2 justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Options
                  <ChevronDown className="h-4 w-4" />
                </button>
              }
              items={[
                { label: "Edit", onSelect: () => setSelected("Edit") },
                { label: "Duplicate", onSelect: () => setSelected("Duplicate") },
                { label: "Archive", onSelect: () => setSelected("Archive"), disabled: true },
                { label: "Delete", onSelect: () => setSelected("Delete") },
              ]}
            />
            {selected && (
              <p className="text-sm text-muted-foreground" data-testid="text-selected-dropdown">
                Selected: <strong className="text-foreground">{selected}</strong>
              </p>
            )}
          </div>
        }
        code={`import { Dropdown } from "frame-ui";

function MyMenu() {
  return (
    <Dropdown
      trigger={<button>Options</button>}
      items={[
        { label: "Edit", onSelect: () => {} },
        { label: "Duplicate", onSelect: () => {} },
        { label: "Delete", onSelect: () => {}, disabled: true },
      ]}
    />
  );
}`}
        props={[
          { name: "trigger", type: "React.ReactNode", description: "The element that opens the dropdown when clicked", required: true },
          { name: "items", type: "DropdownItem[]", description: "Array of menu items with label, onSelect, and optional disabled", required: true },
          { name: "className", type: "string", description: "Additional CSS classes for the container" },
        ]}
        accessibilityNotes={[
          'Uses role="menu" and role="menuitem" for screen reader support',
          "ArrowDown / ArrowUp navigates between items",
          "Enter or Space selects the focused item",
          "ESC closes the menu and returns focus to trigger",
          "Disabled items are announced as unavailable",
        ]}
      />
    </Layout>
  );
}
