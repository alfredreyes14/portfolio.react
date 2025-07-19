export const projectsData = [
  {
    id: 1,
    slug: 'homeqube',
    title: 'Homeqube',
    description: 'AI and blockchain powered platform that allows users to bid and build homes thru gamification.',
    image: '/images/homeqube/homqube_thumbnail.png',
    technologies: ['Next.js', 'Material UI', 'Styled Components', 'Monorepo', 'Solana', '.NET 7', 'SQL', 'Azure'],
    demoLink: 'https://www.homeqube.com/',
    featured: true,
    duration: '6 months',
    teamSize: '10 developers',
    role: 'Full Stack Developer',
    overview: `Homeqube is a proptech platform designed to tackle persistent inefficiencies and high costs in the traditional home-building industry by leveraging a modular, assemble-to-order approach that dramatically shortens lead times and lowers carbon emissions. Through its “knobs” system—predefined design modules that can be mixed and matched — Homeqube enables homeowners, architects, contractors, and suppliers to collaborate in a single, transparent marketplace, reducing middleman fees, logistics complexity, and material waste. By integrating AI-driven cost and lifestyle simulations with blockchain-backed transactions, the platform empowers users to explore customized home designs, earn and trade QUBE tokens for design contributions, and ultimately bring more affordable, sustainable housing solutions to market—helping to address the growing backlog of housing demand in Southeast Asia and beyond.`,
    gallery: [
      '/images/homeqube/homqube_thumbnail.png',
      '/images/homeqube/homeqube1.jpg',
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
    slug: 'denamiq',
    title: 'Denamiq',
    description: 'Denamiq is a digital marketing outsourcing partner that connects global businesses with highly skilled, English-fluent Filipino marketing professionals.',
    image: '/images/denamiq/denamiq_thumbnail.jpg',
    technologies: ['Next.js', 'Contentful', 'Tailwind CSS'],
    demoLink: 'https://denamiq.com',
    featured: true,
    duration: '1 month',
    teamSize: '1 developer',
    role: 'Frontend Developer',
    overview: `Denamiq is a digital marketing outsourcing partner that connects global businesses with highly skilled, English-fluent Filipino marketing professionals—handling everything from candidate sourcing and pre-screening to payroll and performance management—so you can stand up a fully vetted remote team or individual specialist in just 2–3 weeks. By leveraging the Philippines’ strong work ethic and lower labor costs (average $12 /hr vs. $26–$30 /hr in markets like the US, UK, and Australia), Denamiq delivers significant cost savings and workforce efficiency, enabling companies to accelerate their digital growth while focusing on strategic priorities.`,
    gallery: [
      '/images/denamiq/denamiq_thumbnail.jpg',
      '/images/denamiq/denamiq1.jpg',
      '/images/denamiq/denamiq2.jpg',
      '/images/denamiq/denamiq3.jpg',
      '/images/denamiq/denamiq4.jpg',
      '/images/denamiq/denamiq5.jpg'
    ],
    features: [
      {
        title: 'Content Management',
        description: 'Contentful CMS for managing content and images.'
      },
      {
        title: 'Responsive Design',
        description: 'Responsive design for all devices.'
      },
      {
        title: 'Contact Form',
        description: 'Contact form with email integration.'
      },
      {
        title: 'SEO',
        description: 'SEO optimized website.'
      }
    ],
    challenges: [
      {
        title: 'Performance Optimization',
        problem: 'The website was slow and had performance issues.',
        solution: 'Optimized the website by using a CDN, caching, and lazy loading.'
      },
      {
        title: 'Content Management',
        problem: 'The website was not updated with the latest content.',
        solution: 'Updated the website with the latest content.'
      },
      {
        title: 'SEO',
        problem: 'The website\'s SEO was not optimized.',
        solution: 'Optimized the website SEO by applying best practices, leveraging the power of Next.js and Contentful.'
      }
    ]
  },
  {
    id: 3,
    slug: 'nsvip',
    title: 'NorthStar CRM',
    description: 'NorthStar CRM is a CRM system used by one of the leading and trusted destination services in the USA to manage their clients and orders.',
    image: '/images/nsvip/nsvip_thumbnail.png',
    technologies: ['React.js', 'Node.js', 'Java Spring Boot', 'AWS', 'MySQL'],
    featured: false,
    duration: 'On-going',
    teamSize: '5 developers',
    role: 'Tech Lead / Project Manager',
    overview: 'NorthStar CRM is a rebuild of the old system that was acquired by Go Destination services. The CRM what powers the whole business and operations of the company. It features order creation, tracking, client tracking, form builders, report generation, client tracking and management as well as microsoft integrations. The app is used by over 100+ program managers as well as few hundred consultants around the globe.',
    gallery: [
      '/images/nsvip/nsvip_thumbnail.png',
      '/images/nsvip/nsvip1.png',
      '/images/nsvip/nsvip2.png',
      '/images/nsvip/nsvip3.png',
      '/images/nsvip/nsvip4.png',
      '/images/nsvip/nsvip5.png'
    ],
    features: [
      {
        title: 'Order Management',
        description: 'Order creation, tracking, and management.'
      },
      {
        title: 'Client Management',
        description: 'Client creation, tracking, and management.'
      },
      {
        title: 'Form Builders',
        description: 'Form builders for creating custom forms for orders.'
      },
      {
        title: 'Report Generation',
        description: 'Report generation from data that was gathered from orders and consultant inputs'
      },
      {
        title: 'Microsoft Integrations',
        description: 'An outlook plugin that integrates with the CRM to transfer order information from an email to the CRM.'
      }
    ],
    challenges: [
      {
        title: 'Performance Optimization',
        problem: 'The old system was slow and had performance issues.',
        solution: 'Optimized the system by using a CDN, caching, and lazy loading.'
      },
      {
        title: 'Complex Requirements',
        problem: 'The old system was not able to handle the complex requirements of the business.',
        solution: 'Rebuilt the system to be able to handle the complex requirements of the business.'
      },
      {
        title: 'Legacy Code',
        problem: 'The old system was written in a legacy language and had a lot of technical debt.',
        solution: 'The new system is written in a modern language with updated versions of the libraries and frameworks.'
      },
      {
        title: 'Distributed System',
        problem: 'The old system was not able to handle the distributed system requirements of the business.',
        solution: 'The new system is designed to be able to handle the distributed system requirements of the business.'
      },
      {
        title: 'Security',
        problem: 'The old system has zero security measures in place.',
        solution: 'The new system is designed to be accessed only by users within the organization. This is made possible by utilizing AWS VPC and other related services to secure the application.'
      },
      {
        title: 'Role based access control',
        problem: 'The old system had no role based access control.',
        solution: 'The new system is designed to have role based access control. This is made possible by utilizing AWS Cognito to manage the users and their roles.'
      }
    ]
  }
]; 