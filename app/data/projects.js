export const projectsData = [
  {
    id: 1,
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart, checkout, and payment integration.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    featured: true,
    duration: '4 months',
    teamSize: '3 developers',
    role: 'Full Stack Developer',
    overview: `This comprehensive e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The platform includes advanced features like inventory management, order tracking, payment processing, and detailed analytics. Built with modern web technologies, it ensures scalability and maintainability while delivering excellent performance across all devices.`,
    gallery: [
      {
        title: 'Homepage Design',
        description: 'Clean and modern homepage with featured products and categories',
        image: '/projects/ecommerce/homepage.jpg'
      },
      {
        title: 'Product Catalog',
        description: 'Responsive product grid with filtering and sorting capabilities',
        image: '/projects/ecommerce/catalog.jpg'
      },
      {
        title: 'Shopping Cart',
        description: 'Intuitive cart interface with quantity controls and price calculations',
        image: '/projects/ecommerce/cart.jpg'
      },
      {
        title: 'Checkout Process',
        description: 'Streamlined checkout with multiple payment options',
        image: '/projects/ecommerce/checkout.jpg'
      },
      {
        title: 'Admin Dashboard',
        description: 'Comprehensive admin panel for managing products and orders',
        image: '/projects/ecommerce/admin.jpg'
      },
      {
        title: 'Mobile Experience',
        description: 'Fully responsive design optimized for mobile devices',
        image: '/projects/ecommerce/mobile.jpg'
      }
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
        description: 'Secure user registration, login, and profile management with JWT tokens.'
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
        solution: 'Implemented optimistic locking with MongoDB transactions and created a reservation system that temporarily holds inventory during checkout process.'
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
  },
  {
    id: 5,
    slug: 'real-time-chat-app',
    title: 'Real-Time Chat Application',
    description: 'A modern chat application with real-time messaging, file sharing, and video calls.',
    image: '/projects/chat.jpg',
    technologies: ['React', 'Socket.io', 'Node.js', 'WebRTC'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    featured: false,
    duration: '3 months',
    teamSize: '3 developers',
    role: 'Full Stack Developer',
    overview: `A feature-rich real-time chat application supporting text messaging, file sharing, and video calls. Built with React and Socket.io, it provides a seamless communication experience with features like message encryption, typing indicators, and group chats. The application also includes video calling capabilities using WebRTC technology.`,
    gallery: [
      {
        title: 'Chat Interface',
        description: 'Clean and intuitive chat interface with real-time messaging',
        image: '/projects/chat/interface.jpg'
      },
      {
        title: 'Group Chats',
        description: 'Multi-user group conversations with member management',
        image: '/projects/chat/groups.jpg'
      },
      {
        title: 'Video Calls',
        description: 'Integrated video calling with screen sharing capabilities',
        image: '/projects/chat/video.jpg'
      },
      {
        title: 'File Sharing',
        description: 'Easy file sharing with drag-and-drop functionality',
        image: '/projects/chat/files.jpg'
      }
    ],
    features: [
      {
        title: 'Real-time Messaging',
        description: 'Instant message delivery with Socket.io for real-time communication.'
      },
      {
        title: 'Video Calling',
        description: 'Peer-to-peer video calls with WebRTC and screen sharing support.'
      },
      {
        title: 'File Sharing',
        description: 'Share files, images, and documents with preview capabilities.'
      },
      {
        title: 'Group Chats',
        description: 'Create and manage group conversations with member permissions.'
      },
      {
        title: 'Message Encryption',
        description: 'End-to-end encryption for secure private conversations.'
      },
      {
        title: 'Typing Indicators',
        description: 'Real-time typing indicators and message read receipts.'
      }
    ],
    challenges: [
      {
        title: 'WebRTC Connection',
        problem: 'Establishing reliable peer-to-peer connections across different network configurations.',
        solution: 'Implemented STUN/TURN servers and connection fallback strategies to handle various NAT and firewall configurations.'
      },
      {
        title: 'Message Ordering',
        problem: 'Ensuring message ordering and delivery in high-traffic group chats.',
        solution: 'Implemented vector clocks and server-side message ordering with acknowledgment systems to guarantee correct message sequence.'
      }
    ]
  },
  {
    id: 6,
    slug: 'booking-system',
    title: 'Online Booking System',
    description: 'A comprehensive booking system with calendar integration, notifications, and payment processing.',
    image: '/projects/booking.jpg',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Calendar API'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    featured: false,
    duration: '4 months',
    teamSize: '2 developers',
    role: 'Full Stack Developer',
    overview: `A comprehensive booking system designed for service businesses. Built with Next.js and Prisma, it provides calendar management, automated notifications, and secure payment processing. The system supports multiple services, staff scheduling, and customer management with a focus on user experience and business efficiency.`,
    gallery: [
      {
        title: 'Booking Calendar',
        description: 'Interactive calendar with availability and booking management',
        image: '/projects/booking/calendar.jpg'
      },
      {
        title: 'Service Selection',
        description: 'Easy service selection with pricing and duration details',
        image: '/projects/booking/services.jpg'
      },
      {
        title: 'Payment Processing',
        description: 'Secure payment integration with multiple payment methods',
        image: '/projects/booking/payment.jpg'
      },
      {
        title: 'Admin Dashboard',
        description: 'Comprehensive admin panel for managing bookings and services',
        image: '/projects/booking/admin.jpg'
      }
    ],
    features: [
      {
        title: 'Calendar Integration',
        description: 'Advanced calendar with availability management and conflict detection.'
      },
      {
        title: 'Service Management',
        description: 'Flexible service configuration with pricing, duration, and staff assignment.'
      },
      {
        title: 'Payment Processing',
        description: 'Secure payment handling with Stripe integration and multiple payment methods.'
      },
      {
        title: 'Automated Notifications',
        description: 'Email and SMS notifications for booking confirmations and reminders.'
      },
      {
        title: 'Staff Scheduling',
        description: 'Staff availability management with automatic assignment and workload balancing.'
      },
      {
        title: 'Customer Management',
        description: 'Customer profiles with booking history and preferences tracking.'
      }
    ],
    challenges: [
      {
        title: 'Calendar Synchronization',
        problem: 'Syncing with external calendar systems while preventing double bookings.',
        solution: 'Implemented two-way sync with Google Calendar API using webhooks and conflict resolution algorithms to maintain calendar consistency.'
      },
      {
        title: 'Timezone Handling',
        problem: 'Managing bookings across different timezones for global customers.',
        solution: 'Built a comprehensive timezone management system with automatic conversion and display in user\'s local time while storing UTC in database.'
      }
    ]
  }
]; 