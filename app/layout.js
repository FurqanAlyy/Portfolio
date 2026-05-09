import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata = {
  title: 'Furqan Ali — Full-Stack Developer & DevOps',
  description:
    'Computer Science student and Full-Stack Developer specializing in the MERN stack, Next.js, and DevOps. Building reliable, scalable software from frontend to infrastructure.',
  keywords: [
    'Full-Stack Developer',
    'MERN',
    'Next.js',
    'React',
    'DevOps',
    'Cloud',
    'Lahore',
    'Pakistan',
    'Furqan Ali',
  ],
  authors: [{ name: 'Furqan Ali', url: 'https://github.com/FurqanAlyy' }],
  openGraph: {
    type: 'website',
    title: 'Furqan Ali — Full-Stack Developer',
    description: 'Building reliable, scalable software — from frontend to infrastructure.',
    siteName: 'Furqan Ali Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Furqan Ali — Full-Stack Developer',
    description: 'Building reliable, scalable software — from frontend to infrastructure.',
  },
};

// Injected before React hydrates to eliminate dark-mode flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        {/* eslint-disable-next-line react/no-danger */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
