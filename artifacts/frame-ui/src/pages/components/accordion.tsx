import { Layout } from "@/components/layout";
import { ComponentDemo } from "@/components/component-demo";
import { Accordion } from "@/components/frame-ui/accordion";

export default function AccordionPage() {
  return (
    <Layout>
      <ComponentDemo
        title="Accordion"
        description="Vertically stacked sections that expand and collapse. Supports single or multiple open items at once."
        demo={
          <div className="w-full max-w-md">
            <Accordion
              type="single"
              items={[
                {
                  id: "item-1",
                  trigger: "Is FrameUI accessible?",
                  content: "Yes. FrameUI follows WAI-ARIA guidelines for all components. Focus management, keyboard navigation, and ARIA attributes are handled automatically.",
                },
                {
                  id: "item-2",
                  trigger: "Can I use it with any CSS framework?",
                  content: "Absolutely. FrameUI ships zero styles — you bring your own. Tailwind CSS, CSS Modules, CSS-in-JS, or plain CSS all work equally well.",
                },
                {
                  id: "item-3",
                  trigger: "What does asChild mean?",
                  content: "asChild lets FrameUI merge its accessibility props onto your existing elements instead of wrapping them in an extra DOM node. You keep full control of the markup.",
                },
              ]}
            />
          </div>
        }
        code={`import { Accordion } from "frame-ui";

function FAQ() {
  return (
    <Accordion
      type="single"
      items={[
        {
          id: "q1",
          trigger: "Is FrameUI accessible?",
          content: "Yes. All WAI-ARIA patterns are built in.",
        },
        {
          id: "q2",
          trigger: "Can I style it with Tailwind?",
          content: "Yes — it ships unstyled.",
        },
      ]}
    />
  );
}`}
        props={[
          { name: "items", type: "AccordionItem[]", description: "Array of items with id, trigger, and content", required: true },
          { name: "type", type: '"single" | "multiple"', description: 'Controls whether one or many items can be open. Defaults to "single"' },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
        accessibilityNotes={[
          "Each trigger uses aria-expanded to communicate state",
          "Content regions use aria-labelledby to associate with their trigger",
          "Enter and Space toggle the focused item",
          'Role="region" on content panels for landmark navigation',
        ]}
      />
    </Layout>
  );
}
