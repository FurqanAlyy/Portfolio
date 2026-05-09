'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';
import { personal } from '@/data/personal';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

export default function Hero() {
  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950"
      aria-label="Hero"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-indigo-500/15 dark:bg-indigo-600/15 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-violet-500/15 dark:bg-violet-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/8 dark:bg-cyan-600/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2.4s' }}
        />
      </div>

      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle,#6366f120_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[radial-gradient(circle,#6366f110_1px,transparent_1px)]"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          {...fade(0)}
          className="font-mono text-sm text-indigo-500 dark:text-indigo-400 mb-4 tracking-widest uppercase"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          {...fade(0.1)}
          className="text-5xl sm:text-7xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight"
        >
          {personal.name}
        </motion.h1>

        <motion.p {...fade(0.2)} className="text-xl sm:text-2xl font-semibold mb-3">
          <span className="text-indigo-500 dark:text-indigo-400">{personal.title}</span>
          <span className="text-slate-300 dark:text-slate-600 mx-3">|</span>
          <span className="text-slate-500 dark:text-slate-400">{personal.subtitle}</span>
        </motion.p>

        <motion.p
          {...fade(0.3)}
          className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          {...fade(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="w-full sm:w-auto px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto px-7 py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition-all hover:scale-105 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Download Resume
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto px-7 py-3.5 border border-slate-300 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold rounded-xl transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Contact Me
          </button>
        </motion.div>

        <motion.div
          {...fade(0.55)}
          className="flex items-center justify-center gap-6 text-slate-400 dark:text-slate-500"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-slate-800 dark:hover:text-white transition-colors hover:scale-110"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:scale-110"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Send email"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:scale-110"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-300 dark:text-slate-700"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
