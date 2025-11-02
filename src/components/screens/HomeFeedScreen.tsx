import React, { useState } from 'react';
import { AdCard } from '../AdCard';
import { PlusCircle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface HomeFeedScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeFeedScreen({ onNavigate }: HomeFeedScreenProps) {
  const { isDarkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const ads = [
    {
      brandName: "Nike",
      description: "Just Do It - Nouvelle collection printemps 2025",
      imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      likes: 12543,
      comments: 234,
      shares: 89
    },
    {
      brandName: "Apple",
      description: "iPhone 15 Pro - Titanium. So strong. So light.",
      imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5",
      likes: 34521,
      comments: 892,
      shares: 456
    },
    {
      brandName: "Tesla",
      description: "Model 3 - The future of electric vehicles",
      imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
      likes: 28930,
      comments: 567,
      shares: 321
    },
    {
      brandName: "Adidas",
      description: "Impossible is Nothing - Ultraboost 2025",
      imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      likes: 15678,
      comments: 345,
      shares: 167
    }
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const itemHeight = e.currentTarget.clientHeight;
    const newIndex = Math.round(scrollTop / itemHeight);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-black'} relative`}>
      {/* Feed container */}
      <div 
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        onScroll={handleScroll}
      >
        {ads.map((ad, index) => (
          <div key={index} className="w-full h-full snap-start">
            <AdCard {...ad} />
          </div>
        ))}
      </div>

      {/* Floating action button */}
      <button
        onClick={() => onNavigate('create')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 z-40"
      >
        <PlusCircle size={28} className="text-white" />
      </button>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
