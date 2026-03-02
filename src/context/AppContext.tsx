import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { Post, Comment } from '@/data/mockData';
import { mockComments } from '@/data/mockData';

interface AppState {
  likedPosts: Set<string>;
  savedPosts: Set<string>;
  likeCounts: Record<string, number>;
  comments: Record<string, Comment[]>;
  toggleLike: (postId: string, originalLikes: number) => void;
  toggleSave: (postId: string) => void;
  addComment: (postId: string, text: string) => void;
  getComments: (postId: string) => Comment[];
  isLiked: (postId: string) => boolean;
  isSaved: (postId: string) => boolean;
  getLikeCount: (postId: string, original: number) => number;
}

const AppContext = createContext<AppState | null>(null);

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [savedPosts, setSavedPosts] = useState<Set<string>>(new Set());
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({});
  const [comments, setComments] = useState<Record<string, Comment[]>>(mockComments);

  const toggleLike = useCallback((postId: string, originalLikes: number) => {
    setLikedPosts(prev => {
      const next = new Set(prev);
      const wasLiked = next.has(postId);
      if (wasLiked) next.delete(postId);
      else next.add(postId);

      setLikeCounts(lc => ({
        ...lc,
        [postId]: wasLiked ? (lc[postId] ?? originalLikes) - 1 : (lc[postId] ?? originalLikes) + 1,
      }));

      return next;
    });
  }, []);

  const toggleSave = useCallback((postId: string) => {
    setSavedPosts(prev => {
      const next = new Set(prev);
      if (next.has(postId)) next.delete(postId);
      else next.add(postId);
      return next;
    });
  }, []);

  const addComment = useCallback((postId: string, text: string) => {
    const newComment: Comment = {
      id: `c-${Date.now()}`,
      author: 'Siz',
      authorAvatar: '🙂',
      text,
      timeAgo: 'Hozirgina',
      likes: 0,
    };
    setComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment],
    }));
  }, []);

  const getComments = useCallback((postId: string) => comments[postId] || [], [comments]);
  const isLiked = useCallback((postId: string) => likedPosts.has(postId), [likedPosts]);
  const isSaved = useCallback((postId: string) => savedPosts.has(postId), [savedPosts]);
  const getLikeCount = useCallback((postId: string, original: number) => likeCounts[postId] ?? original, [likeCounts]);

  return (
    <AppContext.Provider value={{ likedPosts, savedPosts, likeCounts, comments, toggleLike, toggleSave, addComment, getComments, isLiked, isSaved, getLikeCount }}>
      {children}
    </AppContext.Provider>
  );
};
