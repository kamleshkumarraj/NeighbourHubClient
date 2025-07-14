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
  Shield,
  AlertTriangle,
  CheckCircle,
  Eye,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Lock,
  UserCheck,
  Flag,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SafetyGuidelines() {
  const safetyTips = [
    {
      category: "Before Meeting",
      icon: <UserCheck className="w-6 h-6" />,
      tips: [
        "Review the neighbor's profile and ratings thoroughly",
        "Check how long they've been a community member",
        "Read recent reviews from other neighbors",
        "Verify their identity through the app's verification system",
        "Start with smaller requests to build trust gradually",
      ],
    },
    {
      category: "Communication",
      icon: <MessageSquare className="w-6 h-6" />,
      tips: [
        "Keep all communication within the NeighbourHub platform",
        "Be clear about expectations, timing, and payment methods",
        "Ask questions if anything seems unclear or suspicious",
        "Trust your instincts - if something feels off, don't proceed",
        "Screenshot important conversations for your records",
      ],
    },
    {
      category: "Meeting & Handoffs",
      icon: <MapPin className="w-6 h-6" />,
      tips: [
        "Meet in well-lit, public places when possible",
        "Consider meeting at community centers or local businesses",
        "Bring a friend or let someone know where you're going",
        "Meet during daylight hours when feasible",
        "Keep meetings brief and focused on the transaction",
      ],
    },
    {
      category: "Payment & Money",
      icon: <Lock className="w-6 h-6" />,
      tips: [
        "Agree on payment method before shopping (cash, Venmo, etc.)",
        "Keep receipts for all purchases made",
        "Don't provide banking information or passwords",
        "Use small bills for cash transactions",
        "Be cautious of unusually large or expensive requests from new users",
      ],
    },
  ];

  const redFlags = [
    "Requesting personal information like social security numbers",
    "Asking to meet in isolated or private locations",
    "Pressuring you to complete requests immediately",
    "Refusing to communicate through the NeighbourHub platform",
    "Multiple neighbors reporting negative experiences",
    "Requests involving illegal items or activities",
    "Asking for loans or financial assistance beyond shopping costs",
    "Being evasive about their identity or location verification",
  ];

  const emergencySteps = [
    {
      step: 1,
      title: "Remove Yourself from Danger",
      description:
        "Priority #1 is your safety. Leave the situation immediately if you feel threatened.",
    },
    {
      step: 2,
      title: "Contact Emergency Services",
      description:
        "Call 911 if you're in immediate danger or need police assistance.",
    },
    {
      step: 3,
      title: "Report in the App",
      description:
        "Use the report function in NeighbourHub to flag the user and incident.",
    },
    {
      step: 4,
      title: "Contact NeighbourHub Support",
      description:
        "Reach out to our support team for additional assistance and follow-up.",
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
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                NeighbourHub
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">Safety Guidelines</Badge>
            <Link to="/signup">
              <Button>Join Safely</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Safety Guidelines
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your safety is our top priority. Follow these guidelines to ensure a
            secure and positive experience while helping your neighbors.
          </p>
        </div>

        {/* Safety Overview */}
        <Card className="mb-12 border-l-4 border-l-primary">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Safety First Philosophy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NeighbourHub is built on trust and community support, but we
                  recognize that safety must always come first. These guidelines
                  will help you navigate the platform confidently while
                  protecting yourself and others.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Remember: It's always okay to decline a request or stop an
                  interaction if you feel uncomfortable. Trust your instincts -
                  they're usually right.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety Tips by Category */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Essential Safety Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {safetyTips.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Red Flags */}
        <Card className="mb-12 border-l-4 border-l-red-500">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <CardTitle className="text-2xl">Red Flags to Watch For</CardTitle>
            </div>
            <CardDescription>
              Be cautious and consider reporting if you encounter any of these
              warning signs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {redFlags.map((flag, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg"
                >
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-red-800">{flag}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Platform Safety Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Safety Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-8">
                <UserCheck className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Identity Verification
                </h3>
                <p className="text-sm text-muted-foreground">
                  All users must verify their identity and location before
                  joining the community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <Eye className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Rating System</h3>
                <p className="text-sm text-muted-foreground">
                  Community ratings help you make informed decisions about who
                  to interact with.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <Flag className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Report System</h3>
                <p className="text-sm text-muted-foreground">
                  Quick and easy reporting tools to flag inappropriate behavior
                  or safety concerns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Procedures */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Phone className="w-8 h-8 text-red-500" />
              <CardTitle className="text-2xl">Emergency Procedures</CardTitle>
            </div>
            <CardDescription>
              What to do if you feel threatened or encounter a dangerous
              situation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {emergencySteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
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
              <h3 className="font-semibold mb-2">Emergency Contacts</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="bg-red-50 border-red-200 text-red-700"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency: 911
                </Button>
                <Button variant="outline">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  NeighbourHub Support
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>For Helpers</CardTitle>
              <CardDescription>
                Special considerations when shopping for others
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Verify payment method before starting shopping</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Take photos of receipts for your records</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Don't use your own credit card for large purchases
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Communicate any store limitations or out-of-stock items
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Requesters</CardTitle>
              <CardDescription>
                Best practices when asking for help
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Be clear about specific brands or alternatives</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Provide exact payment upfront when possible</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Be flexible with timing and availability</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Show appreciation and leave positive reviews</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="mt-12 bg-primary text-primary-foreground">
          <CardContent className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Questions About Safety?</h2>
            <p className="mb-6 text-primary-foreground/90">
              Our support team is here to help with any safety concerns or
              questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Contact Support
                </Button>
              </Link>
              <Link to="/help">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Visit Help Center
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
