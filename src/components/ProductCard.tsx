import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice?: number;
  rating: number;
  reviewCount: number;
  isOnSale?: boolean;
  salePercentage?: number;
}

export const ProductCard = ({
  name,
  image,
  originalPrice,
  salePrice,
  rating,
  reviewCount,
  isOnSale = false,
  salePercentage
}: ProductCardProps) => {
  const displayPrice = salePrice || originalPrice;

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300">
      {/* Product Image Container */}
      <div className="relative aspect-square bg-secondary p-4 overflow-hidden">
        {isOnSale && salePercentage && (
          <Badge className="absolute top-2 left-2 bg-sale text-sale-foreground z-10">
            -{salePercentage}%
          </Badge>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 bg-background/80 hover:bg-background z-10"
        >
          <Heart className="h-4 w-4" />
        </Button>

        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />

        {/* Add to Cart Button - shows on hover */}
        <Button 
          className="absolute bottom-0 left-0 right-0 bg-foreground text-background opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-none"
        >
          Add To Cart
        </Button>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-medium text-foreground line-clamp-2 leading-5">
          {name}
        </h3>
        
        <div className="flex items-center space-x-2">
          <span className="text-sale font-semibold">
            ${displayPrice}
          </span>
          {salePrice && (
            <span className="text-muted-foreground line-through text-sm">
              ${originalPrice}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating 
                    ? 'fill-warning text-warning' 
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviewCount})
          </span>
        </div>
      </div>
    </div>
  );
};