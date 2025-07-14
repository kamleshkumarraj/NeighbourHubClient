import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  ArrowLeft,
  Search,
  MessageSquare,
  Book,
  Play,
  Download,
  Mail,
  Phone,
  Clock,
  Shield,
  HelpCircle,
  Star,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "How do I get started on NeighbourHub?",
      answer:
        "Getting started is easy! Simply sign up with your email, verify your address to find nearby neighbors, complete your profile, and start browsing or creating shopping requests. Our onboarding guide will walk you through each step.",
    },
    {
      question: "How does the location verification work?",
      answer:
        "We use your address to match you with neighbors within 500-800m radius. Your exact address is kept private - neighbors only see your general area and distance from them. You can adjust your visibility radius in privacy settings.",
    },
    {
      question: "Is it safe to shop for strangers?",
      answer:
        "Safety is our top priority. All users are verified, we have a rating system, and you can view neighbor profiles before accepting requests. Always meet in public places and trust your instincts. Report any suspicious behavior immediately.",
    },
    {
      question: "How do payments work?",
      answer:
        "Neighbors typically handle payments through cash, Venmo, PayPal, or other agreed methods. We recommend discussing payment before shopping and keeping receipts. Our payment protection features are coming soon.",
    },
    {
      question: "What if someone doesn't show up?",
      answer:
        "If a neighbor doesn't fulfill their commitment, you can report this through the app. Repeated no-shows affect their community rating. We also have a backup helper system for urgent requests.",
    },
    {
      question: "Can I cancel a request?",
      answer:
        "Yes, you can cancel requests before they're accepted. If already accepted, please message the helper immediately to coordinate. Frequent cancellations may affect your community rating.",
    },
    {
      question: "How do I report inappropriate behavior?",
      answer:
        "Use the report button in any chat or user profile. You can also contact our support team directly. We take all reports seriously and investigate promptly to maintain a safe community environment.",
    },
    {
      question: "Are there any fees to use NeighbourHub?",
      answer:
        "NeighbourHub is completely free to use. We believe in building communities without barriers. Some premium features may be introduced in the future, but core functionality will always remain free.",
    },
  ];

  const quickStart = [
    {
      step: 1,
      title: "Create Your Account",
      description: "Sign up with email and verify your neighborhood location",
    },
    {
      step: 2,
      title: "Complete Your Profile",
      description: "Add bio, preferred stores, and availability preferences",
    },
    {
      step: 3,
      title: "Find Your Neighbors",
      description: "Browse nearby neighbors and introduce yourself",
    },
    {
      step: 4,
      title: "Start Helping",
      description: "Create requests or offer to help with existing ones",
    },
  ];

  const guides = [
    {
      title: "Creating Your First Request",
      description: "Step-by-step guide to posting your first shopping request",
      duration: "5 min read",
      category: "Getting Started",
    },
    {
      title: "Safety Guidelines for Helpers",
      description: "Best practices for safely helping neighbors with shopping",
      duration: "3 min read",
      category: "Safety",
    },
    {
      title: "Building Your Community Rating",
      description: "Tips for becoming a trusted community member",
      duration: "4 min read",
      category: "Community",
    },
    {
      title: "Payment Options and Protection",
      description: "Understanding payment methods and staying protected",
      duration: "6 min read",
      category: "Payments",
    },
    {
      title: "Mobile App Features",
      description: "Making the most of NeighbourHub on your phone",
      duration: "7 min read",
      category: "Features",
    },
    {
      title: "Troubleshooting Common Issues",
      description: "Solutions to frequently encountered problems",
      duration: "8 min read",
      category: "Troubleshooting",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
                <HelpCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                NeighbourHub
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">Help Center</Badge>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers, learn how to use NeighbourHub, and get support from
            our community team.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for help topics, features, or common questions..."
              className="pl-12 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="faq" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="getting-started">Quick Start</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick answers to the most common questions about NeighbourHub.
              </p>
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="space-y-2">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {filteredFaqs.length === 0 && searchQuery && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      No results found for "{searchQuery}". Try a different
                      search term.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Guides Tab */}
          <TabsContent value="guides" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Help Guides</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Detailed guides to help you make the most of NeighbourHub.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {guides.map((guide, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{guide.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {guide.duration}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <Book className="w-4 h-4 mr-2" />
                      Read Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Quick Start Tab */}
          <TabsContent value="getting-started" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Quick Start Guide</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get up and running with NeighbourHub in just a few minutes.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {quickStart.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary-foreground">
                            {item.step}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Video Tutorial */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Video Tutorial</span>
                  </CardTitle>
                  <CardDescription>
                    Watch our 3-minute overview to see NeighbourHub in action
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-secondary/20 rounded-lg h-64 flex items-center justify-center">
                    <Button size="lg">
                      <Play className="w-6 h-6 mr-2" />
                      Watch Tutorial
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to
                help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-4">
                    Get instant help from our support team
                  </p>
                  <Button className="w-full">Start Chat</Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Available 9 AM - 6 PM EST
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Email Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Send us a detailed message about your issue
                  </p>
                  <Button variant="outline" className="w-full">
                    Email Us
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Response within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Speak directly with our support team
                  </p>
                  <Button variant="outline" className="w-full">
                    +1 (555) 123-4567
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Monday - Friday, 9 AM - 6 PM EST
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Status & Resources */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Service Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Platform Status</span>
                      <Badge className="bg-green-500">Operational</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Response Time</span>
                      <span className="text-sm text-muted-foreground">
                        Fast
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Updated</span>
                      <span className="text-sm text-muted-foreground">
                        2 min ago
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Resources</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Community Guidelines
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Safety Manual
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Privacy Policy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
