import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  BarChart3,
  Shield,
  Settings,
  MessageSquare,
  ShoppingCart,
  TrendingUp,
  AlertTriangle,
  MapPin,
  Calendar,
  DollarSign,
  Activity,
  Clock,
  UserCheck,
  UserX,
  Search,
  Filter,
  Download,
  Eye,
  Ban,
  CheckCircle,
  XCircle,
  MoreHorizontal,
  Star,
  Flag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AdminDashboard() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for analytics
  const analyticsData = {
    totalUsers: 1247,
    activeUsers: 892,
    totalRequests: 3456,
    completedRequests: 3287,
    totalMessages: 12543,
    averageResponseTime: "2.3 hours",
    successRate: 94.2,
    communityGrowth: 18.5,
  };

  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      joinDate: "2024-03-15",
      status: "active",
      requestsCompleted: 18,
      rating: 4.9,
      location: "Downtown",
      lastActive: "2 hours ago",
      reports: 0,
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      joinDate: "2024-02-20",
      status: "active",
      requestsCompleted: 23,
      rating: 4.8,
      location: "Westside",
      lastActive: "1 hour ago",
      reports: 0,
    },
    {
      id: 3,
      name: "Eleanor Roberts",
      email: "eleanor.roberts@email.com",
      joinDate: "2024-01-10",
      status: "active",
      requestsCompleted: 45,
      rating: 5.0,
      location: "Downtown",
      lastActive: "30 minutes ago",
      reports: 0,
    },
    {
      id: 4,
      name: "John Smith",
      email: "john.smith@email.com",
      joinDate: "2024-04-01",
      status: "suspended",
      requestsCompleted: 3,
      rating: 2.1,
      location: "Eastside",
      lastActive: "3 days ago",
      reports: 5,
    },
  ];

  const requests = [
    {
      id: 1,
      title: "Grocery Shopping - Whole Foods",
      requester: "Sarah Johnson",
      helper: "Mike Chen",
      status: "completed",
      createdAt: "2024-01-15",
      completedAt: "2024-01-15",
      items: 4,
      amount: "$45.67",
    },
    {
      id: 2,
      title: "Pharmacy Run",
      requester: "Eleanor Roberts",
      helper: null,
      status: "pending",
      createdAt: "2024-01-16",
      completedAt: null,
      items: 2,
      amount: "$23.50",
    },
    {
      id: 3,
      title: "Hardware Store Items",
      requester: "David Park",
      helper: "Sarah Johnson",
      status: "in_progress",
      createdAt: "2024-01-16",
      completedAt: null,
      items: 3,
      amount: "$18.99",
    },
  ];

  const reports = [
    {
      id: 1,
      reporter: "Jennifer Liu",
      reported: "John Smith",
      reason: "Inappropriate behavior",
      description: "User was rude and unprofessional during message exchange",
      status: "pending",
      createdAt: "2024-01-16",
      severity: "medium",
    },
    {
      id: 2,
      reporter: "Mike Chen",
      reported: "John Smith",
      reason: "No-show",
      description: "User accepted request but never showed up or communicated",
      status: "resolved",
      createdAt: "2024-01-15",
      severity: "high",
    },
  ];

  const communityStats = [
    { neighborhood: "Downtown", users: 342, requests: 128, completion: 96.2 },
    { neighborhood: "Westside", users: 298, requests: 95, completion: 94.1 },
    { neighborhood: "Eastside", users: 275, requests: 87, completion: 91.8 },
    { neighborhood: "Northside", users: 186, requests: 62, completion: 89.3 },
    { neighborhood: "Southside", users: 146, requests: 45, completion: 93.3 },
  ];

  const handleUserAction = (userId: number, action: string) => {
    console.log(`Action ${action} performed on user ${userId}`);
  };

  const handleReportAction = (reportId: number, action: string) => {
    console.log(`Report ${reportId} ${action}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              NeighbourHub Admin
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">Admin Panel</Badge>
            <Link to="/">
              <Button variant="outline" size="sm">
                Back to Site
              </Button>
            </Link>
            <Button variant="ghost" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage and monitor the NeighbourHub community platform.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Analytics</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="communities">Communities</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Analytics Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Users
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {analyticsData.totalUsers}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">
                      +{analyticsData.communityGrowth}%
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Users
                  </CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {analyticsData.activeUsers}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {(
                      (analyticsData.activeUsers / analyticsData.totalUsers) *
                      100
                    ).toFixed(1)}
                    % activity rate
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Requests
                  </CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {analyticsData.totalRequests}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {analyticsData.completedRequests} completed
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Success Rate
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {analyticsData.successRate}%
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Avg response: {analyticsData.averageResponseTime}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts and Analytics */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest platform activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">Sarah Johnson</span>{" "}
                            completed shopping request
                          </p>
                          <p className="text-xs text-muted-foreground">
                            5 minutes ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm">
                            New user{" "}
                            <span className="font-medium">Alex Johnson</span>{" "}
                            joined Downtown
                          </p>
                          <p className="text-xs text-muted-foreground">
                            12 minutes ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">Mike Chen</span>{" "}
                            accepted grocery request
                          </p>
                          <p className="text-xs text-muted-foreground">
                            1 hour ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm">
                            Report filed against{" "}
                            <span className="font-medium">John Smith</span>
                          </p>
                          <p className="text-xs text-muted-foreground">
                            2 hours ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Performance</CardTitle>
                  <CardDescription>
                    Neighborhood statistics overview
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {communityStats.map((stat, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <h4 className="font-medium text-sm">
                            {stat.neighborhood}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {stat.users} users • {stat.requests} requests
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">
                            {stat.completion}%
                          </div>
                          <div className="w-16 h-2 bg-secondary rounded-full">
                            <div
                              className="h-2 bg-primary rounded-full"
                              style={{ width: `${stat.completion}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Health */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Alerts</CardTitle>
                  <CardDescription>Issues requiring attention</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    <div className="flex-1">
                      <p className="text-sm">High report volume in Eastside</p>
                      <p className="text-xs text-muted-foreground">
                        5 reports this week
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    <div className="flex-1">
                      <p className="text-sm">User John Smith flagged</p>
                      <p className="text-xs text-muted-foreground">
                        Multiple reports received
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export User Data
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    size="sm"
                  >
                    <Flag className="w-4 h-4 mr-2" />
                    Review Reports
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    size="sm"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    System Settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Growth Metrics</CardTitle>
                  <CardDescription>Platform growth indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">New Users (30d)</span>
                    <span className="text-sm font-medium">+180</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Retention Rate</span>
                    <span className="text-sm font-medium">87.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Avg. Session Time</span>
                    <span className="text-sm font-medium">12m 34s</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Management Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>
                      Manage user accounts and permissions
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search users..."
                        className="pl-8 w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Requests</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Reports</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/api/placeholder/32/32`} />
                              <AvatarFallback>
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">{user.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3 text-muted-foreground" />
                            <span className="text-sm">{user.location}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.status === "active"
                                ? "default"
                                : "destructive"
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.requestsCompleted}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 fill-primary text-primary" />
                            <span className="text-sm">{user.rating}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.reports > 0 ? "destructive" : "outline"
                            }
                          >
                            {user.reports}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {user.lastActive}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() =>
                                  handleUserAction(user.id, "view")
                                }
                              >
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleUserAction(user.id, "message")
                                }
                              >
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Send Message
                              </DropdownMenuItem>
                              {user.status === "active" ? (
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleUserAction(user.id, "suspend")
                                  }
                                  className="text-destructive"
                                >
                                  <Ban className="w-4 h-4 mr-2" />
                                  Suspend User
                                </DropdownMenuItem>
                              ) : (
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleUserAction(user.id, "activate")
                                  }
                                >
                                  <UserCheck className="w-4 h-4 mr-2" />
                                  Activate User
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Requests Management Tab */}
          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Request Management</CardTitle>
                <CardDescription>
                  Monitor and manage shopping requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Request</TableHead>
                      <TableHead>Requester</TableHead>
                      <TableHead>Helper</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>
                          <p className="font-medium text-sm">{request.title}</p>
                        </TableCell>
                        <TableCell>{request.requester}</TableCell>
                        <TableCell>{request.helper || "Unassigned"}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              request.status === "completed"
                                ? "default"
                                : request.status === "in_progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {request.status.replace("_", " ")}
                          </Badge>
                        </TableCell>
                        <TableCell>{request.items}</TableCell>
                        <TableCell>{request.amount}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {request.createdAt}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Management Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Moderation</CardTitle>
                <CardDescription>
                  Review flagged content and user reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.map((report) => (
                    <Card
                      key={report.id}
                      className="border-l-4 border-l-orange-500/20"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-medium">{report.reason}</h3>
                              <Badge
                                variant={
                                  report.severity === "high"
                                    ? "destructive"
                                    : report.severity === "medium"
                                      ? "default"
                                      : "outline"
                                }
                              >
                                {report.severity}
                              </Badge>
                              <Badge
                                variant={
                                  report.status === "resolved"
                                    ? "default"
                                    : "outline"
                                }
                              >
                                {report.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              <span className="font-medium">
                                {report.reporter}
                              </span>{" "}
                              reported{" "}
                              <span className="font-medium">
                                {report.reported}
                              </span>
                            </p>
                            <p className="text-sm">{report.description}</p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {report.createdAt}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                handleReportAction(report.id, "resolve")
                              }
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Resolve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                handleReportAction(report.id, "dismiss")
                              }
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              Dismiss
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Communities Tab */}
          <TabsContent value="communities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Community Management</CardTitle>
                <CardDescription>
                  Monitor neighborhood performance and growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {communityStats.map((community, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-2">
                          {community.neighborhood}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Users:</span>
                            <span className="font-medium">
                              {community.users}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Requests:</span>
                            <span className="font-medium">
                              {community.requests}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Completion:</span>
                            <span className="font-medium">
                              {community.completion}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-secondary rounded-full mt-2">
                            <div
                              className="h-2 bg-primary rounded-full"
                              style={{ width: `${community.completion}%` }}
                            ></div>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-3"
                        >
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>
                  Configure platform behavior and features
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="platform-name">Platform Name</Label>
                    <Input id="platform-name" defaultValue="NeighbourHub" />
                  </div>
                  <div>
                    <Label htmlFor="max-distance">
                      Maximum Neighbor Distance (meters)
                    </Label>
                    <Input id="max-distance" type="number" defaultValue="800" />
                  </div>
                  <div>
                    <Label htmlFor="request-timeout">
                      Request Timeout (hours)
                    </Label>
                    <Input
                      id="request-timeout"
                      type="number"
                      defaultValue="24"
                    />
                  </div>
                  <div>
                    <Label htmlFor="max-reports">
                      Auto-suspend threshold (reports)
                    </Label>
                    <Input id="max-reports" type="number" defaultValue="5" />
                  </div>
                </div>
                <Button>Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
