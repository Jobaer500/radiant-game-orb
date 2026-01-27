import { Search, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onMenuToggle: () => void;
}

export const Header = ({ searchQuery, onSearchChange, onMenuToggle }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 glass border-b border-glass-border"
    >
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-lg glass glass-hover"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gradient-purple via-gradient-pink to-gradient-cyan flex items-center justify-center">
            <span className="text-xl font-black text-foreground">A</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight hidden sm:block">
            Arcade<span className="text-primary">X</span>
          </h1>
        </motion.div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4 lg:mx-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full glass border border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 placeholder:text-muted-foreground bg-transparent"
            />
          </div>
        </div>

        {/* Spacer for mobile */}
        <div className="w-10 lg:hidden" />
      </div>
    </motion.header>
  );
};
