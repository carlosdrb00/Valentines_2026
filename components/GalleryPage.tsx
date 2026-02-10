import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Heart, Gift } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const navigate = useNavigate();

  const photos = [
    {
      id: 1,
      src: "images/Mi_cara.jpeg",
      alt: "Special portrait",
      caption: "Simply You ✨",
      description: "A very special moment"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
      alt: "Love and hearts",
      caption: "Warmth",
      description: "Captured with love"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1516589174184-c68526614af0?q=80&w=800&auto=format&fit=crop",
      alt: "Magic sparkles",
      caption: "Magic",
      description: "Sparkles of joy"
    }
  ];

  return (
    <div className="flex flex-col items-center w-full space-y-12 animate-fade-in">
      <div className="w-full flex justify-start">
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center text-rose-600 hover:text-rose-800 font-bold transition-all bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Question
        </button>
      </div>

      <div className="text-center space-y-6 max-w-3xl">
        <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg mb-2 rotate-[-3deg]">
            <Gift className="w-10 h-10 text-rose-500" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
          Your Special <span className="text-rose-600">Surprise</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
          Since you said yes (or of course!), here's a collection of beautiful moments just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-8 pb-20">
        {photos.map((photo, index) => (
          <div 
            key={photo.id}
            className={`group relative bg-white p-4 rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-[1deg] ${
              index === 0 ? 'md:scale-105 ring-4 ring-rose-200' : ''
            }`}
          >
            {index === 0 && (
              <div className="absolute -top-4 -right-4 bg-rose-500 text-white p-2 rounded-full shadow-lg z-20 animate-bounce">
                <Heart className="w-6 h-6 fill-current" />
              </div>
            )}
            
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-rose-50 relative">
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // If local image fails, show a placeholder but keep the request requirement clear
                  if (photo.id === 1) {
                    target.src = "https://picsum.photos/600/800?random=10";
                  }
                }}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-black text-2xl block mb-1">{photo.caption}</span>
                  <span className="text-rose-100 text-sm font-medium">{photo.description}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-rose-600 font-extrabold text-xl mb-1">{photo.caption}</h3>
              <div className="w-8 h-1 bg-rose-100 mx-auto rounded-full group-hover:w-16 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col items-center space-y-4 pt-4">
        <Sparkles className="w-12 h-12 text-rose-300 animate-spin-slow" />
        <p className="text-rose-400 font-bold text-lg">You're truly special!</p>
      </div>
      
      <div className="h-16"></div> {/* Bottom Spacer */}
    </div>
  );
};

export default GalleryPage;