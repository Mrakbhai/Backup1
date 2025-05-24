import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Support from "./pages/Support";
import FAQs from "./pages/FAQs";
import Rules from "./pages/Rules";
import TermsOfService from "./pages/TermsOfService";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import Privacy from "./pages/Privacy";
import Eligibility from "./pages/Eligibility";
import License from "./pages/Licence";
import Register from "./pages/Registration";

function Router() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()[0]]);

  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Home} />
      <Route path="/support" component={Support} />
      <Route path="/learn-more" component={LearnMore} />
      <Route path="/faqs" component={FAQs} />
      <Route path="/rules" component={Rules} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/eligibility" component={Eligibility} />
      <Route path="/license" component={License} />
      <Route path="/register" component={Register} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;