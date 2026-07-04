import { motion } from "framer-motion";

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express.js"],
  database: ["PostgreSQL", "MySQL", "MongoDB"],
  tools: ["Git", "GitHub", "VS Code", "Postman"],
};

function ResumeSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-10">
            <p className="text-blue-400 font-semibold mb-2">Resume</p>
            <h2 className="text-4xl font-bold text-white">Education and Experience</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/80 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-6 text-slate-300">
                <div>
                  <p className="text-xl font-semibold text-white">Software Engineering Student</p>
                    <p className="text-slate-400">Haramaya University • Expected graduation 2027</p>
                  <p className="mt-3 text-slate-400 leading-relaxed">
                    Coursework includes Data Structures, Web Engineering, Database Systems, Machine Learning, and Software Architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/80 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Experience</h3>
              <div className="space-y-6 text-slate-300">
                <div>
                  <p className="text-xl font-semibold text-white">Frontend Intern</p>
                  <p className="text-slate-400">Tech Company • Summer 2025</p>
                  <p className="mt-3 leading-relaxed">
                    Developed interactive UI components, improved application performance, and collaborated on React-based feature delivery.
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">Freelance Web Developer</p>
                  <p className="text-slate-400">2024 – Present</p>
                  <p className="mt-3 leading-relaxed">
                    Delivered responsive websites, API integrations, and polished landing pages for small businesses and student organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/80 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(skills).map(([group, items]) => (
                  <div key={group}>
                    <p className="text-slate-400 uppercase tracking-[0.18em] text-xs mb-3">{group}</p>
                    <ul className="space-y-2 text-slate-300">
                      {items.map((item) => (
                        <li key={item} className="rounded-2xl bg-slate-900/90 px-4 py-3 text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/80 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Certifications</h3>
                <div className="space-y-4 text-slate-300">
                <div className="rounded-3xl bg-slate-900/80 p-5">
                  <p className="font-semibold text-white">Self Learner</p>
                  <p className="text-slate-400">Completed multiple online courses and self-directed study in web development and AI.</p>
                </div>
              </div>
              <div className="mt-8">
                <a href="/resume" className="inline-flex items-center justify-center rounded-2xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ResumeSection;
