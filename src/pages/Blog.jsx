import { useMemo, useState } from "react";
import BlogCard from "../components/BlogCard";
import blogPosts from "../data/blog";

function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Web Development", "React", "JavaScript", "Backend Development", "Artificial Intelligence", "Career Tips"];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.summary.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 space-y-3">
          <p className="text-blue-400 font-semibold">Blog</p>
          <h1 className="text-4xl font-bold text-white">Latest Articles</h1>
          <p className="max-w-2xl text-slate-400">
            Browse articles on web development, React, backend engineering, AI, and career strategies for developers.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none focus:border-blue-400 lg:w-1/2"
          />
          <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm transition ${category === item ? "bg-blue-500 text-white" : "bg-slate-900 text-slate-300 border border-slate-700 hover:border-blue-400"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
          {filteredPosts.length === 0 && (
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/80 p-10 text-center text-slate-400">
              No articles found. Try another search or category.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Blog;
