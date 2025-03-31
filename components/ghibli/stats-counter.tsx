
import { useState, useEffect } from 'react';

interface StatsCounterProps {
  value: number;
  label: string;
  duration?: number;
}

export default function StatsCounter({ 
  value, 
  label, 
  duration = 2000 
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString());
    const incrementTime = duration / end;
    let timer: NodeJS.Timeout;
    
    const updateCount = () => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    };
    
    timer = setInterval(updateCount, incrementTime);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-purple-600">{count.toLocaleString()}</div>
      <p className="text-gray-700 mt-2">{label}</p>
    </div>
  );
}
