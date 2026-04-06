import { Layout } from "@/components/layout";
import { ComponentDemo } from "@/components/component-demo";
import { Tabs } from "@/components/frame-ui/tabs";

export default function TabsPage() {
  return (
    <Layout>
      <ComponentDemo
        title="Tabs"
        description="Organizes content into separate views where only one panel is visible at a time. Follows the ARIA Tabs design pattern with full keyboard navigation."
        demo={
          <div className="w-full max-w-md">
            <Tabs
              defaultTab="preview"
              items={[
                {
                  id: "preview",
                  label: "Preview",
                  content: (
                    <div className="rounded-md bg-muted/50 border px-4 py-6 text-center text-sm text-muted-foreground">
                      Component preview renders here
                    </div>
                  ),
                },
                {
                  id: "code",
                  label: "Code",
                  content: (
                    <pre className="rounded-md bg-muted px-4 py-3 text-xs font-mono overflow-x-auto">
                      <code>{`<Tabs items={tabs} defaultTab="preview" />`}</code>
                    </pre>
                  ),
                },
                {
                  id: "docs",
                  label: "Docs",
                  content: (
                    <p className="text-sm text-muted-foreground">
                      Full documentation for the Tabs component, including all props and accessibility guidelines.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        }
        code={`import { Tabs } from "frame-ui";

const tabs = [
  {
    id: "preview",
    label: "Preview",
    content: <div>Preview content here</div>,
  },
  {
    id: "code",
    label: "Code",
    content: <pre><code>{'<Component />'}</code></pre>,
  },
];

function TabExample() {
  return <Tabs items={tabs} defaultTab="preview" />;
}`}
        props={[
          { name: "items", type: "TabItem[]", description: "Array of tab items with id, label, and content", required: true },
          { name: "defaultTab", type: "string", description: "ID of the initially selected tab" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
        accessibilityNotes={[
          "Implements the ARIA Tabs pattern with role=tablist, tab, and tabpanel",
          "ArrowLeft / ArrowRight moves focus between tabs",
          "Home / End jumps to first or last tab",
          "Tab-panel association via aria-controls and aria-labelledby",
          "Hidden panels use the hidden attribute rather than display:none",
        ]}
      />
    </Layout>
  );
}
