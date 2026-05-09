'use client';
import Image from 'next/image';
import { Cloud, Code, Cpu, MapPin } from 'lucide-react';
import { GithubIcon } from './ui/SocialIcons';
import AnimatedSection from './ui/AnimatedSection';
import { personal } from '@/data/personal';

const iconMap = { Code, Cloud, Cpu, Github: GithubIcon };

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-slate-50 dark:bg-slate-900" aria-label="About">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
            <div className="w-14 h-1 bg-indigo-500 mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Avatar */}
          <AnimatedSection delay={0.1} className="flex justify-center">
            <div className="relative">
              <div className="w-60 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/30">
                <Image
                  src="/pic.jpg"
                  alt="Furqan Ali"
                  width={288}
                  height={360}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-60 h-60 sm:w-72 sm:h-72 rounded-2xl border-2 border-indigo-400/30 -z-10 pointer-events-none" />
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                <MapPin size={15} className="text-indigo-500 shrink-0" />
                <span>{personal.location}</span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                {personal.objective}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {personal.highlights.map((h, i) => {
                  const Icon = iconMap[h.icon] || Code;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-colors group"
                    >
                      <Icon
                        size={17}
                        className="text-indigo-500 mb-2 group-hover:scale-110 transition-transform"
                      />
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{h.label}</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-white mt-0.5">{h.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
