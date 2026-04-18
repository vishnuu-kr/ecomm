import { useState, useRef } from 'react';

export function useTilt() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    // Scale from -10 to 10 degrees
    const tiltX = (y - 0.5) * 15;
    const tiltY = (x - 0.5) * -15;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return {
    ref,
    style: {
      transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      transition: tilt.x === 0 ? 'transform 0.5s ease' : 'none'
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
}
