import React, { useEffect, useState } from "react";



const TypingEffect = ({ text, speed = 100, delay = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout;

    // When text is fully typed, pause for 2 seconds
    if (index === text.length && !isDeleting) {
      setIsPaused(true);
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // 2 second pause
    } else {
      const typingSpeed = isDeleting ? speed * 0.6 : speed; // Make deletion a bit faster

      timeout = setTimeout(
        () => {
          if (isPaused) return;

          setIndex((prev) => {
            if (!isDeleting && prev < text.length) return prev + 1;
            if (isDeleting && prev > 0) return prev - 1;

            // When complete deletion, reset to typing mode
            if (isDeleting && prev === 0) {
              setIsDeleting(false);
              return 0;
            }

            return prev;
          });
        },
        isDeleting && index === 0 ? delay : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, isPaused, text, speed, delay]);

  // Cursor animation style
  const cursorStyle = {
    display: "inline-block",
    width: "3px",
    height: "0.9em",
    marginLeft: "2px",
    backgroundColor: "#6366f1",
    animation: "blink 1s step-end infinite",
  };

  // Text with gradient effect
  return (
    <div className="pb-8 font-thin lg:mt-16 lg:pb-8 text-gray-900 relative">
      <div className="relative">
        <span className="text-2xl lg:text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">
          {text.slice(0, index)}
        </span>
        <span
          style={cursorStyle}
          className="animate-pulse text-2xl lg:text-5xl"
        />
      </div>
    </div>
  );
};

export default TypingEffect;