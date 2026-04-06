import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ComponentsIndex from "@/pages/components/index";
import ModalPage from "@/pages/components/modal";
import DropdownPage from "@/pages/components/dropdown";
import AccordionPage from "@/pages/components/accordion";
import TabsPage from "@/pages/components/tabs";
import TooltipPage from "@/pages/components/tooltip";
import SelectPage from "@/pages/components/select";
import CheckboxPage from "@/pages/components/checkbox";
import SwitchPage from "@/pages/components/switch";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/components" component={ComponentsIndex} />
      <Route path="/components/modal" component={ModalPage} />
      <Route path="/components/dropdown" component={DropdownPage} />
      <Route path="/components/accordion" component={AccordionPage} />
      <Route path="/components/tabs" component={TabsPage} />
      <Route path="/components/tooltip" component={TooltipPage} />
      <Route path="/components/select" component={SelectPage} />
      <Route path="/components/checkbox" component={CheckboxPage} />
      <Route path="/components/switch" component={SwitchPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="frameui-theme">
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
