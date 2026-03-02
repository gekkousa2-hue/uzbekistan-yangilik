import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { useState } from 'react';
import { posts } from '@/data/mockData';
import { useApp } from '@/context/AppContext';
import CommentSheet from '@/components/CommentSheet';
import { toast } from 'sonner';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);
  const [commentOpen, setCommentOpen] = useState(false);
  const { toggleLike, toggleSave, isLiked, isSaved, getLikeCount } = useApp();

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-3">😕</p>
          <p className="text-muted-foreground font-bold">Post topilmadi</p>
          <button onClick={() => navigate('/')} className="mt-4 text-primary font-bold text-sm">
            Bosh sahifaga qaytish
          </button>
        </div>
      </div>
    );
  }

  const liked = isLiked(post.id);
  const saved = isSaved(post.id);
  const likeCount = getLikeCount(post.id, post.likes);

  const formatCount = (n: number) => {
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return n.toString();
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: post.title, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Havola nusxalandi!");
      }
    } catch {}
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground">
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-foreground truncate">{post.author}</p>
            <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
          </div>
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
            post.type === 'meme' ? 'gradient-accent text-accent-foreground' : 'gradient-green text-secondary-foreground'
          }`}>
            {post.type === 'meme' ? 'Mem' : 'Yangilik'}
          </span>
        </div>
      </header>

      {/* Image */}
      <img src={post.imageUrl} alt={post.title} className="w-full aspect-video object-cover" />

      {/* Content */}
      <div className="px-4 py-4">
        <h1 className="text-xl font-black text-foreground leading-tight">{post.title}</h1>
        {post.description && (
          <p className="text-base text-muted-foreground mt-3 leading-relaxed">{post.description}</p>
        )}
        {post.city && (
          <span className="inline-block mt-3 px-3 py-1 rounded-full bg-muted text-xs font-bold text-foreground">
            📍 {post.city}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-border mx-4 rounded-2xl bg-card">
        <div className="flex items-center gap-5">
          <button onClick={() => toggleLike(post.id, post.likes)} className={`flex items-center gap-1.5 transition-all ${liked ? 'text-coral' : 'text-muted-foreground'}`}>
            <Heart size={24} fill={liked ? 'currentColor' : 'none'} className={liked ? 'animate-heart-pop' : ''} />
            <span className="text-sm font-bold">{formatCount(likeCount)}</span>
          </button>
          <button onClick={() => setCommentOpen(true)} className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <MessageCircle size={24} />
            <span className="text-sm font-bold">{formatCount(post.comments)}</span>
          </button>
          <button onClick={handleShare} className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <Share2 size={24} />
            <span className="text-sm font-bold">{formatCount(post.shares)}</span>
          </button>
        </div>
        <button onClick={() => toggleSave(post.id)} className={`transition-all ${saved ? 'text-primary' : 'text-muted-foreground'}`}>
          <Bookmark size={24} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>

      <CommentSheet postId={post.id} isOpen={commentOpen} onClose={() => setCommentOpen(false)} />
    </div>
  );
};

export default PostDetail;
