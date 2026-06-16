import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';
import { personal } from '@/data/personal';

export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()}{' '}
            <span className="text-white font-semibold">Furqan Ali</span>. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-white transition-colors hover:scale-110"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-indigo-400 transition-colors hover:scale-110"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-slate-500 hover:text-indigo-400 transition-colors hover:scale-110"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
