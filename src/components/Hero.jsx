import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SiReact, SiTailwindcss, SiJavascript, SiNodedotjs } from "react-icons/si";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/photo_2026-06-28_11-55-27.jpg";

const roles = [
  "Software Engineering Student",
  "Full-Stack Developer",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const rotateVariants = {
  animate: {
    rotate: 360,
    transition: { duration: 20, repeat: Infinity, ease: "linear" },
  },
};

function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = deleting ? 50 : 120;
    const timeout = setTimeout(() => {
      setDisplayText((value) => {
        const next = deleting ? role.slice(0, value.length - 1) : role.slice(0, value.length + 1);
        return next;
      });

      if (!deleting && displayText === role) {
        setDeleting(true);
      }
      if (deleting && displayText === "") {
        setDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentRole, deleting, displayText]);

  const techIcons = useMemo(
    () => [
      { Icon: SiReact, label: "React", style: "top-8 left-4", delay: 0 },
      { Icon: SiTailwindcss, label: "Tailwind", style: "top-16 right-8", delay: 0.1 },
      { Icon: SiJavascript, label: "JavaScript", style: "bottom-16 left-8", delay: 0.2 },
      { Icon: SiNodedotjs, label: "Node.js", style: "bottom-12 right-4", delay: 0.3 },
    ],
    []
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 w-full">
        <motion.div
          className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <motion.div
                className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-sm font-medium text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text uppercase tracking-widest">
                Welcome to my portfolio
              </p>
            </motion.div>

            <div>
              <motion.h1
                className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-4 leading-tight"
                variants={itemVariants}
              >
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text">
                  Wohiba Mohammedreshid
                </span>
              </motion.h1>
            </div>

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <motion.div
                className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <div className="flex items-baseline gap-1 min-h-12">
                <p className="text-xl sm:text-2xl font-semibold text-slate-200">
                  {displayText}
                </p>
                <motion.span
                  className="text-2xl font-bold text-blue-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-lg text-slate-300 leading-relaxed"
            >
              I craft elegant digital solutions by building modern web applications and scalable backend systems to solve real-world challenges.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all group"
                >
                  <span className="relative">
                    View My Work
                    <motion.span
                      className="absolute inset-0 bg-white/20 rounded-lg"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/resume"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-transparent bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:border-cyan-400 hover:bg-white/20 transition-all duration-300"
                >
                  Download CV
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right profile card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/30 via-transparent to-cyan-500/20 blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl p-8 shadow-2xl border border-white/10 overflow-hidden group">
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative flex flex-col items-center gap-6">
                <motion.div
                  className="relative h-64 w-64 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl"
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 z-10" />
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                <motion.div
                  className="text-center space-y-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.p
                    variants={itemVariants}
                    className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-bold"
                  >
                    Developer Profile
                  </motion.p>
                  <motion.h3
                    variants={itemVariants}
                    className="text-2xl font-bold text-white"
                  >
                    Software Engineer
                  </motion.h3>
                  <motion.p
                    variants={itemVariants}
                    className="text-slate-300 text-sm"
                  >
                    Full-stack solutions & modern tech
                  </motion.p>
                </motion.div>
              </div>

              {/* Floating tech icons */}
              {techIcons.map(({ Icon, label, style, delay }) => (
                <motion.div
                  key={label}
                  className={`absolute rounded-full border border-white/30 bg-white/10 backdrop-blur-md p-3 text-cyan-400 shadow-lg cursor-pointer ${style}`}
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay, duration: 4 }}
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "rgba(34, 211, 238, 0.2)",
                  }}
                  title={label}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
