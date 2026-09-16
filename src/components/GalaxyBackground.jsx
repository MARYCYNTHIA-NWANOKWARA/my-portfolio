import { useEffect, useState } from "react"

const STARS = Array.from({ length: 80 }).map((_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 71) % 100}%`,
  size: (i % 3) + 1,
  dur: 2 + (i % 4),
  delay: (i % 5) * 0.8,
}))

export default function GalaxyBackground() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }
    checkDark()
    // Watch for theme toggle
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  if (!isDark) return null

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes shoot {
          0% { transform: translate(-10vw, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(110vw, 30vh); opacity: 0; }
        }
      `}</style>

      <div className="fixed inset-0 -z-10 bg-[#050508] overflow-hidden pointer-events-none">
        {STARS.map((s) => (
          <div
            key={s.id}
            style={{
              position: "absolute",
              left: s.left,
              top: s.top,
              width: s.size + "px",
              height: s.size + "px",
              background: "white",
              borderRadius: "50%",
              animation: `twinkle ${s.dur}s infinite ease-in-out`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
        <div style={{ position: "absolute", top: "20%", width: "120px", height: "2px", background: "linear-gradient(90deg, transparent, white)", animation: "shoot 1.5s infinite ease-in", boxShadow: "0 0 10px white" }} />
        <div style={{ position: "absolute", top: "65%", width: "120px", height: "2px", background: "linear-gradient(90deg, transparent, #c81a6a)", animation: "shoot 1.2s infinite ease-in 3s", boxShadow: "0 0 10px #c81a6a" }} />

        <div className="absolute top-[-20%] left-[20%] w-150 h-150 bg-[#c81a6a]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-125 h-125 bg-violet-600/10 rounded-full blur-[120px]" />
      </div>
    </>
  )
}