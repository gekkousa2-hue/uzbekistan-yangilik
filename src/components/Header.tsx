import { Bell, Search } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onSearchToggle: () => void;
}

const Header = ({ onSearchToggle }: HeaderProps) => {
  const [hasNotification] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-black text-lg">U</span>
          </div>
          <h1 className="text-xl font-black text-foreground tracking-tight">UzFeed</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onSearchToggle}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Search size={20} />
          </button>
          <button className="relative w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Bell size={20} />
            {hasNotification && (
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-coral rounded-full border-2 border-card" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
