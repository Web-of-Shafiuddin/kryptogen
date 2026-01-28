'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'web',
    description: 'Real-time financial analytics dashboard with interactive charts and data visualization.',
    image: '/placeholder-project-1.jpg',
    tags: ['Next.js', 'TypeScript', 'Recharts'],
    color: 'from-primary to-[primary]',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'ecommerce',
    description: 'Full-featured online store with payment integration and inventory management.',
    image: '/placeholder-project-2.jpg',
    tags: ['React', 'Node.js', 'Stripe'],
    color: 'from-[primary] to-[primary]',
  },
  {
    id: 3,
    title: 'Health App',
    category: 'mobile',
    description: 'Cross-platform mobile app for tracking health metrics and wellness goals.',
    image: '/placeholder-project-3.jpg',
    tags: ['React Native', 'Firebase', 'HealthKit'],
    color: 'from-[primary] to-primary',
  },
  {
    id: 4,
    title: 'Social Media Manager',
    category: 'web',
    description: 'AI-powered tool for managing and scheduling social media content.',
    image: '/placeholder-project-4.jpg',
    tags: ['Next.js', 'Python', 'OpenAI'],
    color: 'from-primary to-[primary]',
  },
  {
    id: 5,
    title: 'Food Delivery App',
    category: 'mobile',
    description: 'On-demand food delivery platform with real-time tracking.',
    image: '/placeholder-project-5.jpg',
    tags: ['Flutter', 'Node.js', 'Maps'],
    color: 'from-[primary] to-primary',
  },
  {
    id: 6,
    title: 'B2B Marketplace',
    category: 'ecommerce',
    description: 'Wholesale marketplace connecting suppliers with retailers.',
    image: '/placeholder-project-6.jpg',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
    color: 'from-[primary] to-[primary]',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'ecommerce', label: 'E-commerce' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="portfolio"
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
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <span className="text-sm font-medium">Our Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8"
          >
            Explore our portfolio of successful projects that showcase our expertise across various industries and technologies.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? 'magnetic-btn'
                  : 'glass hover:bg-white/10'
              }
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Card
                  className="glow-border h-full overflow-hidden group"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-[primary]/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`w-32 h-32 rounded-full bg-gradient-to-br ${project.color} opacity-50 blur-2xl`}
                      />
                    </div>

                    {/* Project Icon/Initial */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-6xl font-bold text-white/20"
                      >
                        {project.title[0]}
                      </motion.div>
                    </div>

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      <div className="absolute inset-0 flex items-center justify-center gap-4">
                        <Button size="icon" variant="secondary" className="glass">
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                        <Button size="icon" variant="secondary" className="glass">
                          <Github className="h-5 w-5" />
                        </Button>
                      </div>
                    </motion.div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-foreground/70 text-sm">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="magnetic-btn text-base px-8"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
