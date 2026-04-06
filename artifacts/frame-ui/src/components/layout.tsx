import React from 'react';
import { Link } from "wouter";
import { Moon, Sun, Monitor, Menu } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <div className="h-6 w-6 rounded-sm bg-foreground text-background flex items-center justify-center font-bold text-xs">F</div>
              <span className="hidden font-bold sm:inline-block">
                FrameUI
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/components" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Components
              </Link>
              <Link href="/docs" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Documentation
              </Link>
            </nav>
          </div>
          
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              {/* Search could go here */}
            </div>
            <nav className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="h-9 w-9"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex-1 flex container max-w-screen-2xl px-4 md:px-8 mx-auto">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block md:w-64 border-r border-border/40 py-6 pr-6">
          <div className="w-full h-full overflow-y-auto pr-4">
            <div className="pb-4">
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Getting Started</h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                <Link href="/" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Introduction</Link>
              </div>
            </div>
            <div className="pb-4">
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Components</h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                <Link href="/components/modal" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Modal</Link>
                <Link href="/components/dropdown" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Dropdown</Link>
                <Link href="/components/accordion" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Accordion</Link>
                <Link href="/components/tabs" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Tabs</Link>
                <Link href="/components/tooltip" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Tooltip</Link>
                <Link href="/components/select" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Select</Link>
                <Link href="/components/checkbox" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Checkbox</Link>
                <Link href="/components/switch" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Switch</Link>
              </div>
            </div>
          </div>
        </aside>
        
        <main className="flex-1 py-6 pl-0 md:pl-8">
          {children}
        </main>
      </div>
    </div>
  );
}