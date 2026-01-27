export interface Game {
  id: string;
  title: string;
  category: 'action' | 'racing' | 'puzzle';
  type: 'webgl' | 'mobile';
  image: string;
  isFeatured: boolean;
}

export const games: Game[] = [
  {
    id: '1',
    title: 'Cyber Assault',
    category: 'action',
    type: 'webgl',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Neon Racer X',
    category: 'racing',
    type: 'webgl',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&q=80',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Mind Maze',
    category: 'puzzle',
    type: 'mobile',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&q=80',
    isFeatured: false,
  },
  {
    id: '4',
    title: 'Battle Royale',
    category: 'action',
    type: 'webgl',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80',
    isFeatured: false,
  },
  {
    id: '5',
    title: 'Speed Drift',
    category: 'racing',
    type: 'mobile',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f76cf?w=800&q=80',
    isFeatured: false,
  },
  {
    id: '6',
    title: 'Block Builder',
    category: 'puzzle',
    type: 'webgl',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&q=80',
    isFeatured: false,
  },
  {
    id: '7',
    title: 'Zombie Survival',
    category: 'action',
    type: 'mobile',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    isFeatured: false,
  },
  {
    id: '8',
    title: 'Color Match',
    category: 'puzzle',
    type: 'mobile',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?w=800&q=80',
    isFeatured: false,
  },
  {
    id: '9',
    title: 'Turbo GP',
    category: 'racing',
    type: 'webgl',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    isFeatured: true,
  },
  {
    id: '10',
    title: 'Ninja Strike',
    category: 'action',
    type: 'webgl',
    image: 'https://images.unsplash.com/photo-1559363126-42e0f81e9f17?w=800&q=80',
    isFeatured: false,
  },
];

export const categories = [
  { id: 'all', label: 'All Games', icon: '🎮' },
  { id: 'action', label: 'Action', icon: '⚔️' },
  { id: 'racing', label: 'Racing', icon: '🏎️' },
  { id: 'puzzle', label: 'Puzzle', icon: '🧩' },
] as const;

export const platforms = [
  { id: 'all', label: 'All Platforms', icon: '📱' },
  { id: 'webgl', label: 'WebGL / PC', icon: '🖥️' },
  { id: 'mobile', label: 'Mobile', icon: '📲' },
] as const;
