import { useEffect, useState } from "react";

const STARS = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 71) % 100}%`,
  size: i % 3 === 0 ? 2 : 1,
  duration: 3 + (i % 4),
  delay: (i % 5) * 0.7,
}));

export default function GalaxyBackground() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(
        document.documentElement.classList.contains("dark")
      );
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

 
  if (!isDark) {
    return null;
  }

  return (
    <>
      <style>
        {`
          @keyframes twinkle {
            0% {
              opacity: 0.25;
            }

            50% {
              opacity: 0.8;
            }

            100% {
              opacity: 0.25;
            }
          }
        `}
      </style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",

          overflow: "hidden",
          pointerEvents: "none",

          zIndex: 0,

          backgroundColor: "#050508",
        }}
      >


        {STARS.map((star) => (
          <div
            key={star.id}
            style={{
              position: "absolute",

              left: star.left,
              top: star.top,

              width: `${star.size}px`,
              height: `${star.size}px`,

              backgroundColor: "white",

              borderRadius: "50%",

              opacity: 0.3,

              animationName: "twinkle",
              animationDuration: `${star.duration}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}

       

        <div
          style={{
            position: "absolute",

            top: "-20%",
            left: "20%",

            width: "500px",
            height: "500px",

            backgroundColor: "rgba(200, 26, 106, 0.08)",

            borderRadius: "50%",

            filter: "blur(120px)",
          }}
        />


        <div
          style={{
            position: "absolute",

            bottom: "-15%",
            right: "5%",

            width: "450px",
            height: "450px",

            backgroundColor: "rgba(124, 58, 237, 0.06)",

            borderRadius: "50%",

            filter: "blur(120px)",
          }}
        />

      </div>
    </>
  );
}