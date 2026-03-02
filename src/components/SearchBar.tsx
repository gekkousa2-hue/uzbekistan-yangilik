import { Search, X } from 'lucide-react';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  onQueryChange: (q: string) => void;
}

const SearchBar = ({ isOpen, onClose, query, onQueryChange }: SearchBarProps) => {
  if (!isOpen) return null;

  return (
    <div className="px-4 py-2 bg-card border-b border-border animate-slide-up">
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Yangilik yoki mem qidiring..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          autoFocus
          className="w-full pl-10 pr-10 py-2.5 bg-muted rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
        />
        <button
          onClick={onClose}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
