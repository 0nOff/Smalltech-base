import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/site/SiteLayout";
import Home from "./pages/Home";
import Manifesto from "./pages/Manifesto";
import Research from "./pages/Research";
import Community from "./pages/Community";
import Partnership from "./pages/Partnership";
import Materials from "./pages/Materials";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* HashRouter — works out of the box on GitHub Pages without extra config */}
      <HashRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/research" element={<Research />} />
            <Route path="/community" element={<Community />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/join" element={<Join />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
