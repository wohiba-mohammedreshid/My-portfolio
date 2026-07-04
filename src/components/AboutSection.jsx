import { motion } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaBrain, FaPalette } from "react-icons/fa";

function AboutSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-blue-400 font-semibold mb-3">About Me</p>
            <h2 className="text-4xl font-bold text-white mb-6">I build web apps that look great and solve problems.</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              I am a Software Engineering student passionate about building scalable web applications and exploring Artificial Intelligence.
              I enjoy solving real-world problems through technology and continuously improving my skills in software development.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-700 bg-slate-950/70 p-6">
                <p className="text-slate-400 mb-2">Name</p>
                <p className="text-white font-semibold">WOHIBA MOHAMMEDRESHID</p>
              </div>
              <div className="rounded-3xl border border-slate-700 bg-slate-950/70 p-6">
                <p className="text-slate-400 mb-2">Location</p>
                <p className="text-white font-semibold">Jimma, Ethiopia</p>
              </div>
              <div className="rounded-3xl border border-slate-700 bg-slate-950/70 p-6">
                <p className="text-slate-400 mb-2">Education</p>
                <p className="text-white font-semibold">Software Engineering Student</p>
              </div>
              <div className="rounded-3xl border border-slate-700 bg-slate-950/70 p-6">
                <p className="text-slate-400 mb-2">Email</p>
                <p className="text-white font-semibold">abihowhadri@gmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            <div className="rounded-4xl border border-slate-700 bg-slate-950/80 p-8">
              <div className="mb-6 flex items-center gap-4">
                <FaLaptopCode className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Full-Stack Development</h3>
                  <p className="text-slate-400 mt-1">Building responsive and scalable web applications using modern technologies.</p>
                </div>
              </div>
            </div>
            <div className="rounded-4xl border border-slate-700 bg-slate-950/80 p-8">
              <div className="mb-6 flex items-center gap-4">
                <FaPalette className="h-8 w-8 text-cyan-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Frontend Development</h3>
                  <p className="text-slate-400 mt-1">Creating attractive, user-friendly interfaces with React and modern UI frameworks.</p>
                </div>
              </div>
            </div>
            <div className="rounded-4xl border border-slate-700 bg-slate-950/80 p-8">
              <div className="mb-6 flex items-center gap-4">
                <FaDatabase className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Backend Development</h3>
                  <p className="text-slate-400 mt-1">Developing secure APIs, databases, and server-side applications.</p>
                </div>
              </div>
            </div>
            <div className="rounded-4xl border border-slate-700 bg-slate-950/80 p-8">
              <div className="mb-6 flex items-center gap-4">
                <FaBrain className="h-8 w-8 text-violet-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">AI & Machine Learning</h3>
                  <p className="text-slate-400 mt-1">Exploring intelligent systems and AI-powered solutions.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
