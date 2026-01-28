'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', href: '#home' },
  {
    name: 'Services',
    items: [
      { name: 'Mobile Apps', href: '#mobile' },
      { name: 'Web Development', href: '#web' },
      { name: 'E-commerce', href: '#ecommerce' },
    ],
  },
  { name: 'Features', href: '#features' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Technology', href: '#technology' },
  { name: 'Blog', href: '#blog' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className="relative">
              <Cpu className="h-8 w-8 text-primary" />
              <div className="absolute inset-0 blur-xl bg-primary/50" />
            </div>
            <span className="text-xl font-bold gradient-text">
              Kryptogen
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.items ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-foreground/80 hover:text-foreground font-medium flex items-center gap-1"
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="glass min-w-[200px]"
                    >
                      {item.items.map((subItem) => (
                        <DropdownMenuItem
                          key={subItem.name}
                          asChild
                          className="cursor-pointer"
                        >
                          <a href={subItem.href}>{subItem.name}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                className="magnetic-btn relative overflow-hidden"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="glass w-[300px] sm:w-[400px]"
              >
                <nav className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.items ? (
                        <div>
                          <h3 className="font-semibold text-lg mb-3">
                            {item.name}
                          </h3>
                          <div className="flex flex-col gap-2 pl-4">
                            {item.items.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="text-foreground/70 hover:text-foreground transition-colors"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          className="text-lg font-medium hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                  <Button className="magnetic-btn mt-4" asChild>
                    <a href="#contact">Get Started</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
