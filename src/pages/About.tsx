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
  Users,
  ArrowLeft,
  Heart,
  Target,
  Globe,
  Award,
  Clock,
  Shield,
  Star,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
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
            <Badge variant="outline">About Us</Badge>
            <Link to="/signup">
              <Button>Join Community</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About NeighbourHub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building stronger communities by connecting neighbors and
            making everyday tasks like shopping more collaborative, efficient,
            and social.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To create a world where neighbors help neighbors, reducing
                waste, saving time, and building meaningful connections through
                shared shopping experiences. We believe that simple acts of
                kindness can transform communities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-8 h-8 text-blue-500" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                A future where every neighborhood is a thriving community where
                people know and support each other. Where technology brings us
                closer together rather than further apart, and where helping
                others is as easy as asking for help.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  NeighbourHub was born from a simple observation: in our
                  increasingly connected digital world, we've somehow become
                  more disconnected from the people living right next door.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our founder noticed that while she was making her third trip
                  to the grocery store that week, her elderly neighbor was
                  struggling to get basic necessities. Meanwhile, her busy
                  working neighbor was ordering expensive delivery for items she
                  was already buying.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This sparked an idea: What if we could create a simple way for
                  neighbors to coordinate their shopping trips? What if helping
                  each other could be as easy as sending a message?
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, NeighbourHub connects thousands of neighbors across
                  communities worldwide, proving that technology can indeed
                  bring us closer together when designed with care and purpose.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  We prioritize community wellbeing over profit, ensuring our
                  platform serves the people who use it.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Safety & Trust</h3>
                <p className="text-muted-foreground">
                  Building secure, verified communities where neighbors can
                  trust and depend on each other.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Simplicity</h3>
                <p className="text-muted-foreground">
                  Making it incredibly easy to help and be helped, removing
                  barriers to community connection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  10,000+
                </div>
                <p className="text-muted-foreground">Active Neighbors</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  50,000+
                </div>
                <p className="text-muted-foreground">Shopping Requests</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
                <p className="text-muted-foreground">Community Savings</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Cities Worldwide</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
                <p className="text-primary font-medium mb-2">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  Former community organizer passionate about using technology
                  to strengthen neighborhoods.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Marcus Johnson</h3>
                <p className="text-blue-500 font-medium mb-2">Head of Safety</p>
                <p className="text-sm text-muted-foreground">
                  Cybersecurity expert ensuring our platform is safe and secure
                  for all community members.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Elena Rodriguez</h3>
                <p className="text-green-500 font-medium mb-2">
                  Community Manager
                </p>
                <p className="text-sm text-muted-foreground">
                  Dedicated to supporting our growing community and ensuring
                  everyone feels welcome.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Be part of the movement that's bringing neighbors together, one
              shopping trip at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="px-8">
                  Join NeighbourHub Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
