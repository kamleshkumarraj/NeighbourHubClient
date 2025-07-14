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
  MapPin,
  MessageSquare,
  ShoppingCart,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Join Community</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-6" variant="secondary">
            <Users className="w-3 h-3 mr-1" />
            500+ Active Community Members
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Neighborhood Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join your neighbors in making shopping easier, building friendships,
            and creating a stronger community together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-1">500+</h3>
              <p className="text-muted-foreground">Active Members</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-1">1,200+</h3>
              <p className="text-muted-foreground">Shopping Requests</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-1">5,000+</h3>
              <p className="text-muted-foreground">Messages Sent</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-1">25+</h3>
              <p className="text-muted-foreground">Neighborhoods</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Your Community?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Sign up now to start connecting with your neighbors and make your
              shopping trips more efficient and social.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="px-8">
                  Join NeighbourHub
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Community Features Preview */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You Can Do in the Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <MessageSquare className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Post Shopping Trips</CardTitle>
                <CardDescription>
                  Let neighbors know when you're heading to the market and offer
                  to help with their needs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <ShoppingCart className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Request Items</CardTitle>
                <CardDescription>
                  Need something from the store? Request it from neighbors who
                  are already planning a trip.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Build Connections</CardTitle>
                <CardDescription>
                  Chat with neighbors, coordinate meetups, and build lasting
                  friendships in your community.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
