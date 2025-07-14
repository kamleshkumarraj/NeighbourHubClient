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
import {
  Users,
  Bell,
  MessageSquare,
  ShoppingCart,
  User,
  Plus,
  MapPin,
  Star,
  Settings,
  BarChart3,
  Megaphone,
  ThumbsUp,
  Home,
  ArrowRight,
  Menu,
  X,
  Mail,
  Calendar,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dashboardOptions = [
    {
      title: "Profile Section",
      description:
        "Manage your personal information, community stats, and achievements",
      icon: <User className="w-8 h-8" />,
      link: "/profile",
      color: "from-blue-500 to-cyan-500",
      stats: "4.9 rating • 18 trips",
    },
    {
      title: "Neighbors",
      description:
        "Connect with neighbors in your area and build relationships",
      icon: <Users className="w-8 h-8" />,
      link: "/neighbors",
      color: "from-green-500 to-emerald-500",
      stats: "12 neighbors • 3 online",
    },
    {
      title: "Create Request",
      description: "Ask neighbors for help with shopping and errands",
      icon: <Plus className="w-8 h-8" />,
      link: "/create-request",
      color: "from-purple-500 to-violet-500",
      stats: "5 active requests",
    },
    {
      title: "Notifications",
      description: "Stay updated with community activity and messages",
      icon: <Bell className="w-8 h-8" />,
      link: "/notifications",
      color: "from-orange-500 to-red-500",
      stats: "3 unread notifications",
      badge: "3",
    },
    {
      title: "Drop Message",
      description:
        "Share updates and coordinate activities with your community",
      icon: <Megaphone className="w-8 h-8" />,
      link: "/drop-message",
      color: "from-pink-500 to-rose-500",
      stats: "12 messages sent",
    },
    {
      title: "Accept Requests",
      description:
        "Help neighbors with their shopping needs and earn community points",
      icon: <ThumbsUp className="w-8 h-8" />,
      link: "/accept-requests",
      color: "from-indigo-500 to-blue-500",
      stats: "5 pending requests",
      badge: "5",
    },
    {
      title: "Messages",
      description: "Chat with neighbors to coordinate and build connections",
      icon: <MessageSquare className="w-8 h-8" />,
      link: "/messages",
      color: "from-cyan-500 to-teal-500",
      stats: "2 unread messages",
      badge: "2",
    },
  ];

  const quickStats = [
    {
      label: "Community Rating",
      value: "4.9",
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      color: "from-yellow-400 to-orange-400",
    },
    {
      label: "Trips Completed",
      value: "18",
      icon: <ShoppingCart className="w-5 h-5 text-green-500" />,
      color: "from-green-400 to-emerald-400",
    },
    {
      label: "Neighbors Helped",
      value: "34",
      icon: <Users className="w-5 h-5 text-blue-500" />,
      color: "from-blue-400 to-cyan-400",
    },
    {
      label: "Active Requests",
      value: "5",
      icon: <Plus className="w-5 h-5 text-purple-500" />,
      color: "from-purple-400 to-violet-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="glass-nav sticky top-0 z-50 border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              NeighbourHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/dashboard"
              className="text-purple-400 font-semibold text-lg"
            >
              Dashboard
            </Link>
            <Link
              to="/profile"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Profile
            </Link>
            <Link
              to="/neighbors"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Neighbors
            </Link>
            <Link
              to="/create-request"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Create Request
            </Link>
            <Link
              to="/accept-requests"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Help Others
            </Link>
            <Link
              to="/messages"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Messages
            </Link>
            <Link
              to="/drop-message"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Drop Message
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* User Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/notifications">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
            </Link>
            <Avatar className="h-10 w-10 ring-2 ring-purple-500/50">
              <AvatarImage src="/api/placeholder/40/40" />
              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold">
                SJ
              </AvatarFallback>
            </Avatar>
            <Link to="/">
              <Button
                variant="outline"
                size="sm"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-card mx-4 mt-2 rounded-2xl border border-purple-400/20 shadow-xl">
            <div className="p-4 space-y-3">
              <Link
                to="/dashboard"
                className="block text-purple-400 font-semibold py-2 px-3 rounded-lg hover:bg-purple-500/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="block text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-purple-500/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <Link
                to="/neighbors"
                className="block text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-purple-500/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Neighbors
              </Link>
              <Link
                to="/create-request"
                className="block text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-purple-500/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Create Request
              </Link>
              <Link
                to="/accept-requests"
                className="block text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-purple-500/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Help Others
              </Link>
              <Link
                to="/messages"
                className="block text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-purple-500/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Messages
              </Link>
              <Link
                to="/drop-message"
                className="block text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-purple-500/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Drop Message
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <div className="glass-card p-8 rounded-3xl border border-purple-500/20">
            <div className="flex items-center space-x-6">
              <Avatar className="h-24 w-24 ring-4 ring-purple-400/30">
                <AvatarImage src="/api/placeholder/96/96" />
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-3xl font-bold">
                  SJ
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Welcome back, Sarah!
                  </span>
                </h1>
                <p className="text-slate-300 text-xl">
                  Here's your NeighbourHub dashboard with all available options.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quickStats.map((stat, index) => (
            <Card
              key={index}
              className="glass-card border-purple-400/20 hover:scale-105 hover:border-purple-400/40 transition-all duration-300 group"
            >
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-300 font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                  <div
                    className={`p-4 bg-gradient-to-r ${stat.color}/20 rounded-full group-hover:scale-110 transition-transform`}
                  >
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard Options Grid */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Dashboard Options
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboardOptions.map((option, index) => (
              <Link key={index} to={option.link}>
                <Card className="glass-card cursor-pointer border-purple-400/20 group relative overflow-hidden hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`p-4 bg-gradient-to-r ${option.color}/20 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform`}
                      >
                        <div
                          className={`bg-gradient-to-r ${option.color} bg-clip-text text-transparent`}
                        >
                          {option.icon}
                        </div>
                      </div>
                      {option.badge && (
                        <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-sm px-3 py-1">
                          {option.badge}
                        </Badge>
                      )}
                    </div>
                    <h3
                      className={`text-xl font-semibold mb-3 bg-gradient-to-r ${option.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}
                    >
                      {option.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      {option.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">
                        {option.stats}
                      </span>
                      <ArrowRight
                        className={`w-5 h-5 bg-gradient-to-r ${option.color} bg-clip-text text-transparent group-hover:translate-x-1 transition-all`}
                      />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${option.color}/5 opacity-0 group-hover:opacity-100 transition-opacity`}
                    ></div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="glass-card border-purple-400/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Recent Activity
              </CardTitle>
              <CardDescription className="text-slate-300">
                Your latest neighborhood interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                      <span className="text-green-400">Mike Chen</span> accepted
                      your grocery request
                    </p>
                    <p className="text-xs text-slate-400">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                      Completed shopping trip for{" "}
                      <span className="text-blue-400">Eleanor Roberts</span>
                    </p>
                    <p className="text-xs text-slate-400">Yesterday</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                      New neighbor{" "}
                      <span className="text-purple-400">Alex Johnson</span>{" "}
                      joined your area
                    </p>
                    <p className="text-xs text-slate-400">2 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-purple-400/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Quick Actions
              </CardTitle>
              <CardDescription className="text-slate-300">
                Common tasks you can perform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/create-request">
                <Button className="w-full justify-start bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-semibold py-3">
                  <Plus className="w-5 h-5 mr-3" />
                  Create New Shopping Request
                </Button>
              </Link>
              <Link to="/drop-message">
                <Button
                  variant="outline"
                  className="w-full justify-start border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 py-3"
                >
                  <Megaphone className="w-5 h-5 mr-3" />
                  Post Community Message
                </Button>
              </Link>
              <Link to="/neighbors">
                <Button
                  variant="outline"
                  className="w-full justify-start border-green-500/50 text-green-400 hover:bg-green-500/10 py-3"
                >
                  <Users className="w-5 h-5 mr-3" />
                  Find New Neighbors
                </Button>
              </Link>
              <Link to="/accept-requests">
                <Button
                  variant="outline"
                  className="w-full justify-start border-blue-500/50 text-blue-400 hover:bg-blue-500/10 py-3"
                >
                  <ThumbsUp className="w-5 h-5 mr-3" />
                  Help Others
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
