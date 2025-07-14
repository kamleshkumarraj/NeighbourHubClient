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
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Users,
  ShoppingCart,
  Plus,
  X,
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Edit,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CreateRequest() {
  const [currentStep, setCurrentStep] = useState(1);
  const [requestData, setRequestData] = useState({
    title: "",
    description: "",
    category: "",
    urgency: "normal",
    budget: "",
    location: "",
    scheduledFor: "",
    notes: "",
    paymentMethod: "",
    allowSubstitutions: true,
    requireReceipt: true,
  });

  const [items, setItems] = useState([
    { id: 1, name: "", quantity: "", notes: "", estimated_price: "" },
  ]);

  const [myRequests] = useState([
    {
      id: 1,
      title: "Grocery Shopping - Whole Foods",
      description: "Need organic vegetables, pasta, and some dairy products",
      items: [
        "Organic spinach",
        "Whole wheat pasta",
        "Almond milk",
        "Greek yogurt",
      ],
      status: "accepted",
      acceptedBy: "Mike Chen",
      createdAt: "2 hours ago",
      urgency: "normal",
      budget: "$50",
    },
    {
      id: 2,
      title: "Pharmacy Run",
      description: "Need to pick up prescription medication",
      items: ["Prescription #12345", "Vitamin D supplements"],
      status: "pending",
      acceptedBy: null,
      createdAt: "1 day ago",
      urgency: "high",
      budget: "$30",
    },
    {
      id: 3,
      title: "Hardware Store Items",
      description: "Small repair items needed for home maintenance",
      items: [
        "Light bulbs (LED 60W)",
        "Picture hanging strips",
        "AA batteries",
      ],
      status: "completed",
      acceptedBy: "Sarah Johnson",
      createdAt: "3 days ago",
      urgency: "low",
      budget: "$25",
    },
  ]);

  const categories = [
    "Groceries",
    "Pharmacy",
    "Electronics",
    "Hardware Store",
    "Pet Supplies",
    "Clothing",
    "Books & Stationery",
    "Other",
  ];

  const urgencyLevels = [
    { value: "low", label: "Low - Within a week", color: "bg-gray-500" },
    {
      value: "normal",
      label: "Normal - Within 2-3 days",
      color: "bg-blue-500",
    },
    {
      value: "high",
      label: "High - Today or tomorrow",
      color: "bg-orange-500",
    },
    { value: "urgent", label: "Urgent - ASAP", color: "bg-red-500" },
  ];

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: "",
      quantity: "",
      notes: "",
      estimated_price: "",
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: number, field: string, value: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setRequestData({ ...requestData, [field]: value });
  };

  const handleSubmit = () => {
    const requestPayload = {
      ...requestData,
      items: items,
      createdAt: new Date().toISOString(),
    };
    console.log("Creating request:", requestPayload);
    // Handle request creation
    setCurrentStep(1);
    // Reset form or redirect
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "accepted":
        return <Badge className="bg-blue-500">In Progress</Badge>;
      case "pending":
        return <Badge variant="outline">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getUrgencyBadge = (urgency: string) => {
    const urgencyConfig = urgencyLevels.find((u) => u.value === urgency);
    return (
      <Badge className={`text-white ${urgencyConfig?.color || "bg-gray-500"}`}>
        {urgency}
      </Badge>
    );
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
                <ShoppingCart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                NeighbourHub
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">Create Request</Badge>
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
            Shopping Requests
          </h1>
          <p className="text-muted-foreground">
            Create new shopping requests or manage your existing ones.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Create Request Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Create New Request</span>
                </CardTitle>
                <CardDescription>
                  Step {currentStep} of 3 - Tell your neighbors what you need
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Progress Indicator */}
                <div className="mb-6">
                  <div className="flex items-center space-x-4">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            currentStep >= step
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {currentStep > step ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            step
                          )}
                        </div>
                        {step < 3 && (
                          <div
                            className={`w-12 h-1 mx-2 ${
                              currentStep > step ? "bg-primary" : "bg-muted"
                            }`}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>Basic Info</span>
                    <span>Items & Details</span>
                    <span>Review & Submit</span>
                  </div>
                </div>

                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Request Title *</Label>
                      <Input
                        id="title"
                        placeholder="e.g., Grocery Shopping - Whole Foods"
                        value={requestData.title}
                        onChange={(e) =>
                          handleInputChange("title", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe what you need help with..."
                        value={requestData.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        rows={3}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category *</Label>
                        <Select
                          value={requestData.category}
                          onValueChange={(value) =>
                            handleInputChange("category", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency Level *</Label>
                        <Select
                          value={requestData.urgency}
                          onValueChange={(value) =>
                            handleInputChange("urgency", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            {urgencyLevels.map((urgency) => (
                              <SelectItem
                                key={urgency.value}
                                value={urgency.value}
                              >
                                {urgency.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Estimated Budget</Label>
                        <Input
                          id="budget"
                          placeholder="e.g., $50"
                          value={requestData.budget}
                          onChange={(e) =>
                            handleInputChange("budget", e.target.value)
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">
                          Preferred Store/Location
                        </Label>
                        <Input
                          id="location"
                          placeholder="e.g., Whole Foods Downtown"
                          value={requestData.location}
                          onChange={(e) =>
                            handleInputChange("location", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Items and Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-medium">
                        Shopping Items *
                      </Label>
                      <p className="text-sm text-muted-foreground mb-4">
                        Add the items you need with quantities and any special
                        notes
                      </p>

                      <div className="space-y-4">
                        {items.map((item, index) => (
                          <Card key={item.id} className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="font-medium">Item {index + 1}</h4>
                              {items.length > 1 && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div>
                                <Label className="text-sm">Item Name</Label>
                                <Input
                                  placeholder="e.g., Organic spinach"
                                  value={item.name}
                                  onChange={(e) =>
                                    updateItem(item.id, "name", e.target.value)
                                  }
                                />
                              </div>
                              <div>
                                <Label className="text-sm">Quantity</Label>
                                <Input
                                  placeholder="e.g., 1 bag, 2 lbs"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    updateItem(
                                      item.id,
                                      "quantity",
                                      e.target.value,
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-3 mt-3">
                              <div>
                                <Label className="text-sm">
                                  Estimated Price
                                </Label>
                                <Input
                                  placeholder="e.g., $5.99"
                                  value={item.estimated_price}
                                  onChange={(e) =>
                                    updateItem(
                                      item.id,
                                      "estimated_price",
                                      e.target.value,
                                    )
                                  }
                                />
                              </div>
                              <div>
                                <Label className="text-sm">Special Notes</Label>
                                <Input
                                  placeholder="Brand preference, etc."
                                  value={item.notes}
                                  onChange={(e) =>
                                    updateItem(item.id, "notes", e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </Card>
                        ))}

                        <Button
                          variant="outline"
                          onClick={addItem}
                          className="w-full"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Another Item
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="scheduledFor">Preferred Timing</Label>
                        <Input
                          id="scheduledFor"
                          type="datetime-local"
                          value={requestData.scheduledFor}
                          onChange={(e) =>
                            handleInputChange("scheduledFor", e.target.value)
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Textarea
                          id="notes"
                          placeholder="Any special instructions or preferences..."
                          value={requestData.notes}
                          onChange={(e) =>
                            handleInputChange("notes", e.target.value)
                          }
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Review and Submit */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Review Your Request
                      </h3>

                      <div className="space-y-4">
                        <div className="p-4 bg-secondary/20 rounded-lg">
                          <h4 className="font-medium mb-2">Request Details</h4>
                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="font-medium">Title:</span>{" "}
                              {requestData.title}
                            </p>
                            <p>
                              <span className="font-medium">Description:</span>{" "}
                              {requestData.description}
                            </p>
                            <p>
                              <span className="font-medium">Category:</span>{" "}
                              {requestData.category}
                            </p>
                            <p>
                              <span className="font-medium">Urgency:</span>{" "}
                              {requestData.urgency}
                            </p>
                            {requestData.budget && (
                              <p>
                                <span className="font-medium">Budget:</span>{" "}
                                {requestData.budget}
                              </p>
                            )}
                            {requestData.location && (
                              <p>
                                <span className="font-medium">Location:</span>{" "}
                                {requestData.location}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="p-4 bg-secondary/20 rounded-lg">
                          <h4 className="font-medium mb-2">Shopping Items</h4>
                          <div className="space-y-2">
                            {items.map((item, index) => (
                              <div
                                key={item.id}
                                className="flex justify-between text-sm"
                              >
                                <span>
                                  {index + 1}. {item.name} ({item.quantity})
                                </span>
                                {item.estimated_price && (
                                  <span className="font-medium">
                                    {item.estimated_price}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="allowSubstitutions"
                            checked={requestData.allowSubstitutions}
                            onCheckedChange={(checked) =>
                              setRequestData({
                                ...requestData,
                                allowSubstitutions: checked as boolean,
                              })
                            }
                          />
                          <Label htmlFor="allowSubstitutions">
                            Allow substitutions if items unavailable
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="requireReceipt"
                            checked={requestData.requireReceipt}
                            onCheckedChange={(checked) =>
                              setRequestData({
                                ...requestData,
                                requireReceipt: checked as boolean,
                              })
                            }
                          />
                          <Label htmlFor="requireReceipt">
                            Require receipt for reimbursement
                          </Label>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <AlertCircle className="w-5 h-5 text-blue-600" />
                          <h4 className="font-medium text-blue-900">
                            Before Submitting
                          </h4>
                        </div>
                        <ul className="mt-2 text-sm text-blue-800 space-y-1">
                          <li>• Make sure all required fields are filled</li>
                          <li>• Double-check item names and quantities</li>
                          <li>
                            • Your request will be visible to nearby neighbors
                          </li>
                          <li>
                            • You'll receive notifications when someone accepts
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  {currentStep < 3 ? (
                    <Button onClick={nextStep}>Next</Button>
                  ) : (
                    <Button onClick={handleSubmit}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Submit Request
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* My Requests Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>My Requests</CardTitle>
                <CardDescription>
                  Track your current and past requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myRequests.map((request) => (
                    <Card key={request.id} className="p-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-sm">
                            {request.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {request.createdAt}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          {getStatusBadge(request.status)}
                          {getUrgencyBadge(request.urgency)}
                        </div>

                        {request.acceptedBy && (
                          <p className="text-xs text-primary">
                            Accepted by {request.acceptedBy}
                          </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
