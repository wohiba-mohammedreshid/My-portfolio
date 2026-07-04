import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-3 py-4">
          <Link to="/" className="text-2xl font-bold text-blue-400">
            Wohiba.M
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 p-2 text-slate-200 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex items-center gap-8 text-slate-200">
            <Link to="/" className="rounded-full px-3 py-2 hover:bg-slate-800">Home</Link>
            <Link to="/about" className="rounded-full px-3 py-2 hover:bg-slate-800">About</Link>
            <Link to="/resume" className="rounded-full px-3 py-2 hover:bg-slate-800">Resume</Link>
            <Link to="/portfolio" className="rounded-full px-3 py-2 hover:bg-slate-800">Portfolio</Link>
            <Link to="/blog" className="rounded-full px-3 py-2 hover:bg-slate-800">Blog</Link>
            <Link to="/contact" className="rounded-full px-3 py-2 hover:bg-slate-800">Contact</Link>
          </div>

          <ThemeToggle />
        </div>

        {isOpen && (
          <div className="space-y-3 border-t border-slate-700 py-4 text-slate-200 md:hidden">
            <Link onClick={() => setIsOpen(false)} to="/" className="block rounded-2xl px-4 py-3 hover:bg-slate-800">
              Home
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/about" className="block rounded-2xl px-4 py-3 hover:bg-slate-800">
              About
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/resume" className="block rounded-2xl px-4 py-3 hover:bg-slate-800">
              Resume
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/portfolio" className="block rounded-2xl px-4 py-3 hover:bg-slate-800">
              Portfolio
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/blog" className="block rounded-2xl px-4 py-3 hover:bg-slate-800">
              Blog
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/contact" className="block rounded-2xl px-4 py-3 hover:bg-slate-800">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;