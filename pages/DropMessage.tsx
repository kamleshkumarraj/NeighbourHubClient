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
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
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
  MessageSquare,
  Users,
  ArrowLeft,
  Send,
  Plus,
  MapPin,
  Clock,
  ShoppingCart,
  Megaphone,
  Target,
  Edit,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DropMessage() {
  const [messageType, setMessageType] = useState("trip_offer");
  const [messageData, setMessageData] = useState({
    title: "",
    description: "",
    destination: "",
    departureTime: "",
    returnTime: "",
    maxHelp: "3",
    categories: [] as string[],
    urgency: "normal",
    paymentMethod: "cash",
  });

  const [myMessages] = useState([
    {
      id: 1,
      type: "trip_offer",
      title: "Going to Costco this Saturday",
      description:
        "Planning a bulk shopping trip to Costco. Can help neighbors with groceries and household items.",
      destination: "Costco Wholesale",
      departureTime: "2024-01-20T10:00",
      responses: 3,
      status: "active",
      createdAt: "2 hours ago",
    },
    {
      id: 2,
      type: "community_announcement",
      title: "Neighborhood BBQ Planning",
      description:
        "Hey neighbors! Thinking of organizing a community BBQ next weekend. Who's interested?",
      responses: 8,
      status: "active",
      createdAt: "1 day ago",
    },
    {
      id: 3,
      type: "help_request",
      title: "Looking for carpool to airport",
      description:
        "Need a ride to the airport early morning on Tuesday. Happy to pay for gas!",
      responses: 2,
      status: "completed",
      createdAt: "3 days ago",
    },
  ]);

  const messageTypes = [
    {
      value: "trip_offer",
      label: "Shopping Trip Offer",
      description: "Offer to help neighbors with shopping",
      icon: <ShoppingCart className="w-5 h-5" />,
    },
    {
      value: "community_announcement",
      label: "Community Announcement",
      description: "Share news or organize events",
      icon: <Megaphone className="w-5 h-5" />,
    },
    {
      value: "help_request",
      label: "General Help Request",
      description: "Ask for general assistance",
      icon: <Users className="w-5 h-5" />,
    },
    {
      value: "recommendation",
      label: "Recommendation/Tip",
      description: "Share local recommendations",
      icon: <Target className="w-5 h-5" />,
    },
  ];

  const categories = [
    "Groceries",
    "Pharmacy",
    "Electronics",
    "Hardware Store",
    "Pet Supplies",
    "Clothing",
    "Books & Stationery",
    "Household Items",
    "Health & Beauty",
    "Automotive",
  ];

  const handleInputChange = (field: string, value: string) => {
    setMessageData({ ...messageData, [field]: value });
  };

  const handleCategoryToggle = (category: string) => {
    const updatedCategories = messageData.categories.includes(category)
      ? messageData.categories.filter((c) => c !== category)
      : [...messageData.categories, category];
    setMessageData({ ...messageData, categories: updatedCategories });
  };

  const handleSubmit = () => {
    const messagePayload = {
      ...messageData,
      type: messageType,
      createdAt: new Date().toISOString(),
    };
    console.log("Dropping message:", messagePayload);
    // Handle message creation
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>;
      case "completed":
        return <Badge variant="outline">Completed</Badge>;
      case "expired":
        return <Badge variant="destructive">Expired</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
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
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                NeighbourHub
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">Drop Message</Badge>
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
            Community Messages
          </h1>
          <p className="text-muted-foreground">
            Share updates, offer help, or coordinate activities with your
            neighbors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Message Creation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Drop a Message</span>
                </CardTitle>
                <CardDescription>
                  Share information or coordinate activities with your
                  neighborhood
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Message Type Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    What type of message? *
                  </Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {messageTypes.map((type) => (
                      <Card
                        key={type.value}
                        className={`cursor-pointer transition-all ${
                          messageType === type.value
                            ? "border-primary bg-primary/5"
                            : "hover:border-primary/50"
                        }`}
                        onClick={() => setMessageType(type.value)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div
                              className={`p-2 rounded-lg ${
                                messageType === type.value
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {type.icon}
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">
                                {type.label}
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                {type.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Basic Information */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Message Title *</Label>
                    <Input
                      id="title"
                      placeholder={
                        messageType === "trip_offer"
                          ? "e.g., Going to Costco this Saturday"
                          : messageType === "community_announcement"
                            ? "e.g., Neighborhood BBQ Planning"
                            : "e.g., Looking for help with..."
                      }
                      value={messageData.title}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder={
                        messageType === "trip_offer"
                          ? "Describe your shopping trip and how you can help..."
                          : "Provide details about your message..."
                      }
                      value={messageData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      rows={4}
                    />
                  </div>
                </div>

                {/* Trip-specific fields */}
                {messageType === "trip_offer" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination *</Label>
                      <Input
                        id="destination"
                        placeholder="e.g., Costco Wholesale, Downtown Mall"
                        value={messageData.destination}
                        onChange={(e) =>
                          handleInputChange("destination", e.target.value)
                        }
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="departureTime">Departure Time</Label>
                        <Input
                          id="departureTime"
                          type="datetime-local"
                          value={messageData.departureTime}
                          onChange={(e) =>
                            handleInputChange("departureTime", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="returnTime">Expected Return</Label>
                        <Input
                          id="returnTime"
                          type="datetime-local"
                          value={messageData.returnTime}
                          onChange={(e) =>
                            handleInputChange("returnTime", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="maxHelp">Maximum neighbors to help</Label>
                      <Select
                        value={messageData.maxHelp}
                        onValueChange={(value) =>
                          handleInputChange("maxHelp", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 neighbor</SelectItem>
                          <SelectItem value="2">2 neighbors</SelectItem>
                          <SelectItem value="3">3 neighbors</SelectItem>
                          <SelectItem value="4">4 neighbors</SelectItem>
                          <SelectItem value="5">5+ neighbors</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label>Shopping Categories (select all that apply)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {categories.map((category) => (
                          <div
                            key={category}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={category}
                              checked={messageData.categories.includes(
                                category,
                              )}
                              onCheckedChange={() =>
                                handleCategoryToggle(category)
                              }
                            />
                            <Label htmlFor={category} className="text-sm">
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Community announcement specific fields */}
                {messageType === "community_announcement" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Priority Level</Label>
                      <Select
                        value={messageData.urgency}
                        onValueChange={(value) =>
                          handleInputChange("urgency", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">
                            Low - General info
                          </SelectItem>
                          <SelectItem value="normal">
                            Normal - Community update
                          </SelectItem>
                          <SelectItem value="high">
                            High - Important announcement
                          </SelectItem>
                          <SelectItem value="urgent">
                            Urgent - Safety/Emergency
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                <div className="flex justify-end space-x-3">
                  <Button variant="outline">Save as Draft</Button>
                  <Button onClick={handleSubmit}>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* My Messages Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>My Messages</CardTitle>
                <CardDescription>
                  Your recent community messages and responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myMessages.map((message) => (
                    <Card key={message.id} className="p-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-sm">
                            {message.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {message.createdAt}
                          </p>
                        </div>

                        <p className="text-xs text-muted-foreground">
                          {message.description}
                        </p>

                        <div className="flex items-center justify-between">
                          {getStatusBadge(message.status)}
                          <Badge variant="outline" className="text-xs">
                            {message.responses} responses
                          </Badge>
                        </div>

                        {message.type === "trip_offer" &&
                          message.destination && (
                            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              <span>{message.destination}</span>
                            </div>
                          )}

                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Messages Sent</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Total Responses</span>
                    <span className="font-medium">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Neighbors Helped</span>
                    <span className="font-medium">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Success Rate</span>
                    <span className="font-medium text-green-600">91%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
