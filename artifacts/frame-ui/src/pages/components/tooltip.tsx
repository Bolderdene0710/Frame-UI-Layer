import { Layout } from "@/components/layout";
import { ComponentDemo } from "@/components/component-demo";
import { Tooltip } from "@/components/frame-ui/tooltip";
import { Info, Trash2, Settings, Star } from "lucide-react";

export default function TooltipPage() {
  return (
    <Layout>
      <ComponentDemo
        title="Tooltip"
        description="A floating label that appears on hover or focus, providing additional context without cluttering the UI. Supports four placement directions."
        demo={
          <div className="flex items-center gap-6">
            <Tooltip content="More information" placement="top">
              <button
                data-testid="button-tooltip-info"
                type="button"
                className="rounded-md border bg-background p-2 hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Info className="h-4 w-4 text-muted-foreground" />
              </button>
            </Tooltip>
            <Tooltip content="Delete item" placement="bottom">
              <button
                data-testid="button-tooltip-delete"
                type="button"
                className="rounded-md border bg-background p-2 hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Trash2 className="h-4 w-4 text-muted-foreground" />
              </button>
            </Tooltip>
            <Tooltip content="Open settings" placement="top">
              <button
                data-testid="button-tooltip-settings"
                type="button"
                className="rounded-md border bg-background p-2 hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Settings className="h-4 w-4 text-muted-foreground" />
              </button>
            </Tooltip>
            <Tooltip content="Add to favorites" placement="top">
              <button
                data-testid="button-tooltip-star"
                type="button"
                className="rounded-md border bg-background p-2 hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Star className="h-4 w-4 text-muted-foreground" />
              </button>
            </Tooltip>
          </div>
        }
        code={`import { Tooltip } from "frame-ui";

function IconButton() {
  return (
    <Tooltip content="Delete item" placement="top">
      <button>
        <TrashIcon />
      </button>
    </Tooltip>
  );
}`}
        props={[
          { name: "content", type: "React.ReactNode", description: "Text or element shown in the tooltip", required: true },
          { name: "children", type: "React.ReactElement", description: "The element that triggers the tooltip", required: true },
          { name: "placement", type: '"top" | "bottom" | "left" | "right"', description: 'Preferred side for the tooltip. Defaults to "top"' },
        ]}
        accessibilityNotes={[
          'Uses role="tooltip" for screen reader association',
          "Tooltip appears on both hover and keyboard focus",
          "300ms delay prevents flicker during cursor movement",
          "Tooltip dismisses when focus or hover leaves the trigger",
        ]}
      />
    </Layout>
  );
}
