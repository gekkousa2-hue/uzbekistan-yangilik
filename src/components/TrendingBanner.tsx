import { TrendingUp } from 'lucide-react';
import { posts, Post } from '@/data/mockData';

interface TrendingBannerProps {
  onPostClick: (post: Post) => void;
}

const TrendingBanner = ({ onPostClick }: TrendingBannerProps) => {
  const trending = posts.filter((p) => p.isTrending).slice(0, 4);

  return (
    <div className="px-4 py-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-lg gradient-trending flex items-center justify-center">
          <TrendingUp size={14} className="text-trending-foreground" />
        </div>
        <h2 className="text-base font-extrabold text-foreground">Trendda</h2>
      </div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
        {trending.map((post) => (
          <button
            key={post.id}
            onClick={() => onPostClick(post)}
            className="relative flex-shrink-0 w-36 h-48 rounded-2xl overflow-hidden group"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-primary-foreground text-xs font-bold leading-tight line-clamp-2">
                {post.title}
              </p>
              <span className="text-primary-foreground/70 text-[10px] mt-1 block">
                {post.timeAgo}
              </span>
            </div>
            {post.type === 'meme' && (
              <span className="absolute top-2 right-2 text-lg">😂</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrendingBanner;
