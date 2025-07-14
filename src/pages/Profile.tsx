import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Camera,
  Star,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Edit,
  Save,
  ArrowLeft,
  Shield,
  Award,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Elm Street, Downtown",
    bio: "Working mom, often shopping at Costco and local farmers market. Happy to help with bulk shopping trips!",
    preferredStores: "Whole Foods, Costco, Local Farmers Market",
    availability: "Evenings and weekends",
  });

  const communityStats = {
    tripsCompleted: 18,
    rating: 4.9,
    requestsHelped: 34,
    memberSince: "March 2024",
    totalSavings: "$450",
    carbonSaved: "45 kg",
  };

  const recentReviews = [
    {
      id: 1,
      reviewer: "Mike Chen",
      rating: 5,
      comment: "Very helpful and reliable! Sarah went above and beyond.",
      date: "2 days ago",
    },
    {
      id: 2,
      reviewer: "Eleanor Roberts",
      rating: 5,
      comment:
        "Always punctual and gets exactly what I need. Highly recommend!",
      date: "1 week ago",
    },
    {
      id: 3,
      reviewer: "David Park",
      rating: 4,
      comment: "Great communication and very friendly. Thanks for the help!",
      date: "2 weeks ago",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Community Helper",
      description: "Completed 10+ shopping requests",
      icon: <Award className="w-6 h-6" />,
      earned: true,
    },
    {
      id: 2,
      title: "5-Star Neighbor",
      description: "Maintained 4.5+ rating for 30 days",
      icon: <Star className="w-6 h-6" />,
      earned: true,
    },
    {
      id: 3,
      title: "Early Adopter",
      description: "One of the first 100 members",
      icon: <Users className="w-6 h-6" />,
      earned: true,
    },
    {
      id: 4,
      title: "Super Saver",
      description: "Helped neighbors save $500+ total",
      icon: <Shield className="w-6 h-6" />,
      earned: false,
    },
  ];

  const handleSaveProfile = () => {
    // Handle saving profile data
    console.log("Saving profile:", profileData);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData({ ...profileData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
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
            <Badge variant="outline">Profile</Badge>
            <Link to="/">
              <Button variant="outline" size="sm">
                Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            My Profile
          </h1>
          <p className="text-muted-foreground">
            Manage your profile information and community settings.
          </p>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="stats">Community Stats</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Personal Information Tab */}
          <TabsContent value="personal" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>
                        Update your personal details and preferences
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? (
                        <>
                          <Save className="w-4 h-4 mr-2" />
                          Save
                        </>
                      ) : (
                        <>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/api/placeholder/80/80" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" size="sm">
                        <Camera className="w-4 h-4 mr-2" />
                        Change Photo
                      </Button>
                      <p className="text-xs text-muted-foreground mt-1">
                        JPG, PNG up to 5MB
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={profileData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">About Me</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell your neighbors about yourself..."
                      value={profileData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      disabled={!isEditing}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stores">Preferred Stores</Label>
                    <Input
                      id="stores"
                      placeholder="e.g., Whole Foods, Costco, Target"
                      value={profileData.preferredStores}
                      onChange={(e) =>
                        handleInputChange("preferredStores", e.target.value)
                      }
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Input
                      id="availability"
                      placeholder="e.g., Evenings and weekends"
                      value={profileData.availability}
                      onChange={(e) =>
                        handleInputChange("availability", e.target.value)
                      }
                      disabled={!isEditing}
                    />
                  </div>

                  {isEditing && (
                    <div className="flex space-x-2">
                      <Button onClick={handleSaveProfile}>
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                  <CardDescription>Your community overview</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-secondary/20 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        {communityStats.tripsCompleted}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Trips Completed
                      </p>
                    </div>
                    <div className="text-center p-4 bg-secondary/20 rounded-lg">
                      <div className="text-2xl font-bold text-primary flex items-center justify-center">
                        <Star className="w-5 h-5 mr-1 fill-primary" />
                        {communityStats.rating}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Average Rating
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Requests Helped</span>
                      <Badge variant="secondary">
                        {communityStats.requestsHelped}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Member Since</span>
                      <span className="text-sm text-muted-foreground">
                        {communityStats.memberSince}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Total Savings</span>
                      <span className="text-sm font-medium text-green-600">
                        {communityStats.totalSavings}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Carbon Footprint Saved</span>
                      <span className="text-sm font-medium text-green-600">
                        {communityStats.carbonSaved} CO2
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Community Stats Tab */}
          <TabsContent value="stats" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold">
                        {communityStats.tripsCompleted}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Shopping Trips
                      </p>
                    </div>
                    <Activity className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold">
                        {communityStats.requestsHelped}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        People Helped
                      </p>
                    </div>
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold flex items-center">
                        <Star className="w-5 h-5 mr-1 fill-primary text-primary" />
                        {communityStats.rating}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Average Rating
                      </p>
                    </div>
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-green-600">
                        {communityStats.totalSavings}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Total Savings
                      </p>
                    </div>
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Impact Dashboard</CardTitle>
                <CardDescription>
                  Your positive impact on the community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Community Contribution</h4>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Top 25% contributor in your neighborhood
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Reliability Score</h4>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "98%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      98% completion rate
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Response Time</h4>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Average 2.3 hours response time
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Community Reviews</CardTitle>
                <CardDescription>
                  What your neighbors say about you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentReviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b pb-4 last:border-b-0"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{review.reviewer}</h4>
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-primary text-primary"
                              />
                            ))}
                            {[...Array(5 - review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-muted-foreground"
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "{review.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Achievements & Badges</CardTitle>
                <CardDescription>
                  Your community accomplishments and milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <Card
                      key={achievement.id}
                      className={`${achievement.earned ? "border-primary bg-primary/5" : "border-muted bg-muted/20"}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg ${achievement.earned ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                          >
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <h3
                              className={`font-medium ${achievement.earned ? "text-foreground" : "text-muted-foreground"}`}
                            >
                              {achievement.title}
                            </h3>
                            <p
                              className={`text-sm ${achievement.earned ? "text-muted-foreground" : "text-muted-foreground/70"}`}
                            >
                              {achievement.description}
                            </p>
                          </div>
                          {achievement.earned && (
                            <Badge className="bg-primary">Earned</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
