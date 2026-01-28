'use client';

import { motion } from 'framer-motion';
import { Smartphone, Globe, ShoppingCart, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.',
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'Push Notifications', 'Offline Support'],
    badges: ['iOS', 'Android', 'Cross-Platform'],
    color: 'from-primary to-[primary]',
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and scalability.',
    features: ['Next.js', 'React', 'TypeScript', 'GraphQL', 'Progressive Web Apps'],
    badges: ['Full Stack', 'PWA', 'SSR'],
    color: 'from-[primary] to-[primary]',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Feature-rich online stores with seamless checkout experiences, inventory management, and analytics.',
    features: ['Shopify', 'WooCommerce', 'Custom Solutions', 'Payment Integration', 'Inventory Management'],
    badges: ['B2B', 'B2C', 'Marketplace'],
    color: 'from-[primary] to-primary',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Services() {
  return (
    <section
      id="mobile"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <span className="text-sm font-medium">Our Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Services We{' '}
            <span className="gradient-text">Offer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            We deliver comprehensive digital solutions tailored to your business needs, from concept to deployment and beyond.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card
                  className="glow-border h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  }}
                >
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-[primary]/20 flex items-center justify-center mb-4"
                    >
                      <Icon className="h-7 w-7 text-primary" />
                    </motion.div>

                    <CardTitle className="text-2xl mb-3">
                      {service.title}
                    </CardTitle>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.badges.map((badge) => (
                        <Badge
                          key={badge}
                          variant="secondary"
                          className="text-xs"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-foreground/70"
                        >
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="ghost"
                      className="group w-full"
                      asChild
                    >
                      <a href={`#${service.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="magnetic-btn text-base px-8"
            asChild
          >
            <a href="#contact" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
