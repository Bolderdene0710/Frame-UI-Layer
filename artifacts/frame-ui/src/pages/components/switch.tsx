import { useState } from "react";
import { Layout } from "@/components/layout";
import { ComponentDemo } from "@/components/component-demo";
import { Switch } from "@/components/frame-ui/switch";

export default function SwitchPage() {
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  return (
    <Layout>
      <ComponentDemo
        title="Switch"
        description="A toggle control for enabling or disabling features. Semantically equivalent to a checkbox but communicates a binary on/off state more clearly."
        demo={
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between w-56">
              <span className="text-sm font-medium">Push notifications</span>
              <Switch
                id="switch-notifications"
                checked={notifications}
                onChange={setNotifications}
              />
            </div>
            <div className="flex items-center justify-between w-56">
              <span className="text-sm font-medium">Dark mode</span>
              <Switch
                id="switch-dark"
                checked={darkMode}
                onChange={setDarkMode}
              />
            </div>
            <div className="flex items-center justify-between w-56">
              <span className="text-sm font-medium opacity-50">Analytics (disabled)</span>
              <Switch
                id="switch-analytics"
                checked={analytics}
                onChange={setAnalytics}
                disabled
              />
            </div>
          </div>
        }
        code={`import { Switch } from "frame-ui";
import { useState } from "react";

function NotificationToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <span>Push notifications</span>
      <Switch
        id="notifications"
        checked={enabled}
        onChange={setEnabled}
      />
    </div>
  );
}`}
        props={[
          { name: "id", type: "string", description: "Unique identifier for the switch element", required: true },
          { name: "checked", type: "boolean", description: "Controlled on/off state", required: true },
          { name: "onChange", type: "(checked: boolean) => void", description: "Called when the switch is toggled", required: true },
          { name: "label", type: "React.ReactNode", description: "Optional label rendered alongside the switch" },
          { name: "disabled", type: "boolean", description: "Prevents interaction when true" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
        accessibilityNotes={[
          'Uses role="switch" with aria-checked for clear semantic meaning',
          "Space or Enter toggles the switch when focused",
          "Associates with its label via htmlFor / id",
          "Disabled switches receive aria-disabled and disabled attributes",
        ]}
      />
    </Layout>
  );
}
