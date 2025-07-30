import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";
import gamingController from "@/assets/gaming-controller.jpg";
import gamingKeyboard from "@/assets/gaming-keyboard.jpg";
import gamingMonitor from "@/assets/gaming-monitor.jpg";
import headphones from "@/assets/headphones.jpg";

export const BestSelling = () => {
  const products = [
    {
      id: "1",
      name: "The north coat",
      image: gamingController,
      originalPrice: 360,
      salePrice: 260,
      rating: 5,
      reviewCount: 65,
      isOnSale: false
    },
    {
      id: "2", 
      name: "Gucci duffle bag",
      image: gamingKeyboard,
      originalPrice: 1160,
      salePrice: 960,
      rating: 4,
      reviewCount: 65,
      isOnSale: false
    },
    {
      id: "3",
      name: "RGB liquid CPU Cooler",
      image: gamingMonitor,
      originalPrice: 170,
      rating: 4,
      reviewCount: 65,
      isOnSale: false
    },
    {
      id: "4",
      name: "Small BookShelf",
      image: headphones,
      originalPrice: 360,
      rating: 5,
      reviewCount: 65,
      isOnSale: false
    }
  ];

  return (
    <section className="py-12">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-5 h-10 bg-sale rounded"></div>
        <span className="text-sale font-semibold">This Month</span>
      </div>

      {/* Title and View All Button */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-semibold text-foreground">Best Selling Products</h2>
        
        <Button className="bg-sale hover:bg-sale/90 text-sale-foreground px-8">
          View All
        </Button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};