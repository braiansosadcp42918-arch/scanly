import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useMemo } from "react";
import { I18nContext, getTranslator, type Lang } from "@/lib/i18n";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfUse from "./pages/TermsOfUse.tsx";
import LegalNotice from "./pages/LegalNotice.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem('scanly-lang');
      if (stored && ['es', 'en', 'pt'].includes(stored)) return stored as Lang;
    } catch {}
    return 'es';
  });

  const handleSetLang = (l: Lang) => {
    setLang(l);
    try { localStorage.setItem('scanly-lang', l); } catch {}
  };

  const i18nValue = useMemo(() => ({
    lang,
    setLang: handleSetLang,
    t: getTranslator(lang),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [lang]);

  return (
    <I18nContext.Provider value={i18nValue}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfUse />} />
              <Route path="/legal" element={<LegalNotice />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </I18nContext.Provider>
  );
};

export default App;
