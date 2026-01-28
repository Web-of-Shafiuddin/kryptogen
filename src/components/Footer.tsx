'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Mail, MapPin, Phone, Linkedin, Twitter, Github, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  services: [
    { label: 'Mobile Apps', href: '#mobile' },
    { label: 'Web Development', href: '#web' },
    { label: 'E-commerce', href: '#ecommerce' },
    { label: 'UI/UX Design', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
  ],
  resources: [
    { label: 'Documentation', href: '#docs' },
    { label: 'Tutorials', href: '#tutorials' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'GDPR', href: '#gdpr' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
  { icon: Twitter, href: '#twitter', label: 'Twitter' },
  { icon: Github, href: '#github', label: 'GitHub' },
  { icon: Instagram, href: '#instagram', label: 'Instagram' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative border-t border-border"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-10" />

      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-[primary]/20 flex items-center justify-center mx-auto mb-6"
              >
                <Mail className="h-8 w-8 text-primary" />
              </motion.div>

              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Subscribe to Our{' '}
                <span className="gradient-text">Newsletter</span>
              </h3>

              <p className="text-foreground/70 mb-8">
                Get the latest updates, insights, and industry news delivered straight to your inbox.
              </p>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass flex-1"
                  required
                />
                <Button
                  type="submit"
                  className="magnetic-btn whitespace-nowrap"
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </Button>
              </motion.form>

              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-primary mt-4"
                >
                  Thank you for subscribing!
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-2 mb-6">
                <Cpu className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold gradient-text">
                  Kryptogen
                </span>
              </div>

              <p className="text-foreground/70 mb-6 max-w-sm">
                Transforming ideas into cutting-edge digital experiences. We build the future of technology, today.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">
                    123 Tech Avenue, San Francisco, CA 94105
                  </span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">hello@kryptogen.com</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.label}
                      size="icon"
                      variant="ghost"
                      className="glass hover:bg-white/10 transition-colors"
                      asChild
                    >
                      <a
                        href={social.href}
                        aria-label={social.label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h4 className="font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources & Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="font-semibold mb-6">Resources</h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-foreground/60"
              >
                © {new Date().getFullYear()} Kryptogen Technology. All rights reserved.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={scrollToTop}
                  className="glass hover:bg-white/10 transition-colors"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
