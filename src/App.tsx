import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
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

// Отправляет в Яндекс Метрику виртуальный хит при каждой смене маршрута.
// Необходимо для SPA с BrowserRouter — без этого Метрика видит только первую загрузку.
declare global {
  interface Window {
    ym?: (counterId: number, method: string, ...args: unknown[]) => void;
  }
}

function MetrikaPageTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.ym === "function") {
      window.ym(108988295, "hit", window.location.href, {
        referrer: document.referrer,
        title: document.title,
      });
    }
  }, [location.pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* BrowserRouter + 404.html fallback in CI/CD handles GitHub Pages routing */}
      <BrowserRouter>
        <MetrikaPageTracker />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
