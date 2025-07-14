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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import {
  Users,
  ArrowLeft,
  MapPin,
  Clock,
  ShoppingCart,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Filter,
  Search,
  DollarSign,
  AlertCircle,
  CheckCircle,
  MoreVertical,
  Star,
  Calendar,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AcceptRequests() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const [incomingRequests, setIncomingRequests] = useState([
    {
      id: 1,
      requester: {
        name: "Jennifer Liu",
        avatar: "/api/placeholder/40/40",
        rating: 4.6,
        distance: "0.4km",
        joinDate: "Apr 2024",
      },
      title: "Quick Grocery Run",
      description: "Just need milk, bread, and eggs from the corner store",
      items: [
        { name: "2% Milk", quantity: "1 gallon", price: "$3.99" },
        { name: "Whole wheat bread", quantity: "1 loaf", price: "$2.49" },
        { name: "Dozen eggs", quantity: "1 dozen", price: "$4.29" },
      ],
      category: "Groceries",
      urgency: "normal",
      budget: "$15.00",
      location: "Corner Store on Main St",
      requestedAt: "30 minutes ago",
      preferredTime: "Today, anytime",
      notes: "Any brand is fine, thanks!",
      paymentMethod: "Cash on delivery",
    },
    {
      id: 2,
      requester: {
        name: "David Park",
        avatar: "/api/placeholder/40/40",
        rating: 4.7,
        distance: "0.6km",
        joinDate: "Dec 2023",
      },
      title: "Pet Store Visit",
      description: "Need dog food and some treats for my golden retriever",
      items: [
        { name: "Premium dog food", quantity: "15lb bag", price: "$45.99" },
        { name: "Training treats", quantity: "2 packs", price: "$8.99" },
        { name: "Chew toys", quantity: "1-2 items", price: "$12.00" },
      ],
      category: "Pet Supplies",
      urgency: "low",
      budget: "$70.00",
      location: "Petco or PetSmart",
      requestedAt: "2 hours ago",
      preferredTime: "This weekend",
      notes: "Brand: Blue Buffalo preferred for dog food",
      paymentMethod: "Venmo",
    },
    {
      id: 3,
      requester: {
        name: "Maria Santos",
        avatar: "/api/placeholder/40/40",
        rating: 4.9,
        distance: "0.3km",
        joinDate: "Feb 2024",
      },
      title: "Pharmacy Prescription Pickup",
      description: "Need prescription medication pickup from CVS",
      items: [
        { name: "Prescription #RX123456", quantity: "1", price: "$25.00" },
        { name: "Vitamin D3", quantity: "1 bottle", price: "$12.99" },
      ],
      category: "Pharmacy",
      urgency: "high",
      budget: "$40.00",
      location: "CVS Pharmacy on Oak Street",
      requestedAt: "45 minutes ago",
      preferredTime: "Today before 6 PM",
      notes: "Prescription should be ready. ID required for pickup.",
      paymentMethod: "Cash",
    },
    {
      id: 4,
      requester: {
        name: "Robert Chen",
        avatar: "/api/placeholder/40/40",
        rating: 4.5,
        distance: "0.7km",
        joinDate: "Mar 2024",
      },
      title: "Electronics Store - Phone Charger",
      description: "Need a replacement iPhone charger urgently",
      items: [
        { name: "iPhone Lightning cable", quantity: "1", price: "$19.99" },
        { name: "Wall adapter", quantity: "1", price: "$15.99" },
      ],
      category: "Electronics",
      urgency: "urgent",
      budget: "$40.00",
      location: "Best Buy or Apple Store",
      requestedAt: "15 minutes ago",
      preferredTime: "ASAP",
      notes: "Apple certified cable preferred. Phone is completely dead!",
      paymentMethod: "PayPal",
    },
    {
      id: 5,
      requester: {
        name: "Lisa Wang",
        avatar: "/api/placeholder/40/40",
        rating: 4.8,
        distance: "0.5km",
        joinDate: "Jan 2024",
      },
      title: "Hardware Store Items",
      description: "Small repair items needed for home maintenance",
      items: [
        { name: "Light bulbs (LED 60W)", quantity: "4 pack", price: "$12.99" },
        { name: "Picture hanging strips", quantity: "1 pack", price: "$8.99" },
        { name: "AA batteries", quantity: "8 pack", price: "$6.99" },
      ],
      category: "Hardware Store",
      urgency: "normal",
      budget: "$30.00",
      location: "Home Depot or Lowe's",
      requestedAt: "1 hour ago",
      preferredTime: "This week",
      notes: "Any brand is fine for these basic items",
      paymentMethod: "Cash",
    },
  ]);

  const [acceptedRequests] = useState([
    {
      id: 101,
      requester: "Eleanor Roberts",
      title: "Weekly Grocery Shopping",
      status: "in_progress",
      acceptedAt: "2 hours ago",
      estimatedCompletion: "4:00 PM today",
      totalAmount: "$67.45",
    },
    {
      id: 102,
      requester: "Mike Chen",
      title: "Electronics Store Visit",
      status: "completed",
      acceptedAt: "Yesterday",
      completedAt: "Yesterday 3:30 PM",
      totalAmount: "$45.99",
    },
  ]);

  const filteredRequests = incomingRequests.filter(
    (request) =>
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleAcceptRequest = (requestId: number) => {
    const request = incomingRequests.find((r) => r.id === requestId);
    if (request) {
      console.log("Accepting request:", request);
      setIncomingRequests(incomingRequests.filter((r) => r.id !== requestId));
      // Add to accepted requests logic
    }
  };

  const handleDeclineRequest = (requestId: number) => {
    console.log("Declining request:", requestId);
    setIncomingRequests(incomingRequests.filter((r) => r.id !== requestId));
  };

  const handleAskQuestions = (requestId: number) => {
    console.log("Opening chat for request:", requestId);
    // Navigate to messages with pre-filled context
  };

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case "urgent":
        return <Badge className="bg-red-500">Urgent</Badge>;
      case "high":
        return <Badge className="bg-orange-500">High</Badge>;
      case "normal":
        return <Badge className="bg-blue-500">Normal</Badge>;
      case "low":
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge variant="outline">{urgency}</Badge>;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "groceries":
        return <ShoppingCart className="w-4 h-4" />;
      case "pharmacy":
        return <Package className="w-4 h-4" />;
      case "electronics":
        return <Package className="w-4 h-4" />;
      case "pet supplies":
        return <Package className="w-4 h-4" />;
      case "hardware store":
        return <Package className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
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
                <ThumbsUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                NeighbourHub
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">
              Accept Requests
              {incomingRequests.length > 0 && (
                <span className="ml-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {incomingRequests.length}
                </span>
              )}
            </Badge>
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
            Help Your Neighbors
          </h1>
          <p className="text-muted-foreground">
            Review and accept shopping requests from neighbors in your area.
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search requests by title, description, or category..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Category
              </Button>
              <Button variant="outline">
                <Clock className="w-4 h-4 mr-2" />
                Sort by Urgency
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="incoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="incoming">
              Incoming Requests ({incomingRequests.length})
            </TabsTrigger>
            <TabsTrigger value="accepted">
              My Accepted ({acceptedRequests.length})
            </TabsTrigger>
          </TabsList>

          {/* Incoming Requests */}
          <TabsContent value="incoming" className="space-y-6">
            {filteredRequests.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    No pending requests
                  </h3>
                  <p className="text-muted-foreground">
                    Check back later for new requests from your neighbors
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredRequests.map((request) => (
                  <Card
                    key={request.id}
                    className="border-l-4 border-l-blue-500/20 hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={request.requester.avatar} />
                            <AvatarFallback>
                              {request.requester.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-lg">
                                {request.title}
                              </h3>
                              {getUrgencyBadge(request.urgency)}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                              <span className="font-medium">
                                {request.requester.name}
                              </span>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-3 h-3" />
                                <span>{request.requester.distance}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3 fill-primary text-primary" />
                                <span>{request.requester.rating}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{request.requestedAt}</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-3">
                              {request.description}
                            </p>
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
                              onClick={() => setSelectedRequest(request)}
                            >
                              View Full Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              View Requester Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>Report Issue</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2 flex items-center space-x-1">
                            {getCategoryIcon(request.category)}
                            <span>Items Needed:</span>
                          </h4>
                          <div className="space-y-1">
                            {request.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex justify-between text-sm"
                              >
                                <span>
                                  {item.name} ({item.quantity})
                                </span>
                                <span className="font-medium">
                                  {item.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Budget:</span>
                            <span className="font-medium text-green-600">
                              {request.budget}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Location:</span>
                            <span className="font-medium">
                              {request.location}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Preferred Time:</span>
                            <span className="font-medium">
                              {request.preferredTime}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Payment:</span>
                            <span className="font-medium">
                              {request.paymentMethod}
                            </span>
                          </div>
                        </div>
                      </div>

                      {request.notes && (
                        <div className="mb-4 p-3 bg-secondary/20 rounded-lg">
                          <h4 className="font-medium text-sm mb-1">
                            Special Notes:
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {request.notes}
                          </p>
                        </div>
                      )}

                      <div className="flex space-x-3">
                        <Button
                          className="flex-1"
                          onClick={() => handleAcceptRequest(request.id)}
                        >
                          <ThumbsUp className="w-4 h-4 mr-2" />
                          Accept Request
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleAskQuestions(request.id)}
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Ask Questions
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleDeclineRequest(request.id)}
                        >
                          <ThumbsDown className="w-4 h-4 mr-2" />
                          Decline
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Accepted Requests */}
          <TabsContent value="accepted" className="space-y-6">
            {acceptedRequests.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    No accepted requests
                  </h3>
                  <p className="text-muted-foreground">
                    Requests you accept will appear here for tracking
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {acceptedRequests.map((request) => (
                  <Card
                    key={request.id}
                    className="border-l-4 border-l-green-500/20"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {request.title}
                          </h3>
                          <p className="text-muted-foreground">
                            Helping {request.requester}
                          </p>
                        </div>
                        <Badge
                          variant={
                            request.status === "completed"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {request.status.replace("_", " ")}
                        </Badge>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">
                            Accepted:
                          </span>
                          <p className="font-medium">{request.acceptedAt}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            {request.status === "completed"
                              ? "Completed:"
                              : "Est. Completion:"}
                          </span>
                          <p className="font-medium">
                            {request.completedAt || request.estimatedCompletion}
                          </p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            Total Amount:
                          </span>
                          <p className="font-medium text-green-600">
                            {request.totalAmount}
                          </p>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        {request.status === "in_progress" ? (
                          <>
                            <Button>Mark as Completed</Button>
                            <Button variant="outline">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Message Requester
                            </Button>
                          </>
                        ) : (
                          <Button variant="outline">View Receipt</Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Request Details Dialog */}
        <Dialog
          open={!!selectedRequest}
          onOpenChange={() => setSelectedRequest(null)}
        >
          <DialogContent className="max-w-2xl">
            {selectedRequest && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedRequest.title}</DialogTitle>
                  <DialogDescription>
                    Full request details from {selectedRequest.requester.name}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={selectedRequest.requester.avatar} />
                      <AvatarFallback>
                        {selectedRequest.requester.name
                          .split(" ")
                          .map((n: any) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {selectedRequest.requester.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{selectedRequest.requester.distance} away</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-primary text-primary" />
                          <span>{selectedRequest.requester.rating} rating</span>
                        </div>
                        <span>
                          Member since {selectedRequest.requester.joinDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Request Description</h4>
                    <p className="text-muted-foreground">
                      {selectedRequest.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Shopping List</h4>
                    <div className="space-y-2">
                      {selectedRequest.items.map((item: any, index: number) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-2 bg-secondary/20 rounded"
                        >
                          <span>
                            {item.name} - {item.quantity}
                          </span>
                          <span className="font-medium">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Request Details</h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="text-muted-foreground">Budget:</span>{" "}
                          {selectedRequest.budget}
                        </p>
                        <p>
                          <span className="text-muted-foreground">
                            Location:
                          </span>{" "}
                          {selectedRequest.location}
                        </p>
                        <p>
                          <span className="text-muted-foreground">
                            Preferred Time:
                          </span>{" "}
                          {selectedRequest.preferredTime}
                        </p>
                        <p>
                          <span className="text-muted-foreground">
                            Payment:
                          </span>{" "}
                          {selectedRequest.paymentMethod}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Category & Urgency</h4>
                      <div className="space-y-2">
                        <Badge variant="outline">
                          {selectedRequest.category}
                        </Badge>
                        {getUrgencyBadge(selectedRequest.urgency)}
                      </div>
                    </div>
                  </div>

                  {selectedRequest.notes && (
                    <div>
                      <h4 className="font-medium mb-2">Special Notes</h4>
                      <p className="text-sm text-muted-foreground p-3 bg-secondary/20 rounded">
                        {selectedRequest.notes}
                      </p>
                    </div>
                  )}

                  <div className="flex space-x-3">
                    <Button
                      className="flex-1"
                      onClick={() => {
                        handleAcceptRequest(selectedRequest.id);
                        setSelectedRequest(null);
                      }}
                    >
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Accept This Request
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleAskQuestions(selectedRequest.id)}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Ask Questions
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
