import { useEffect, useState } from 'react';
import otcLogo from '@/assets/otc-logo-new.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-50 bg-background flex items-center justify-center animate-fade-out">
        <div className="text-center animate-scale-out">
          <img 
            src={otcLogo} 
            alt="Oxnard Trading & Contracting" 
            className="w-32 h-32 mx-auto mb-6 animate-pulse"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-background via-background to-muted flex items-center justify-center animate-fade-in">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 via-brand-blue/20 to-brand-purple/20 rounded-full blur-2xl animate-pulse"></div>
          <img 
            src={otcLogo} 
            alt="Oxnard Trading & Contracting" 
            className="relative w-32 h-32 mx-auto animate-[spin_3s_ease-in-out_infinite]"
          />
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-bold gradient-text animate-[fade-in_1s_ease-out_0.5s_both]">
            Oxnard Trading & Contracting
          </h2>
          <p className="text-muted-foreground animate-[fade-in_1s_ease-out_1s_both]">
            High-Performance Fire Protection Solutions
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-muted rounded-full mx-auto mt-8 overflow-hidden animate-[fade-in_1s_ease-out_1.5s_both]">
          <div className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full animate-[loading-bar_2.5s_ease-out_forwards]"></div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6 animate-[fade-in_1s_ease-out_2s_both]">
          <div className="w-2 h-2 bg-brand-cyan rounded-full animate-[bounce_1s_infinite_0s]"></div>
          <div className="w-2 h-2 bg-brand-blue rounded-full animate-[bounce_1s_infinite_0.2s]"></div>
          <div className="w-2 h-2 bg-brand-purple rounded-full animate-[bounce_1s_infinite_0.4s]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;