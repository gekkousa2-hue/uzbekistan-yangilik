import { useState } from 'react';
import { Send, Heart } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useApp } from '@/context/AppContext';

interface CommentSheetProps {
  postId: string;
  isOpen: boolean;
  onClose: () => void;
}

const CommentSheet = ({ postId, isOpen, onClose }: CommentSheetProps) => {
  const [text, setText] = useState('');
  const { getComments, addComment } = useApp();
  const comments = getComments(postId);

  const handleSend = () => {
    if (!text.trim()) return;
    addComment(postId, text.trim());
    setText('');
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="bottom" className="h-[70vh] rounded-t-3xl p-0">
        <SheetHeader className="px-4 pt-4 pb-2 border-b border-border">
          <SheetTitle className="text-base font-extrabold">
            Izohlar ({comments.length})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4" style={{ maxHeight: 'calc(70vh - 130px)' }}>
          {comments.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-3xl mb-2">💬</p>
              <p className="text-muted-foreground text-sm font-semibold">Birinchi izohni yozing!</p>
            </div>
          ) : (
            comments.map((c) => (
              <div key={c.id} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm flex-shrink-0">
                  {c.authorAvatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-foreground">{c.author}</span>
                    <span className="text-[10px] text-muted-foreground">{c.timeAgo}</span>
                  </div>
                  <p className="text-sm text-foreground mt-0.5">{c.text}</p>
                  <button className="flex items-center gap-1 mt-1 text-muted-foreground text-xs">
                    <Heart size={12} />
                    <span>{c.likes}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-card border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm flex-shrink-0">
              🙂
            </div>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Izoh yozing..."
              className="flex-1 bg-muted rounded-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              onClick={handleSend}
              disabled={!text.trim()}
              className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-primary-foreground disabled:opacity-40 transition-opacity"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CommentSheet;
