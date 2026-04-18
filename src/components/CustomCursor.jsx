import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  // Use refs for positions to avoid re-renders on every mouse move
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth lerp (linear interpolation) for the outer ring
      // higher divisor = slower/smoother movement
      const lerpAmount = 0.15;
      
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerpAmount;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerpAmount;
      
      // Faster lerp for the inner dot
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.4;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.4;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(-50%, -50%) translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(-50%, -50%) translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, input, select, .double-bezel, .card, details summary').forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    const animationId = requestAnimationFrame(animate);
    setTimeout(handleLinkHoverEvents, 500);

    const observer = new MutationObserver(() => handleLinkHoverEvents());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  const cursorClasses = `custom-cursor ${hidden ? 'c-hidden' : ''} ${clicked ? 'c-clicked' : ''} ${linkHovered ? 'c-hover' : ''}`;

  return (
    <>
      <div ref={cursorRef} className={cursorClasses} />
      <div ref={dotRef} className={`custom-cursor-dot ${hidden ? 'c-hidden' : ''}`} />
    </>
  );
}
