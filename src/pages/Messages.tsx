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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  Search,
  MoreVertical,
  Phone,
  VideoIcon,
  Paperclip,
  Smile,
  Star,
  MapPin,
  Clock,
  ShoppingCart,
  Check,
  CheckCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState<string | null>("mike-chen");
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const chats = [
    {
      id: "mike-chen",
      name: "Mike Chen",
      lastMessage: "I'll pick up those items for you this afternoon!",
      time: "2:30 PM",
      unread: 2,
      avatar: "/api/placeholder/40/40",
      status: "online",
      typing: false,
      context: "Grocery Request #123",
    },
    {
      id: "eleanor-roberts",
      name: "Eleanor Roberts",
      lastMessage: "Thank you so much for helping with the pharmacy trip",
      time: "11:15 AM",
      unread: 0,
      avatar: "/api/placeholder/40/40",
      status: "online",
      typing: false,
      context: "Pharmacy Request #456",
    },
    {
      id: "sarah-johnson",
      name: "Sarah Johnson",
      lastMessage: "Are you free for a Costco run this weekend?",
      time: "Yesterday",
      unread: 1,
      avatar: "/api/placeholder/40/40",
      status: "away",
      typing: false,
      context: null,
    },
    {
      id: "david-park",
      name: "David Park",
      lastMessage: "Perfect! I'll wait for you at the entrance",
      time: "Yesterday",
      unread: 0,
      avatar: "/api/placeholder/40/40",
      status: "offline",
      typing: false,
      context: "Pet Store Request #789",
    },
    {
      id: "jennifer-liu",
      name: "Jennifer Liu",
      lastMessage: "Hi! I'm new to the neighborhood",
      time: "2 days ago",
      unread: 0,
      avatar: "/api/placeholder/40/40",
      status: "online",
      typing: true,
      context: null,
    },
  ];

  const messages = {
    "mike-chen": [
      {
        id: 1,
        sender: "Mike Chen",
        content:
          "Hi! I saw your grocery request. I'm heading to Whole Foods later today.",
        time: "2:15 PM",
        isOwn: false,
        status: "delivered",
        type: "text",
      },
      {
        id: 2,
        sender: "You",
        content:
          "That would be amazing! I need some organic vegetables and pasta.",
        time: "2:20 PM",
        isOwn: true,
        status: "read",
        type: "text",
      },
      {
        id: 3,
        sender: "Mike Chen",
        content: "I'll pick up those items for you this afternoon!",
        time: "2:30 PM",
        isOwn: false,
        status: "delivered",
        type: "text",
      },
      {
        id: 4,
        sender: "You",
        content: "Perfect! Here's my shopping list:",
        time: "2:32 PM",
        isOwn: true,
        status: "delivered",
        type: "text",
      },
      {
        id: 5,
        sender: "You",
        content:
          "- Organic spinach (1 bag)\n- Whole wheat pasta (2 boxes)\n- Almond milk (1 carton)\n- Greek yogurt (large container)",
        time: "2:33 PM",
        isOwn: true,
        status: "read",
        type: "list",
      },
    ],
    "eleanor-roberts": [
      {
        id: 1,
        sender: "Eleanor Roberts",
        content: "Hello dear! I need help with my prescription pickup.",
        time: "10:45 AM",
        isOwn: false,
        status: "delivered",
        type: "text",
      },
      {
        id: 2,
        sender: "You",
        content: "Of course! I'd be happy to help. Which pharmacy?",
        time: "10:50 AM",
        isOwn: true,
        status: "read",
        type: "text",
      },
      {
        id: 3,
        sender: "Eleanor Roberts",
        content: "CVS on Oak Street. The prescription should be ready.",
        time: "11:00 AM",
        isOwn: false,
        status: "delivered",
        type: "text",
      },
      {
        id: 4,
        sender: "You",
        content: "Got it! I'll head there around noon. Do you need your ID?",
        time: "11:05 AM",
        isOwn: true,
        status: "read",
        type: "text",
      },
      {
        id: 5,
        sender: "Eleanor Roberts",
        content: "Thank you so much for helping with the pharmacy trip",
        time: "11:15 AM",
        isOwn: false,
        status: "delivered",
        type: "text",
      },
    ],
    "sarah-johnson": [
      {
        id: 1,
        sender: "Sarah Johnson",
        content: "Hi! I'm planning a big Costco run this weekend.",
        time: "Yesterday 3:00 PM",
        isOwn: false,
        status: "delivered",
        type: "text",
      },
      {
        id: 2,
        sender: "Sarah Johnson",
        content: "Are you free for a Costco run this weekend?",
        time: "Yesterday 3:01 PM",
        isOwn: false,
        status: "delivered",
        type: "text",
      },
    ],
  };

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const selectedChatData = chats.find((chat) => chat.id === selectedChat);
  const chatMessages = selectedChat ? messages[selectedChat] || [] : [];

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      const newMsg = {
        id: chatMessages.length + 1,
        sender: "You",
        content: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isOwn: true,
        status: "sent",
        type: "text",
      };

      // Add message to messages object
      if (messages[selectedChat]) {
        messages[selectedChat].push(newMsg);
      } else {
        messages[selectedChat] = [newMsg];
      }

      setNewMessage("");
      console.log("Sending message:", newMessage, "to:", selectedChat);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getMessageStatus = (status: string) => {
    switch (status) {
      case "sent":
        return <Check className="w-3 h-3 text-gray-400" />;
      case "delivered":
        return <CheckCheck className="w-3 h-3 text-gray-400" />;
      case "read":
        return <CheckCheck className="w-3 h-3 text-blue-500" />;
      default:
        return null;
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
            <Badge variant="outline">Messages</Badge>
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Messages</h1>
          <p className="text-muted-foreground">
            Chat with your neighbors to coordinate shopping trips and build
            connections.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 h-[700px]">
          {/* Chat List */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Conversations</CardTitle>
              <CardDescription>Your neighbor chats</CardDescription>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[580px]">
                {filteredChats.map((chat) => (
                  <div
                    key={chat.id}
                    className={`p-4 border-b cursor-pointer hover:bg-secondary/50 transition-colors ${
                      selectedChat === chat.id ? "bg-secondary" : ""
                    }`}
                    onClick={() => setSelectedChat(chat.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={chat.avatar} />
                          <AvatarFallback>
                            {chat.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                            chat.status === "online"
                              ? "bg-green-500"
                              : chat.status === "away"
                                ? "bg-yellow-500"
                                : "bg-gray-400"
                          }`}
                        ></div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-sm">{chat.name}</h3>
                          <span className="text-xs text-muted-foreground">
                            {chat.time}
                          </span>
                        </div>
                        {chat.context && (
                          <div className="text-xs text-primary mb-1">
                            {chat.context}
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <p
                            className={`text-xs truncate ${
                              chat.typing
                                ? "text-primary italic"
                                : "text-muted-foreground"
                            }`}
                          >
                            {chat.typing ? "Typing..." : chat.lastMessage}
                          </p>
                          {chat.unread > 0 && (
                            <Badge className="w-5 h-5 text-xs flex items-center justify-center">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-8">
            {selectedChat && selectedChatData ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={selectedChatData.avatar} />
                          <AvatarFallback>
                            {selectedChatData.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                            selectedChatData.status === "online"
                              ? "bg-green-500"
                              : selectedChatData.status === "away"
                                ? "bg-yellow-500"
                                : "bg-gray-400"
                          }`}
                        ></div>
                      </div>
                      <div>
                        <h3 className="font-medium">{selectedChatData.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {selectedChatData.typing
                            ? "Typing..."
                            : selectedChatData.status === "online"
                              ? "Online"
                              : selectedChatData.status === "away"
                                ? "Away"
                                : "Offline"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <VideoIcon className="w-4 h-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Clear Chat</DropdownMenuItem>
                          <DropdownMenuItem>Block User</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Report User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  {selectedChatData.context && (
                    <div className="flex items-center space-x-2 text-sm">
                      <ShoppingCart className="w-4 h-4 text-primary" />
                      <span className="text-primary font-medium">
                        {selectedChatData.context}
                      </span>
                    </div>
                  )}
                </CardHeader>

                {/* Messages */}
                <CardContent className="p-0">
                  <ScrollArea className="h-[450px] p-4">
                    <div className="space-y-4">
                      {chatMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.isOwn ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[75%] p-3 rounded-lg relative ${
                              message.isOwn
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary"
                            }`}
                          >
                            {message.type === "list" ? (
                              <div>
                                <pre className="text-sm whitespace-pre-wrap font-sans">
                                  {message.content}
                                </pre>
                              </div>
                            ) : (
                              <p className="text-sm">{message.content}</p>
                            )}
                            <div
                              className={`flex items-center justify-end space-x-1 mt-1 ${
                                message.isOwn
                                  ? "text-primary-foreground/70"
                                  : "text-muted-foreground"
                              }`}
                            >
                              <span className="text-xs">{message.time}</span>
                              {message.isOwn &&
                                getMessageStatus(message.status)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  {/* Message Input */}
                  <div className="border-t p-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <div className="flex-1 relative">
                        <Input
                          placeholder="Type your message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                          className="pr-10"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1/2 transform -translate-y-1/2"
                        >
                          <Smile className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-center">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-medium">Select a conversation</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose a neighbor to start chatting
                  </p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common messaging features and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex-col">
                <Users className="w-6 h-6 mb-2" />
                <span className="font-medium">Start Group Chat</span>
                <span className="text-xs text-muted-foreground">
                  Coordinate with multiple neighbors
                </span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col">
                <MessageSquare className="w-6 h-6 mb-2" />
                <span className="font-medium">Message Templates</span>
                <span className="text-xs text-muted-foreground">
                  Quick message shortcuts
                </span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col">
                <ShoppingCart className="w-6 h-6 mb-2" />
                <span className="font-medium">Share Shopping List</span>
                <span className="text-xs text-muted-foreground">
                  Send formatted lists
                </span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col">
                <Star className="w-6 h-6 mb-2" />
                <span className="font-medium">Leave Review</span>
                <span className="text-xs text-muted-foreground">
                  Rate your experience
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
