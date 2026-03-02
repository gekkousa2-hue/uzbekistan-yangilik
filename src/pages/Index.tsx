import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CategoryTabs from '@/components/CategoryTabs';
import TrendingBanner from '@/components/TrendingBanner';
import PostCard from '@/components/PostCard';
import BottomNav from '@/components/BottomNav';
import { posts } from '@/data/mockData';

const Index = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = useMemo(() => {
    let result = posts;

    if (activeCategory !== 'all') {
      if (activeCategory === 'news') {
        result = result.filter((p) => p.type === 'news');
      } else if (activeCategory === 'memes') {
        result = result.filter((p) => p.type === 'meme');
      } else {
        result = result.filter((p) => p.category === activeCategory);
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header onSearchToggle={() => setSearchOpen(!searchOpen)} />
      <SearchBar
        isOpen={searchOpen}
        onClose={() => {
          setSearchOpen(false);
          setSearchQuery('');
        }}
        query={searchQuery}
        onQueryChange={setSearchQuery}
      />
      <CategoryTabs active={activeCategory} onSelect={setActiveCategory} />
      
      {activeCategory === 'all' && !searchQuery && (
        <TrendingBanner onPostClick={() => {}} />
      )}

      <div className="px-4 py-3 space-y-4">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-muted-foreground font-semibold">Hech narsa topilmadi</p>
          </div>
        ) : (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;
