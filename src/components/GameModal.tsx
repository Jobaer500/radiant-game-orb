import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Volume2 } from 'lucide-react';
import type { Game } from '@/data/games';

interface GameModalProps {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
}

export const GameModal = ({ game, isOpen, onClose }: GameModalProps) => {
  if (!game) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-6xl aspect-video glass rounded-3xl overflow-hidden border border-glass-border"
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-10 bg-gradient-to-b from-background/80 to-transparent">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-black">{game.title}</h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    game.type === 'webgl'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-secondary/20 text-secondary'
                  }`}
                >
                  {game.type}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg glass glass-hover">
                  <Volume2 className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg glass glass-hover">
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg glass glass-hover"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Game iframe placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gradient-purple/20 via-gradient-pink/20 to-gradient-cyan/20">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center"
                >
                  <svg
                    className="w-12 h-12 text-foreground"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </motion.div>
                <p className="text-xl font-bold text-muted-foreground mb-2">
                  Game Player Placeholder
                </p>
                <p className="text-sm text-muted-foreground/60">
                  Game iframe would load here
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
