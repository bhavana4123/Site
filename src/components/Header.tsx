import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-foreground text-background py-2 px-4 text-sm text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="font-semibold underline cursor-pointer ml-2">ShopNow</span>
      </div>

      {/* Main header */}
      <header className="border-b bg-background px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-foreground">
            Exclusive
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Sign Up
            </a>
          </nav>

          {/* Search and actions */}
          <div className="flex items-center space-x-4">
            {/* Search bar */}
            <div className="relative hidden md:block">
              <Input
                type="search"
                placeholder="What are you looking for?"
                className="w-64 pr-10 bg-secondary"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};