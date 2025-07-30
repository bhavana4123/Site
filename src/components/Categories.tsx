import { 
  Smartphone, 
  Monitor, 
  Shield, 
  Home, 
  Headphones, 
  Gamepad2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Categories = () => {
  const categories = [
    { name: "Phones", icon: Smartphone },
    { name: "Computers", icon: Monitor },
    { name: "SmartWatch", icon: Shield },
    { name: "Camera", icon: Home, isActive: true },
    { name: "HeadPhones", icon: Headphones },
    { name: "Gaming", icon: Gamepad2 }
  ];

  return (
    <section className="py-12 border-b">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-5 h-10 bg-sale rounded"></div>
        <span className="text-sale font-semibold">Categories</span>
      </div>

      {/* Title */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-semibold text-foreground">Browse By Category</h2>
        
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

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div
              key={index}
              className={`
                aspect-square flex flex-col items-center justify-center rounded-lg border-2 transition-all duration-300 cursor-pointer group
                ${category.isActive 
                  ? 'bg-sale border-sale text-sale-foreground' 
                  : 'bg-background border-border hover:border-sale hover:bg-sale hover:text-sale-foreground'
                }
              `}
            >
              <IconComponent className="h-8 w-8 mb-2" />
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};