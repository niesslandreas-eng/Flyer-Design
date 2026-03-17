import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
// Hier die neue Seite importieren (Erstelle die Datei in src/pages/Einverstaendniserklaerung.tsx)
import QrSpecial from "@/pages/Einverstaendniserklaerung";
import LegalPage from "@/pages/Impressum_Datenschutz";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Diese Route ist nur über den direkten Link/QR-Code erreichbar.
          Da sie nirgendwo verlinkt ist, bleibt sie für normale Nutzer unsichtbar.
      */}
      <Route path="/exklusiv" component={QrSpecial} />
      <Route path="/Impressum_Datenschutz" component={LegalPage} /> 

      {/* Fallback für alle anderen URLs */}
      <Route component={NotFound} />
      
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <AppRouter />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;