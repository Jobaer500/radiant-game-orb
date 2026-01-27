import { motion } from 'framer-motion';
import type { Game } from '@/data/games';

interface GameCardProps {
  game: Game;
  index: number;
  onClick: () => void;
}

export const GameCard = ({ game, index, onClick }: GameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: 'easeOut',
      }}
      whileHover={{ scale: 1.05, y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
        game.isFeatured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Platform Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 + 0.2 }}
          className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${
            game.type === 'webgl'
              ? 'bg-badge-webgl/20 text-primary border border-primary/30'
              : 'bg-badge-mobile/20 text-secondary border border-secondary/30'
          }`}
        >
          {game.type === 'webgl' ? '🖥️ WebGL' : '📱 Mobile'}
        </motion.div>

        {/* Featured Badge */}
        {game.isFeatured && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 + 0.3 }}
            className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-gradient-purple to-gradient-pink text-foreground"
          >
            ⭐ Featured
          </motion.div>
        )}

        {/* Title Overlay */}
        <motion.div
          initial={{ y: 100 }}
          className="absolute bottom-0 left-0 right-0 p-4 group-hover:translate-y-0 translate-y-8 transition-transform duration-300"
        >
          <h3 className={`font-black tracking-tight ${game.isFeatured ? 'text-2xl' : 'text-lg'}`}>
            {game.title}
          </h3>
          <p className="text-sm text-muted-foreground capitalize mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {game.category}
          </p>
        </motion.div>

        {/* Play Button Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/50">
            <svg
              className="w-8 h-8 text-primary-foreground ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Glass Border */}
      <div className="absolute inset-0 rounded-2xl border border-glass-border pointer-events-none" />
    </motion.div>
  );
};
