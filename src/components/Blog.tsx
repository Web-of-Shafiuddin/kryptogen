'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Software Development',
    excerpt: 'Exploring how artificial intelligence is transforming the way we build and deploy software applications.',
    category: 'Technology',
    author: 'Alex Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    image: '/placeholder-blog-1.jpg',
    color: 'from-primary to-[primary]',
  },
  {
    id: 2,
    title: 'Building Scalable Mobile Applications',
    excerpt: 'Best practices and architectural patterns for creating mobile apps that grow with your user base.',
    category: 'Mobile',
    author: 'Sarah Johnson',
    date: '2024-01-10',
    readTime: '6 min read',
    image: '/placeholder-blog-2.jpg',
    color: 'from-[primary] to-[primary]',
  },
  {
    id: 3,
    title: 'E-commerce Security Best Practices',
    excerpt: 'Essential security measures every online store should implement to protect customer data.',
    category: 'E-commerce',
    author: 'Michael Brown',
    date: '2024-01-05',
    readTime: '7 min read',
    image: '/placeholder-blog-3.jpg',
    color: 'from-[primary] to-primary',
  },
  {
    id: 4,
    title: 'Modern Web Performance Optimization',
    excerpt: 'Techniques and tools to make your web applications load faster and perform better.',
    category: 'Web Development',
    author: 'Emily Davis',
    date: '2024-01-01',
    readTime: '5 min read',
    image: '/placeholder-blog-4.jpg',
    color: 'from-primary to-[primary]',
  },
  {
    id: 5,
    title: 'Cloud-Native Architecture Guide',
    excerpt: 'Understanding the principles of cloud-native development and how to apply them.',
    category: 'Cloud',
    author: 'David Wilson',
    date: '2023-12-28',
    readTime: '9 min read',
    image: '/placeholder-blog-5.jpg',
    color: 'from-[primary] to-primary',
  },
  {
    id: 6,
    title: 'UX Design for Enterprise Applications',
    excerpt: 'Creating intuitive user experiences for complex business software.',
    category: 'Design',
    author: 'Lisa Anderson',
    date: '2023-12-20',
    readTime: '6 min read',
    image: '/placeholder-blog-6.jpg',
    color: 'from-[primary] to-[primary]',
  },
];

const categories = [
  { id: 'all', label: 'All Articles' },
  { id: 'Technology', label: 'Technology' },
  { id: 'Mobile', label: 'Mobile' },
  { id: 'E-commerce', label: 'E-commerce' },
  { id: 'Web Development', label: 'Web Development' },
];

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
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts =
    activeCategory === 'all'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section
      id="blog"
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
            <span className="text-sm font-medium">Insights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Latest{' '}
            <span className="gradient-text">Articles</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8"
          >
            Stay updated with the latest trends, insights, and best practices in software development and technology.
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

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card
                className="glow-border h-full overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                }}
              >
                {/* Image/Gradient Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[primary]/20">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-30`}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="glass">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 text-xs text-foreground/60 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    className="group w-full"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
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
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
