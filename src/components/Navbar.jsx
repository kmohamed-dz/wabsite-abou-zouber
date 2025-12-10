import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "الرئيسة", href: "#hero" },
  { name: "نبذة عن المشايخ", href: "#about" },
  { name: "مصادر التعلم", href: "#skills" }, 
  { name: "الكتب", href: "#projects" },
  { name: "تواصل", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/95 backdrop-blur-md shadow-md"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* الشعار */}
        <a href="#hero" className="text-2xl font-bold text-primary">
              منارة الجنوب العلمية  
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">   {/* هنا غيرنا space-x-8 إلى gap-10 عشان مسافة حلوة */}
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors duration-300 whitespace-nowrap"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 p-2"
          aria-label="قائمة التنقل"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Fullscreen Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 md:hidden",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-10 text-3xl font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};