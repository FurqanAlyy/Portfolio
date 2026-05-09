'use client';
import { CheckCircle, GraduationCap, Users } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { currentFocus } from '@/data/experience';
import { personal } from '@/data/personal';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-slate-50 dark:bg-slate-900" aria-label="Experience">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
            <div className="w-14 h-1 bg-indigo-500 mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Current Focus Card */}
          <AnimatedSection delay={0.1}>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 rounded-l-2xl" aria-hidden />
              <div className="flex items-start gap-4 pl-4">
                <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">{currentFocus.title}</h3>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full w-fit shrink-0">
                      {currentFocus.period}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{currentFocus.institution}</p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                    {currentFocus.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {currentFocus.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle size={15} className="text-indigo-500 shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Communities */}
          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                <Users size={18} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white">Developer Communities</h3>
            </div>
            <div className="space-y-4">
              {personal.communities.map((c, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm">{c.org}</h4>
                    <span className="text-xs text-slate-400 shrink-0">{c.period}</span>
                  </div>
                  <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 mb-2 uppercase tracking-wide">
                    {c.role}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
