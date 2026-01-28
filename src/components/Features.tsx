'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Lightbulb, Zap, Users, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Built to grow with your business. Our solutions scale seamlessly from startup to enterprise.',
    gradient: 'from-primary to-[primary]',
    size: 'large',
    stats: '99.9%',
    statsLabel: 'Uptime',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Enterprise-grade security with encryption, authentication, and compliance certifications.',
    gradient: 'from-[primary] to-[primary]',
    size: 'medium',
    stats: 'SOC 2',
    statsLabel: 'Compliant',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Cutting-edge technologies and creative solutions that keep you ahead of the competition.',
    gradient: 'from-[primary] to-primary',
    size: 'medium',
    stats: '50+',
    statsLabel: 'Innovations',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast applications optimized for speed and efficiency.',
    gradient: 'from-primary to-[primary]',
    size: 'small',
    stats: '< 100ms',
    statsLabel: 'Response',
  },
  {
    icon: Users,
    title: 'User Experience',
    description: 'Intuitive interfaces designed with your users in mind.',
    gradient: 'from-[primary] to-primary',
    size: 'small',
    stats: '4.9/5',
    statsLabel: 'Rating',
  },
  {
    icon: Rocket,
    title: 'Speed to Market',
    description: 'Rapid development cycles and agile methodologies for faster time-to-market.',
    gradient: 'from-[primary] to-[primary]',
    size: 'small',
    stats: '2x',
    statsLabel: 'Faster',
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Features() {
  return (
    <section
      id="features"
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
            <span className="text-sm font-medium">Why Choose Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our{' '}
            <span className="gradient-text">Core</span>{' '}
            Features
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            We combine cutting-edge technology with industry expertise to deliver solutions that drive real business results.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            const spanClass = {
              large: 'md:col-span-2 md:row-span-2',
              medium: 'md:col-span-2',
              small: '',
            }[feature.size];

            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={`${spanClass}`}
              >
                <Card
                  className="glow-border h-full relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  }}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <CardContent className="relative h-full p-6 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-[primary]/20 flex items-center justify-center"
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>

                      {feature.stats && (
                        <div className="text-right">
                          <div className="text-2xl font-bold gradient-text">
                            {feature.stats}
                          </div>
                          <div className="text-xs text-foreground/60">
                            {feature.statsLabel}
                          </div>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-foreground/70 text-sm flex-grow">
                      {feature.description}
                    </p>

                    {/* Animated Line */}
                    <motion.div
                      className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-4`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
