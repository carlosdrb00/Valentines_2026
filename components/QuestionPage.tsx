import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles, Wand2 } from 'lucide-react';

const QuestionPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/gallery');
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-12 animate-fade-in-up">
      <div className="text-center space-y-6 bg-white/80 backdrop-blur-md p-8 md:p-16 rounded-[2.5rem] shadow-2xl max-w-2xl w-full border-4 border-rose-100 relative overflow-hidden group">
        {/* Decorative corner icons */}
        <Heart className="absolute -top-4 -left-4 w-12 h-12 text-rose-200 fill-current opacity-50 rotate-[-15deg]" />
        <Sparkles className="absolute -bottom-4 -right-4 w-12 h-12 text-rose-200 opacity-50 rotate-[15deg]" />

        <div className="flex justify-center mb-6">
          <div className="relative">
            <Heart className="w-24 h-24 text-rose-500 fill-current animate-pulse drop-shadow-lg" />
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-bounce" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
          Will you be my <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500">Valentine?</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-rose-400 font-semibold italic">
          (There's only one right answer!)
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <button
            onClick={handleNavigation}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-black text-white transition-all duration-300 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] active:scale-95 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              YES! <Wand2 className="ml-2 w-6 h-6 group-hover:rotate-12 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>

          <button
            onClick={handleNavigation}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-black text-rose-600 transition-all duration-300 bg-white border-4 border-rose-200 rounded-full hover:border-rose-400 hover:scale-105 hover:shadow-xl active:scale-95 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center">
              OF COURSE! <Heart className="ml-2 w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
            </span>
          </button>
        </div>
      </div>
      
      <p className="text-rose-300 font-medium animate-pulse text-sm">
        Click either button to see your surprise
      </p>
    </div>
  );
};

export default QuestionPage;