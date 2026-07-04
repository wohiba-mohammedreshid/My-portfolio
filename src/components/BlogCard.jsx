import { motion } from "framer-motion";
import { FiCalendar, FiClock } from "react-icons/fi";

function BlogCard({ post }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="overflow-hidden rounded-4xl border border-slate-700 bg-slate-950/80 shadow-lg shadow-slate-950/20"
    >
      <div className="h-60 overflow-hidden bg-slate-900">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
      </div>
      <div className="p-8">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.24em] mb-3">{post.category}</p>
        <h3 className="text-2xl font-semibold text-white mb-3">{post.title}</h3>
        <div className="mb-5 flex flex-wrap gap-4 text-sm text-slate-400">
          <span className="inline-flex items-center gap-2"><FiCalendar /> {post.date}</span>
          <span className="inline-flex items-center gap-2"><FiClock /> {post.readingTime}</span>
        </div>
        <p className="text-slate-400 leading-relaxed mb-6">{post.summary}</p>
        <div className="flex flex-wrap gap-3">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default BlogCard;
