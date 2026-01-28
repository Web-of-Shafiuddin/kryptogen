'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS',
  'Docker', 'Kubernetes', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis',
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS',
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX - innerWidth / 2) / innerWidth,
      y: (clientY - innerHeight / 2) / innerHeight,
    });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient" />



      {/* Main Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Innovation First</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              Building{' '}
              <span className="gradient-text">Tomorrow's</span>{' '}
              Technology{' '}
              <span className="gradient-text">Today</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-foreground/70 max-w-xl"
            >
              We transform ideas into cutting-edge digital experiences.
              From mobile apps to enterprise solutions, we engineer the future.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="magnetic-btn text-base px-8"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 glass"
                asChild
              >
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-foreground/60">Projects</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-foreground/60">Clients</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-foreground/60">Countries</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <motion.div
              className="float-3d relative"
              animate={{
                rotateX: mousePosition.y * 10,
                rotateY: mousePosition.x * 10,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            >
              {/* Glass Card */}
              <div className="glass rounded-2xl p-6 relative z-10">
                {/* Mockup Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-primary/10 rounded w-3/4" />
                    <div className="h-4 bg-primary/10 rounded w-full" />
                    <div className="h-4 bg-primary/10 rounded w-5/6" />
                    <div className="h-32 bg-primary/10 rounded-lg" />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 glass rounded-xl flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="h-8 w-8 text-primary" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 glass rounded-xl flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Zap className="h-6 w-6 text-primary" />
                </motion.div>
              </div>


            </motion.div>
          </motion.div>
        </div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 overflow-hidden"
        >
          <div className="glass rounded-lg py-6 px-4">
            <motion.div
              className="flex gap-8 animate-marquee whitespace-nowrap"
              style={{
                width: 'max-content',
              }}
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={`${tech}-${index}`}
                  className="text-foreground/60 font-medium text-lg"
                  whileHover={{
                    color: 'var(--primary)',
                    scale: 1.05,
                  }}
                >
                  {tech}
                </motion.span>
              ))}
              {techStack.map((tech, index) => (
                <motion.span
                  key={`${tech}-dup-${index}`}
                  className="text-foreground/60 font-medium text-lg"
                  whileHover={{
                    color: 'var(--primary)',
                    scale: 1.05,
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
