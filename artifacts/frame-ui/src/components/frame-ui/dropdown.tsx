import { useState, useRef, useEffect, useCallback } from "react";

interface DropdownItem {
  label: string;
  onSelect: () => void;
  disabled?: boolean;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  className?: string;
}

export function Dropdown({ trigger, items, className }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setFocusedIndex(-1);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [close]);

  useEffect(() => {
    if (open && focusedIndex >= 0) {
      const items = menuRef.current?.querySelectorAll<HTMLLIElement>('[role="menuitem"]:not([aria-disabled="true"])');
      items?.[focusedIndex]?.focus();
    }
  }, [open, focusedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const enabledItems = items.filter((i) => !i.disabled);
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setOpen(true);
        setFocusedIndex(0);
      }
      return;
    }
    if (e.key === "Escape") {
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((i) => Math.min(i + 1, enabledItems.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (focusedIndex >= 0) {
        enabledItems[focusedIndex]?.onSelect();
        close();
      }
    }
  };

  return (
    <div ref={containerRef} className={`relative inline-block ${className ?? ""}`}>
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="menu"
        aria-expanded={open}
        onKeyDown={handleKeyDown}
        onClick={() => {
          setOpen((v) => !v);
          setFocusedIndex(open ? -1 : 0);
        }}
      >
        {trigger}
      </div>
      {open && (
        <ul
          ref={menuRef}
          role="menu"
          className="absolute top-full mt-1 left-0 z-50 min-w-[10rem] rounded-md border bg-popover shadow-md py-1 outline-none animate-in fade-in-0 zoom-in-95"
          onKeyDown={handleKeyDown}
        >
          {items.map((item, i) => (
            <li
              key={i}
              role="menuitem"
              tabIndex={item.disabled ? -1 : 0}
              aria-disabled={item.disabled}
              className={`flex items-center px-3 py-1.5 text-sm cursor-pointer outline-none transition-colors ${
                item.disabled
                  ? "opacity-50 cursor-not-allowed text-muted-foreground"
                  : "text-popover-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              }`}
              onClick={() => {
                if (!item.disabled) {
                  item.onSelect();
                  close();
                }
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
