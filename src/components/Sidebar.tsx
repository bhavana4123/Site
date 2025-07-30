import { ChevronRight } from "lucide-react";

const categories = [
  "Woman's Fashion",
  "Men's Fashion", 
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty"
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-background border-r">
      <div className="p-4">
        <nav className="space-y-2">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-between p-3 text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200 group"
            >
              <span className="text-sm">{category}</span>
              <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};