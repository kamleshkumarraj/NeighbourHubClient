import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  Users,
  ArrowLeft,
  X,
  Check,
  MoreVertical,
  MessageSquare,
  ShoppingCart,
  UserPlus,
  Star,
  AlertCircle,
  CheckCircle,
  Clock,
  Filter,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "request_accepted",
      title: "Request Accepted",
      message: "Mike Chen accepted your grocery shopping request",
      time: "2 hours ago",
      unread: true,
      avatar: "/api/placeholder/40/40",
      sender: "Mike Chen",
      actionRequired: false,
      relatedId: "request_123",
    },
    {
      id: 2,
      type: "new_message",
      title: "New Message",
      message: "Eleanor Roberts sent you a message about the pharmacy trip",
      time: "4 hours ago",
      unread: true,
      avatar: "/api/placeholder/40/40",
      sender: "Eleanor Roberts",
      actionRequired: true,
      relatedId: "chat_456",
    },
    {
      id: 3,
      type: "request_completed",
      title: "Request Completed",
      message: "Your shopping request has been completed successfully",
      time: "1 day ago",
      unread: false,
      avatar: "/api/placeholder/40/40",
      sender: "Sarah Johnson",
      actionRequired: true,
      relatedId: "request_789",
    },
    {
      id: 4,
      type: "new_neighbor",
      title: "New Neighbor",
      message: "Alex Johnson joined your neighborhood",
      time: "2 days ago",
      unread: false,
      avatar: "/api/placeholder/40/40",
      sender: "Alex Johnson",
      actionRequired: false,
      relatedId: "user_101",
    },
    {
      id: 5,
      type: "review_received",
      title: "New Review",
      message: "David Park left you a 5-star review",
      time: "3 days ago",
      unread: false,
      avatar: "/api/placeholder/40/40",
      sender: "David Park",
      actionRequired: false,
      relatedId: "review_202",
    },
    {
      id: 6,
      type: "request_reminder",
      title: "Request Reminder",
      message: "Your pharmacy request is still pending - bump it up?",
      time: "1 week ago",
      unread: false,
      avatar: null,
      sender: "NeighbourHub",
      actionRequired: true,
      relatedId: "request_303",
    },
    {
      id: 7,
      type: "friend_request",
      title: "Friend Request",
      message: "Jennifer Liu sent you a friend request",
      time: "1 week ago",
      unread: false,
      avatar: "/api/placeholder/40/40",
      sender: "Jennifer Liu",
      actionRequired: true,
      relatedId: "friend_404",
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, unread: false } : notif,
      ),
    );
  };

  const markAsUnread = (id: number) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, unread: true } : notif,
      ),
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notif) => ({ ...notif, unread: false })),
    );
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "request_accepted":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "request_completed":
        return <ShoppingCart className="w-5 h-5 text-blue-500" />;
      case "new_message":
        return <MessageSquare className="w-5 h-5 text-primary" />;
      case "new_neighbor":
        return <UserPlus className="w-5 h-5 text-purple-500" />;
      case "review_received":
        return <Star className="w-5 h-5 text-yellow-500" />;
      case "request_reminder":
        return <Clock className="w-5 h-5 text-orange-500" />;
      case "friend_request":
        return <Users className="w-5 h-5 text-pink-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getActionButton = (notification: any) => {
    if (!notification.actionRequired) return null;

    switch (notification.type) {
      case "new_message":
        return (
          <Button size="sm" variant="outline">
            Reply
          </Button>
        );
      case "request_completed":
        return (
          <Button size="sm" variant="outline">
            Rate & Review
          </Button>
        );
      case "request_reminder":
        return (
          <Button size="sm" variant="outline">
            Bump Request
          </Button>
        );
      case "friend_request":
        return (
          <div className="flex space-x-2">
            <Button size="sm">Accept</Button>
            <Button size="sm" variant="outline">
              Decline
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  const unreadCount = notifications.filter((n) => n.unread).length;
  const unreadNotifications = notifications.filter((n) => n.unread);
  const readNotifications = notifications.filter((n) => !n.unread);
  const actionRequiredNotifications = notifications.filter(
    (n) => n.actionRequired,
  );

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
                <Bell className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                NeighbourHub
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">
              Notifications
              {unreadCount > 0 && (
                <span className="ml-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {unreadCount}
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Notifications
              </h1>
              <p className="text-muted-foreground">
                Stay updated with your community activity and messages.
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={markAllAsRead}>
                <Check className="w-4 h-4 mr-2" />
                Mark All Read
              </Button>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">{unreadCount}</p>
                  <p className="text-sm text-muted-foreground">
                    Unread Notifications
                  </p>
                </div>
                <Bell className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">
                    {actionRequiredNotifications.length}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Need Your Action
                  </p>
                </div>
                <AlertCircle className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">{notifications.length}</p>
                  <p className="text-sm text-muted-foreground">
                    Total Notifications
                  </p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
            <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
            <TabsTrigger value="action">
              Action Required ({actionRequiredNotifications.length})
            </TabsTrigger>
            <TabsTrigger value="read">
              Read ({readNotifications.length})
            </TabsTrigger>
          </TabsList>

          {/* All Notifications */}
          <TabsContent value="all" className="space-y-4">
            {notifications.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    No notifications yet
                  </h3>
                  <p className="text-muted-foreground">
                    You'll see community updates and messages here
                  </p>
                </CardContent>
              </Card>
            ) : (
              notifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`transition-all hover:shadow-md ${
                    notification.unread
                      ? "border-primary/20 bg-primary/5"
                      : "border-border"
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {notification.avatar ? (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={notification.avatar} />
                            <AvatarFallback>
                              {notification.sender
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <Bell className="w-5 h-5 text-primary-foreground" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              {getNotificationIcon(notification.type)}
                              <h3 className="font-medium text-sm">
                                {notification.title}
                              </h3>
                              {notification.unread && (
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {notification.time}
                            </p>
                          </div>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {notification.unread ? (
                                <DropdownMenuItem
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="w-4 h-4 mr-2" />
                                  Mark as Read
                                </DropdownMenuItem>
                              ) : (
                                <DropdownMenuItem
                                  onClick={() => markAsUnread(notification.id)}
                                >
                                  <Mail className="w-4 h-4 mr-2" />
                                  Mark as Unread
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem
                                onClick={() =>
                                  deleteNotification(notification.id)
                                }
                                className="text-destructive"
                              >
                                <X className="w-4 h-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        {notification.actionRequired && (
                          <div className="mt-3">
                            {getActionButton(notification)}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Unread Notifications */}
          <TabsContent value="unread" className="space-y-4">
            {unreadNotifications.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">All caught up!</h3>
                  <p className="text-muted-foreground">
                    No unread notifications
                  </p>
                </CardContent>
              </Card>
            ) : (
              unreadNotifications.map((notification) => (
                <Card
                  key={notification.id}
                  className="border-primary/20 bg-primary/5 transition-all hover:shadow-md"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {notification.avatar ? (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={notification.avatar} />
                            <AvatarFallback>
                              {notification.sender
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <Bell className="w-5 h-5 text-primary-foreground" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              {getNotificationIcon(notification.type)}
                              <h3 className="font-medium text-sm">
                                {notification.title}
                              </h3>
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {notification.time}
                            </p>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                        </div>

                        {notification.actionRequired && (
                          <div className="mt-3">
                            {getActionButton(notification)}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Action Required */}
          <TabsContent value="action" className="space-y-4">
            {actionRequiredNotifications.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Nothing to do!</h3>
                  <p className="text-muted-foreground">
                    No notifications require your action
                  </p>
                </CardContent>
              </Card>
            ) : (
              actionRequiredNotifications.map((notification) => (
                <Card
                  key={notification.id}
                  className="border-orange-200 bg-orange-50 transition-all hover:shadow-md"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={notification.avatar} />
                          <AvatarFallback>
                            {notification.sender
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          {getNotificationIcon(notification.type)}
                          <h3 className="font-medium text-sm">
                            {notification.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            Action Required
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground mb-3">
                          {notification.time}
                        </p>
                        {getActionButton(notification)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Read Notifications */}
          <TabsContent value="read" className="space-y-4">
            {readNotifications.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    No read notifications
                  </h3>
                  <p className="text-muted-foreground">
                    Read notifications will appear here
                  </p>
                </CardContent>
              </Card>
            ) : (
              readNotifications.map((notification) => (
                <Card
                  key={notification.id}
                  className="opacity-75 hover:opacity-100 transition-all hover:shadow-md"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {notification.avatar ? (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={notification.avatar} />
                            <AvatarFallback>
                              {notification.sender
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                            <Bell className="w-5 h-5 text-muted-foreground" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              {getNotificationIcon(notification.type)}
                              <h3 className="font-medium text-sm">
                                {notification.title}
                              </h3>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {notification.time}
                            </p>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsUnread(notification.id)}
                          >
                            <Mail className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
