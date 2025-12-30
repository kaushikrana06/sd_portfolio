import { educationData } from "@/data/data";
import { AnimatePresence, motion } from "framer-motion";
import { User, MapPin, Mail, Calendar, Award, BookOpen, Download } from "lucide-react";
import { useEffect, useState } from "react";
const content = `
# kaushik rana

## Software Engineer



Building scalable web applications with the Django and React. Specializing in high-performance fullstack experiences, 
robust Django backends, and production-ready full-stack solutions using ProstgreSQL, Python, React, and AWS.

## About Me

Hi, I am kaushik rana, a problem-solving oriented Full Stack Developer with 2+ years of hands-on experience building scalable, 
high-performance web applications. I enjoy working on unique, real-world projects that solve meaningful problems.

My expertise spans the full-stack development lifecycle—from crafting responsive React interfaces to designing robust Django 
& FastAPIs and optimizing PostgreSQL databases for scale and performance.I believe in building applications that are not just functional, 
but also scalable, reliable, and production-ready.

---

## Philosophy

> "The best code is no code at all. The best AI is one that solves real problems elegantly."

I approach every project with a focus on impact. Before writing a single line of code, 
I ask: What problem are we solving? Who benefits? How do we measure success?

---

## Education

- **Carmel Junior College** — 12th Grade - WBCHSE
- **Heritage Institute of Technology** — B.Tech in Computer Science and Engineering

---
`;


const formatDate = (date) => {
  if (!date) return "";
  if (/^\d{4}$/.test(date)) return date;

  const [month, year] = date.split("/");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return `${months[Number(month) - 1]} ${year}`;
};

export function AboutTab() {
  const lines = content.trim().split("\n");
  const roles = [
    "Software Engineer",
    "FullStack Developer",
    "React & TypeScript Specialist",
    "AI Software Engineer",
    "Django Developer",
    "AWS Enthusiast",
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
    <div className="min-h-full flex">
      {/* Line numbers */}
      <div className="hidden md:flex flex-col items-end pr-4 pl-4 py-6 select-none text-muted-foreground/50 font-mono text-sm border-r border-border">
        {lines.map((_, i) => (
          <div key={i} className="h-7 leading-7">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8 max-w-4xl">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-6 mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-glow-cyan flex items-center justify-center text-3xl font-bold text-primary-foreground"
          >
            <img src="/kaushik.jpeg" alt="Kaushik Rana" className="w-24 h-24 rounded-full object-cover" />
          </motion.div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground mb-2">Kaushik Rana</h1>
            <div className="h-[28px] overflow-hidden">
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
                  className="text-lg text-syntax-type mb-3"
                >
                  {roles[index]}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                Kolkata, IND
              </span>
              <span className="flex items-center gap-1">
                <Mail size={14} />
                kaushikrana.0603@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                2+ years
              </span>
            </div>
            {/* Download CV Button */}
            <motion.a
              href="/KAUSHIK RANA.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg
                 bg-primary text-primary-foreground text-sm font-medium
                 shadow hover:shadow-md transition"
            >
              <Download size={16} />
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Markdown Content */}
        <div className="prose prose-invert max-w-none">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/90 leading-relaxed mb-8"
          >
            Building scalable web applications with the Django and Reactjs. Specializing in high-performance frontend experiences, robust Django backends,
            and production-ready full-stack solutions using PostgreSQL, Django, React, and AWS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="border-t border-border pt-6 mb-6"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <User size={20} className="text-primary" />
              About Me
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Hi, I am kaushik rana, a problem-solving oriented Full Stack Developer with 2+ years of hands-on experience building scalable,
              high-performance web applications. I enjoy working on unique, real-world projects that solve meaningful problems.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My expertise spans the full-stack development lifecycle—from crafting responsive React interfaces to designing robust Django
              & Express APIs and optimizing PostgreSQL databases for scale and performance.I believe in building applications that are not just functional,
              but also maintainable, reliable, and production-ready.
            </p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="border-l-4 border-primary pl-4 py-2 my-6 text-muted-foreground italic"
          >
            "The best code is no code at all. The best AI is one that solves real
            problems elegantly."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border-t border-border pt-6 mb-6"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              Education
            </h2>
            <div className="relative space-y-6">
              <div className="absolute left-5 top-0 h-full w-px bg-border" />


              {educationData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative flex gap-4"
                  >
                    <div
                      className={`z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-white shadow-lg`}
                    >
                      <Icon size={18} />
                    </div>


                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="w-full rounded-xl border border-border bg-card p-4 shadow-sm backdrop-blur transition-all"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-semibold text-foreground">
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {item.title}
                            </a>
                          ) : (
                            item.title
                          )}
                        </h4>
                        {item.startDate && item.endDate && (
                          <span className="text-xs rounded-full border border-border px-2 py-0.5 text-muted-foreground">
                            {formatDate(item.startDate)} – {formatDate(item.endDate)}
                          </span>
                        )}

                      </div>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="border-t border-border pt-6"
          >
          </motion.div>
        </div>
      </div>
    </div>
  );
}
