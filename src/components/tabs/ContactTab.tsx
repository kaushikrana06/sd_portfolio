import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, CheckCircle, Loader2, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function ContactTab() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "$ welcome to contact terminal",
    "$ type your message below...",
    "",
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate terminal animation
    const lines = [
      `$ Connecting to kaushik@portfolio...`,
      `$ Encrypting message...`,
      `$ Sending from: ${formState.email}`,
      `$ Subject: ${formState.subject}`,
      `$ ████████████████████ 100%`,
      `$ Message sent successfully! ✓`,
      `$ You'll hear back within 24 hours.`,
    ];

    for (let i = 0; i < lines.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setTerminalLines((prev) => [...prev, lines[i]]);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  
// const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const log = async (text: string) => {
//       setTerminalLines((prev) => [...prev, text]);
//       await new Promise((r) => setTimeout(r, 300));
//     };

//     try {
//       await log(`$ Connecting to mail server...`);
//       await log(`$ Name: ${formState.name}`);
//       await log(`$ Phone: ${formState.phone}`);
//       await log(`$ From: ${formState.email}`);
//       await log(`$ Subject: ${formState.subject}`);

//       // Start progress
//       setTerminalLines((prev) => [...prev, `$ Sending ██████████ 0%`]);

//       await updateProgress(10);
//       await updateProgress(30);
//       await updateProgress(60);
//       await updateProgress(90);

//       // SEND EMAIL (real action)
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID!,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
//         {
//           name: formState.name,
//           email: formState.email,
//           phone: formState.phone,
//           subject: formState.subject,
//           message: formState.message,
//         },
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
//       );

//       // Auto-reply
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID!,
//         import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID!,
//         {
//           name: formState.name,
//           email: formState.email,
//           phone: formState.phone,
//           subject: formState.subject,
//           message: formState.message,
//         },
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
//       );

//       // Final success
//       setTerminalLines((prev) => [
//         ...prev.slice(0, -1),
//         `$ Sending ██████████ 100% ✓`,
//         `$ Message sent successfully`,
//         `$ Auto-reply sent to ${formState.name} ✓`,
//       ]);

//       setIsSubmitted(true);
//     } catch (error) {
//       console.error(error);

//       setTerminalLines((prev) => [
//         ...prev.slice(0, -1),
//         `$ ERROR: Failed at sending stage ✗`,
//         `$ Please try again later`,
//       ]);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-full p-6 md:p-12 flex flex-col lg:flex-row gap-8">
      {/* Terminal Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 bg-card rounded-lg border border-border overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="h-8 bg-muted flex items-center gap-2 px-3 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">
            contact@kaushik-rana ~ bash
          </span>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm h-64 overflow-y-auto bg-[#0d1117]">
          {terminalLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${
                line.includes("$") ? "text-syntax-type" : "text-foreground/70"
              } ${line.includes("✓") ? "text-green-400" : ""}`}
            >
              {line || "\u00A0"}
            </motion.div>
          ))}
          <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
        </div>
      </motion.div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 flex flex-col"
      >
        <h2 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h2>
        <p className="text-muted-foreground mb-6">
          Have a project in mind? Let's build something amazing together.
        </p>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center p-8 bg-card rounded-lg border border-border"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
              >
                <CheckCircle size={64} className="text-green-400 mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground text-center">
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormState({ name: "", email: "", subject: "", message: "" });
                  setTerminalLines([
                    "$ welcome to contact terminal",
                    "$ type your message below...",
                    "",
                  ]);
                }}
                className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex-1 flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm text-muted-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full h-full min-h-[120px] px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 transition-all glow-blue"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Social Links */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">Or connect with me on:</p>
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/kaushikrana06", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/kaushik-rana-0b8447211/", label: "LinkedIn" },
              { icon: SiWhatsapp, href: "https://wa.me/9113129737", label: "WhatsApp" },
              { icon: Mail, href: "mailto:kaushikrana.0603@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
