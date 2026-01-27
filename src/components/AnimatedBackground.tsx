import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#4A00E0] via-[#e73c7e] via-50% to-[#23d5ab] animate-gradient-shift"
        style={{ backgroundSize: '400% 400%' }}
      />
      
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-background/30" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-cyan/20 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-pink/20 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-gradient-purple/20 blur-3xl"
      />
    </div>
  );
};
