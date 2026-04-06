import { useState } from "react";
import { Layout } from "@/components/layout";
import { ComponentDemo } from "@/components/component-demo";
import { Modal } from "@/components/frame-ui/modal";
import { X } from "lucide-react";

export default function ModalPage() {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <ComponentDemo
        title="Modal"
        description="A dialog overlay that interrupts the user with important content or requires a decision. Manages focus trapping, ESC to dismiss, and scroll lock automatically."
        demo={
          <>
            <button
              data-testid="button-open-modal"
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Open Modal
            </button>
            <Modal open={open} onOpenChange={setOpen}>
              <div className="bg-background rounded-lg border shadow-lg w-full max-w-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-lg font-semibold">Are you sure?</h2>
                  <button
                    data-testid="button-close-modal"
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    data-testid="button-cancel-modal"
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Cancel
                  </button>
                  <button
                    data-testid="button-confirm-modal"
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-destructive px-4 text-sm font-medium text-destructive-foreground shadow-sm transition-colors hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Delete account
                  </button>
                </div>
              </div>
            </Modal>
          </>
        }
        code={`import { useState } from "react";
import { Modal } from "frame-ui";

function ConfirmDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Delete account
      </button>

      <Modal open={open} onOpenChange={setOpen}>
        <div className="bg-white rounded-lg p-6 max-w-md">
          <h2>Are you sure?</h2>
          <p>This action cannot be undone.</p>
          <div>
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button onClick={() => setOpen(false)}>Confirm</button>
          </div>
        </div>
      </Modal>
    </>
  );
}`}
        props={[
          { name: "open", type: "boolean", description: "Controls whether the modal is visible", required: true },
          { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when open state should change", required: true },
          { name: "children", type: "React.ReactNode", description: "Content rendered inside the modal overlay", required: true },
        ]}
        accessibilityNotes={[
          "Traps keyboard focus inside the modal while open",
          "Pressing ESC closes the modal and returns focus to the trigger",
          "Clicking the backdrop dismisses the modal",
          "Locks body scroll while open",
          'Uses role="dialog" and aria-modal="true" for screen reader support',
        ]}
      />
    </Layout>
  );
}
