import { CodeBlock } from "@/components/code-block";

interface ComponentDemoProps {
  title: string;
  description: string;
  demo: React.ReactNode;
  code: string;
  accessibilityNotes?: string[];
  props?: { name: string; type: string; description: string; required?: boolean }[];
}

export function ComponentDemo({ title, description, demo, code, accessibilityNotes, props }: ComponentDemoProps) {
  return (
    <div className="max-w-3xl space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">{title}</h1>
        <p className="text-muted-foreground text-base">{description}</p>
      </div>

      <section>
        <h2 className="text-base font-semibold mb-4 text-foreground/80 uppercase tracking-widest text-xs">Preview</h2>
        <div className="rounded-lg border bg-background p-8 flex items-center justify-center min-h-32">
          {demo}
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold mb-4 text-foreground/80 uppercase tracking-widest text-xs">Usage</h2>
        <CodeBlock code={code} />
      </section>

      {props && props.length > 0 && (
        <section>
          <h2 className="text-base font-semibold mb-4 text-foreground/80 uppercase tracking-widest text-xs">Props</h2>
          <div className="rounded-lg border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left px-4 py-2.5 font-medium text-muted-foreground w-32">Prop</th>
                  <th className="text-left px-4 py-2.5 font-medium text-muted-foreground w-40">Type</th>
                  <th className="text-left px-4 py-2.5 font-medium text-muted-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {props.map((p) => (
                  <tr key={p.name}>
                    <td className="px-4 py-2.5">
                      <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">{p.name}</code>
                      {p.required && <span className="ml-1.5 text-xs text-destructive">*</span>}
                    </td>
                    <td className="px-4 py-2.5">
                      <code className="font-mono text-xs text-muted-foreground">{p.type}</code>
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground text-xs">{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {accessibilityNotes && accessibilityNotes.length > 0 && (
        <section>
          <h2 className="text-base font-semibold mb-4 text-foreground/80 uppercase tracking-widest text-xs">Accessibility</h2>
          <ul className="space-y-2">
            {accessibilityNotes.map((note, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60 translate-y-1.5" />
                {note}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
