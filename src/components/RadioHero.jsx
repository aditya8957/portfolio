import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const stations = [
  { freq: "88.1", label: "ABOUT", text: "CS student focused on full-stack and DSA." },
  { freq: "92.5", label: "SKILLS", text: "Java,MERN stack, MySQL." },
  { freq: "98.3", label: "PROJECTS", text: "E-commerce, Task Manager, Weather App." },
  { freq: "101.7", label: "CONTACT", text: "Open to internships and collaborations." },
];


export default function RadioHero() {
  const rotation = useMotionValue(0);
  const snapped = useTransform(rotation, (v) =>
    Math.round(v / 90) * 90
  );

  const [index, setIndex] = useState(1);

  useEffect(() => {
    const unsubscribe = snapped.on("change", (v) => {
      const i = ((v / 90) % stations.length + stations.length) % stations.length;
      setIndex(i);
    });
    return () => unsubscribe();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 z-40"
    >
      <div className="relative w-[360px] h-[360px] rounded-full flex items-center justify-center">

        {/* SIGNAL WAVES */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-purple-500/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-purple-500/10"
        />

        {/* GRAIN */}
        <div className="absolute inset-0 rounded-full bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

        {/* CENTER DIAL */}
        <motion.div
          drag="rotate"
          dragElastic={0.15}
          style={{ rotate: rotation }}
          dragConstraints={{ left: 0, right: 0 }}
          className="
            w-40 h-40 rounded-full cursor-grab active:cursor-grabbing
            bg-gradient-to-br from-neutral-800 to-black
            border border-white/10
            shadow-[0_0_80px_rgba(168,85,247,0.35)]
            relative flex items-center justify-center
          "
        >
          {/* Dial Marks */}
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-3 bg-purple-400/60"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-70px)`,
              }}
            />
          ))}

          {/* Indicator */}
          <div className="absolute top-2 w-1 h-8 bg-purple-400 rounded-full shadow-lg" />
        </motion.div>

        {/* FREQUENCY HUD */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -bottom-20 text-center"
        >
          <div className="text-purple-300 text-3xl font-mono tracking-widest">
            {stations[index].freq} FM
          </div>
          <div className="text-xs text-purple-400 tracking-[0.3em] mt-1">
            {stations[index].label}
          </div>
          <div className="text-sm text-gray-300 mt-2 max-w-xs">
            {stations[index].text}
          </div>
        </motion.div>

        {/* SCANLINE FLASH */}
        <motion.div
          key={index + "scan"}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 rounded-full bg-white/10 pointer-events-none"
        />
      </div>
    </motion.div>
  );
}
