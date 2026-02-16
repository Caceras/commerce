import type { Collection, Menu, Page, Product } from "lib/shopify/types";

const baseUrl = "";

function createProduct({
  id,
  handle,
  title,
  description,
  descriptionHtml,
  price,
  image,
  tags,
  options,
  variants,
}: {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  price: string;
  image: string;
  tags?: string[];
  options?: { id: string; name: string; values: string[] }[];
  variants?: {
    id: string;
    title: string;
    price: string;
    availableForSale: boolean;
    selectedOptions: { name: string; value: string }[];
  }[];
}): Product {
  const defaultVariants = variants || [
    {
      id: `${id}-variant-starter`,
      title: "Starter",
      price: price,
      availableForSale: true,
      selectedOptions: [{ name: "Plan", value: "Starter" }],
    },
    {
      id: `${id}-variant-pro`,
      title: "Pro",
      price: (parseFloat(price) * 2).toFixed(2),
      availableForSale: true,
      selectedOptions: [{ name: "Plan", value: "Pro" }],
    },
    {
      id: `${id}-variant-enterprise`,
      title: "Enterprise",
      price: (parseFloat(price) * 4).toFixed(2),
      availableForSale: true,
      selectedOptions: [{ name: "Plan", value: "Enterprise" }],
    },
  ];

  const defaultOptions = options || [
    {
      id: `${id}-option`,
      name: "Plan",
      values: ["Starter", "Pro", "Enterprise"],
    },
  ];

  return {
    id,
    handle,
    availableForSale: true,
    title,
    description,
    descriptionHtml,
    options: defaultOptions,
    priceRange: {
      maxVariantPrice: {
        amount: defaultVariants[defaultVariants.length - 1]!.price,
        currencyCode: "USD",
      },
      minVariantPrice: {
        amount: defaultVariants[0]!.price,
        currencyCode: "USD",
      },
    },
    variants: defaultVariants.map((v) => ({
      id: v.id,
      title: v.title,
      availableForSale: v.availableForSale,
      selectedOptions: v.selectedOptions,
      price: { amount: v.price, currencyCode: "USD" },
    })),
    featuredImage: {
      url: `${baseUrl}${image}`,
      altText: title,
      width: 1200,
      height: 800,
    },
    images: [
      {
        url: `${baseUrl}${image}`,
        altText: title,
        width: 1200,
        height: 800,
      },
    ],
    seo: {
      title,
      description,
    },
    tags: tags || [],
    updatedAt: new Date().toISOString(),
  };
}

export const dummyProducts: Product[] = [
  createProduct({
    id: "product-1",
    handle: "analytics-dashboard-pro",
    title: "Analytics Dashboard Pro",
    description:
      "A comprehensive analytics dashboard template built with Next.js and Recharts. Features real-time metrics, customizable widgets, data export, and responsive design. Perfect for SaaS products that need powerful data visualization.",
    descriptionHtml:
      "<p>A comprehensive analytics dashboard template built with Next.js and Recharts. Features real-time metrics, customizable widgets, data export, and responsive design.</p><h3>Key Features</h3><ul><li>Real-time data visualization with 12+ chart types</li><li>Customizable widget layout with drag-and-drop</li><li>Dark mode support out of the box</li><li>Export to CSV, PDF, and PNG</li><li>Role-based access control</li><li>Responsive design for all screen sizes</li></ul><h3>Tech Stack</h3><p>Next.js 15, TypeScript, Tailwind CSS, Recharts, Prisma ORM</p>",
    price: "49.00",
    image: "/images/products/analytics-dashboard.jpg",
    tags: ["dashboard", "analytics", "featured"],
  }),
  createProduct({
    id: "product-2",
    handle: "crm-platform-suite",
    title: "CRM Platform Suite",
    description:
      "Full-featured CRM template with contact management, deal pipeline, email integration, and reporting. Built with modern React patterns and a clean, professional UI. Ideal for sales teams and agencies.",
    descriptionHtml:
      "<p>Full-featured CRM template with contact management, deal pipeline, email integration, and reporting. Built with modern React patterns and a clean, professional UI.</p><h3>Key Features</h3><ul><li>Kanban-style deal pipeline</li><li>Contact and company management</li><li>Email tracking and templates</li><li>Activity timeline and notes</li><li>Custom field support</li><li>Advanced filtering and search</li></ul><h3>Tech Stack</h3><p>Next.js 15, TypeScript, Tailwind CSS, Supabase, DnD Kit</p>",
    price: "79.00",
    image: "/images/products/crm-platform.jpg",
    tags: ["crm", "sales", "featured"],
  }),
  createProduct({
    id: "product-3",
    handle: "project-management-kit",
    title: "Project Management Kit",
    description:
      "Streamlined project management template with kanban boards, Gantt charts, team collaboration, and time tracking. Built for teams who want to ship faster with a clean, intuitive interface.",
    descriptionHtml:
      "<p>Streamlined project management template with kanban boards, Gantt charts, team collaboration, and time tracking.</p><h3>Key Features</h3><ul><li>Kanban boards with drag-and-drop</li><li>Interactive Gantt chart view</li><li>Built-in time tracking</li><li>Team workload management</li><li>File attachments and comments</li><li>Sprint planning and backlog</li></ul><h3>Tech Stack</h3><p>Next.js 15, TypeScript, Tailwind CSS, PostgreSQL, DnD Kit</p>",
    price: "59.00",
    image: "/images/products/project-management.jpg",
    tags: ["project-management", "productivity", "featured"],
  }),
  createProduct({
    id: "product-4",
    handle: "email-marketing-engine",
    title: "Email Marketing Engine",
    description:
      "Professional email marketing template with drag-and-drop email builder, subscriber management, campaign analytics, and A/B testing. Everything you need to launch email campaigns.",
    descriptionHtml:
      "<p>Professional email marketing template with drag-and-drop email builder, subscriber management, campaign analytics, and A/B testing.</p><h3>Key Features</h3><ul><li>Visual drag-and-drop email builder</li><li>Subscriber list management with segments</li><li>Campaign scheduling and automation</li><li>A/B testing framework</li><li>Detailed open and click analytics</li><li>Template library with 20+ designs</li></ul><h3>Tech Stack</h3><p>Next.js 15, TypeScript, Tailwind CSS, Resend, PostgreSQL</p>",
    price: "69.00",
    image: "/images/products/email-marketing.jpg",
    tags: ["email", "marketing"],
  }),
  createProduct({
    id: "product-5",
    handle: "ai-chatbot-builder",
    title: "AI Chatbot Builder",
    description:
      "Build intelligent chatbots with this AI-powered template. Includes conversation flow builder, knowledge base integration, multi-channel deployment, and analytics. Powered by the Vercel AI SDK.",
    descriptionHtml:
      "<p>Build intelligent chatbots with this AI-powered template. Includes conversation flow builder, knowledge base integration, multi-channel deployment, and analytics.</p><h3>Key Features</h3><ul><li>Visual conversation flow builder</li><li>RAG-powered knowledge base</li><li>Multi-model support (GPT-4, Claude, Gemini)</li><li>Widget embed for any website</li><li>Conversation history and analytics</li><li>Custom training and fine-tuning</li></ul><h3>Tech Stack</h3><p>Next.js 15, TypeScript, Tailwind CSS, Vercel AI SDK, Pinecone</p>",
    price: "89.00",
    image: "/images/products/ai-chatbot.jpg",
    tags: ["ai", "chatbot"],
  }),
  createProduct({
    id: "product-6",
    handle: "invoicing-billing-hub",
    title: "Invoicing & Billing Hub",
    description:
      "Complete invoicing and billing template with invoice generation, payment processing, subscription management, and financial reporting. Integrates with Stripe for seamless payments.",
    descriptionHtml:
      "<p>Complete invoicing and billing template with invoice generation, payment processing, subscription management, and financial reporting.</p><h3>Key Features</h3><ul><li>Professional invoice generation with PDF export</li><li>Stripe payment integration</li><li>Recurring billing and subscriptions</li><li>Tax calculation and multi-currency</li><li>Revenue dashboards and reports</li><li>Client portal for self-service</li></ul><h3>Tech Stack</h3><p>Next.js 15, TypeScript, Tailwind CSS, Stripe, PostgreSQL</p>",
    price: "74.00",
    image: "/images/products/invoicing-billing.jpg",
    tags: ["billing", "invoicing", "payments"],
  }),
  createProduct({
    id: "product-7",
    handle: "social-media-scheduler",
    title: "Social Media Scheduler",
    description:
      "Plan, schedule, and analyze social media content across all platforms. Features a visual calendar, post composer, engagement analytics, and team collaboration tools.",
    descriptionHtml:
      "<p>Plan, schedule, and analyze social media content across all platforms. Features a visual calendar, post composer, engagement analytics, and team collaboration tools.</p><h3>Key Features</h3><ul><li>Visual content calendar</li><li>Multi-platform post composer</li><li>Auto-scheduling with optimal timing</li><li>Engagement and growth analytics</li><li>Media library management</li><li>Team approval workflows</li></ul><h3>Tech Stack</h3><p>Next.js 15, TypeScript, Tailwind CSS, Redis, PostgreSQL</p>",
    price: "54.00",
    image: "/images/products/social-media-scheduler.jpg",
    tags: ["social-media", "scheduling"],
  }),
  createProduct({
    id: "product-8",
    handle: "helpdesk-support-center",
    title: "Helpdesk & Support Center",
    description:
      "Full-featured helpdesk template with ticket management, live chat, knowledge base, and customer satisfaction tracking. Built for teams that prioritize customer experience.",
    descriptionHtml:
      "<p>Full-featured helpdesk template with ticket management, live chat, knowledge base, and customer satisfaction tracking.</p><h3>Key Features</h3><ul><li>Multi-channel ticket management</li><li>Real-time live chat widget</li><li>Searchable knowledge base</li><li>SLA tracking and alerts</li><li>Customer satisfaction surveys</li><li>Canned responses and macros</li></ul><h3>Tech Stack</h3><p>Next.js 15, TypeScript, Tailwind CSS, WebSockets, PostgreSQL</p>",
    price: "64.00",
    image: "/images/products/helpdesk-support.jpg",
    tags: ["helpdesk", "support", "customer-service"],
  }),
  createProduct({
    id: "product-9",
    handle: "hr-people-platform",
    title: "HR & People Platform",
    description:
      "Modern HR management template with employee directory, leave management, payroll overview, performance reviews, and org chart visualization. Perfect for growing teams.",
    descriptionHtml:
      "<p>Modern HR management template with employee directory, leave management, payroll overview, performance reviews, and org chart visualization.</p><h3>Key Features</h3><ul><li>Employee directory with profiles</li><li>Leave and PTO management</li><li>Payroll dashboard overview</li><li>Performance review cycles</li><li>Interactive org chart</li><li>Onboarding workflow builder</li></ul><h3>Tech Stack</h3><p>Next.js 15, TypeScript, Tailwind CSS, Prisma, PostgreSQL</p>",
    price: "84.00",
    image: "/images/products/hr-platform.jpg",
    tags: ["hr", "people", "management"],
  }),
];

export const dummyCollections: Collection[] = [
  {
    handle: "",
    title: "All",
    description: "All SaaS templates",
    seo: { title: "All", description: "All SaaS templates" },
    path: "/search",
    updatedAt: new Date().toISOString(),
  },
  {
    handle: "dashboards",
    title: "Dashboards",
    description: "Analytics and data dashboard templates",
    seo: {
      title: "Dashboard Templates",
      description: "Analytics and data dashboard templates",
    },
    path: "/search/dashboards",
    updatedAt: new Date().toISOString(),
  },
  {
    handle: "productivity",
    title: "Productivity",
    description: "Project management and productivity templates",
    seo: {
      title: "Productivity Templates",
      description: "Project management and productivity templates",
    },
    path: "/search/productivity",
    updatedAt: new Date().toISOString(),
  },
  {
    handle: "marketing",
    title: "Marketing",
    description: "Email marketing and social media templates",
    seo: {
      title: "Marketing Templates",
      description: "Email marketing and social media templates",
    },
    path: "/search/marketing",
    updatedAt: new Date().toISOString(),
  },
  {
    handle: "ai-tools",
    title: "AI Tools",
    description: "AI-powered SaaS templates",
    seo: {
      title: "AI Tool Templates",
      description: "AI-powered SaaS templates",
    },
    path: "/search/ai-tools",
    updatedAt: new Date().toISOString(),
  },
];

const collectionProductMap: Record<string, string[]> = {
  dashboards: [
    "analytics-dashboard-pro",
    "crm-platform-suite",
    "invoicing-billing-hub",
  ],
  productivity: [
    "project-management-kit",
    "helpdesk-support-center",
    "hr-people-platform",
  ],
  marketing: ["email-marketing-engine", "social-media-scheduler"],
  "ai-tools": ["ai-chatbot-builder"],
  "hidden-homepage-featured-items": [
    "analytics-dashboard-pro",
    "crm-platform-suite",
    "project-management-kit",
  ],
  "hidden-homepage-carousel": [
    "email-marketing-engine",
    "ai-chatbot-builder",
    "invoicing-billing-hub",
    "social-media-scheduler",
    "helpdesk-support-center",
    "hr-people-platform",
  ],
};

export function getDummyCollectionProducts(collectionHandle: string): Product[] {
  const handles = collectionProductMap[collectionHandle];
  if (!handles) return [];
  return handles
    .map((handle) => dummyProducts.find((p) => p.handle === handle))
    .filter(Boolean) as Product[];
}

export function getDummyProduct(handle: string): Product | undefined {
  return dummyProducts.find((p) => p.handle === handle);
}

export function getDummyProducts(options?: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Product[] {
  let products = [...dummyProducts];

  if (options?.query) {
    const q = options.query.toLowerCase();
    products = products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }

  if (options?.sortKey === "PRICE") {
    products.sort((a, b) => {
      const aPrice = parseFloat(a.priceRange.minVariantPrice.amount);
      const bPrice = parseFloat(b.priceRange.minVariantPrice.amount);
      return aPrice - bPrice;
    });
  } else if (options?.sortKey === "CREATED" || options?.sortKey === "CREATED_AT") {
    products.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    );
  }

  if (options?.reverse) {
    products.reverse();
  }

  return products;
}

export function getDummyCollection(
  handle: string,
): Collection | undefined {
  return dummyCollections.find((c) => c.handle === handle);
}

export const dummyMenus: Record<string, Menu[]> = {
  "next-js-frontend-header-menu": [
    { title: "All", path: "/search" },
    { title: "Dashboards", path: "/search/dashboards" },
    { title: "Productivity", path: "/search/productivity" },
    { title: "Marketing", path: "/search/marketing" },
    { title: "AI Tools", path: "/search/ai-tools" },
  ],
  "next-js-frontend-footer-menu": [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Terms & Conditions", path: "/terms-and-conditions" },
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "FAQ", path: "/faq" },
  ],
};

export const dummyPages: Record<string, Page> = {
  about: {
    id: "page-about",
    title: "About",
    handle: "about",
    body: "We build premium SaaS templates to help developers ship faster. Our templates are built with Next.js, TypeScript, and Tailwind CSS - the modern stack for production applications.",
    bodySummary:
      "We build premium SaaS templates to help developers ship faster.",
    seo: {
      title: "About Us",
      description: "Learn about our mission to help developers ship faster.",
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  "terms-and-conditions": {
    id: "page-terms",
    title: "Terms & Conditions",
    handle: "terms-and-conditions",
    body: "These terms and conditions govern your use of our SaaS templates. By purchasing a template, you receive a license to use it in a single project. Redistribution is not permitted.",
    bodySummary: "Terms governing the use of our SaaS templates.",
    seo: {
      title: "Terms & Conditions",
      description: "Terms and conditions for our SaaS templates.",
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  "privacy-policy": {
    id: "page-privacy",
    title: "Privacy Policy",
    handle: "privacy-policy",
    body: "We respect your privacy. We collect only the information necessary to process your orders and improve our services. We never sell your personal data to third parties.",
    bodySummary: "Our commitment to protecting your privacy.",
    seo: {
      title: "Privacy Policy",
      description: "How we handle and protect your personal information.",
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  faq: {
    id: "page-faq",
    title: "FAQ",
    handle: "faq",
    body: "Frequently asked questions about our SaaS templates. What stack do you use? All our templates are built with Next.js 15, TypeScript, and Tailwind CSS. Do I get updates? Yes, all purchases include free updates for one year.",
    bodySummary: "Frequently asked questions about our SaaS templates.",
    seo: {
      title: "FAQ",
      description:
        "Frequently asked questions about our SaaS templates.",
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
};
