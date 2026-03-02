import { useState } from 'react';
import { Image, Send } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { toast } from 'sonner';

interface CreatePostSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostSheet = ({ isOpen, onClose }: CreatePostSheetProps) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState<'news' | 'meme'>('meme');

  const handleSubmit = () => {
    if (!title.trim()) {
      toast.error("Sarlavha kiriting!");
      return;
    }
    toast.success("Post yuborildi! ✨");
    setTitle('');
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="bottom" className="h-[60vh] rounded-t-3xl">
        <SheetHeader>
          <SheetTitle className="text-base font-extrabold">Yangi post yaratish</SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-4">
          {/* Type selector */}
          <div className="flex gap-2">
            <button
              onClick={() => setType('meme')}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                type === 'meme' ? 'gradient-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
              }`}
            >
              😂 Mem
            </button>
            <button
              onClick={() => setType('news')}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                type === 'news' ? 'gradient-green text-secondary-foreground' : 'bg-muted text-muted-foreground'
              }`}
            >
              📰 Yangilik
            </button>
          </div>

          {/* Title input */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Sarlavha yozing..."
            className="w-full bg-muted rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm font-semibold"
          />

          {/* Image upload area */}
          <div className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center gap-2 cursor-pointer hover:border-primary/40 transition-colors">
            <Image size={32} className="text-muted-foreground" />
            <p className="text-sm text-muted-foreground font-semibold">Rasm yuklash</p>
            <p className="text-xs text-muted-foreground">JPG, PNG, GIF</p>
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-xl gradient-primary text-primary-foreground font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
          >
            <Send size={16} />
            Yuborish
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CreatePostSheet;
