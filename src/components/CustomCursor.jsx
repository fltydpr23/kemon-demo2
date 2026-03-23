import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const curRef = useRef(null);
  const curRRef = useRef(null);

  useEffect(() => {
    let mx = -100, my = -100, rx = -100, ry = -100;
    let req;

    const mouseMove = (e) => { 
        mx = e.clientX; 
        my = e.clientY; 
        if(curRef.current) { 
            curRef.current.style.left = mx + 'px'; 
            curRef.current.style.top = my + 'px'; 
        } 
    };

    const loop = () => { 
        rx += (mx - rx) * 0.12; 
        ry += (my - ry) * 0.12; 
        if (curRRef.current) { 
            curRRef.current.style.left = rx + 'px'; 
            curRRef.current.style.top = ry + 'px'; 
        } 
        req = requestAnimationFrame(loop); 
    };

    const mouseOver = (e) => { 
        if (e.target.closest('button, .clickable, li, .pf-card, a')) { 
            if(curRef.current) curRef.current.style.transform = 'translate(-50%,-50%) scale(2.4)'; 
            if(curRRef.current) curRRef.current.style.opacity = '1'; 
        } 
    };

    const mouseOut = (e) => { 
        if (e.target.closest('button, .clickable, li, .pf-card, a')) { 
            if(curRef.current) curRef.current.style.transform = 'translate(-50%,-50%) scale(1)'; 
            if(curRRef.current) curRRef.current.style.opacity = '0.6'; 
        } 
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', mouseOver);
    window.addEventListener('mouseout', mouseOut);
    req = requestAnimationFrame(loop);

    return () => { 
        window.removeEventListener('mousemove', mouseMove); 
        window.removeEventListener('mouseover', mouseOver); 
        window.removeEventListener('mouseout', mouseOut); 
        cancelAnimationFrame(req); 
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef}></div>
      <div id="curR" ref={curRRef}></div>
    </>
  );
}
