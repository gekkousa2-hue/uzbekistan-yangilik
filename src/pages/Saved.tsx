import { ArrowLeft, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { posts } from '@/data/mockData';
import { useApp } from '@/context/AppContext';
import PostCard from '@/components/PostCard';

const Saved = () => {
  const navigate = useNavigate();
  const { savedPosts } = useApp();
  const savedList = posts.filter((p) => savedPosts.has(p.id));

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={() => navigate('/')} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground">
            <ArrowLeft size={20} />
          </button>
          <Bookmark size={20} className="text-primary" />
          <h1 className="text-lg font-black text-foreground">Saqlangan</h1>
        </div>
      </header>

      <div className="px-4 py-3 space-y-4">
        {savedList.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🔖</p>
            <p className="text-muted-foreground font-semibold">Hali hech narsa saqlanmagan</p>
            <p className="text-muted-foreground text-sm mt-1">Postlarni saqlash uchun 🔖 tugmasini bosing</p>
          </div>
        ) : (
          savedList.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default Saved;
