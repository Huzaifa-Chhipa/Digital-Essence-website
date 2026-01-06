"use client";

import { useState, useEffect } from "react";

export default function NeonMouseTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    // Clean up event listeners
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main neon dot */}
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 rounded-full bg-white"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff",
        }}
      ></div>

      {/* Larger neon glow */}
      <div
        className="fixed pointer-events-none z-40 w-16 h-16 rounded-full opacity-30"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(139, 92, 246, 0.3) 50%, rgba(56, 189, 248, 0.1) 100%)",
          filter: "blur(8px)",
        }}
      ></div>
    </>
  );
}