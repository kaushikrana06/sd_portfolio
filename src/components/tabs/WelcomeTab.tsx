import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Terminal,
  Code2,
  Cpu,
  Zap
} from "lucide-react";
import * as THREE from "three";

interface WelcomeTabProps {
  onFileClick: (tabId: string) => void;
}

export function WelcomeTab({ onFileClick }: WelcomeTabProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;
    
    setIsLoaded(true);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  const roles = [
    "Software Engineer",
    "AI-Driven UI Engineer",
    "Full-Stack Developer",
    "AI Software Engineer",
    "Django Developer",
    "React Developer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#1E1E1E]">
      {/* THREE CANVAS */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-6 py-12">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#252526] border border-[#333333] rounded-full mb-6">
            <Zap size={16} className="text-[#9CDCFE]" />
            <span className="text-sm text-[#9CDCFE]">
              Available for Opportunities
            </span>
          </div>

          {/* NAME */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-3">
            <span className="bg-gradient-to-r from-[#569CD6] via-[#4EC9B0] to-[#C586C0] bg-clip-text text-transparent">
              Kaushik Rana
            </span>
          </h1>

          {/* ROLE */}
          <div className="my-4 overflow-hidden text-2xl md:text-3xl mb-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[index]}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="
                  mb-3 font-medium
                  bg-gradient-to-r
                  from-[#fd8803] via-[#e7ab66] to-[#042b50]
                  bg-clip-text text-transparent
                "
              >
                {roles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* DESC */}
          <p className="text-lg text-[#d5d7d8] mb-12 max-w-2xl mx-auto">
            Crafting intelligent solutions with{" "}
            <span className="text-[#4EC9B0] font-semibold">Full Stack</span>, with{" "}
            <span className="text-[#4EC9B0] font-semibold">Django</span>,{" "}
            <span className="text-[#C586C0] font-semibold">React.js</span>, and{" "}
            <span className="text-[#569CD6] font-semibold">Production AI</span>
          </p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              style={{
                boxShadow: "0 0 25px rgba(86,156,214,0.45)"
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(86,156,214,0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFileClick("projects")}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#0E639C] to-[#1177BB] text-white rounded-xl font-semibold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1177BB] to-[#0E639C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <Sparkles size={20} />
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* STATS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full"
        >
          {[
            { icon: Code2, label: "Years Experience", value: "2+", color: "from-[#569CD6] to-[#4EC9B0]" },
            { icon: Sparkles, label: "Projects Delivered", value: "50+", color: "from-[#4EC9B0] to-[#6A9955]" },
            { icon: Cpu, label: "AI Models Deployed", value: "100+", color: "from-[#C586C0] to-[#CE9178]" },
            { icon: Zap, label: "Client Satisfaction", value: "99%", color: "from-[#CE9178] to-[#C586C0]" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#569CD6]/20 to-[#C586C0]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-6 bg-[#252526]/60 backdrop-blur-sm border border-[#333333] rounded-2xl hover:border-[#4EC9B0] transition-all">
                <div
                  className={`text-4xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-[#9DA1A6]">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* TECH STACK TAGS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 flex flex-wrap justify-center gap-3 max-w-4xl"
        >
          {[
            "Full Stack",
            "Django",
            "React.js",
            "LangChain",
            "JavaScript",
            "Shadcn UI",
            "Framer Motion",
            "Git & GitHub",
            "Production AI",
            "CI/CD",
            "REST APIs",
            "ProstgreSQL",
            "MysQL",
            "Docker",
            "AWS",
          ].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + i * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 bg-[#252526] border border-[#333333] rounded-full text-sm text-[#D4D4D4] hover:border-[#4EC9B0] hover:text-[#4EC9B0] transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}