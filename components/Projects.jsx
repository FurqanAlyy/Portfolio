'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from './ui/SocialIcons';
import AnimatedSection from './ui/AnimatedSection';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-white dark:bg-slate-950" aria-label="Projects">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Projects</h2>
            <div className="w-14 h-1 bg-indigo-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-500 dark:text-slate-400">Things I&apos;ve built</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1} className="h-full">
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="group h-full flex flex-col rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400/60 dark:hover:border-indigo-500/60 transition-all hover:shadow-xl hover:shadow-indigo-500/10"
              >
                {/* Gradient thumbnail */}
                <div
                  className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden shrink-0`}
                >
                  <div className="absolute inset-0 bg-black/10" aria-hidden />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white/10,transparent_70%)]" aria-hidden />
                  <h3 className="text-white font-bold text-xl relative z-10 text-center px-6 drop-shadow-lg leading-tight">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/25 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      <Star size={10} fill="currentColor" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map(tech => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-100 dark:border-indigo-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub repository`}
                      className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <GithubIcon size={15} />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} live demo`}
                        className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
