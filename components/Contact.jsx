'use client';
import { useState } from 'react';
import { CheckCheck, Copy, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';
import AnimatedSection from './ui/AnimatedSection';
import { personal } from '@/data/personal';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard blocked */
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-white dark:bg-slate-950" aria-label="Contact">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
            <div className="w-14 h-1 bg-indigo-500 mx-auto rounded-full mb-5" />
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to
              say hi, my inbox is always open!
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-lg mx-auto space-y-4">
          {/* Email */}
          <AnimatedSection delay={0.1}>
            <div className="flex items-center justify-between p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Mail size={19} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Email</p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-slate-900 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                aria-label={copied ? 'Email copied!' : 'Copy email address'}
                className="p-2.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all ml-2 shrink-0"
              >
                {copied ? (
                  <CheckCheck size={17} className="text-emerald-500" />
                ) : (
                  <Copy size={17} />
                )}
              </button>
            </div>
          </AnimatedSection>

          {/* LinkedIn */}
          <AnimatedSection delay={0.15}>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-all group block"
            >
              <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                <LinkedinIcon size={19} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">LinkedIn</p>
                <p className="text-slate-900 dark:text-white font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm">
                  linkedin.com/in/furqan24ali
                </p>
              </div>
            </a>
          </AnimatedSection>

          {/* GitHub */}
          <AnimatedSection delay={0.2}>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-all group block"
            >
              <div className="p-2.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 shrink-0">
                <GithubIcon size={19} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">GitHub</p>
                <p className="text-slate-900 dark:text-white font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm">
                  github.com/FurqanAlyy
                </p>
              </div>
            </a>
          </AnimatedSection>

          {/* Location */}
          <AnimatedSection delay={0.25}>
            <div className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="p-2.5 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                <MapPin size={19} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Location</p>
                <p className="text-slate-900 dark:text-white font-medium text-sm">{personal.location}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.35} className="pt-4 text-center">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Mail size={19} />
              Say Hello
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
