import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import LearnMore from "@/pages/LearnMore";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/learn-more" component={LearnMore} />
        <Route component={NotFound} />
      </Switch>
    </TooltipProvider>
  );
}

export default App;
