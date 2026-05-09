'use client';
import { Boxes, Cloud, Code2, Cpu, Database, Layout, Server, Wrench } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { skills } from '@/data/skills';

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Container: Boxes,
  Wrench,
  Cpu,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white dark:bg-slate-950" aria-label="Skills">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills</h2>
            <div className="w-14 h-1 bg-indigo-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-500 dark:text-slate-400">Technologies I work with</p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, i) => {
            const Icon = iconMap[group.icon] || Code2;
            return (
              <AnimatedSection key={group.category} delay={i * 0.06}>
                <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400/60 dark:hover:border-indigo-500/60 transition-all hover:shadow-lg hover:shadow-indigo-500/5 group h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <Icon size={17} />
                    </div>
                    <h3 className="font-semibold text-slate-800 dark:text-white text-sm">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(skill => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
