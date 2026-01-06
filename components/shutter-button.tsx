"use client";

import { useState, ReactNode, useEffect, cloneElement } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ShutterButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  content?: ReactNode; // Optional content to show after shutter effect
}

export default function ShutterButton({
  children,
  onClick,
  href,
  className = "",
  content
}: ShutterButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isAnimating) return;

    setIsAnimating(true);
    setIsActive(true);

    // After the shutters close, reveal content or navigate
    setTimeout(() => {
      if (onClick) {
        onClick();
      } else if (href) {
        router.push(href);
      }

      // Start revealing the shutters after a delay to show content
      setTimeout(() => {
        setIsActive(false);
      }, 300);
    }, 600); // Duration of shutter closing animation
  };

  // Reset animation state when shutters are fully revealed
  useEffect(() => {
    if (!isActive && isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 800); // Duration of shutter opening animation

      return () => clearTimeout(timer);
    }
  }, [isActive, isAnimating]);

  // If the child is a Link element, extract its props to apply to our button
  const isLink = (children as any).type?.name === Link?.name || (children as any).type === Link;

  if (isLink) {
    const childProps = (children as any).props;
    const linkClassName = childProps.className || '';
    const linkChildren = childProps.children;

    return (
      <>
        <button
          onClick={handleClick}
          className={`${linkClassName} ${className}`}
          disabled={isAnimating}
        >
          {linkChildren}
        </button>

        {isAnimating && (
          <div className={`shutter-overlay ${isActive ? 'active' : 'revealing'}`}>
            <div className="shutter-top"></div>
            <div className="shutter-bottom"></div>
          </div>
        )}

        {content && !isAnimating && !isActive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {content}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={className}
        disabled={isAnimating}
      >
        {children}
      </button>

      {isAnimating && (
        <div className={`shutter-overlay ${isActive ? 'active' : 'revealing'}`}>
          <div className="shutter-top"></div>
          <div className="shutter-bottom"></div>
        </div>
      )}

      {content && !isAnimating && !isActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {content}
        </div>
      )}
    </>
  );
}