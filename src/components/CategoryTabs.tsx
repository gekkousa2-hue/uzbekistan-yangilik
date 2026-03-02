import { categories } from '@/data/mockData';

interface CategoryTabsProps {
  active: string;
  onSelect: (id: string) => void;
}

const CategoryTabs = ({ active, onSelect }: CategoryTabsProps) => {
  return (
    <div className="px-4 py-3 bg-card border-b border-border">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              active === cat.id
                ? 'gradient-primary text-primary-foreground shadow-md shadow-primary/25'
                : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
