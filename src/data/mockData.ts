export interface Post {
  id: string;
  type: 'news' | 'meme';
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
  city?: string;
  likes: number;
  comments: number;
  shares: number;
  timeAgo: string;
  author: string;
  authorAvatar: string;
  isTrending?: boolean;
}

export const categories = [
  { id: 'all', label: 'Hammasi', icon: '🔥' },
  { id: 'news', label: 'Yangiliklar', icon: '📰' },
  { id: 'memes', label: 'Memlar', icon: '😂' },
  { id: 'tashkent', label: 'Toshkent', icon: '🏙️' },
  { id: 'sport', label: 'Sport', icon: '⚽' },
  { id: 'tech', label: 'Texnologiya', icon: '💻' },
  { id: 'lifestyle', label: 'Turmush', icon: '🌟' },
];

export const posts: Post[] = [
  {
    id: '1',
    type: 'news',
    title: "Toshkentda yangi metro liniyasi ochildi",
    description: "Shahar transporti yanada qulay bo'ldi. Yangi stansiyalar orqali minglab yo'lovchilar tezroq yetib boradi.",
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
    category: 'tashkent',
    city: 'Toshkent',
    likes: 2453,
    comments: 187,
    shares: 342,
    timeAgo: '2 soat oldin',
    author: 'UzNews',
    authorAvatar: '📰',
    isTrending: true,
  },
  {
    id: '2',
    type: 'meme',
    title: "Dushanba kuni ishga borayotganda... 😅",
    imageUrl: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=600&h=600&fit=crop',
    category: 'memes',
    likes: 8721,
    comments: 432,
    shares: 1205,
    timeAgo: '30 daqiqa oldin',
    author: 'MemeUz',
    authorAvatar: '😂',
    isTrending: true,
  },
  {
    id: '3',
    type: 'news',
    title: "O'zbekiston IT sohasida yangi rekord",
    description: "Eksport hajmi 500 million dollardan oshdi. Yosh dasturchilar soni ortmoqda.",
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    category: 'tech',
    likes: 1876,
    comments: 95,
    shares: 267,
    timeAgo: '4 soat oldin',
    author: 'TechUz',
    authorAvatar: '💻',
    isTrending: true,
  },
  {
    id: '4',
    type: 'meme',
    title: "Osh tayyorlashni bilmaydigan kelin 🍳",
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=600&fit=crop',
    category: 'memes',
    likes: 12034,
    comments: 876,
    shares: 2341,
    timeAgo: '1 soat oldin',
    author: 'KulguUz',
    authorAvatar: '🤣',
  },
  {
    id: '5',
    type: 'news',
    title: "Samarqandda xalqaro festival boshlandi",
    description: "Dunyoning 40 dan ortiq mamlakatidan mehmonlar tashrif buyurdi.",
    imageUrl: 'https://images.unsplash.com/photo-1600959907703-125ba1374a12?w=600&h=400&fit=crop',
    category: 'lifestyle',
    city: 'Samarqand',
    likes: 3421,
    comments: 234,
    shares: 567,
    timeAgo: '5 soat oldin',
    author: 'MadaniyatUz',
    authorAvatar: '🎭',
  },
  {
    id: '6',
    type: 'news',
    title: "Futbol: O'zbekiston terma jamoasi g'alaba qozondi!",
    description: "Osiyo kubogi saralash bosqichida ajoyib natija.",
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
    category: 'sport',
    likes: 15678,
    comments: 2341,
    shares: 4532,
    timeAgo: '6 soat oldin',
    author: 'SportUz',
    authorAvatar: '⚽',
    isTrending: true,
  },
  {
    id: '7',
    type: 'meme',
    title: "Imtihon vaqtida talabalar holati 📚😰",
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=600&fit=crop',
    category: 'memes',
    likes: 6543,
    comments: 321,
    shares: 890,
    timeAgo: '3 soat oldin',
    author: 'StudentMemes',
    authorAvatar: '📚',
  },
  {
    id: '8',
    type: 'news',
    title: "Buxoroda yangi turizm loyihasi ishga tushdi",
    description: "Tarixiy shahar yanada ko'proq sayyohlarni jalb qiladi.",
    imageUrl: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&h=400&fit=crop',
    category: 'lifestyle',
    city: 'Buxoro',
    likes: 2100,
    comments: 143,
    shares: 289,
    timeAgo: '7 soat oldin',
    author: 'TurizmUz',
    authorAvatar: '✈️',
  },
];
