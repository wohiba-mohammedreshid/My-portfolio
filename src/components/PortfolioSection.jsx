import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/project";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { GiCoffeeBeans } from "react-icons/gi";

const filters = ["All", "Frontend", "Full-Stack", "Backend"];

function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = activeFilter === "All" || project.category === activeFilter;
      const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <p className="text-blue-400 font-semibold mb-2">Portfolio</p>
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeFilter === filter ? "bg-blue-500 text-white" : "bg-slate-900 text-slate-300 border border-slate-700 hover:border-blue-400"}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-slate-200 outline-none transition focus:border-blue-400"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-4xl border border-slate-700 bg-slate-950/80 shadow-lg shadow-slate-950/20"
            >
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                {project.title && project.title.toLowerCase().includes("miss. w") && (
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-slate-900/80 p-2 text-amber-300 shadow-lg">
                    <GiCoffeeBeans className="h-6 w-6" />
                  </div>
                )}
              </div>
              <div className="p-8">
                <p className="text-blue-400 text-sm font-semibold mb-2">{project.category}</p>
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-5 leading-relaxed">{project.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
                  >
                    <FiGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
          {filteredProjects.length === 0 && (
            <div className="rounded-4xl border border-slate-700 bg-slate-950/80 p-10 text-center text-slate-400">
              No projects matched your search. Try a different keyword or filter.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
