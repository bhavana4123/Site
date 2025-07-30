import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Exclusive</h3>
            <div className="space-y-3">
              <p className="text-lg">Subscribe</p>
              <p className="text-sm opacity-80">Get 10% off your first order</p>
              <div className="flex">
                <Input 
                  placeholder="Enter your email"
                  className="bg-transparent border-background text-background placeholder:text-background/60 rounded-r-none"
                />
                <Button 
                  size="icon"
                  variant="outline"
                  className="bg-transparent border-background text-background hover:bg-background hover:text-foreground rounded-l-none"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-3 text-sm opacity-80">
              <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          {/* Account */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Account</h3>
            <div className="space-y-3 text-sm opacity-80">
              <a href="#" className="block hover:opacity-100 transition-opacity">My Account</a>
              <a href="#" className="block hover:opacity-100 transition-opacity">Login / Register</a>
              <a href="#" className="block hover:opacity-100 transition-opacity">Cart</a>
              <a href="#" className="block hover:opacity-100 transition-opacity">Wishlist</a>
              <a href="#" className="block hover:opacity-100 transition-opacity">Shop</a>
            </div>
          </div>

          {/* Quick Link */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Link</h3>
            <div className="space-y-3 text-sm opacity-80">
              <a href="#" className="block hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="block hover:opacity-100 transition-opacity">Terms Of Use</a>
              <a href="#" className="block hover:opacity-100 transition-opacity">FAQ</a>
              <a href="#" className="block hover:opacity-100 transition-opacity">Contact</a>
            </div>
          </div>

          {/* Download App */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Download App</h3>
            <div className="space-y-3">
              <p className="text-xs opacity-60">Save $3 with App New User Only</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-background/10 p-2 rounded border border-background/20 text-xs text-center">
                  QR Code
                </div>
                <div className="space-y-1">
                  <div className="bg-background/10 p-1 rounded border border-background/20 text-xs text-center">
                    Google Play
                  </div>
                  <div className="bg-background/10 p-1 rounded border border-background/20 text-xs text-center">
                    App Store
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 pt-2">
                <Facebook className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
                <Twitter className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
                <Instagram className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
                <Linkedin className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border and copyright */}
        <div className="border-t border-background/20 mt-12 pt-4">
          <p className="text-center text-sm opacity-60">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};