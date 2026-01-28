'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Layout, Smartphone, Shield, Cpu, Globe } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const techStack = [
  {
    category: 'Frontend',
    icon: Layout,
    items: [
      { name: 'React', description: 'Popular JavaScript library for building user interfaces' },
      { name: 'Next.js', description: 'React framework for production applications' },
      { name: 'TypeScript', description: 'Typed superset of JavaScript' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    ],
    color: 'from-primary to-[primary]',
  },
  {
    category: 'Backend',
    icon: Code,
    items: [
      { name: 'Node.js', description: 'JavaScript runtime for server-side applications' },
      { name: 'Python', description: 'Versatile programming language' },
      { name: 'GraphQL', description: 'Query language for APIs' },
      { name: 'REST APIs', description: 'Standard API architecture' },
    ],
    color: 'from-[primary] to-[primary]',
  },
  {
    category: 'Database',
    icon: Database,
    items: [
      { name: 'PostgreSQL', description: 'Advanced open source relational database' },
      { name: 'MongoDB', description: 'NoSQL document database' },
      { name: 'Redis', description: 'In-memory data structure store' },
      { name: 'SQLite', description: 'Lightweight, embedded SQL database' },
    ],
    color: 'from-[primary] to-primary',
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    items: [
      { name: 'AWS', description: 'Cloud computing platform' },
      { name: 'Docker', description: 'Containerization platform' },
      { name: 'Kubernetes', description: 'Container orchestration system' },
      { name: 'CI/CD', description: 'Automated deployment pipelines' },
    ],
    color: 'from-primary to-[primary]',
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    items: [
      { name: 'React Native', description: 'Build native mobile apps with React' },
      { name: 'Flutter', description: 'UI toolkit for cross-platform apps' },
      { name: 'iOS', description: 'Native iOS development' },
      { name: 'Android', description: 'Native Android development' },
    ],
    color: 'from-[primary] to-primary',
  },
  {
    category: 'Security',
    icon: Shield,
    items: [
      { name: 'OAuth 2.0', description: 'Authorization framework' },
      { name: 'JWT', description: 'JSON Web Tokens for authentication' },
      { name: 'HTTPS', description: 'Secure communication protocol' },
      { name: 'SOC 2', description: 'Security compliance certification' },
    ],
    color: 'from-[primary] to-[primary]',
  },
  {
    category: 'Performance',
    icon: Cpu,
    items: [
      { name: 'Caching', description: 'Performance optimization techniques' },
      { name: 'CDN', description: 'Content Delivery Network' },
      { name: 'Optimization', description: 'Code and asset optimization' },
      { name: 'Monitoring', description: 'Performance monitoring tools' },
    ],
    color: 'from-primary to-[primary]',
  },
  {
    category: 'Integration',
    icon: Globe,
    items: [
      { name: 'Stripe', description: 'Payment processing' },
      { name: 'Twilio', description: 'Communication APIs' },
      { name: 'SendGrid', description: 'Email delivery service' },
      { name: 'Webhooks', description: 'Event-driven integration' },
    ],
    color: 'from-[primary] to-[primary]',
  },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Technology() {
  return (
    <section
      id="technology"
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
            <span className="text-sm font-medium">Tech Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Technology{' '}
            <span className="gradient-text">We Use</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            We leverage the latest and most reliable technologies to build scalable, secure, and high-performance solutions.
          </motion.p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {techStack.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.category} variants={itemVariants}>
                <div
                  className="glow-border h-full p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} opacity-20 flex items-center justify-center`}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="text-lg font-bold">
                      {category.category}
                    </h3>
                  </div>

                  {/* Tech Items */}
                  <TooltipProvider>
                    <div className="space-y-3">
                      {category.items.map((item) => (
                        <Tooltip key={item.name}>
                          <TooltipTrigger asChild>
                            <motion.div
                              whileHover={{ x: 5 }}
                              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                                  {item.name}
                                </span>
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-[primary] opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent
                            side="right"
                            className="glass max-w-xs"
                          >
                            <p className="text-sm">{item.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
