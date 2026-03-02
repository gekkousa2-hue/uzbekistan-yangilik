import { Home, Compass, PlusCircle, Bookmark, User } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { id: 'home', icon: Home, label: 'Bosh sahifa' },
  { id: 'explore', icon: Compass, label: 'Kashfiyot' },
  { id: 'create', icon: PlusCircle, label: 'Yaratish' },
  { id: 'saved', icon: Bookmark, label: 'Saqlangan' },
  { id: 'profile', icon: User, label: 'Profil' },
];

const BottomNav = () => {
  const [active, setActive] = useState('home');

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-1.5 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isCreate = item.id === 'create';
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-2xl transition-all ${
                isCreate
                  ? ''
                  : isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {isCreate ? (
                <div className="w-11 h-11 -mt-5 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <PlusCircle size={24} className="text-primary-foreground" />
                </div>
              ) : (
                <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              )}
              <span className={`text-[10px] font-bold ${isCreate ? 'mt-0' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
