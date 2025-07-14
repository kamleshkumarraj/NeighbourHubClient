import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Users,
  ShoppingCart,
  MessageSquare,
  Clock,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Bell,
  User,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const heroRef = useRef(null);
  const navRef = useRef(null);
  const cardsRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const container = particlesRef.current;
      if (!container) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 20 + "s";
        particle.style.animationDuration = Math.random() * 10 + 15 + "s";
        container.appendChild(particle);
      }
    };

    createParticles();

    // GSAP Animations
    const tl = gsap.timeline();

    // Hero animations
    tl.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power3.out",
    })
      .from(
        ".hero-badge",
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.8",
      )
      .from(
        ".hero-title",
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6",
      )
      .from(
        ".hero-description",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .from(
        ".hero-buttons",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2",
      );

    // Animate cards on scroll
    gsap.utils.toArray(".animate-card").forEach((card: any, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.1,
      });
    });

    // Floating animation for special elements
    gsap.to(".float-element", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden homepage-bg">
      {/* Animated Background Particles - Only for Index page */}
      <div ref={particlesRef} className="particles absolute inset-0 z-0"></div>

      {/* Background Gradient - Only for Index page */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-pink-900/20 pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav ref={navRef} className="glass-nav sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary-foreground" />
            </div>
            <Link
              to="/"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              NeighbourHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {isLoggedIn ? (
              // Dashboard Navigation for logged-in users
              <>
                <Link
                  to="/dashboard"
                  className="text-primary font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Profile
                </Link>
                <Link
                  to="/neighbors"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Neighbors
                </Link>
                <Link
                  to="/create-request"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Create Request
                </Link>
                <Link
                  to="/accept-requests"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Help Others
                </Link>
                <Link
                  to="/messages"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Messages
                </Link>
                <Link
                  to="/drop-message"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Drop Message
                </Link>
              </>
            ) : (
              // Public Navigation for visitors
              <>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
                <a
                  href="#community"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Community
                </a>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </>
            )}
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-3">
            {isLoggedIn ? (
              // Logged-in user options
              <>
                <Link to="/notifications">
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="w-4 h-4" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="ghost" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </Button>
              </>
            ) : (
              // Guest user options
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button>Join Community</Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLoggedIn(true)}
                  className="text-xs"
                >
                  Demo Login
                </Button>
              </>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {isLoggedIn ? (
                // Dashboard Navigation for mobile
                <>
                  <Link
                    to="/dashboard"
                    className="block py-2 text-primary font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard Overview
                  </Link>
                  <Link
                    to="/profile"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile Section
                  </Link>
                  <Link
                    to="/neighbors"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Neighbors
                  </Link>
                  <Link
                    to="/create-request"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Create Request
                  </Link>
                  <Link
                    to="/accept-requests"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Accept Requests
                  </Link>
                  <Link
                    to="/messages"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Messages
                  </Link>
                  <Link
                    to="/drop-message"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Drop Message
                  </Link>
                  <Link
                    to="/notifications"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Notifications
                  </Link>
                </>
              ) : (
                // Public Navigation for mobile
                <>
                  <a
                    href="#about"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href="#community"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Community
                  </a>
                  <a
                    href="#features"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </a>
                  <Link
                    to="/contact"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="container mx-auto px-4 py-32 text-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl rounded-full"></div>
        <Badge
          className="hero-badge mb-8 glass-card glow-hover float-element"
          variant="secondary"
        >
          <MapPin className="w-3 h-3 mr-1" />
          Connect with neighbors within 500-800m
        </Badge>
        <h1 className="hero-title text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Your Neighborhood
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent glow">
            Shopping Assistant
          </span>
        </h1>
        <p className="hero-description text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Connect with neighbors, share shopping trips, and build a stronger
          community. When you're going to the market, help others by bringing
          what they need.
        </p>
        <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/signup">
            <Button
              size="lg"
              className="px-12 py-8 text-xl glass glow-hover relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-75"></div>
            </Button>
          </Link>
          <Link to="/community">
            <Button
              size="lg"
              variant="outline"
              className="px-12 py-8 text-xl glass-card border-purple-400/30 text-foreground hover:bg-purple-500/20"
            >
              View Community
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-card">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About NeighbourHub
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              We believe in the power of community. NeighbourHub connects you
              with nearby neighbors to make shopping more efficient,
              sustainable, and social.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-card">
              <h3 className="text-3xl font-semibold mb-8 text-cyan-400">
                How It Works
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 glass-card p-6 rounded-2xl glow-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 glow">
                    <span className="text-lg font-bold text-white">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-300 text-lg">
                      Post Your Shopping Trip
                    </h4>
                    <p className="text-foreground/70">
                      Going to the market? Let your neighbors know and offer to
                      help with their shopping needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 glass-card p-6 rounded-2xl glow-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 glow">
                    <span className="text-lg font-bold text-white">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-cyan-300 text-lg">
                      Receive Requests
                    </h4>
                    <p className="text-foreground/70">
                      Neighbors can request items they need, making your trip
                      more helpful to the community.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 glass-card p-6 rounded-2xl glow-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 glow">
                    <span className="text-lg font-bold text-white">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-pink-300 text-lg">
                      Connect & Coordinate
                    </h4>
                    <p className="text-foreground/70">
                      Chat with neighbors, coordinate pickup times, and build
                      lasting community connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-card">
              <div className="glass-card p-12 rounded-3xl h-96 flex items-center justify-center relative overflow-hidden glow-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-pink-500/20"></div>
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center glow float-element">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-2xl font-medium bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                    Building Stronger Communities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Hub Section */}
      <section id="community" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 blur-3xl"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20 animate-card">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Community Features
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Discover what makes NeighbourHub the perfect platform for
              neighborhood collaboration.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card animate-card hover:scale-105 transition-all duration-300 border-purple-400/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 glow float-element">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-purple-300">
                  Real-time Chat
                </CardTitle>
                <CardDescription className="text-foreground/70 text-base">
                  Instant messaging with neighbors to coordinate pickups and
                  build relationships.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-card animate-card hover:scale-105 transition-all duration-300 border-cyan-400/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6 glow float-element">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-cyan-300">
                  Smart Shopping Lists
                </CardTitle>
                <CardDescription className="text-foreground/70 text-base">
                  Organized product requests with easy-to-manage shopping lists
                  for helpers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-card animate-card hover:scale-105 transition-all duration-300 border-pink-400/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-6 glow float-element">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-pink-300">
                  Location-Based
                </CardTitle>
                <CardDescription className="text-foreground/70 text-base">
                  Automatically connects you with neighbors within your 500-800m
                  radius.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How to Use NeighbourHub
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. Follow these easy steps to begin
              helping your community.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sign Up</h3>
              <p className="text-muted-foreground">
                Create your account and set your neighborhood location.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Post or Request</h3>
              <p className="text-muted-foreground">
                Share your shopping plans or request items you need.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <p className="text-muted-foreground">
                Match with neighbors and coordinate your shopping trip.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Complete</h3>
              <p className="text-muted-foreground">
                Deliver items and build stronger neighborhood bonds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create a thriving neighborhood community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Time Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Plan shopping trips in advance and coordinate timing with
                  neighbors.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Safe & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Verified community members with secure messaging and
                  transactions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Star className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Rating System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build trust through community ratings and feedback system.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MessageSquare className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Group Chats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create group conversations for coordinating larger shopping
                  needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Smart Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI-powered matching based on location, timing, and
                  preferences.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Community Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Organize neighborhood events and group shopping activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose NeighbourHub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than just a shopping app - it's a community building
              platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Reduce Multiple Trips
                  </h3>
                  <p className="text-muted-foreground">
                    Save time and fuel by coordinating with neighbors going to
                    the same places.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Build Relationships
                  </h3>
                  <p className="text-muted-foreground">
                    Strengthen neighborhood bonds through acts of kindness and
                    mutual support.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Environmental Impact
                  </h3>
                  <p className="text-muted-foreground">
                    Reduce carbon footprint by sharing trips and reducing
                    individual car usage.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Support Local Economy
                  </h3>
                  <p className="text-muted-foreground">
                    Help elderly or busy neighbors access local markets and
                    services.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Join 500+ Active Neighbors
                  </h3>
                  <p className="text-muted-foreground">
                    Making a difference in communities worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-card">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                What Our Community Says
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Real stories from neighbors helping neighbors through
              NeighbourHub.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card animate-card hover:scale-105 transition-all duration-300 border-purple-400/20">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center glow">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl text-purple-300">
                      Sarah Johnson
                    </CardTitle>
                    <CardDescription className="text-foreground/60">
                      Downtown Resident
                    </CardDescription>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed">
                  "NeighbourHub has transformed how I shop. Instead of rushing
                  to the store alone, I now coordinate with my neighbors. It's
                  efficient and I've made great friends!"
                </p>
              </CardHeader>
            </Card>
            <Card className="glass-card animate-card hover:scale-105 transition-all duration-300 border-cyan-400/20">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center glow">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl text-cyan-300">
                      Michael Chen
                    </CardTitle>
                    <CardDescription className="text-foreground/60">
                      Busy Parent
                    </CardDescription>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed">
                  "As a working parent, this app is a lifesaver. My neighbors
                  help me get groceries when I'm stuck at work, and I return the
                  favor on weekends."
                </p>
              </CardHeader>
            </Card>
            <Card className="glass-card animate-card hover:scale-105 transition-all duration-300 border-pink-400/20">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center glow">
                    <span className="text-white font-bold text-xl">E</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl text-pink-300">
                      Eleanor Roberts
                    </CardTitle>
                    <CardDescription className="text-foreground/60">
                      Senior Community Member
                    </CardDescription>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed">
                  "At 75, heavy shopping was becoming difficult. Now young
                  neighbors help me get what I need, and I help them with
                  cooking tips. It's wonderful!"
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="glass-card p-16 rounded-3xl max-w-4xl mx-auto animate-card">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Transform Your Neighborhood?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of neighbors already building stronger, more
              connected communities.
            </p>
            <Link to="/signup">
              <Button
                size="lg"
                className="px-16 py-8 text-xl glass glow-hover relative overflow-hidden group"
              >
                <span className="relative z-10">Join NeighbourHub Today</span>
                <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-90"></div>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-nav border-t border-white/10 py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="animate-card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center glow">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  NeighbourHub
                </span>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                Building stronger neighborhoods through shared shopping and
                community support.
              </p>
            </div>
            <div className="animate-card">
              <h3 className="font-semibold mb-6 text-purple-300 text-lg">
                Platform
              </h3>
              <ul className="space-y-3 text-foreground/70">
                <li>
                  <Link
                    to="/community"
                    className="hover:text-purple-300 transition-colors hover:glow"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-purple-300 transition-colors hover:glow"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-purple-300 transition-colors hover:glow"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div className="animate-card">
              <h3 className="font-semibold mb-6 text-cyan-300 text-lg">
                Support
              </h3>
              <ul className="space-y-3 text-foreground/70">
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-cyan-300 transition-colors hover:glow"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help"
                    className="hover:text-cyan-300 transition-colors hover:glow"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/safety-guidelines"
                    className="hover:text-cyan-300 transition-colors hover:glow"
                  >
                    Safety Guidelines
                  </Link>
                </li>
              </ul>
            </div>
            <div className="animate-card">
              <h3 className="font-semibold mb-6 text-pink-300 text-lg">
                Legal
              </h3>
              <ul className="space-y-3 text-foreground/70">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:text-pink-300 transition-colors hover:glow"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-of-service"
                    className="hover:text-pink-300 transition-colors hover:glow"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/community-guidelines"
                    className="hover:text-pink-300 transition-colors hover:glow"
                  >
                    Community Guidelines
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-foreground/60">
              &copy; 2024{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                NeighbourHub
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
