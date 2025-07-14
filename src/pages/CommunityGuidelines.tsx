import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  ArrowLeft,
  Heart,
  HandHeart,
  MessageSquare,
  Star,
  Shield,
  AlertTriangle,
  CheckCircle,
  ThumbsUp,
  Flag,
  Calendar,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CommunityGuidelines() {
  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Kindness & Respect",
      description:
        "Treat every neighbor with kindness, respect, and understanding",
      examples: [
        "Use polite and friendly language in all communications",
        "Be patient with neighbors who may be new to the platform",
        "Respect different backgrounds, cultures, and perspectives",
        "Show appreciation when someone helps you",
      ],
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Helpfulness",
      description: "Foster a spirit of mutual assistance and community support",
      examples: [
        "Offer help when you can, even for small requests",
        "Be reliable and follow through on your commitments",
        "Share useful tips and local knowledge with neighbors",
        "Go the extra mile to make someone's day better",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety & Trust",
      description:
        "Maintain a secure environment built on trust and transparency",
      examples: [
        "Verify your identity and be honest about who you are",
        "Report any suspicious or inappropriate behavior",
        "Follow safety guidelines for meetings and transactions",
        "Keep personal information secure while being authentically yourself",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "Prioritize community benefit and collective well-being",
      examples: [
        "Consider the broader impact of your actions on the neighborhood",
        "Participate in community discussions and events",
        "Help newcomers feel welcome and included",
        "Support local businesses and sustainable practices",
      ],
    },
  ];

  const bestPractices = [
    {
      category: "Communication",
      icon: <MessageSquare className="w-6 h-6" />,
      practices: [
        "Respond to messages promptly and courteously",
        "Be clear about your availability and any limitations",
        "Use the platform's messaging system for all communications",
        "Ask questions if you're unsure about anything",
        "Express gratitude and give positive feedback when appropriate",
      ],
    },
    {
      category: "Shopping Assistance",
      icon: <ThumbsUp className="w-6 h-6" />,
      practices: [
        "Be specific about items, brands, and preferences in requests",
        "Provide accurate payment information upfront",
        "Communicate any changes or delays promptly",
        "Check receipts and confirm accuracy before handoff",
        "Leave honest reviews about your experience",
      ],
    },
    {
      category: "Community Participation",
      icon: <Star className="w-6 h-6" />,
      practices: [
        "Keep your profile updated with current information",
        "Share community announcements and helpful information",
        "Participate in neighborhood discussions respectfully",
        "Offer feedback to help improve the platform",
        "Mentor new community members",
      ],
    },
  ];

  const unacceptableBehavior = [
    "Harassment, bullying, or intimidation of any kind",
    "Discriminatory language or behavior based on race, religion, gender, sexual orientation, age, or disability",
    "Sharing personal contact information in public spaces",
    "Requesting or offering illegal goods or services",
    "Creating fake accounts or impersonating others",
    "Commercial solicitation unrelated to community needs",
    "Repeatedly canceling or failing to follow through on commitments",
    "Attempting to conduct business outside the platform for safety reasons",
  ];

  const reportingProcess = [
    {
      step: 1,
      title: "Identify the Issue",
      description:
        "Recognize behavior that violates community guidelines or makes you uncomfortable.",
    },
    {
      step: 2,
      title: "Document the Incident",
      description:
        "Take screenshots if possible and note specific details about what happened.",
    },
    {
      step: 3,
      title: "Use the Report Feature",
      description:
        "Access the report function through the user's profile or message thread.",
    },
    {
      step: 4,
      title: "Follow Up if Needed",
      description:
        "Contact our support team if the issue requires immediate attention.",
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
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                NeighbourHub
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">Community Guidelines</Badge>
            <Link to="/signup">
              <Button>Join Community</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Community Guidelines
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building a strong, safe, and supportive neighborhood community
            together. These guidelines help ensure NeighbourHub remains a
            positive space for everyone.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <Badge variant="secondary">
              <Calendar className="w-3 h-3 mr-1" />
              Last Updated: January 1, 2024
            </Badge>
          </div>
        </div>

        {/* Community Vision */}
        <Card className="mb-12 border-l-4 border-l-primary">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Our Community Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NeighbourHub envisions neighborhoods where people know and
                  support each other, where asking for help is natural, and
                  where small acts of kindness create lasting bonds. We believe
                  that technology should bring people together, not drive them
                  apart.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These guidelines exist to protect this vision and ensure that
                  every interaction on our platform contributes to building
                  stronger, more connected communities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {value.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                      <CardDescription>{value.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {value.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Best Practices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {bestPractices.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.practices.map((practice, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Star className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">
                          {practice}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Unacceptable Behavior */}
        <Card className="mb-12 border-l-4 border-l-red-500">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <div>
                <CardTitle className="text-2xl">
                  Unacceptable Behavior
                </CardTitle>
                <CardDescription>
                  The following behaviors are not tolerated in our community
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {unacceptableBehavior.map((behavior, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg"
                >
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-red-800">{behavior}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">
                    Consequences
                  </h4>
                  <p className="text-sm text-yellow-700">
                    Violation of these guidelines may result in warnings,
                    temporary suspension, or permanent removal from the
                    platform, depending on the severity and frequency of the
                    behavior.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reporting Process */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Flag className="w-8 h-8 text-orange-500" />
              <div>
                <CardTitle className="text-2xl">Reporting Issues</CardTitle>
                <CardDescription>
                  How to report behavior that violates our community guidelines
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {reportingProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-6" />
            <div className="text-center">
              <h3 className="font-semibold mb-4">
                Need Help or Have Questions?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button>Contact Support Team</Button>
                </Link>
                <Link to="/safety-guidelines">
                  <Button variant="outline">View Safety Guidelines</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recognition and Rewards */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-purple-500" />
              <div>
                <CardTitle className="text-2xl">
                  Community Recognition
                </CardTitle>
                <CardDescription>
                  We celebrate members who embody our community values
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Helpful Neighbor Awards</h3>
                <p className="text-sm text-muted-foreground">
                  Monthly recognition for outstanding community assistance
                </p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Heart className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Kindness Champions</h3>
                <p className="text-sm text-muted-foreground">
                  Celebrating acts of exceptional kindness and support
                </p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Community Builders</h3>
                <p className="text-sm text-muted-foreground">
                  Honoring those who help grow and strengthen neighborhoods
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-8">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Ready to Build Community?
            </h2>
            <p className="mb-6 text-primary-foreground/90">
              Join thousands of neighbors who are already creating stronger,
              more connected communities through NeighbourHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary">
                  Join Our Community
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
