export const projects = [
  {
    id: 1,
    name: 'Prepify AI',
    fullName: 'InterviewMaster — AI-Powered Interview Preparation Platform',
    description:
      "Full-stack MERN application that leverages Google Gemini API to generate role-specific interview questions tailored to each user's uploaded resume and target job description. Includes resume-to-job matching, skill gap analysis, analytics dashboard, and secure JWT authentication.",
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Google Gemini API', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/FurqanAlyy/Prepify-AI',
    live: null,
    featured: true,
    gradient: 'from-violet-500 to-indigo-600',
  },

  {
    id: 2,
    name: 'Orbit CRM',
    fullName: 'Orbit CRM — Modern Sales & Customer Relationship Management Platform',
    description:
      'Modern CRM platform for managing end-to-end sales workflows, including contacts, companies, leads, deals, tasks, and activities. Features an interactive sales pipeline, team workspaces, dashboards, reports, lead follow-up automation, and AI-powered assistance.',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Google Gemini API'],
    github: 'https://github.com/FurqanAlyy/Orbit-CRM',
    live: null,
    featured: true,
    gradient: 'from-blue-500 to-indigo-600',
  },

  {
    id: 3,
    name: 'Shopivo',
    fullName: 'Shopivo — Multi-Vendor E-Commerce Platform',
    description:
      'Scalable multi-vendor e-commerce platform with dedicated buyer, seller, and admin workflows. Features vendor dashboards, seller approval, product and inventory management, multi-vendor checkout, order processing, analytics, and secure Stripe payments.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Stripe', 'Cloudinary', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/FurqanAlyy/Shopivo-A-Multi-Vendor-Ecommerce-Platform',
    live: "https://shopivo-weld.vercel.app/",
    featured: true,
    gradient: 'from-emerald-500 to-green-600',
  },

  {
    id: 4,
    name: 'CineSphere',
    fullName: 'CineSphere — Full-Stack Movie Ticket Booking Platform',
    description:
      'Full-stack movie ticket booking platform for managing movies, cinemas, screens, seats, showtimes, and bookings. Features interactive seat selection, multiple seat and screen types, atomic seat locking, booking management, reviews, payments, and secure user authentication.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/FurqanAlyy/CineSphere-movie-booking-App',
    live: "https://cine-sphere-psi.vercel.app/",
    featured: true,
    gradient: 'from-rose-500 to-pink-600',
  },

  {
    id: 5,
    name: 'Network Anomaly Detection',
    fullName: 'Network Anomaly Detection — ML-Based Intrusion Detection',
    description:
      'Machine learning system for detecting and classifying anomalous network activity using the NSL-KDD dataset. Implements Random Forest for binary and multi-class intrusion classification with data preprocessing, feature engineering, and model evaluation.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Random Forest', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/FurqanAlyy/network-anomaly-detection',
    live: null,
    featured: true,
    gradient: 'from-orange-500 to-red-600',
  },

  {
    id: 6,
    name: 'Enron Anomaly Detection',
    fullName: 'Enron Anomaly Detection — Unsupervised Machine Learning',
    description:
      'Unsupervised machine learning project for identifying anomalous patterns in the Enron financial and email dataset. Applies One-Class SVM, Isolation Forest, and Local Outlier Factor to detect potential outliers across financial and email-related features.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'One-Class SVM', 'Isolation Forest', 'LOF'],
    github: 'https://github.com/FurqanAlyy/Enron-Anomaly-Detection',
    live: null,
    featured: true,
    gradient: 'from-fuchsia-500 to-purple-600',
  },

  {
    id: 7,
    name: 'QASAF',
    fullName: 'QASAF — AI-Enhanced E-Commerce Platform with Chatbot',
    description:
      'Production-grade e-commerce platform using Next.js App Router with SSR, dynamic routing, shopping cart with Redux Toolkit, order management, product review & rating system, role-based access control, and an AI-powered chatbot for product discovery.',
    techStack: ['Next.js', 'MongoDB', 'Express.js', 'Node.js', 'Redux Toolkit', 'Tailwind CSS', 'AI Chatbot'],
    github: 'https://github.com/FurqanAlyy/QASAF-Clothing-Brand',
    live: null,
    featured: true,
    gradient: 'from-cyan-500 to-blue-600',
  },

  {
    id: 8,
    name: 'CodeSync',
    fullName: 'CodeSync — Real-Time Collaborative Code Editor',
    description:
      'A lightweight, real-time collaborative code editor built with React, Monaco Editor, Yjs, and Socket.IO. Multiple users can edit the same document simultaneously with conflict-free merging, live cursor awareness, and presence indicators — all in a single Docker container.',
    techStack: ['React', 'Monaco Editor', 'Yjs', 'Socket.IO', 'Docker', 'Node.js', 'Express.js', 'Tailwind CSS', 'AWS ECR, ECS, EC2'],
    github: 'https://github.com/FurqanAlyy/CodeSync-Real-Time-Collaborative-Code-Editor-',
    live: null,
    featured: true,
    gradient: 'from-emerald-500 to-teal-600',
  },

  {
    id: 9,
    name: 'Console Streaming Platform',
    fullName: 'C++ Console-Based Movie Streaming Platform',
    description:
      'Console-based streaming platform in C++ simulating core features: user auth with disk persistence, movie catalogue with O(1) hash-map search, watch history (stack-based with undo), personal watchlist, and Top 5 Trending Movies via a custom max-heap.',
    techStack: ['C++', 'Data Structures', 'Algorithms', 'File I/O', 'Hash Maps', 'Max-Heap'],
    github: 'https://github.com/FurqanAlyy/Console-Based-Movie-Streaming-Platform-cpp',
    live: null,
    featured: true,
    gradient: 'from-cyan-500 to-blue-600',
  },
];