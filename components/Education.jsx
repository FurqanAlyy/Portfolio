'use client';
import { Award, BookOpen, GraduationCap } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { education } from '@/data/education';
import { personal } from '@/data/personal';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-slate-50 dark:bg-slate-900" aria-label="Education">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
            <div className="w-14 h-1 bg-indigo-500 mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <AnimatedSection key={i} delay={0.1}>
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full shrink-0 w-fit">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 mb-5">
                      {edu.location} · {edu.period}
                    </p>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">
                        <BookOpen size={13} />
                        Relevant Coursework
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map(course => (
                          <span
                            key={course}
                            className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Certifications */}
          <AnimatedSection delay={0.2}>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Award size={20} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {personal.certifications.map((cert, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" aria-hidden />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
