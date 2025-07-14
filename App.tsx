import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Community from "./pages/Community";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import Neighbors from "./pages/Neighbors";
import CreateRequest from "./pages/CreateRequest";
import Notifications from "./pages/Notifications";
import DropMessage from "./pages/DropMessage";
import AcceptRequests from "./pages/AcceptRequests";
import Messages from "./pages/Messages";
import About from "./pages/About";
import Features from "./pages/Features";
import Help from "./pages/Help";
import SafetyGuidelines from "./pages/SafetyGuidelines";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CommunityGuidelines from "./pages/CommunityGuidelines";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<Community />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/neighbors" element={<Neighbors />} />
          <Route path="/create-request" element={<CreateRequest />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/drop-message" element={<DropMessage />} />
          <Route path="/accept-requests" element={<AcceptRequests />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/help" element={<Help />} />
          <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route
            path="/community-guidelines"
            element={<CommunityGuidelines />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
