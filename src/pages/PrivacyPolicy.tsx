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
  Eye,
  Lock,
  Database,
  Share,
  Cookie,
  Mail,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
            <Badge variant="outline">Privacy Policy</Badge>
            <Link to="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <Badge variant="secondary">
              <Calendar className="w-3 h-3 mr-1" />
              Last Updated: January 1, 2024
            </Badge>
            <Badge variant="outline">Version 2.1</Badge>
          </div>
        </div>

        {/* Quick Overview */}
        <Card className="mb-12 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="w-6 h-6" />
              <span>Privacy at a Glance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Lock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Data Protection</h3>
                <p className="text-sm text-muted-foreground">
                  We use industry-standard encryption to protect your personal
                  information.
                </p>
              </div>
              <div className="text-center">
                <Share className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Limited Sharing</h3>
                <p className="text-sm text-muted-foreground">
                  We only share data necessary for connecting you with
                  neighbors.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Your Control</h3>
                <p className="text-sm text-muted-foreground">
                  You can control what information is visible and delete your
                  account anytime.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-6 h-6" />
                <span>Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">
                  Account Information
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Name, email address, and phone number</li>
                  <li>• Profile photo (optional)</li>
                  <li>• Neighborhood address (for location matching)</li>
                  <li>• Bio and preferences you choose to share</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-3">
                  Usage Information
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Shopping requests and offers you create</li>
                  <li>• Messages sent through our platform</li>
                  <li>• Ratings and reviews you give and receive</li>
                  <li>• App usage patterns and preferences</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-3">
                  Technical Information
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Device information and IP address</li>
                  <li>• Browser type and operating system</li>
                  <li>• App version and performance data</li>
                  <li>• Location data (with your permission)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Core Platform Functions</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Connect you with nearby neighbors</li>
                    <li>• Facilitate shopping requests and offers</li>
                    <li>• Enable communication between users</li>
                    <li>• Process and display ratings/reviews</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Safety & Security</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Verify user identity and location</li>
                    <li>• Detect and prevent fraud</li>
                    <li>• Investigate reported issues</li>
                    <li>• Maintain platform security</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Improvement & Analytics</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Analyze usage patterns</li>
                    <li>• Improve app features and performance</li>
                    <li>• Develop new community features</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Communication</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Send important platform updates</li>
                    <li>• Notify about new neighbors or requests</li>
                    <li>• Provide customer support</li>
                    <li>• Share safety information</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Share className="w-6 h-6" />
                <span>Information Sharing</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">With Other Users</h3>
                <p className="text-muted-foreground mb-3">
                  To facilitate community connections, we share limited
                  information with other verified neighbors:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Your first name and profile photo</li>
                  <li>• General neighborhood area (not exact address)</li>
                  <li>• Approximate distance from other users</li>
                  <li>• Public bio and shopping preferences</li>
                  <li>• Community ratings and number of completed trips</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-3">
                  With Third Parties
                </h3>
                <p className="text-muted-foreground mb-3">
                  We may share information with trusted partners in these
                  situations:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Payment processors for secure transactions</li>
                  <li>• Cloud services for data storage and backup</li>
                  <li>• Analytics providers (with anonymized data only)</li>
                  <li>• Legal authorities when required by law</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-6 h-6" />
                <span>Data Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We implement comprehensive security measures to protect your
                information:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Technical Safeguards</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• End-to-end encryption for sensitive data</li>
                    <li>• Secure servers with regular security updates</li>
                    <li>• Multi-factor authentication options</li>
                    <li>• Regular security audits and monitoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Access Controls</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Limited employee access to user data</li>
                    <li>• Background checks for all staff</li>
                    <li>• Principle of least privilege access</li>
                    <li>• Comprehensive audit logs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You have control over your personal information and can:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <h4 className="font-medium mb-2">Access & Update</h4>
                  <p className="text-sm text-muted-foreground">
                    View and edit your profile information anytime through your
                    account settings.
                  </p>
                </div>
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <h4 className="font-medium mb-2">Delete Account</h4>
                  <p className="text-sm text-muted-foreground">
                    Permanently delete your account and associated data with a
                    simple request.
                  </p>
                </div>
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <h4 className="font-medium mb-2">Data Portability</h4>
                  <p className="text-sm text-muted-foreground">
                    Export your data in a readable format if you choose to leave
                    the platform.
                  </p>
                </div>
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <h4 className="font-medium mb-2">Opt-out</h4>
                  <p className="text-sm text-muted-foreground">
                    Control marketing communications and data processing
                    preferences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cookie className="w-6 h-6" />
                <span>Cookies & Tracking</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar technologies to improve your
                experience:
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Essential Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Required for basic app functionality, login, and security.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how you use the app to improve
                    performance.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Preference Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Remember your settings and preferences for a better
                    experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                NeighbourHub is not intended for children under 18. We do not
                knowingly collect personal information from children. If you
                believe a child has provided us with personal information,
                please contact us immediately so we can delete it.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We may update this privacy policy from time to time. When we do:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We'll notify you via email and app notification</li>
                <li>• The updated date will be changed at the top</li>
                <li>• Major changes will require your consent</li>
                <li>• Previous versions will be archived for reference</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Questions About Privacy?
              </h2>
              <p className="mb-6 text-primary-foreground/90">
                Our privacy team is here to help with any questions or concerns
                about how we handle your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary">
                    Contact Privacy Team
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  privacy@neighbourhub.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
