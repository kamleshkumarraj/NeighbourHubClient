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
  FileText,
  Scale,
  AlertTriangle,
  Shield,
  Ban,
  CheckCircle,
  Calendar,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
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
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                NeighbourHub
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">Terms of Service</Badge>
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
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Please read these terms carefully before using NeighbourHub. By
            using our service, you agree to be bound by these terms.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <Badge variant="secondary">
              <Calendar className="w-3 h-3 mr-1" />
              Effective Date: January 1, 2024
            </Badge>
            <Badge variant="outline">Version 2.1</Badge>
          </div>
        </div>

        {/* Quick Summary */}
        <Card className="mb-12 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6" />
              <span>Terms Summary</span>
            </CardTitle>
            <CardDescription>
              Key points from our terms of service (please read the full terms
              below)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">What You Can Do</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Connect with verified neighbors</li>
                  <li>• Create and accept shopping requests</li>
                  <li>• Communicate through our platform</li>
                  <li>• Rate and review other users</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What You Can't Do</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Use the platform for illegal activities</li>
                  <li>• Share personal contact information publicly</li>
                  <li>• Create fake or duplicate accounts</li>
                  <li>• Harass or abuse other users</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="w-6 h-6" />
                <span>1. Acceptance of Terms</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                By accessing or using NeighbourHub ("the Service"), you agree to
                be bound by these Terms of Service ("Terms"). If you disagree
                with any part of these terms, you may not access the Service.
              </p>
              <p className="text-muted-foreground">
                These Terms apply to all visitors, users, and others who access
                or use the Service. NeighbourHub reserves the right to update
                these Terms at any time, and your continued use of the Service
                after such changes constitutes acceptance of the new Terms.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card>
            <CardHeader>
              <CardTitle>2. Description of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                NeighbourHub is a community platform that connects neighbors to
                facilitate shopping assistance and build stronger local
                communities. The Service allows users to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Create and respond to shopping requests</li>
                <li>• Communicate with verified neighbors</li>
                <li>• Rate and review community interactions</li>
                <li>• Share community updates and announcements</li>
              </ul>
              <p className="text-muted-foreground">
                NeighbourHub serves as a platform to facilitate these
                connections but is not a party to any agreements between users.
              </p>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <Card>
            <CardHeader>
              <CardTitle>3. User Accounts and Eligibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Account Requirements</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • You must be at least 18 years old to use the Service
                  </li>
                  <li>• You must provide accurate and complete information</li>
                  <li>• You must verify your identity and location</li>
                  <li>• You may only create one account per person</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">Account Security</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • You are responsible for maintaining the security of your
                    account
                  </li>
                  <li>
                    • You must notify us immediately of any unauthorized access
                  </li>
                  <li>
                    • You are liable for all activities that occur under your
                    account
                  </li>
                  <li>
                    • We recommend using strong passwords and enabling
                    two-factor authentication
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Conduct */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6" />
                <span>4. User Conduct and Community Guidelines</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Acceptable Use</h4>
                <p className="text-muted-foreground mb-3">
                  You agree to use the Service in a manner that promotes a safe,
                  respectful, and helpful community environment. This includes:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>��� Being honest and accurate in all communications</li>
                  <li>• Treating all community members with respect</li>
                  <li>
                    • Following through on commitments made to other users
                  </li>
                  <li>• Reporting inappropriate behavior when encountered</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2 text-red-700 flex items-center space-x-2">
                  <Ban className="w-5 h-5" />
                  <span>Prohibited Activities</span>
                </h4>
                <p className="text-muted-foreground mb-3">
                  The following activities are strictly prohibited and may
                  result in account suspension or termination:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Using the Service for any illegal purpose or activity
                  </li>
                  <li>• Requesting or offering illegal goods or services</li>
                  <li>• Harassing, threatening, or abusing other users</li>
                  <li>• Creating fake accounts or impersonating others</li>
                  <li>
                    • Sharing personal contact information in public profiles
                  </li>
                  <li>
                    • Attempting to circumvent safety or security measures
                  </li>
                  <li>• Using automated systems to access the Service</li>
                  <li>
                    • Commercial solicitation unrelated to community shopping
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Transactions and Payments */}
          <Card>
            <CardHeader>
              <CardTitle>5. Transactions and Payments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                NeighbourHub facilitates connections between community members
                but does not process payments or handle transactions directly.
                All financial arrangements are between users.
              </p>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">
                      Important Notice
                    </h4>
                    <p className="text-sm text-yellow-700">
                      Users are responsible for their own payment arrangements.
                      We recommend discussing payment methods before beginning
                      any shopping assistance and keeping receipts for all
                      transactions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy and Data */}
          <Card>
            <CardHeader>
              <CardTitle>6. Privacy and Data Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Your privacy is important to us. Our collection and use of
                personal information is governed by our Privacy Policy, which is
                incorporated into these Terms by reference.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Key Privacy Points:</h4>
                <ul className="space-y-1 text-muted-foreground ml-4">
                  <li>
                    • We collect only information necessary to provide the
                    Service
                  </li>
                  <li>• Location data is used only for neighbor matching</li>
                  <li>• Personal information is never sold to third parties</li>
                  <li>• You can delete your account and data at any time</li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <Link to="/privacy-policy">Read Full Privacy Policy</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle>7. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                NeighbourHub provides a platform for community connections but
                cannot guarantee the conduct of users or the outcome of
                interactions. By using the Service, you acknowledge and agree
                that:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • NeighbourHub is not responsible for the actions of
                  individual users
                </li>
                <li>
                  • We do not guarantee the accuracy of user-provided
                  information
                </li>
                <li>• Users interact with each other at their own risk</li>
                <li>• We are not liable for disputes between users</li>
                <li>
                  • Our liability is limited to the maximum extent permitted by
                  law
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle>8. Account Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Voluntary Termination</h4>
                <p className="text-muted-foreground">
                  You may terminate your account at any time by contacting our
                  support team or using the account deletion feature in your
                  settings. Upon termination, your account and associated data
                  will be permanently deleted within 30 days.
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">Involuntary Termination</h4>
                <p className="text-muted-foreground mb-3">
                  We reserve the right to suspend or terminate accounts that
                  violate these Terms or engage in behavior that harms the
                  community. Grounds for termination include:
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Violation of community guidelines</li>
                  <li>• Fraudulent or illegal activity</li>
                  <li>• Harassment of other users</li>
                  <li>• Multiple reports of poor conduct</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Service */}
          <Card>
            <CardHeader>
              <CardTitle>9. Changes to Service and Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We reserve the right to modify or discontinue the Service,
                temporarily or permanently, with or without notice. We also
                reserve the right to update these Terms at any time.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">When Terms Change:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>
                    • We will notify users via email and in-app notification
                  </li>
                  <li>• Continued use of the Service constitutes acceptance</li>
                  <li>• Major changes may require explicit consent</li>
                  <li>• Previous versions will be archived for reference</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle>10. Governing Law and Disputes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance
                with the laws of the State of California, without regard to its
                conflict of law provisions.
              </p>
              <p className="text-muted-foreground">
                Any disputes arising from these Terms or your use of the Service
                will be resolved through binding arbitration, except where
                prohibited by law. You and NeighbourHub agree to waive any right
                to a jury trial.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Questions About These Terms?
              </h2>
              <p className="mb-6 text-primary-foreground/90">
                Our legal team is available to help clarify any questions about
                these terms of service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary">
                    Contact Legal Team
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  legal@neighbourhub.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
