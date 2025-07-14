import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  ArrowLeft,
  MessageSquare,
  ShoppingCart,
  MapPin,
  Clock,
  Shield,
  Star,
  Bell,
  Calendar,
  CreditCard,
  Search,
  Filter,
  Smartphone,
  Globe,
  Heart,
  Award,
  CheckCircle,
  Zap,
  Target,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Features() {
  const coreFeatures = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Real-time Messaging",
      description:
        "Instant chat with neighbors to coordinate shopping trips and build relationships.",
      benefits: [
        "Typing indicators and read receipts",
        "File and image sharing",
        "Group chat capabilities",
        "Message templates for common requests",
      ],
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Smart Location Matching",
      description:
        "Automatically connects you with verified neighbors within your chosen radius.",
      benefits: [
        "Adjustable distance settings (500m-1km)",
        "GPS-based neighbor discovery",
        "Privacy-protected location sharing",
        "Neighborhood boundary recognition",
      ],
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Shopping Request System",
      description:
        "Create detailed shopping requests with items, budgets, and preferences.",
      benefits: [
        "Organized shopping lists",
        "Budget tracking and estimation",
        "Store preference settings",
        "Special instructions and notes",
      ],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Community Rating System",
      description:
        "Build trust through transparent ratings and reviews from neighbors.",
      benefits: [
        "5-star rating system",
        "Written reviews and feedback",
        "Verified completion badges",
        "Community reputation scores",
      ],
    },
  ];

  const advancedFeatures = [
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Notifications",
      description:
        "Stay updated with intelligent, non-intrusive notifications.",
      details: [
        "Request acceptance alerts",
        "Shopping trip reminders",
        "New neighbor introductions",
        "Community announcements",
        "Customizable notification preferences",
      ],
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Trip Scheduling",
      description: "Plan shopping trips in advance and coordinate timing.",
      details: [
        "Calendar integration",
        "Recurring trip scheduling",
        "Time slot booking",
        "Automatic reminders",
        "Trip cancellation handling",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety & Security",
      description: "Comprehensive safety features for peace of mind.",
      details: [
        "Identity verification system",
        "Background check integration",
        "Report and block features",
        "Emergency contact sharing",
        "Safe meetup location suggestions",
      ],
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Integration",
      description: "Seamless payment options for reimbursements.",
      details: [
        "Multiple payment methods",
        "Automatic receipt scanning",
        "Split payment calculations",
        "Payment protection",
        "Transaction history",
      ],
    },
  ];

  const platformFeatures = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimized",
      description: "Perfect experience on any device",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-language",
      description: "Available in 15+ languages",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Advanced Search",
      description: "Find exactly what you need quickly",
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Smart Filters",
      description: "Filter by category, urgency, distance",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Updates",
      description: "Live status updates and notifications",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Matching",
      description: "AI-powered neighbor matching",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                NeighbourHub
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">Features</Badge>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6" variant="secondary">
            <Star className="w-3 h-3 mr-1" />
            Everything you need for community shopping
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for
            <br />
            <span className="text-primary">Community Connection</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover all the tools and features that make NeighbourHub the most
            comprehensive platform for neighborhood collaboration and shopping
            assistance.
          </p>
        </div>

        <Tabs defaultValue="core" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="core">Core Features</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="platform">Platform</TabsTrigger>
            <TabsTrigger value="upcoming">Coming Soon</TabsTrigger>
          </TabsList>

          {/* Core Features */}
          <TabsContent value="core" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Core Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Essential tools that make neighborhood shopping collaboration
                simple and effective.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Advanced Features */}
          <TabsContent value="advanced" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Advanced Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sophisticated tools for power users and community organizers.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {advancedFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Platform Features */}
          <TabsContent value="platform" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technical capabilities that make NeighbourHub reliable, fast,
                and user-friendly.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-md transition-shadow"
                >
                  <CardContent className="pt-8">
                    <div className="p-3 bg-green-500/10 rounded-lg text-green-500 w-fit mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Platform Benefits */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Platform Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      99.9%
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Platform Uptime
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      &lt;2s
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Average Load Time
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      24/7
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Support Available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Coming Soon */}
          <TabsContent value="upcoming" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Exciting new features we're working on to make community
                collaboration even better.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="opacity-75">
                <CardContent className="pt-8 text-center">
                  <Truck className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Delivery Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time tracking of shopping trip progress and delivery
                    status.
                  </p>
                  <Badge variant="secondary" className="mt-3">
                    Q2 2024
                  </Badge>
                </CardContent>
              </Card>

              <Card className="opacity-75">
                <CardContent className="pt-8 text-center">
                  <Award className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Rewards Program</h3>
                  <p className="text-sm text-muted-foreground">
                    Earn points and badges for helping neighbors and being an
                    active community member.
                  </p>
                  <Badge variant="secondary" className="mt-3">
                    Q3 2024
                  </Badge>
                </CardContent>
              </Card>

              <Card className="opacity-75">
                <CardContent className="pt-8 text-center">
                  <Globe className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">AI Assistant</h3>
                  <p className="text-sm text-muted-foreground">
                    Smart shopping suggestions and automated neighbor matching
                    based on preferences.
                  </p>
                  <Badge variant="secondary" className="mt-3">
                    Q4 2024
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="mt-16 bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join thousands of neighbors already using NeighbourHub to build
              stronger communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Using NeighbourHub
                </Button>
              </Link>
              <Link to="/community">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  View Communities
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
