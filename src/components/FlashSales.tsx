import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";
import gamingController from "@/assets/gaming-controller.jpg";
import gamingKeyboard from "@/assets/gaming-keyboard.jpg";
import gamingMonitor from "@/assets/gaming-monitor.jpg";
import officeChair from "@/assets/office-chair.jpg";

export const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: "1",
      name: "HAVIT HV-G92 Gamepad",
      image: gamingController,
      originalPrice: 160,
      salePrice: 120,
      rating: 5,
      reviewCount: 88,
      isOnSale: true,
      salePercentage: 40
    },
    {
      id: "2", 
      name: "AK-900 Wired Keyboard",
      image: gamingKeyboard,
      originalPrice: 1160,
      salePrice: 960,
      rating: 4,
      reviewCount: 75,
      isOnSale: true,
      salePercentage: 35
    },
    {
      id: "3",
      name: "IPS LCD Gaming Monitor",
      image: gamingMonitor,
      originalPrice: 400,
      salePrice: 370,
      rating: 5,
      reviewCount: 99,
      isOnSale: true,
      salePercentage: 30
    },
    {
      id: "4",
      name: "S-Series Comfort Chair",
      image: officeChair,
      originalPrice: 400,
      salePrice: 375,
      rating: 4,
      reviewCount: 99,
      isOnSale: true,
      salePercentage: 25
    }
  ];

  return (
    <section className="py-12">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-5 h-10 bg-sale rounded"></div>
        <span className="text-sale font-semibold">Today's</span>
      </div>

      {/* Title and Timer */}
      <div className="flex items-end justify-between mb-8">
        <div className="flex items-end space-x-16">
          <h2 className="text-4xl font-semibold text-foreground">Flash Sales</h2>
          
          {/* Countdown Timer */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-xs text-foreground">Days</div>
              <div className="text-3xl font-bold text-foreground">{String(timeLeft.days).padStart(2, '0')}</div>
            </div>
            <div className="text-sale text-2xl font-bold">:</div>
            <div className="text-center">
              <div className="text-xs text-foreground">Hours</div>
              <div className="text-3xl font-bold text-foreground">{String(timeLeft.hours).padStart(2, '0')}</div>
            </div>
            <div className="text-sale text-2xl font-bold">:</div>
            <div className="text-center">
              <div className="text-xs text-foreground">Minutes</div>
              <div className="text-3xl font-bold text-foreground">{String(timeLeft.minutes).padStart(2, '0')}</div>
            </div>
            <div className="text-sale text-2xl font-bold">:</div>
            <div className="text-center">
              <div className="text-xs text-foreground">Seconds</div>
              <div className="text-3xl font-bold text-foreground">{String(timeLeft.seconds).padStart(2, '0')}</div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Button className="bg-sale hover:bg-sale/90 text-sale-foreground px-12">
          View All Products
        </Button>
      </div>
    </section>
  );
};