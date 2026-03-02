import { ArrowLeft, Settings, Heart, Bookmark, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';

const Profile = () => {
  const navigate = useNavigate();
  const { likedPosts, savedPosts } = useApp();

  const stats = [
    { icon: Heart, label: "Yoqtirilgan", count: likedPosts.size, color: 'text-coral' },
    { icon: Bookmark, label: "Saqlangan", count: savedPosts.size, color: 'text-primary' },
    { icon: MessageCircle, label: "Izohlar", count: 0, color: 'text-secondary' },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate('/')} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-black text-foreground">Profil</h1>
          <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
            <Settings size={20} />
          </button>
        </div>
      </header>

      <div className="px-4 py-6">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center text-4xl shadow-lg shadow-primary/25">
            🙂
          </div>
          <h2 className="text-xl font-black text-foreground mt-4">Foydalanuvchi</h2>
          <p className="text-sm text-muted-foreground mt-1">UzFeed a'zosi</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-2xl p-4 text-center border border-border">
              <s.icon size={22} className={`mx-auto ${s.color}`} />
              <p className="text-2xl font-black text-foreground mt-2">{s.count}</p>
              <p className="text-xs text-muted-foreground font-bold mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="mt-8 space-y-2">
          {[
            { label: "Saqlangan postlar", icon: "🔖", action: () => navigate('/saved') },
            { label: "Bildirishnomalar", icon: "🔔", action: () => {} },
            { label: "Qorong'u rejim", icon: "🌙", action: () => {} },
            { label: "Yordam", icon: "❓", action: () => {} },
          ].map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="w-full flex items-center gap-3 px-4 py-3.5 bg-card rounded-2xl border border-border text-left hover:bg-muted transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-bold text-foreground">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
