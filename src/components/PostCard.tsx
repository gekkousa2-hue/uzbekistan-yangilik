import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { useState } from 'react';
import type { Post } from '@/data/mockData';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((c) => (liked ? c - 1 : c + 1));
  };

  const formatCount = (n: number) => {
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return n.toString();
  };

  return (
    <article className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border animate-slide-up">
      {/* Author */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-2">
        <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-lg">
          {post.authorAvatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-foreground">{post.author}</p>
          <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
        </div>
        <span
          className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
            post.type === 'meme'
              ? 'gradient-accent text-accent-foreground'
              : 'gradient-green text-secondary-foreground'
          }`}
        >
          {post.type === 'meme' ? 'Mem' : 'Yangilik'}
        </span>
      </div>

      {/* Title */}
      <div className="px-4 pb-2">
        <h3 className="text-base font-extrabold text-foreground leading-snug">{post.title}</h3>
        {post.description && (
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.description}</p>
        )}
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full aspect-[4/3] object-cover"
          loading="lazy"
        />
        {post.city && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-bold text-foreground">
            📍 {post.city}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 transition-all ${
              liked ? 'text-coral' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Heart
              size={22}
              fill={liked ? 'currentColor' : 'none'}
              className={liked ? 'animate-heart-pop' : ''}
            />
            <span className="text-xs font-bold">{formatCount(likeCount)}</span>
          </button>
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <MessageCircle size={22} />
            <span className="text-xs font-bold">{formatCount(post.comments)}</span>
          </button>
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <Share2 size={22} />
            <span className="text-xs font-bold">{formatCount(post.shares)}</span>
          </button>
        </div>
        <button
          onClick={() => setSaved(!saved)}
          className={`transition-all ${
            saved ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Bookmark size={22} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>
    </article>
  );
};

export default PostCard;
