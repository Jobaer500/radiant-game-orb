import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { categories, platforms } from '@/data/games';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  selectedPlatform: string;
  onCategoryChange: (category: string) => void;
  onPlatformChange: (platform: string) => void;
}

export const Sidebar = ({
  isOpen,
  onClose,
  selectedCategory,
  selectedPlatform,
  onCategoryChange,
  onPlatformChange,
}: SidebarProps) => {
  const sidebarVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={sidebarVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 glass border-r border-glass-border z-50 lg:z-0 p-6 overflow-y-auto ${
          isOpen ? 'block' : 'hidden lg:block'
        }`}
      >
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg glass glass-hover lg:hidden"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo for sidebar on desktop */}
        <div className="hidden lg:flex items-center gap-2 mb-8 pt-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gradient-purple via-gradient-pink to-gradient-cyan flex items-center justify-center">
            <span className="text-xl font-black text-foreground">A</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight">
            Arcade<span className="text-primary">X</span>
          </h1>
        </div>

        <div className="mt-12 lg:mt-0">
          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Categories
            </h2>
            <nav className="space-y-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground font-bold'
                      : 'glass glass-hover'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-semibold">{category.label}</span>
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Platforms */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Platform
            </h2>
            <nav className="space-y-2">
              {platforms.map((platform) => (
                <motion.button
                  key={platform.id}
                  onClick={() => onPlatformChange(platform.id)}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    selectedPlatform === platform.id
                      ? 'bg-secondary text-secondary-foreground font-bold'
                      : 'glass glass-hover'
                  }`}
                >
                  <span className="text-xl">{platform.icon}</span>
                  <span className="font-semibold">{platform.label}</span>
                </motion.button>
              ))}
            </nav>
          </div>
        </div>
      </motion.aside>
    </>
  );
};
