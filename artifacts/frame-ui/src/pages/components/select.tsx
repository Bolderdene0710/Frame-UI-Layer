import { useState } from "react";
import { Layout } from "@/components/layout";
import { ComponentDemo } from "@/components/component-demo";
import { Select } from "@/components/frame-ui/select";

export default function SelectPage() {
  const [value, setValue] = useState("");

  return (
    <Layout>
      <ComponentDemo
        title="Select"
        description="A custom-styled dropdown for selecting a single value from a list. Replaces the native select element while maintaining full keyboard and screen reader support."
        demo={
          <div className="w-full max-w-xs flex flex-col gap-3">
            <Select
              value={value}
              onChange={setValue}
              placeholder="Select a framework..."
              options={[
                { value: "react", label: "React" },
                { value: "vue", label: "Vue" },
                { value: "svelte", label: "Svelte" },
                { value: "solid", label: "SolidJS" },
                { value: "angular", label: "Angular", disabled: true },
              ]}
            />
            {value && (
              <p className="text-sm text-muted-foreground" data-testid="text-selected-value">
                Selected: <strong className="text-foreground">{value}</strong>
              </p>
            )}
          </div>
        }
        code={`import { Select } from "frame-ui";
import { useState } from "react";

function FrameworkPicker() {
  const [value, setValue] = useState("");

  return (
    <Select
      value={value}
      onChange={setValue}
      placeholder="Select a framework..."
      options={[
        { value: "react", label: "React" },
        { value: "vue", label: "Vue" },
        { value: "svelte", label: "Svelte" },
        { value: "angular", label: "Angular", disabled: true },
      ]}
    />
  );
}`}
        props={[
          { name: "options", type: "SelectOption[]", description: "Array of options with value, label, and optional disabled", required: true },
          { name: "value", type: "string", description: "Currently selected value (controlled)" },
          { name: "onChange", type: "(value: string) => void", description: "Called when selection changes" },
          { name: "placeholder", type: "string", description: "Text shown when no option is selected" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
        accessibilityNotes={[
          "Uses combobox role with aria-haspopup=listbox and aria-expanded",
          "Options are wrapped in a listbox with role=option",
          "ArrowDown / ArrowUp navigates options",
          "Enter or Space selects the focused option",
          "ESC dismisses the list without changing selection",
          "Selected option is marked with aria-selected",
        ]}
      />
    </Layout>
  );
}
