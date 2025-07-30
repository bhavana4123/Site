import { Button } from "@/components/ui/button";
import { ArrowRight, Apple } from "lucide-react";
import iphoneHero from "@/assets/iphone-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="bg-foreground text-background rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-8 lg:p-16">
        <div className="flex-1 max-w-lg">
          <div className="flex items-center space-x-4 mb-6">
            <Apple className="h-8 w-8" />
            <span className="text-lg">iPhone 14 Series</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-semibold mb-6 leading-tight">
            Up to 10%
            <br />
            off Voucher
          </h1>
          
          <Button 
            variant="outline" 
            className="bg-transparent border-background text-background hover:bg-background hover:text-foreground"
          >
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex-1 flex justify-center items-center">
          <img 
            src={iphoneHero} 
            alt="iPhone 14 Series" 
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center space-x-2 pb-6">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full ${
              i === 2 ? 'bg-primary' : 'bg-muted-foreground'
            }`}
          />
        ))}
      </div>
    </section>
  );
};