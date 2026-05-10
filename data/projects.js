export const projects = [
  {
    id: 1,
    name: 'Prepify AI',
    fullName: 'InterviewMaster — AI-Powered Interview Preparation Platform',
    description:
      "Full-stack MERN application that leverages Google Gemini API to generate role-specific interview questions tailored to each user's uploaded resume and target job description. Includes resume-to-job matching, skill gap analysis, analytics dashboard, and secure JWT authentication.",
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Google Gemini API', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/FurqanAlyy/Prepify-AI',
    live: "https://prepify-ai-omega.vercel.app/",
    featured: true,
    gradient: 'from-violet-500 to-indigo-600',
  },
  {
    id: 2,
    name: 'QASAF',
    fullName: 'QASAF — AI-Enhanced E-Commerce Platform with Chatbot',
    description:
      'Production-grade e-commerce platform using Next.js App Router with SSR, dynamic routing, shopping cart with Redux Toolkit, order management, product review & rating system, role-based access control, and an AI-powered chatbot for product discovery.',
    techStack: ['Next.js', 'MongoDB', 'Express.js', 'Node.js', 'Redux Toolkit', 'Tailwind CSS', 'AI Chatbot'],
    github: 'https://github.com/FurqanAlyy/QASAF-Clothing-Brand',
    live: "https://qasaf-clothing-brand.vercel.app/",
    featured: true,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 3,
    name: 'Console Streaming Platform',
    fullName: 'C++ Console-Based Movie Streaming Platform',
    description:
      'Console-based streaming platform in C++ simulating core features: user auth with disk persistence, movie catalogue with O(1) hash-map search, watch history (stack-based with undo), personal watchlist, and Top 5 Trending Movies via a custom max-heap.',
    techStack: ['C++', 'Data Structures', 'Algorithms', 'File I/O', 'Hash Maps', 'Max-Heap'],
    github: 'https://github.com/FurqanAlyy/Console-Based-Movie-Streaming-Platform-cpp',
    live: null,
    featured: true,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 4,
    name: 'CodeSync',
    fullName: 'CodeSync — Real-Time Collaborative Code Editor',
    description:
      'A lightweight, real-time collaborative code editor built with React, Monaco Editor, Yjs, and Socket.IO. Multiple users can edit the same document simultaneously with conflict-free merging, live cursor awareness, and presence indicators — all in a single Docker container.',
    techStack: ['React', 'Monaco Editor', 'Yjs', 'Socket.IO', 'Docker', 'Node.js', 'Express.js', 'Tailwind CSS', 'AWS ECR,ECS,EC2'],
    github: 'https://github.com/FurqanAlyy/CodeSync-Real-Time-Collaborative-Code-Editor-',
    live: "codesync-load-balancer-65810073.ap-northeast-1.elb.amazonaws.com",
    featured: true,
    gradient: 'from-violet-500 to-indigo-600',
  },
];
