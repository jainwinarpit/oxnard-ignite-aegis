import { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
  trigger?: boolean;
}

const CountUp = ({ end, duration = 2000, suffix = '', className = '', trigger = true }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trigger || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            startCountUp();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [trigger, hasStarted]);

  const startCountUp = () => {
    const startTime = Date.now();
    const increment = end / (duration / 16); // 60fps
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <div ref={elementRef} className={className}>
      {count}{suffix}
    </div>
  );
};

export default CountUp;