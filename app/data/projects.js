export const projectsData = [
  {
    id: 1,
    slug: 'homeqube',
    title: 'Homeqube',
    description: 'AI and blockchain powered platform that allows users to bid and build homes thru gamification.',
    image: '/images/homeqube/homqube_thumbnail.png',
    technologies: ['Next.js', 'Material UI', 'Styled Components', 'Monorepo', 'Solana', '.NET 7', 'SQL', 'Azure'],
    codeLink: '#',
    demoLink: 'https://www.homeqube.com/',
    featured: true,
    duration: '6 months',
    teamSize: '10 developers',
    role: 'Full Stack Developer',
    overview: `Homeqube is a proptech platform designed to tackle persistent inefficiencies and high costs in the traditional home-building industry by leveraging a modular, assemble-to-order approach that dramatically shortens lead times and lowers carbon emissions. Through its “knobs” system—predefined design modules that can be mixed and matched — Homeqube enables homeowners, architects, contractors, and suppliers to collaborate in a single, transparent marketplace, reducing middleman fees, logistics complexity, and material waste. By integrating AI-driven cost and lifestyle simulations with blockchain-backed transactions, the platform empowers users to explore customized home designs, earn and trade QUBE tokens for design contributions, and ultimately bring more affordable, sustainable housing solutions to market—helping to address the growing backlog of housing demand in Southeast Asia and beyond.`,
    gallery: [
      '/images/homeqube/homqube_thumbnail.png',
      '/images/homeqube/homeqube2.jpg',
      '/images/homeqube/homeqube3.jpg',
      '/images/homeqube/homeqube4.jpg',
      '/images/homeqube/homeqube5.jpg'
    ],
    features: [
      {
        title: 'Product Management',
        description: 'Complete CRUD operations for products with image upload, categories, and inventory tracking.'
      },
      {
        title: 'Shopping Cart & Checkout',
        description: 'Persistent cart with guest checkout option and multiple payment methods integration.'
      },
      {
        title: 'User Authentication',
        description: 'Secure user registration, login, and profile management with JWT tokens and blockchain authentication.'
      },
      {
        title: 'Order Management',
        description: 'Order tracking, status updates, and automated email notifications.'
      },
      {
        title: 'Payment Integration',
        description: 'Secure payment processing with Stripe API and multiple payment methods.'
      },
      {
        title: 'Admin Dashboard',
        description: 'Comprehensive admin panel with analytics, user management, and reporting tools.'
      }
    ],
    challenges: [
      {
        title: 'Payment Security',
        problem: 'Implementing secure payment processing while maintaining user experience was challenging due to PCI compliance requirements.',
        solution: 'Integrated Stripe Payment Elements with proper tokenization and implemented server-side validation to ensure secure transactions without storing sensitive card data.'
      },
      {
        title: 'Inventory Management',
        problem: 'Managing real-time inventory across multiple concurrent users to prevent overselling was complex.',
        solution: 'Implemented a reservation system that temporarily holds inventory during checkout process.'
      },
      {
        title: 'Performance Optimization',
        problem: 'Large product catalogs were causing slow page loads and poor user experience.',
        solution: 'Implemented virtual scrolling, lazy loading for images, and server-side pagination with caching strategies to handle thousands of products efficiently.'
      }
    ]
  },
  {
    id: 2,
    slug: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, user roles, and file sharing.',
    image: '/projects/taskapp.jpg',
    technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    featured: true,
    duration: '3 months',
    teamSize: '2 developers',
    role: 'Frontend Lead',
    overview: `A modern task management application designed for team collaboration. Built with React and Firebase, it provides real-time synchronization, role-based access control, and comprehensive project management features. The application supports multiple teams, file attachments, and detailed progress tracking with beautiful data visualizations.`,
    gallery: [
      {
        title: 'Dashboard Overview',
        description: 'Clean dashboard with project overview and task statistics',
        image: '/projects/taskapp/dashboard.jpg'
      },
      {
        title: 'Task Board',
        description: 'Kanban-style task board with drag-and-drop functionality',
        image: '/projects/taskapp/board.jpg'
      },
      {
        title: 'Team Collaboration',
        description: 'Real-time collaboration with comments and file sharing',
        image: '/projects/taskapp/collaboration.jpg'
      },
      {
        title: 'Progress Analytics',
        description: 'Detailed analytics and reporting for project progress',
        image: '/projects/taskapp/analytics.jpg'
      },
      {
        title: 'Mobile Interface',
        description: 'Responsive mobile design for task management on-the-go',
        image: '/projects/taskapp/mobile.jpg'
      }
    ],
    features: [
      {
        title: 'Real-time Collaboration',
        description: 'Live updates across all connected users with Firebase real-time database.'
      },
      {
        title: 'Drag & Drop Interface',
        description: 'Intuitive Kanban board with drag-and-drop task management.'
      },
      {
        title: 'Role-based Access',
        description: 'Different permission levels for team members, managers, and admins.'
      },
      {
        title: 'File Attachments',
        description: 'Upload and share files with tasks using Firebase Storage.'
      },
      {
        title: 'Progress Tracking',
        description: 'Visual progress indicators and detailed project analytics.'
      },
      {
        title: 'Notifications',
        description: 'Real-time notifications for task updates and deadlines.'
      }
    ],
    challenges: [
      {
        title: 'Real-time Synchronization',
        problem: 'Ensuring data consistency across multiple users editing the same tasks simultaneously.',
        solution: 'Implemented Firebase real-time database with optimistic updates and conflict resolution strategies to handle concurrent edits gracefully.'
      },
      {
        title: 'State Management',
        problem: 'Managing complex application state with real-time updates was becoming difficult to maintain.',
        solution: 'Adopted Redux with custom middleware for Firebase integration, creating a predictable state management pattern that handles real-time updates efficiently.'
      },
      {
        title: 'Performance with Large Teams',
        problem: 'Application performance degraded significantly with large teams and numerous tasks.',
        solution: 'Implemented data virtualization for large lists, lazy loading for task details, and optimized Firebase queries with proper indexing.'
      }
    ]
  },
  {
    id: 3,
    slug: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for social media accounts with data visualization and reporting features.',
    image: '/projects/dashboard.jpg',
    technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    featured: false,
    duration: '2 months',
    teamSize: '2 developers',
    role: 'Frontend Developer',
    overview: `A comprehensive social media analytics dashboard that aggregates data from multiple platforms to provide actionable insights. Built with Vue.js and D3.js, it features interactive charts, real-time data updates, and customizable reporting tools. The dashboard helps businesses track engagement, monitor growth, and optimize their social media strategy.`,
    gallery: [
      {
        title: 'Main Dashboard',
        description: 'Overview of all social media metrics in one place',
        image: '/projects/dashboard/main.jpg'
      },
      {
        title: 'Analytics Charts',
        description: 'Interactive charts showing engagement and growth trends',
        image: '/projects/dashboard/charts.jpg'
      },
      {
        title: 'Platform Integration',
        description: 'Connected accounts from multiple social media platforms',
        image: '/projects/dashboard/integration.jpg'
      },
      {
        title: 'Report Generation',
        description: 'Automated report generation with customizable templates',
        image: '/projects/dashboard/reports.jpg'
      }
    ],
    features: [
      {
        title: 'Multi-Platform Integration',
        description: 'Connect and analyze data from Facebook, Instagram, Twitter, and LinkedIn.'
      },
      {
        title: 'Interactive Visualizations',
        description: 'Dynamic charts and graphs built with D3.js for deep data exploration.'
      },
      {
        title: 'Real-time Updates',
        description: 'Live data synchronization with automatic refresh capabilities.'
      },
      {
        title: 'Custom Reports',
        description: 'Generate and export detailed reports with customizable metrics.'
      },
      {
        title: 'Performance Tracking',
        description: 'Track key metrics like engagement rate, reach, and follower growth.'
      },
      {
        title: 'Scheduled Reports',
        description: 'Automated weekly and monthly reports delivered via email.'
      }
    ],
    challenges: [
      {
        title: 'Data Visualization Performance',
        problem: 'Rendering large datasets in D3.js was causing browser performance issues.',
        solution: 'Implemented data aggregation on the backend and used canvas rendering for large datasets, with SVG for smaller interactive elements.'
      },
      {
        title: 'API Rate Limiting',
        problem: 'Social media APIs had strict rate limits that affected data freshness.',
        solution: 'Created a queuing system with Redis and implemented intelligent caching strategies to minimize API calls while maintaining data accuracy.'
      }
    ]
  },
  {
    id: 4,
    slug: 'content-management-system',
    title: 'Content Management System',
    description: 'A headless CMS with a customizable admin dashboard, content modeling, and API access.',
    image: '/projects/cms.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'GraphQL', 'JWT'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    featured: false,
    duration: '5 months',
    teamSize: '4 developers',
    role: 'Backend Developer',
    overview: `A flexible headless CMS built to support multiple frontend applications. The system provides a robust content modeling system, GraphQL API, and an intuitive admin interface. It supports multiple content types, media management, and fine-grained permissions, making it suitable for everything from blogs to complex enterprise applications.`,
    gallery: [
      {
        title: 'Content Editor',
        description: 'Rich text editor with custom blocks and media embedding',
        image: '/projects/cms/editor.jpg'
      },
      {
        title: 'Content Models',
        description: 'Flexible content type creation with custom fields',
        image: '/projects/cms/models.jpg'
      },
      {
        title: 'API Explorer',
        description: 'GraphQL playground for API testing and documentation',
        image: '/projects/cms/api.jpg'
      },
      {
        title: 'Media Library',
        description: 'Organized media management with search and filtering',
        image: '/projects/cms/media.jpg'
      }
    ],
    features: [
      {
        title: 'Flexible Content Modeling',
        description: 'Create custom content types with various field types and relationships.'
      },
      {
        title: 'GraphQL API',
        description: 'Powerful GraphQL API for efficient data fetching and manipulation.'
      },
      {
        title: 'Rich Text Editor',
        description: 'Advanced editor with custom blocks, media embedding, and formatting.'
      },
      {
        title: 'Media Management',
        description: 'Comprehensive media library with image optimization and CDN integration.'
      },
      {
        title: 'User Permissions',
        description: 'Role-based access control with granular permissions for content and features.'
      },
      {
        title: 'Multi-tenancy',
        description: 'Support for multiple projects with isolated content and users.'
      }
    ],
    challenges: [
      {
        title: 'Content Versioning',
        problem: 'Implementing a robust content versioning system while maintaining performance.',
        solution: 'Designed a hybrid approach using MongoDB change streams and a separate versioning collection with efficient diff algorithms.'
      },
      {
        title: 'GraphQL Performance',
        problem: 'N+1 query problems and performance issues with complex nested queries.',
        solution: 'Implemented DataLoader for batching and caching, along with query complexity analysis to prevent expensive operations.'
      }
    ]
  }
]; 