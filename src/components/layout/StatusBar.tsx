import { motion } from "framer-motion";
import {
  GitBranch,
  Check,
  Bell,
  Zap,
  AlertTriangle,
  Radio,
  AlertCircle,
  RefreshCcw,
  FileCode2,
} from "lucide-react";
import type { TabId } from "./VSCodeLayout";

interface StatusBarProps {
  activeTab: TabId;
}

const techStack = ["React", "TypeScript", "Django", "JAVA", "AWS"];

const tabFileMap: Record<TabId, string> = {
  welcome: "welcome.tsx",
  about: "README.md",
  projects: "projects.tsx",
  experience: "experience.tsx",
  contact: "contact.tsx",
};

export function StatusBar({ activeTab }: StatusBarProps) {
  return (
    <div className="h-7 bg-[#007acc] flex items-center justify-between px-3 text-[11px] text-white">
      {/* Left */}
      <div className="flex items-center gap-1 h-full">
        <button className="h-full px-2 bg-emerald-600 hover:bg-emerald-500 rounded-sm">
          <Radio size={12} />
        </button>

        <button className="h-full px-2 flex items-center gap-1 hover:bg-white/10 rounded-sm">
          <GitBranch size={12} />
          main
        </button>

        {/* 🔄 Sync animation */}
        <motion.button
          key={activeTab}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="h-full px-2 hover:bg-white/10 rounded-sm"
        >
          <RefreshCcw size={12} />
        </motion.button>

        <button className="h-full px-2 flex items-center gap-2 hover:bg-white/10 rounded-sm">
          <span className="flex items-center gap-1">
            <AlertCircle size={12} />0
          </span>
          <span className="flex items-center gap-1">
            <AlertTriangle size={12} />0
          </span>
        </button>
      </div>

      {/* Center */}
      <div className="hidden md:flex items-center gap-4">
        <Zap size={12} className="text-yellow-300" />

        <div className="flex gap-2">
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="px-2 py-0.5 bg-black/20 rounded text-[10px]"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* 🔥 Blinking availability */}
        <div className="flex items-center gap-2">
          <motion.span
            className="w-2.5 h-2.5 rounded-full bg-emerald-400"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.9, 1.2, 0.9],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="text-[10px]">Open to opportunities</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-1 h-full">
        {/* Active file */}
        <div className="h-full px-2 flex items-center gap-1 bg-black/20 rounded-sm">
          <FileCode2 size={12} />
          {tabFileMap[activeTab]}
        </div>

        <button className="h-full px-2 hover:bg-white/10 rounded-sm">
          UTF-8
        </button>

        <button className="h-full px-2 hover:bg-white/10 rounded-sm">
          TypeScript React
        </button>

        <button className="h-full px-2 hover:bg-white/10 rounded-sm">
          <Bell size={12} />
        </button>
      </div>
    </div>
  );
}
