import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  MapPin,
  Star,
  MessageSquare,
  Phone,
  Mail,
  ArrowLeft,
  Search,
  Filter,
  MoreVertical,
  UserPlus,
  Heart,
  Calendar,
  ShoppingCart,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Neighbors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNeighbor, setSelectedNeighbor] = useState<any>(null);

  const neighbors = [
    {
      id: 1,
      name: "Mike Chen",
      distance: "0.3km",
      rating: 4.8,
      trips: 23,
      avatar: "/api/placeholder/40/40",
      status: "online",
      bio: "Software engineer, happy to help with tech shopping and groceries. Available weekday evenings and weekends.",
      joinDate: "Feb 2024",
      specialties: ["Electronics", "Groceries", "Asian Markets"],
      lastActive: "2 hours ago",
      phone: "+1 (555) 234-5678",
      email: "mike.chen@email.com",
      preferredStores: ["Best Buy", "Whole Foods", "H-Mart"],
      completedRequests: 23,
      helpedUsers: 15,
      responseTime: "1.2 hours",
    },
    {
      id: 2,
      name: "Eleanor Roberts",
      distance: "0.5km",
      rating: 5.0,
      trips: 45,
      avatar: "/api/placeholder/40/40",
      status: "away",
      bio: "Retired teacher, love helping community members with pharmacy runs and errands. Very flexible schedule.",
      joinDate: "Jan 2024",
      specialties: ["Pharmacy", "Groceries", "Pet Supplies"],
      lastActive: "30 minutes ago",
      phone: "+1 (555) 345-6789",
      email: "eleanor.roberts@email.com",
      preferredStores: ["CVS", "Walgreens", "Safeway"],
      completedRequests: 45,
      helpedUsers: 28,
      responseTime: "45 minutes",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      distance: "0.2km",
      rating: 4.9,
      trips: 18,
      avatar: "/api/placeholder/40/40",
      status: "online",
      bio: "Working mom, often shopping at Costco and local farmers market. Great for bulk purchases.",
      joinDate: "Mar 2024",
      specialties: ["Bulk Shopping", "Organic Foods", "Kids Items"],
      lastActive: "Online now",
      phone: "+1 (555) 456-7890",
      email: "sarah.johnson@email.com",
      preferredStores: ["Costco", "Farmers Market", "Target"],
      completedRequests: 18,
      helpedUsers: 12,
      responseTime: "2.1 hours",
    },
    {
      id: 4,
      name: "David Park",
      distance: "0.6km",
      rating: 4.7,
      trips: 31,
      avatar: "/api/placeholder/40/40",
      status: "offline",
      bio: "Pet owner and fitness enthusiast. Happy to help with pet store runs and health food shopping.",
      joinDate: "Dec 2023",
      specialties: ["Pet Supplies", "Health Foods", "Supplements"],
      lastActive: "1 day ago",
      phone: "+1 (555) 567-8901",
      email: "david.park@email.com",
      preferredStores: ["Petco", "GNC", "Trader Joe's"],
      completedRequests: 31,
      helpedUsers: 19,
      responseTime: "3.5 hours",
    },
    {
      id: 5,
      name: "Jennifer Liu",
      distance: "0.4km",
      rating: 4.6,
      trips: 12,
      avatar: "/api/placeholder/40/40",
      status: "online",
      bio: "New to the neighborhood but eager to help! Freelancer with flexible schedule during weekdays.",
      joinDate: "Apr 2024",
      specialties: ["Quick Errands", "Bakery Items", "Office Supplies"],
      lastActive: "5 minutes ago",
      phone: "+1 (555) 678-9012",
      email: "jennifer.liu@email.com",
      preferredStores: ["Staples", "Local Bakery", "CVS"],
      completedRequests: 12,
      helpedUsers: 8,
      responseTime: "1.8 hours",
    },
  ];

  const favoriteNeighbors = neighbors.filter((neighbor) =>
    [1, 2, 3].includes(neighbor.id),
  );

  const filteredNeighbors = neighbors.filter(
    (neighbor) =>
      neighbor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      neighbor.specialties.some((specialty) =>
        specialty.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const handleMessage = (neighborId: number) => {
    console.log("Opening chat with neighbor:", neighborId);
    // Navigate to messages page with specific neighbor
  };

  const handleCall = (neighborId: number) => {
    console.log("Calling neighbor:", neighborId);
    // Initiate call functionality
  };

  const handleAddFavorite = (neighborId: number) => {
    console.log("Adding neighbor to favorites:", neighborId);
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
            <Badge variant="outline">Neighbors</Badge>
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
            Your Neighbors
          </h1>
          <p className="text-muted-foreground">
            Connect with neighbors in your 500-800m radius for shopping
            assistance.
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search neighbors by name or specialty..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Distance
              </Button>
              <Button variant="outline">
                <Star className="w-4 h-4 mr-2" />
                Sort by Rating
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Neighbors</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="online">Online Now</TabsTrigger>
          </TabsList>

          {/* All Neighbors Tab */}
          <TabsContent value="all" className="space-y-6">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredNeighbors.map((neighbor) => (
                <Card
                  key={neighbor.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={neighbor.avatar} />
                            <AvatarFallback>
                              {neighbor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                              neighbor.status === "online"
                                ? "bg-green-500"
                                : neighbor.status === "away"
                                  ? "bg-yellow-500"
                                  : "bg-gray-400"
                            }`}
                          ></div>
                        </div>
                        <div>
                          <h3 className="font-semibold">{neighbor.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            <span>{neighbor.distance}</span>
                            <span>•</span>
                            <span>{neighbor.lastActive}</span>
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => setSelectedNeighbor(neighbor)}
                          >
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleAddFavorite(neighbor.id)}
                          >
                            <Heart className="w-4 h-4 mr-2" />
                            Add to Favorites
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UserPlus className="w-4 h-4 mr-2" />
                            Send Friend Request
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span className="font-medium">{neighbor.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({neighbor.trips} trips)
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {neighbor.bio}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {neighbor.specialties.map((specialty, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => handleMessage(neighbor.id)}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCall(neighbor.id)}
                      >
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="space-y-6">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {favoriteNeighbors.map((neighbor) => (
                <Card
                  key={neighbor.id}
                  className="hover:shadow-lg transition-shadow border-primary/20"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={neighbor.avatar} />
                            <AvatarFallback>
                              {neighbor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -top-1 -right-1">
                            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold">{neighbor.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            <span>{neighbor.distance}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Rating:</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-primary text-primary" />
                          <span className="font-medium">{neighbor.rating}</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Response Time:
                        </span>
                        <p className="font-medium">{neighbor.responseTime}</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Quick Message
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Online Now Tab */}
          <TabsContent value="online" className="space-y-6">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {neighbors
                .filter((neighbor) => neighbor.status === "online")
                .map((neighbor) => (
                  <Card
                    key={neighbor.id}
                    className="hover:shadow-lg transition-shadow border-green-200"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={neighbor.avatar} />
                              <AvatarFallback>
                                {neighbor.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                          </div>
                          <div>
                            <h3 className="font-semibold">{neighbor.name}</h3>
                            <div className="flex items-center space-x-2 text-sm">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-green-600 font-medium">
                                Online now
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        {neighbor.bio}
                      </p>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Chat Now
                        </Button>
                        <Button size="sm" variant="outline">
                          <Phone className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Neighbor Profile Dialog */}
        <Dialog
          open={!!selectedNeighbor}
          onOpenChange={() => setSelectedNeighbor(null)}
        >
          <DialogContent className="max-w-2xl">
            {selectedNeighbor && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={selectedNeighbor.avatar} />
                      <AvatarFallback>
                        {selectedNeighbor.name
                          .split(" ")
                          .map((n: any) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {selectedNeighbor.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{selectedNeighbor.distance} away</span>
                      </div>
                    </div>
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">About</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedNeighbor.bio}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Community Stats</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Completed Requests:</span>
                          <span className="font-medium">
                            {selectedNeighbor.completedRequests}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>People Helped:</span>
                          <span className="font-medium">
                            {selectedNeighbor.helpedUsers}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Average Response:</span>
                          <span className="font-medium">
                            {selectedNeighbor.responseTime}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rating:</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 fill-primary text-primary" />
                            <span className="font-medium">
                              {selectedNeighbor.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {selectedNeighbor.specialties.map(
                          (specialty: string, index: number) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {specialty}
                            </Badge>
                          ),
                        )}
                      </div>
                      <h4 className="font-medium mb-2">Preferred Stores</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedNeighbor.preferredStores.map(
                          (store: string, index: number) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {store}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                    <Button variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
