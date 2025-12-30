import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  FolderOpen,
  FileCode,
  ExternalLink,
  Github,
  ChevronRight,
  Maximize2,
  Minimize2,
  RefreshCw,
  Lock
} from "lucide-react";
import { Project } from "@/data/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface ProjectsTabProps {
  selectedProject: Project | null;
}


export function ProjectsTab({ selectedProject }: ProjectsTabProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      setIframeLoading(true);
    }
  }, [selectedProject]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const refreshIframe = () => {
    const iframe = document.getElementById(
      "preview-iframe"
    ) as HTMLIFrameElement | null;

    if (iframe) {
      setIframeLoading(true);
      iframe.src = iframe.src;
    }
  };

  const toggleFullscreen = () => {
    const container = document.getElementById("preview-container");
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => { });
    } else {
      document.exitFullscreen();
    }
  };

  if (!selectedProject) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-full flex items-center justify-center text-muted-foreground"
      >
        <div className="text-center">
          <Folder size={48} className="mx-auto mb-4 opacity-50" />
          <p>Select a project from the explorer to view details</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-full flex flex-col lg:flex-row">
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Project Details */}
        <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3 mb-4">
                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#cccccc]">
                        {selectedProject.name}
                      </h1>
                      <p className="text-sm  sm:text-base text-[#858585] mt-1 sm:mt-2 leading-relaxed line-clamp-2"  >
                        {selectedProject.description}
                      </p>
                    </div>
                  </div>


                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {/* VIEW CODE (PRIVATE PROJECT) */}
                    {selectedProject.github && (
                      <TooltipProvider delayDuration={150}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.button
                              type="button"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-[#252526] border border-[#333333] text-[#cccccc] rounded-lg hover:bg-[#2a2d2e] transition-colors cursor-not-allowed"
                            >
                              <Github size={18} />
                              <span>View Code</span>
                            </motion.button>
                          </TooltipTrigger>

                          <TooltipContent
                            side="top"
                            className="bg-[#1e1e1e] border border-[#333333] text-[#cccccc]"
                          >
                            <div className="flex items-center gap-2 text-xs">
                              <Lock size={12} />
                              <span>Private Project</span>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}

                    {/* LIVE BUTTON */}
                    {selectedProject.live && (
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#0e639c] text-white rounded-lg hover:bg-[#1177bb] transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Open Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* VS Code Themed Project Details Cards */}
              <div className="space-y-6 mb-8">
                {/* Problem Card */}
                <div className="bg-[#252526] border border-[#333333] rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-[#1e1e1e] border-b border-[#333333]">
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-[#ff6b6b]"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [1, 0.6, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="text-sm font-semibold text-[#cccccc] uppercase tracking-wider">Problem Statement</span>
                    </div>
                    <span className="text-xs text-[#858585]">problem.ts</span>
                  </div>
                  <div className="p-6 font-mono">
                    <div className="text-[#6a9955]">// Challenge faced by users</div>
                    <div className="mt-4 text-[#cccccc] leading-relaxed">{selectedProject.problem}</div>
                  </div>
                </div>

                {/* Solution Card */}
                <div className="bg-[#252526] border border-[#333333] rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-[#1e1e1e] border-b border-[#333333]">
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-[#03b65d]"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [1, 0.6, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <span className="text-sm font-semibold text-[#cccccc] uppercase tracking-wider">Solution Approach</span>
                    </div>
                    <span className="text-xs text-[#858585]">solution.ts</span>
                  </div>
                  <div className="p-6 font-mono">
                    <div className="text-[#6a9955]">// Technical implementation</div>
                    <div className="mt-4 text-[#cccccc] leading-relaxed">{selectedProject.solution}</div>
                    <div className="mt-6 pt-4 border-t border-[#333333]">
                      <div className="text-[#6a9955]">// Tech Stack Used</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-[#0e639c]/20 border border-[#0e639c]/30 text-[#4ec9b0] text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Card */}
                <div className="bg-[#252526] border border-[#333333] rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-[#1e1e1e] border-b border-[#333333]">
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-[#3794ff]"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [1, 0.6, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="text-sm font-semibold text-[#cccccc] uppercase tracking-wider">Impact & Results</span>
                    </div>
                    <span className="text-xs text-[#858585]">impact.ts</span>
                  </div>
                  <div className="p-6 font-mono">
                    <div className="text-[#6a9955]">// Measurable outcomes</div>
                    <div className="mt-4 text-[#4ec9b0] leading-relaxed font-medium">{selectedProject.impact}</div>
                    <div className="mt-6 pt-4 border-t border-[#333333]">
                      <div className="text-[#6a9955]">// Key Metrics</div>
                      <div className="mt-2 text-[#dcdcaa] text-sm">
                        ✓ Performance improvements quantified
                        <br />
                        ✓ User engagement metrics tracked
                        <br />
                        ✓ Business impact measured
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Live Preview Panel */}
        <div className="h-fit lg:w-1/2 xl:w-2/5 border-t lg:border-t-0 lg:border-l border-[#333333] bg-[#1e1e1e]">
          <div className="p-4 border-b border-[#333333] bg-[#252526]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27ca3f] rounded-full"></div>
                </div>
                <h3 className="font-semibold text-[#cccccc]">LIVE PREVIEW</h3>
              </div>

              <div className="flex items-center gap-2">
                {/* View Toggle */}
                <div className="flex items-center bg-[#2a2d2e] rounded-lg p-1">
                  <button
                    onClick={() => setMobileView(false)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${!mobileView ? 'bg-[#0e639c] text-white' : 'text-[#858585]'}`}
                  >
                    Desktop
                  </button>
                  <button
                    onClick={() => setMobileView(true)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${mobileView ? 'bg-[#0e639c] text-white' : 'text-[#858585]'}`}
                  >
                    Mobile
                  </button>
                </div>

                {/* Preview Controls */}
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#0e639c] text-white rounded-lg hover:bg-[#1177bb] transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink size={18} />
                </a>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 hover:bg-[#2a2d2e] rounded-lg transition-colors"
                  title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ?
                    <Minimize2 size={18} className="text-[#cccccc]" /> :
                    <Maximize2 size={18} className="text-[#cccccc]" />
                  }
                </button>
              </div>
            </div>

            {/* URL Bar */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 bg-[#2a2d2e] rounded-lg px-4 py-2 text-sm font-mono truncate text-[#cccccc]">
                {selectedProject.live || "https://example.com"}
              </div>

              <button
                onClick={refreshIframe}
                className="p-2 hover:bg-[#2a2d2e] rounded-lg transition-colors"
                title="Refresh preview"
              >
                <RefreshCw size={18} className="text-[#cccccc]" />
              </button>
            </div>
          </div>

          {/* Iframe Preview Container */}
          <div
            id="preview-container"
            className="relative overflow-hidden bg-[#000000]"
            style={{ height: "calc(100vh - 200px)" }}
          >
            {iframeLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#1e1e1e] z-10">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-[#0e639c]/20 border-t-[#0e639c] rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-[#858585]">Loading preview...</p>
                </div>
              </div>
            )}

            <iframe
              id="preview-iframe"
              src={selectedProject.live}
              className={`w-full h-full transition-all duration-300 ${mobileView ? 'max-w-md mx-auto' : ''}`}
              style={{
                transform: mobileView ? 'scale(0.9)' : 'scale(1)',
                transformOrigin: 'top center'
              }}
              onLoad={() => setIframeLoading(false)}
              onError={() => setIframeLoading(false)}
              title="Live project preview"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              loading="lazy"
            />
          </div>

          {/* Preview Info */}
          <div className="p-4 border-t border-[#333333] bg-[#252526]">
            <div className="flex items-center justify-between text-sm text-[#858585]">
              <div className="flex items-center gap-4">

                <span className="flex items-center gap-1">
                  <motion.div
                    className="w-2 h-2 bg-[#27ca3f] rounded-full "
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [1, 0.6, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  Live Preview
                </span>
                <motion.span
                  className="inline-block"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  •
                </motion.span>


                <span>
                  Real-time rendering
                </span>
              </div>

              <span className="text-xs px-2 py-1 bg-[#2a2d2e] text-[#cccccc] rounded">
                {mobileView ? "MOBILE VIEW" : "DESKTOP VIEW"}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}