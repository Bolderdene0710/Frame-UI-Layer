import { useState } from "react";
import { Layout } from "@/components/layout";
import { ComponentDemo } from "@/components/component-demo";
import { Checkbox } from "@/components/frame-ui/checkbox";

export default function CheckboxPage() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <Layout>
      <ComponentDemo
        title="Checkbox"
        description="An accessible binary input for toggling boolean states. Supports controlled and uncontrolled usage, as well as disabled states."
        demo={
          <div className="flex flex-col gap-4">
            <Checkbox
              id="check-1"
              label="Accept terms and conditions"
              checked={checked1}
              onChange={setChecked1}
            />
            <Checkbox
              id="check-2"
              label="Receive email notifications"
              checked={checked2}
              onChange={setChecked2}
            />
            <Checkbox
              id="check-3"
              label="Disabled option"
              checked={checked3}
              onChange={setChecked3}
              disabled
            />
          </div>
        }
        code={`import { Checkbox } from "frame-ui";
import { useState } from "react";

function TermsCheckbox() {
  const [accepted, setAccepted] = useState(false);

  return (
    <Checkbox
      id="terms"
      label="Accept terms and conditions"
      checked={accepted}
      onChange={setAccepted}
    />
  );
}`}
        props={[
          { name: "id", type: "string", description: "Unique identifier linking the label and checkbox", required: true },
          { name: "checked", type: "boolean", description: "Controlled checked state", required: true },
          { name: "onChange", type: "(checked: boolean) => void", description: "Called when the checked state changes", required: true },
          { name: "label", type: "React.ReactNode", description: "Label content associated with the checkbox" },
          { name: "disabled", type: "boolean", description: "Prevents interaction when true" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
        accessibilityNotes={[
          'Uses role="checkbox" with aria-checked',
          "Supports keyboard activation via Space",
          "Label and checkbox are semantically linked via htmlFor/id",
          "Disabled checkboxes use aria-disabled",
        ]}
      />
    </Layout>
  );
}
