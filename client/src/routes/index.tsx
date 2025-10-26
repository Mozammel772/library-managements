import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  BookOpen,
  Search,
  Users,
  Calendar,
  Shield,
  BarChart3,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    Modern Library Management
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Library Operations
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Complete library management system with book cataloging, member
                    management, and seamless borrowing experience. Built for modern
                    libraries.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/books">
                    <Button size="lg" className="gap-2 cursor-pointer">
                      Borrow Book
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/borrow-summary">
                    <Button variant="outline" size="lg" className="gap-2 cursor-pointer">
                      See Borrow Summary
                    </Button>
                  </Link>
                </div>
                <div className="flex md:items-center flex-col md:flex-row items-start gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    No setup fees
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    14-day free trial
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Cancel anytime
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://ui.shadcn.com/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Library Management Dashboard"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need to Manage Your Library
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive tools designed to simplify library operations and enhance
                  user experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary" />
                  <CardTitle>Book Management</CardTitle>
                  <CardDescription>
                    Add, edit, and organize your entire book collection with ease. Track
                    availability, categories, and detailed information.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary" />
                  <CardTitle>Member Management</CardTitle>
                  <CardDescription>
                    Manage library members, track borrowing history, and handle membership
                    renewals efficiently.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary" />
                  <CardTitle>Borrowing System</CardTitle>
                  <CardDescription>
                    Streamlined book borrowing and return process with automated due date
                    tracking and notifications.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Search className="h-10 w-10 text-primary" />
                  <CardTitle>Advanced Search</CardTitle>
                  <CardDescription>
                    Powerful search functionality to find books by title, author, ISBN,
                    category, or any custom criteria.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary" />
                  <CardTitle>Analytics & Reports</CardTitle>
                  <CardDescription>
                    Comprehensive reporting on book circulation, popular titles, and
                    library usage statistics.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary" />
                  <CardTitle>Secure & Reliable</CardTitle>
                  <CardDescription>
                    Enterprise-grade security with regular backups and role-based access
                    control for staff.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="https://ui.shadcn.com/placeholder.svg?height=400&width=600"
                width="600"
                height="400"
                alt="Library Statistics"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary">Trusted by Libraries</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Join Thousands of Libraries Worldwide
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our platform is trusted by libraries of all sizes, from small
                    community libraries to large academic institutions.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">10,000+</div>
                    <div className="text-sm text-muted-foreground">Active Libraries</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">2M+</div>
                    <div className="text-sm text-muted-foreground">Books Managed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">500K+</div>
                    <div className="text-sm text-muted-foreground">Active Members</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Testimonials</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Users Say
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>
                    "LibraryPro has transformed how we manage our collection. The
                    interface is intuitive and our staff adapted quickly."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                    <div>
                      <div className="text-sm font-medium">Sarah Johnson</div>
                      <div className="text-xs text-muted-foreground">
                        Head Librarian, City Library
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>
                    "The borrowing system is seamless. Our patrons love how easy it is to
                    find and reserve books online."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                    <div>
                      <div className="text-sm font-medium">Michael Chen</div>
                      <div className="text-xs text-muted-foreground">
                        Library Director, University Library
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>
                    "The analytics features help us make data-driven decisions about our
                    collection and understand usage patterns."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                    <div>
                      <div className="text-sm font-medium">Emily Rodriguez</div>
                      <div className="text-xs text-muted-foreground">
                        Systems Librarian, Public Library
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Modernize Your Library?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of libraries already using LibraryPro. Start your free
                  trial today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-primary-foreground text-primary"
                  />
                  <Button type="submit" variant="secondary">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-primary-foreground/60">
                  Start your 14-day free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
