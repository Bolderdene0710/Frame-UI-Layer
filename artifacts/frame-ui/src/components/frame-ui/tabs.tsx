import { useState } from "react";

interface TabItem {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  className?: string;
}

export function Tabs({ items, defaultTab, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab ?? items[0]?.id ?? "");

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (index + 1) % items.length;
      setActiveTab(items[next].id);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (index - 1 + items.length) % items.length;
      setActiveTab(items[prev].id);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveTab(items[0].id);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveTab(items[items.length - 1].id);
    }
  };

  return (
    <div className={className}>
      <div role="tablist" className="flex border-b border-border gap-0">
        {items.map((item, i) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 ${
                isActive
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
              onClick={() => setActiveTab(item.id)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`tabpanel-${item.id}`}
          aria-labelledby={`tab-${item.id}`}
          tabIndex={0}
          hidden={activeTab !== item.id}
          className="pt-4 text-sm focus-visible:outline-none"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
