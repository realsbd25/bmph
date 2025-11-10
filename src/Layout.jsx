import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: createPageUrl("Landing") },
    { name: "About", path: createPageUrl("About") }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <style>{`
        :root {
          --primary-light: #FFF8F0;
          --primary-dark: #FDE2C7;
          --accent: #D4A574;
          --text-dark: #3D2817;
          --text-light: #6B5942;
        }
      `}</style>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFF8F0]/95 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to={createPageUrl("Landing")}
              className="text-2xl font-bold text-[#3D2817] tracking-tight"
            >
              BMPH <span className="text-[#D4A574]">Network</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-[#3D2817]"
                      : "text-[#6B5942] hover:text-[#3D2817]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to={createPageUrl("Landing")}>
                <Button className="bg-[#D4A574] hover:bg-[#C49464] text-white rounded-full px-6">
                  Join Waitlist
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#3D2817]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#FFF8F0] shadow-lg py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-medium ${
                    location.pathname === item.path
                      ? "text-[#3D2817]"
                      : "text-[#6B5942]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to={createPageUrl("Landing")}>
                <Button
                  className="w-full bg-[#D4A574] hover:bg-[#C49464] text-white rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Waitlist
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#3D2817] text-[#FDE2C7] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BMPH Network</h3>
              <p className="text-sm text-[#FDE2C7]/80">
                Empowering diverse professionals across healthcare, medical, and
                pharmaceutical sectors.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block text-sm text-[#FDE2C7]/80 hover:text-[#FDE2C7] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-[#FDE2C7]/80">
                Founded in 2025
                <br />
                Building inclusive futures
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#FDE2C7]/20 text-center text-sm text-[#FDE2C7]/60">
            © 2025 BMPH Network. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}