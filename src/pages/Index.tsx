import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { HeroSection } from "@/components/HeroSection";
import { FlashSales } from "@/components/FlashSales";
import { Categories } from "@/components/Categories";
import { BestSelling } from "@/components/BestSelling";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-16">
          <HeroSection />
          <FlashSales />
          <Categories />
          <BestSelling />
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
