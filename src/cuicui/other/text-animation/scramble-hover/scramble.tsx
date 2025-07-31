import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../../../lib/utils';

interface ScrambleHoverProps {
  text: string;
  scrambleSpeed?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'center' | 'end';
  useOriginalCharsOnly?: boolean;
  className?: string;
  characters?: string;
}

const ScrambleHover: React.FC<ScrambleHoverProps> = ({
  text,
  scrambleSpeed = 40,
  sequential = true,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  className = '',
  characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;\':\,./<>?'
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);
  const animationRef = useRef<number | null>(null);

  const getRandomChar = () => {
    if (useOriginalCharsOnly) {
      return text[Math.floor(Math.random() * text.length)];
    }
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const scrambleText = () => {
    const textArray = text.split('');
    let revealedIndices: Set<number> = new Set();
    let step = 0;

    const getRevealOrder = () => {
      const indices = Array.from({ length: text.length }, (_, i) => i);
      
      switch (revealDirection) {
        case 'center':
          const center = Math.floor(text.length / 2);
          return indices.sort((a, b) => Math.abs(a - center) - Math.abs(b - center));
        case 'end':
          return indices.reverse();
        default: // 'start'
          return indices;
      }
    };

    const revealOrder = getRevealOrder();

    intervalRef.current = setInterval(() => {
      const newText = textArray.map((char, index) => {
        if (char === ' ') return ' ';
        
        if (revealedIndices.has(index)) {
          return char;
        }
        
        return getRandomChar();
      }).join('');

      setDisplayText(newText);

      if (sequential && step < text.length) {
        const indexToReveal = revealOrder[step];
        if (text[indexToReveal] !== ' ') {
          revealedIndices.add(indexToReveal);
          step++;
        } else {
          step++;
        }
      } else if (!sequential) {
        // Randomly reveal characters
        const unrevealedIndices = revealOrder.filter(i => !revealedIndices.has(i) && text[i] !== ' ');
        if (unrevealedIndices.length > 0 && Math.random() < 0.3) {
          const randomIndex = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
          revealedIndices.add(randomIndex);
        }
      }

      if (revealedIndices.size >= text.replace(/\s/g, '').length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setDisplayText(text);
      }
    }, scrambleSpeed);
  };

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    scrambleText();
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Delay before returning to original text
    animationRef.current = setTimeout(() => {
      setDisplayText(text);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  return (
    <span
      className={cn(
        'inline-block cursor-pointer transition-colors duration-200',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </span>
  );
};

export default ScrambleHover;
