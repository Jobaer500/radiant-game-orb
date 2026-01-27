import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { GameCard } from '@/components/GameCard';
import { GameModal } from '@/components/GameModal';
import { MobileNav } from '@/components/MobileNav';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { games, type Game } from '@/data/games';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter games based on search, category, and platform
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
      const matchesPlatform = selectedPlatform === 'all' || game.type === selectedPlatform;
      
      return matchesSearch && matchesCategory && matchesPlatform;
    });
  }, [searchQuery, selectedCategory, selectedPlatform]);

  // Sort games so featured ones appear first
  const sortedGames = useMemo(() => {
    return [...filteredGames].sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [filteredGames]);

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedGame(null), 300);
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="flex min-h-screen">
        {/* Sidebar - Desktop */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          selectedCategory={selectedCategory}
          selectedPlatform={selectedPlatform}
          onCategoryChange={setSelectedCategory}
          onPlatformChange={setSelectedPlatform}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onMenuToggle={() => setSidebarOpen(true)}
          />

          <main className="flex-1 p-4 lg:p-8 pb-24 lg:pb-8">
            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="text-3xl lg:text-4xl font-black mb-2">
                {selectedCategory === 'all' ? 'All Games' : (
                  <>
                    {selectedCategory === 'action' && '⚔️ Action Games'}
                    {selectedCategory === 'racing' && '🏎️ Racing Games'}
                    {selectedCategory === 'puzzle' && '🧩 Puzzle Games'}
                  </>
                )}
              </h2>
              <p className="text-muted-foreground">
                {sortedGames.length} game{sortedGames.length !== 1 ? 's' : ''} available
                {selectedPlatform !== 'all' && ` • ${selectedPlatform === 'webgl' ? 'WebGL/PC' : 'Mobile'} only`}
              </p>
            </motion.div>

            {/* Games Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {sortedGames.map((game, index) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    index={index}
                    onClick={() => handleGameClick(game)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {sortedGames.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <div className="w-24 h-24 mb-6 rounded-2xl glass flex items-center justify-center">
                  <span className="text-5xl">🎮</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">No games found</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </motion.div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Game Modal */}
      <GameModal
        game={selectedGame}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
