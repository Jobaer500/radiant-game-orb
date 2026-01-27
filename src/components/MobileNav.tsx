import { motion } from 'framer-motion';
import { Gamepad2, Zap, Car, Puzzle, Grid } from 'lucide-react';

interface MobileNavProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const navItems = [
  { id: 'all', label: 'All', icon: Grid },
  { id: 'action', label: 'Action', icon: Zap },
  { id: 'racing', label: 'Racing', icon: Car },
  { id: 'puzzle', label: 'Puzzle', icon: Puzzle },
];

export const MobileNav = ({ selectedCategory, onCategoryChange }: MobileNavProps) => {
  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass border-t border-glass-border"
    >
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = selectedCategory === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => onCategoryChange(item.id)}
              whileTap={{ scale: 0.9 }}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <div
                className={`p-2 rounded-xl transition-all ${
                  isActive ? 'bg-primary/20' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 w-12 h-1 bg-primary rounded-full"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};
