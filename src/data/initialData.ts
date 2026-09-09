import { Project, Service, Skill, Testimonial, ProcessStep, SiteSettings, Inquiry } from '../types';

export const initialSiteSettings: SiteSettings = {
  brandName: 'Alex Rivera',
  profession: 'Professional Web Developer',
  mainTagline: 'Building Modern Websites That Grow Businesses',
  secondaryTagline: 'Modern • Fast • Responsive • SEO-Friendly',
  email: 'alex@rivera-digital.dev',
  phone: '+1 (555) 234-8901',
  whatsappNumber: '15552348901',
  location: 'San Francisco, CA & Remote Worldwide',
  availableForWork: true,
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  twitterUrl: 'https://twitter.com',
  instagramUrl: 'https://instagram.com',
  aboutBio: `I am a specialized Web Developer and UI Engineer with over 3+ years of professional experience building high-impact digital experiences. I bridge the gap between creative visual design, robust architecture, and commercial conversion. From high-growth startups to restaurants, real estate brokers, and automotive dealerships, I engineer bespoke digital platforms that outpace competitors in speed, aesthetics, and revenue generation.`,
  websitesBuilt: 50,
  happyClients: 30,
  yearsExperience: 3,
};

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Aura Heights Luxury Living',
    category: 'Real Estate',
    shortDescription: 'High-end architectural real estate showcase with interactive 3D floorplans and property scheduling.',
    fullDescription: 'Architected a hyper-fast real estate platform for a luxury property development group. Features interactive virtual walkthroughs, neighborhood demographics, automated private tour booking, and instant mortgage calculation tools.',
    client: 'Aura Real Estate Group',
    year: '2025',
    liveUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    githubUrl: 'https://github.com/example/aura-heights',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Mapbox', 'Framer Motion'],
    features: [
      'Interactive luxury floor plan explorer with dimension toggles',
      'Direct CRM integration for buyer qualification and booking',
      'Ultra-optimized responsive gallery with WebP delivery',
      'Sub-0.4s initial page load time with 100/100 Core Web Vitals'
    ],
    metrics: [
      { label: 'Lead Inquiries', value: '+185%' },
      { label: 'PageSpeed Score', value: '99/100' },
      { label: 'Avg Session Time', value: '4m 12s' }
    ],
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Veloce Supercar Concierge',
    category: 'Automotive',
    shortDescription: 'Bespoke exotic & luxury automobile dealership portal with real-time inventory filter and test-drive booking.',
    fullDescription: 'Designed and engineered an elite automotive showroom website for rare, exotic, and performance vehicles. Featuring 360-degree exterior views, instant WhatsApp seller connect, dynamic loan calculators, and vehicle history integrations.',
    client: 'Veloce Motor Group',
    year: '2025',
    liveUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    githubUrl: 'https://github.com/example/veloce-motors',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Supabase'],
    features: [
      'Instant filtering by horsepower, chassis, transmission, and price',
      'High-resolution dark mode car presentation gallery',
      'One-click WhatsApp VIP concierge connection',
      'Automated trade-in valuation estimator'
    ],
    metrics: [
      { label: 'Showroom Visits', value: '+64%' },
      { label: 'Bounce Rate', value: '18%' },
      { label: 'Mobile Conversions', value: '+110%' }
    ],
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'L’Osteria Fine Dining & Cellar',
    category: 'Restaurant',
    shortDescription: 'Modern culinary experience featuring digital seasonal tasting menus and OpenTable direct integration.',
    fullDescription: 'Crafted an atmospheric, high-converting digital storefront for a Michelin-starred contemporary Italian kitchen. Elevated the dining brand with smooth scroll storytelling, interactive wine cellar catalog, and instant table reservation.',
    client: 'L’Osteria Hospitality Group',
    year: '2024',
    liveUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    githubUrl: 'https://github.com/example/losteria-dining',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
    features: [
      'Digital tasting menu with allergen tags and wine pairings',
      'Zero-friction reservation widget synced with table manager',
      'Private dining and corporate banquet inquiry funnel',
      'Fully responsive typography with dark luxury aesthetic'
    ],
    metrics: [
      { label: 'Direct Bookings', value: '+142%' },
      { label: 'Menu Views', value: '45k/mo' },
      { label: 'Google Lighthouse', value: '98/100' }
    ],
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'Kinetix Athletic Wear',
    category: 'E-Commerce',
    shortDescription: 'High-performance activewear store with instant micro-cart, live inventory, and multi-currency checkout.',
    fullDescription: 'Engineered a lightning-fast headless e-commerce store for a premium fitness apparel label. Emphasized high-conversion product cards, smooth sizing matrix, animated cart drawer, and frictionless checkout flow.',
    client: 'Kinetix Global Corp',
    year: '2025',
    liveUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
    githubUrl: 'https://github.com/example/kinetix-store',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Supabase'],
    features: [
      'Sub-second instant client-side search and category filtering',
      'Dynamic size recommendation and fit adviser modal',
      'Micro-animations on hover, cart add, and checkout stages',
      'Global localized pricing and automated inventory sync'
    ],
    metrics: [
      { label: 'Checkout Rate', value: '4.8%' },
      { label: 'Average Order Value', value: '+$34' },
      { label: 'Mobile Speed', value: '0.6s' }
    ],
    featured: true,
  },
  {
    id: 'proj-5',
    title: 'OmniFlow Analytics SaaS',
    category: 'Web Apps',
    shortDescription: 'Real-time multi-channel enterprise analytics dashboard with interactive data charts and automated reporting.',
    fullDescription: 'Developed an interactive enterprise web application that tracks multi-cloud billing, server telemetry, and user event streams in real time. Features reactive SVG chart suites, keyboard navigation, and customizable dashboard widgets.',
    client: 'OmniFlow Cloud Inc',
    year: '2025',
    liveUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    githubUrl: 'https://github.com/example/omniflow-saas',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Firebase', 'Recharts'],
    features: [
      'Live WebSocket metrics streaming with millisecond latency',
      'Custom drag-and-drop widget layout configuration',
      'Role-based access management with team workspaces',
      'Automated weekly PDF digest generation engine'
    ],
    metrics: [
      { label: 'Active Users', value: '25,000+' },
      { label: 'Uptime Guarantee', value: '99.99%' },
      { label: 'Data Processing', value: '<50ms' }
    ],
    featured: false,
  },
  {
    id: 'proj-6',
    title: 'Strata Capital Advisory',
    category: 'Business',
    shortDescription: 'Corporate advisory and private equity web platform projecting trust, authority, and financial excellence.',
    fullDescription: 'Designed a sophisticated corporate website for an institutional wealth management firm. Focused on crisp executive biographies, SEC regulatory disclosures, white paper download gates, and confidential deal intake.',
    client: 'Strata Capital Partners',
    year: '2024',
    liveUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    githubUrl: 'https://github.com/example/strata-capital',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
    features: [
      'Gated white paper research portal with email capture',
      'Executive leadership index with interactive biographies',
      'WCAG 2.1 AA compliant typography and accessible contrast',
      'Enterprise security headers and encryption standards'
    ],
    metrics: [
      { label: 'Client Inquiries', value: '+92%' },
      { label: 'Organic Search Traffic', value: '+240%' },
      { label: 'Compliance Score', value: '100%' }
    ],
    featured: false,
  },
  {
    id: 'proj-7',
    title: 'Studio Monolith Creative',
    category: 'Portfolio',
    shortDescription: 'Avant-garde creative agency portfolio with magnetic cursors, fluid page transitions, and case study storytelling.',
    fullDescription: 'Engineered an award-winning creative portfolio for a Tokyo-based industrial and brand design studio. Features custom WebGL displacement shaders, audio cues, and bold minimalist brutalist typography.',
    client: 'Monolith Design Works',
    year: '2024',
    liveUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80',
    githubUrl: 'https://github.com/example/monolith-portfolio',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Canvas'],
    features: [
      'Fluid project showcase with smooth route transition curves',
      'Magnetic interactive controls and ambient cursor feedback',
      'Custom typography hierarchy designed for modern monitors',
      'Zero layout shift (CLS: 0.00)'
    ],
    metrics: [
      { label: 'Design Awards', value: '3x Featured' },
      { label: 'Social Engagement', value: '+300%' },
      { label: 'Performance', value: '100%' }
    ],
    featured: false,
  }
];

export const initialServices: Service[] = [
  {
    id: 'srv-1',
    number: '01',
    title: 'Custom Website Development',
    shortDescription: 'Build modern websites specifically engineered according to your unique business requirements and target audience.',
    detailedDescription: 'From greenfield architecture to tailored component libraries, I engineer custom solutions without relying on bloated templates. Every line of code is written to ensure exceptional speed, pixel-perfect rendering, and scalability.',
    benefits: [
      'Bespoke architecture tailored to your specific workflows',
      'Zero unnecessary third-party plugins or code bloat',
      'Clean modular codebase that scales as you grow',
      'Full ownership of your source code and digital assets'
    ],
    iconName: 'Code2',
    deliveryTime: '2-4 Weeks',
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'Business Websites',
    shortDescription: 'Professional websites for local businesses, law firms, consultants, and companies looking to dominate their market.',
    detailedDescription: 'Turn your business website into a 24/7 client generation machine. I design structured information architectures that build credibility, showcase services, and guide prospects directly toward calling or booking.',
    benefits: [
      'Compelling value propositions that communicate authority',
      'Local SEO setup, Google Maps and schema structure',
      'Direct contact triggers (WhatsApp, phone, dynamic quotes)',
      'Professional team and case study showcase sections'
    ],
    iconName: 'Building2',
    deliveryTime: '1-3 Weeks',
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'E-Commerce Development',
    shortDescription: 'Modern online stores with seamless catalog browsing, friction-free carts, instant checkouts, and order management.',
    detailedDescription: 'Unlock frictionless shopping experiences that increase average order values. Integrated with Stripe, PayPal, and modern inventory systems with lightning-fast catalog search and micro-interactions.',
    benefits: [
      'Sub-second product catalog filtering and search',
      'Frictionless mobile checkout with Apple Pay & Google Pay',
      'Automated inventory notifications and transaction emails',
      'High-converting abandoned cart prevention features'
    ],
    iconName: 'ShoppingBag',
    deliveryTime: '3-6 Weeks',
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'Landing Pages',
    shortDescription: 'High-converting landing pages built for PPC advertising, new product launches, and targeted marketing campaigns.',
    detailedDescription: 'Every pixel of a landing page should serve a single objective: turning clicks into paying customers. I combine psychological visual hierarchy, fast load times, and social proof to maximize ad spend ROI.',
    benefits: [
      'A/B test ready structure with heat-map tracking support',
      'Sub-0.5 second load times to minimize bounce rates',
      'High-contrast sticky call-to-actions that drive action',
      'Integrated CRM webhook dispatch (Zapier, HubSpot, Mailchimp)'
    ],
    iconName: 'Flame',
    deliveryTime: '3-7 Days',
  },
  {
    id: 'srv-5',
    number: '05',
    title: 'Web Applications',
    shortDescription: 'Interactive, dynamic web applications with stateful logic, secure authentication, and cloud databases.',
    detailedDescription: 'Full-stack application engineering using React, Next.js, Node.js, Supabase, and Firebase. Build client dashboards, internal workflow tools, portals, or subscription SaaS products.',
    benefits: [
      'Secure user authentication and role-based permissions',
      'Real-time database sync and reactive UI updates',
      'Robust API integrations and third-party data connections',
      'Production-grade reliability and automated error recovery'
    ],
    iconName: 'Cpu',
    deliveryTime: '4-8 Weeks',
  },
  {
    id: 'srv-6',
    number: '06',
    title: 'Website Redesign',
    shortDescription: 'Modernize outdated, sluggish websites with contemporary UI/UX, elevated brand identity, and improved conversions.',
    detailedDescription: 'If your existing website looks dated or fails to generate inquiries, a strategic redesign transforms your digital presence. Keep your hard-earned SEO authority while revamping the visual identity and speed.',
    benefits: [
      'Preserve existing SEO rankings and 301 redirect mapping',
      'Modern, high-end dark or light aesthetic aligned with 2026 design standards',
      'Massive speed improvements (often cutting load times in half)',
      'Mobile-first UX overhaul that captures smartphone visitors'
    ],
    iconName: 'Sparkles',
    deliveryTime: '2-4 Weeks',
  },
  {
    id: 'srv-7',
    number: '07',
    title: 'Responsive Design',
    shortDescription: 'Flawless visual rendering and tactile ergonomics across mobile phones, tablets, laptops, and ultra-wide screens.',
    detailedDescription: 'Over 65% of web visitors browse from smartphones. I architect layouts using fluid grids, adaptive typography, and thumb-friendly touch targets that deliver an app-like feel on any handheld device.',
    benefits: [
      'Tested across 320px to 4K ultra-wide resolutions',
      'Native-feeling mobile navigation gestures and drawers',
      'Adaptive high-density image sizing (Retina/OLED display ready)',
      'Zero horizontal layout breaks or awkward text wraps'
    ],
    iconName: 'Smartphone',
    deliveryTime: 'Included in all builds',
  },
  {
    id: 'srv-8',
    number: '08',
    title: 'SEO-Friendly Development',
    shortDescription: 'Clean technical architecture, OpenGraph cards, rich JSON-LD snippets, and search-engine-ready semantic markup.',
    detailedDescription: 'Building a beautiful website is only half the battle; search engines must understand and index it effortlessly. I build with semantic HTML5, Google Core Web Vitals compliance, and programmatic meta tags.',
    benefits: [
      'Google Core Web Vitals optimization (LCP, FID, CLS)',
      'Schema.org structured data for rich search results',
      'Automated XML sitemaps and dynamic robots.txt',
      'Social sharing preview cards (Open Graph & Twitter)'
    ],
    iconName: 'SearchCheck',
    deliveryTime: 'Included in all builds',
  },
];

export const initialSkills: Skill[] = [
  // Frontend
  { id: 'sk-1', name: 'HTML5', category: 'Frontend', level: 98, experience: '3+ Years', icon: 'FileCode2' },
  { id: 'sk-2', name: 'CSS3', category: 'Frontend', level: 95, experience: '3+ Years', icon: 'Palette' },
  { id: 'sk-3', name: 'JavaScript', category: 'Frontend', level: 95, experience: '3+ Years', icon: 'Code' },
  { id: 'sk-4', name: 'TypeScript', category: 'Frontend', level: 92, experience: '3+ Years', icon: 'FileJson' },
  { id: 'sk-5', name: 'React', category: 'Frontend', level: 96, experience: '3+ Years', icon: 'Atom' },
  { id: 'sk-6', name: 'Next.js', category: 'Frontend', level: 92, experience: '2+ Years', icon: 'Zap' },
  { id: 'sk-7', name: 'Tailwind CSS', category: 'Frontend', level: 98, experience: '3+ Years', icon: 'Layers' },
  // Backend & DB
  { id: 'sk-8', name: 'Node.js', category: 'Backend', level: 88, experience: '3+ Years', icon: 'Server' },
  { id: 'sk-9', name: 'Supabase', category: 'Backend', level: 85, experience: '2+ Years', icon: 'Database' },
  { id: 'sk-10', name: 'Firebase', category: 'Backend', level: 87, experience: '3+ Years', icon: 'Flame' },
  { id: 'sk-11', name: 'REST APIs', category: 'Backend', level: 94, experience: '3+ Years', icon: 'Network' },
  // Tools & Cloud
  { id: 'sk-12', name: 'Git', category: 'Tools & Cloud', level: 92, experience: '3+ Years', icon: 'GitBranch' },
  { id: 'sk-13', name: 'GitHub', category: 'Tools & Cloud', level: 94, experience: '3+ Years', icon: 'Github' },
];

export const initialProcessSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discover',
    description: 'Understand the business goals, competitive landscape, target audience, and functional requirements through a comprehensive briefing.',
    deliverables: ['Discovery audit document', 'Competitor analysis', 'Feature scope definition', 'Milestone timeline'],
    iconName: 'Compass',
  },
  {
    stepNumber: '02',
    title: 'Plan',
    description: 'Structure the sitemap, information architecture, conversion funnels, and technical stack selection for maximum scalability.',
    deliverables: ['Wireframe blueprints', 'Interactive sitemap', 'Content structure guide', 'Database & API schema'],
    iconName: 'Workflow',
  },
  {
    stepNumber: '03',
    title: 'Design',
    description: 'Craft a bespoke UI/UX experience featuring dark/light aesthetic elegance, micro-interactions, responsive grids, and design tokens.',
    deliverables: ['High-fidelity interactive prototypes', 'Design token library', 'Component typography system', 'Client feedback review'],
    iconName: 'PenTool',
  },
  {
    stepNumber: '04',
    title: 'Develop',
    description: 'Write clean, modular, and maintainable TypeScript code with modern frameworks, silky animations, and robust backend integrations.',
    deliverables: ['Production React / Next.js codebase', 'Fast API integrations', 'Responsive cross-browser testing', 'Performance profiling'],
    iconName: 'Code',
  },
  {
    stepNumber: '05',
    title: 'Launch',
    description: 'Execute end-to-end QA, Core Web Vitals optimization, domain configuration, analytics tracking, and client handover.',
    deliverables: ['100/100 Lighthouse audit pass', 'Search Console indexing', 'Admin onboarding walkthrough', '30-day post-launch support'],
    iconName: 'Rocket',
  },
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Managing Partner',
    business: 'Aura Real Estate Group',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    review: 'Alex transformed our luxury property marketing completely. The interactive floorplans and ultra-fast load times helped us close two multi-million dollar penthouses in the first month alone. He operates like a high-tier digital agency with the speed of an elite individual developer.',
    projectType: 'Real Estate Platform',
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'Executive Chef & Co-Owner',
    business: 'L’Osteria Hospitality',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    review: 'Our restaurant website went from outdated and slow to a visually stunning masterpiece. Guests constantly compliment our online menu experience, and our weekend reservations are consistently booked out weeks in advance. Worth every single penny.',
    projectType: 'Restaurant Experience',
  },
  {
    id: 'test-3',
    name: 'Damon Bradley',
    role: 'General Manager',
    business: 'Veloce Exotic Motors',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    review: 'The WhatsApp integration and instantaneous car filter system on mobile doubled our qualified test drive inquiries within 3 weeks. Alex understood our luxury car buyers immediately and delivered beyond our expectations.',
    projectType: 'Automotive Dealership',
  },
  {
    id: 'test-4',
    name: 'Sophia Chen',
    role: 'Founder & CEO',
    business: 'Kinetix Athletic Wear',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    review: 'Fast, responsive, and obsessive about performance. Alex trimmed our checkout abandonment by 24% with the new reactive cart and micro-animations. Communication was clear, weekly demos were crisp, and the code was spotless.',
    projectType: 'E-Commerce Store',
  },
];

export const initialInquiries: Inquiry[] = [
  {
    id: 'inq-1',
    name: 'Julian Sterling',
    email: 'julian@sterlingconsulting.io',
    phone: '+1 (415) 890-1234',
    businessName: 'Sterling Capital Advisors',
    projectType: 'Business Websites',
    budget: '$5,000 - $10,000',
    message: 'We are expanding our financial consulting firm and need a total website rebuild with executive profiles, gated investor reports, and direct appointment scheduling.',
    createdAt: '2026-09-08T14:32:00Z',
    status: 'new',
  },
  {
    id: 'inq-2',
    name: 'Camila Rodriguez',
    email: 'camila@botanicarestaurant.com',
    phone: '+1 (305) 762-9840',
    businessName: 'Botanica Kitchen & Lounge',
    projectType: 'Restaurant',
    budget: '$3,000 - $5,000',
    message: 'Looking for a dark, moody, modern website for our new downtown restaurant with online table reservation and private event booking form.',
    createdAt: '2026-09-07T09:15:00Z',
    status: 'contacted',
  },
  {
    id: 'inq-3',
    name: 'David Kim',
    email: 'david@apexgear.co',
    phone: '+1 (206) 431-7782',
    businessName: 'Apex Outdoor Gear',
    projectType: 'E-Commerce Development',
    budget: '$10,000+',
    message: 'We have 45 SKU products and need a high-performance e-commerce shop with custom filters, instant search, and Stripe integration.',
    createdAt: '2026-09-05T18:45:00Z',
    status: 'completed',
  }
];
