import { Collection, Menu, Page, Product } from './types';

// AI & Tech focused dummy products
export const mockProducts: Product[] = [
  {
    id: 'prod-1',
    handle: 'raspberry-pi-5-kit',
    availableForSale: true,
    title: 'Raspberry Pi 5 Starter Kit',
    description: 'The ultimate starter kit for makers and AI enthusiasts. Includes Raspberry Pi 5 (8GB), official case, power supply, 64GB SD card with pre-installed OS, and a comprehensive getting started guide.',
    descriptionHtml: '<p>The ultimate starter kit for makers and AI enthusiasts. Includes Raspberry Pi 5 (8GB), official case, power supply, 64GB SD card with pre-installed OS, and a comprehensive getting started guide.</p><ul><li>Raspberry Pi 5 - 8GB RAM</li><li>Official Pi 5 Case</li><li>27W USB-C Power Supply</li><li>64GB microSD Card</li><li>Micro HDMI to HDMI Cable</li></ul>',
    options: [
      {
        id: 'opt-1',
        name: 'RAM',
        values: ['4GB', '8GB'],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: '149.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '99.99', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'var-1-1',
        title: '4GB',
        availableForSale: true,
        selectedOptions: [{ name: 'RAM', value: '4GB' }],
        price: { amount: '99.99', currencyCode: 'USD' },
      },
      {
        id: 'var-1-2',
        title: '8GB',
        availableForSale: true,
        selectedOptions: [{ name: 'RAM', value: '8GB' }],
        price: { amount: '149.99', currencyCode: 'USD' },
      },
    ],
    featuredImage: {
      url: '/placeholder.svg?height=600&width=600',
      altText: 'Raspberry Pi 5 Starter Kit',
      width: 600,
      height: 600,
    },
    images: [
      {
        url: '/placeholder.svg?height=600&width=600',
        altText: 'Raspberry Pi 5 Starter Kit - Front',
        width: 600,
        height: 600,
      },
      {
        url: '/placeholder.svg?height=600&width=600',
        altText: 'Raspberry Pi 5 Starter Kit - Contents',
        width: 600,
        height: 600,
      },
    ],
    seo: {
      title: 'Raspberry Pi 5 Starter Kit',
      description: 'Complete Raspberry Pi 5 kit for makers and AI enthusiasts',
    },
    tags: ['raspberry-pi', 'maker', 'ai', 'featured'],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-2',
    handle: 'open-source-smart-speaker',
    availableForSale: true,
    title: 'Open Source Smart Speaker',
    description: 'A fully programmable smart speaker running on open-source software. Features high-quality audio drivers, far-field microphone array, and support for multiple voice assistants including Mycroft and Rhasspy.',
    descriptionHtml: '<p>A fully programmable smart speaker running on open-source software. Features high-quality audio drivers, far-field microphone array, and support for multiple voice assistants including Mycroft and Rhasspy.</p>',
    options: [
      {
        id: 'opt-2',
        name: 'Color',
        values: ['Matte Black', 'Arctic White'],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: '199.00', currencyCode: 'USD' },
      minVariantPrice: { amount: '199.00', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'var-2-1',
        title: 'Matte Black',
        availableForSale: true,
        selectedOptions: [{ name: 'Color', value: 'Matte Black' }],
        price: { amount: '199.00', currencyCode: 'USD' },
      },
      {
        id: 'var-2-2',
        title: 'Arctic White',
        availableForSale: true,
        selectedOptions: [{ name: 'Color', value: 'Arctic White' }],
        price: { amount: '199.00', currencyCode: 'USD' },
      },
    ],
    featuredImage: {
      url: '/placeholder.svg?height=600&width=600',
      altText: 'Open Source Smart Speaker',
      width: 600,
      height: 600,
    },
    images: [
      {
        url: '/placeholder.svg?height=600&width=600',
        altText: 'Open Source Smart Speaker - Front',
        width: 600,
        height: 600,
      },
    ],
    seo: {
      title: 'Open Source Smart Speaker',
      description: 'Programmable smart speaker with open-source voice assistant support',
    },
    tags: ['smart-home', 'audio', 'open-source', 'featured'],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-3',
    handle: 'arduino-mega-kit',
    availableForSale: true,
    title: 'Arduino Mega Pro Kit',
    description: 'Complete Arduino Mega 2560 kit with 200+ components including sensors, motors, displays, and everything you need to build amazing projects. Perfect for learning electronics and programming.',
    descriptionHtml: '<p>Complete Arduino Mega 2560 kit with 200+ components including sensors, motors, displays, and everything you need to build amazing projects. Perfect for learning electronics and programming.</p>',
    options: [
      {
        id: 'opt-3',
        name: 'Kit Size',
        values: ['Standard', 'Ultimate'],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: '129.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '79.99', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'var-3-1',
        title: 'Standard',
        availableForSale: true,
        selectedOptions: [{ name: 'Kit Size', value: 'Standard' }],
        price: { amount: '79.99', currencyCode: 'USD' },
      },
      {
        id: 'var-3-2',
        title: 'Ultimate',
        availableForSale: true,
        selectedOptions: [{ name: 'Kit Size', value: 'Ultimate' }],
        price: { amount: '129.99', currencyCode: 'USD' },
      },
    ],
    featuredImage: {
      url: '/placeholder.svg?height=600&width=600',
      altText: 'Arduino Mega Pro Kit',
      width: 600,
      height: 600,
    },
    images: [
      {
        url: '/placeholder.svg?height=600&width=600',
        altText: 'Arduino Mega Pro Kit',
        width: 600,
        height: 600,
      },
    ],
    seo: {
      title: 'Arduino Mega Pro Kit',
      description: 'Complete Arduino kit with 200+ components for makers',
    },
    tags: ['arduino', 'maker', 'electronics', 'featured'],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-4',
    handle: 'nvidia-jetson-nano-dev-kit',
    availableForSale: true,
    title: 'NVIDIA Jetson Nano Developer Kit',
    description: 'Powerful AI development board for edge computing. Run multiple neural networks in parallel for applications like image classification, object detection, segmentation, and speech processing.',
    descriptionHtml: '<p>Powerful AI development board for edge computing. Run multiple neural networks in parallel for applications like image classification, object detection, segmentation, and speech processing.</p>',
    options: [
      {
        id: 'opt-4',
        name: 'Memory',
        values: ['4GB'],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: '249.00', currencyCode: 'USD' },
      minVariantPrice: { amount: '249.00', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'var-4-1',
        title: '4GB',
        availableForSale: true,
        selectedOptions: [{ name: 'Memory', value: '4GB' }],
        price: { amount: '249.00', currencyCode: 'USD' },
      },
    ],
    featuredImage: {
      url: '/placeholder.svg?height=600&width=600',
      altText: 'NVIDIA Jetson Nano Developer Kit',
      width: 600,
      height: 600,
    },
    images: [
      {
        url: '/placeholder.svg?height=600&width=600',
        altText: 'NVIDIA Jetson Nano Developer Kit',
        width: 600,
        height: 600,
      },
    ],
    seo: {
      title: 'NVIDIA Jetson Nano Developer Kit',
      description: 'AI development board for edge computing and neural networks',
    },
    tags: ['ai', 'nvidia', 'machine-learning', 'edge-computing'],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-5',
    handle: 'programmable-led-matrix',
    availableForSale: true,
    title: 'RGB LED Matrix Display 64x64',
    description: 'High-resolution programmable LED matrix perfect for digital signage, art installations, and maker projects. Compatible with Raspberry Pi, Arduino, and ESP32.',
    descriptionHtml: '<p>High-resolution programmable LED matrix perfect for digital signage, art installations, and maker projects. Compatible with Raspberry Pi, Arduino, and ESP32.</p>',
    options: [
      {
        id: 'opt-5',
        name: 'Size',
        values: ['32x32', '64x64'],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: '89.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '49.99', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'var-5-1',
        title: '32x32',
        availableForSale: true,
        selectedOptions: [{ name: 'Size', value: '32x32' }],
        price: { amount: '49.99', currencyCode: 'USD' },
      },
      {
        id: 'var-5-2',
        title: '64x64',
        availableForSale: true,
        selectedOptions: [{ name: 'Size', value: '64x64' }],
        price: { amount: '89.99', currencyCode: 'USD' },
      },
    ],
    featuredImage: {
      url: '/placeholder.svg?height=600&width=600',
      altText: 'RGB LED Matrix Display',
      width: 600,
      height: 600,
    },
    images: [
      {
        url: '/placeholder.svg?height=600&width=600',
        altText: 'RGB LED Matrix Display',
        width: 600,
        height: 600,
      },
    ],
    seo: {
      title: 'RGB LED Matrix Display 64x64',
      description: 'Programmable LED matrix for digital signage and art',
    },
    tags: ['led', 'display', 'maker', 'art'],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-6',
    handle: 'home-assistant-hub',
    availableForSale: true,
    title: 'Home Assistant Yellow Hub',
    description: 'The ultimate smart home hub powered by Home Assistant. Includes Raspberry Pi CM4, Zigbee/Thread support, and NVMe storage. Take control of your smart home with complete privacy.',
    descriptionHtml: '<p>The ultimate smart home hub powered by Home Assistant. Includes Raspberry Pi CM4, Zigbee/Thread support, and NVMe storage. Take control of your smart home with complete privacy.</p>',
    options: [
      {
        id: 'opt-6',
        name: 'Storage',
        values: ['No Storage', '256GB NVMe'],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: '199.00', currencyCode: 'USD' },
      minVariantPrice: { amount: '149.00', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'var-6-1',
        title: 'No Storage',
        availableForSale: true,
        selectedOptions: [{ name: 'Storage', value: 'No Storage' }],
        price: { amount: '149.00', currencyCode: 'USD' },
      },
      {
        id: 'var-6-2',
        title: '256GB NVMe',
        availableForSale: true,
        selectedOptions: [{ name: 'Storage', value: '256GB NVMe' }],
        price: { amount: '199.00', currencyCode: 'USD' },
      },
    ],
    featuredImage: {
      url: '/placeholder.svg?height=600&width=600',
      altText: 'Home Assistant Yellow Hub',
      width: 600,
      height: 600,
    },
    images: [
      {
        url: '/placeholder.svg?height=600&width=600',
        altText: 'Home Assistant Yellow Hub',
        width: 600,
        height: 600,
      },
    ],
    seo: {
      title: 'Home Assistant Yellow Hub',
      description: 'Privacy-focused smart home hub with Home Assistant',
    },
    tags: ['smart-home', 'home-assistant', 'zigbee', 'privacy'],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-7',
    handle: 'esp32-cam-module',
    availableForSale: true,
    title: 'ESP32-CAM AI Camera Module',
    description: 'Compact camera module with ESP32-S chip, perfect for AI vision projects, security cameras, and IoT applications. Features 2MP camera, WiFi, Bluetooth, and microSD support.',
    descriptionHtml: '<p>Compact camera module with ESP32-S chip, perfect for AI vision projects, security cameras, and IoT applications. Features 2MP camera, WiFi, Bluetooth, and microSD support.</p>',
    options: [
      {
        id: 'opt-7',
        name: 'Bundle',
        values: ['Module Only', 'With Programmer'],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: '24.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '14.99', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'var-7-1',
        title: 'Module Only',
        availableForSale: true,
        selectedOptions: [{ name: 'Bundle', value: 'Module Only' }],
        price: { amount: '14.99', currencyCode: 'USD' },
      },
      {
        id: 'var-7-2',
        title: 'With Programmer',
        availableForSale: true,
        selectedOptions: [{ name: 'Bundle', value: 'With Programmer' }],
        price: { amount: '24.99', currencyCode: 'USD' },
      },
    ],
    featuredImage: {
      url: '/placeholder.svg?height=600&width=600',
      altText: 'ESP32-CAM AI Camera Module',
      width: 600,
      height: 600,
    },
    images: [
      {
        url: '/placeholder.svg?height=600&width=600',
        altText: 'ESP32-CAM AI Camera Module',
        width: 600,
        height: 600,
      },
    ],
    seo: {
      title: 'ESP32-CAM AI Camera Module',
      description: 'Compact AI camera module for IoT and vision projects',
    },
    tags: ['esp32', 'camera', 'iot', 'ai'],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-8',
    handle: 'open-source-drone-kit',
    availableForSale: true,
    title: 'Open Source Drone Kit',
    description: 'Build your own programmable drone with this comprehensive kit. Features ArduPilot-compatible flight controller, GPS, telemetry, and all the hardware you need for autonomous flight.',
    descriptionHtml: '<p>Build your own programmable drone with this comprehensive kit. Features ArduPilot-compatible flight controller, GPS, telemetry, and all the hardware you need for autonomous flight.</p>',
    options: [
      {
        id: 'opt-8',
        name: 'Frame Size',
        values: ['250mm', '450mm'],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: '449.00', currencyCode: 'USD' },
      minVariantPrice: { amount: '299.00', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'var-8-1',
        title: '250mm',
        availableForSale: true,
        selectedOptions: [{ name: 'Frame Size', value: '250mm' }],
        price: { amount: '299.00', currencyCode: 'USD' },
      },
      {
        id: 'var-8-2',
        title: '450mm',
        availableForSale: true,
        selectedOptions: [{ name: 'Frame Size', value: '450mm' }],
        price: { amount: '449.00', currencyCode: 'USD' },
      },
    ],
    featuredImage: {
      url: '/placeholder.svg?height=600&width=600',
      altText: 'Open Source Drone Kit',
      width: 600,
      height: 600,
    },
    images: [
      {
        url: '/placeholder.svg?height=600&width=600',
        altText: 'Open Source Drone Kit',
        width: 600,
        height: 600,
      },
    ],
    seo: {
      title: 'Open Source Drone Kit',
      description: 'Build your own programmable drone with ArduPilot support',
    },
    tags: ['drone', 'robotics', 'ardupilot', 'autonomous'],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-9',
    handle: 'coral-ai-accelerator',
    availableForSale: true,
    title: 'Coral USB AI Accelerator',
    description: 'Add fast ML inferencing to any Linux system. The Coral USB Accelerator provides an Edge TPU coprocessor capable of 4 trillion operations per second.',
    descriptionHtml: '<p>Add fast ML inferencing to any Linux system. The Coral USB Accelerator provides an Edge TPU coprocessor capable of 4 trillion operations per second.</p>',
    options: [
      {
        id: 'opt-9',
        name: 'Type',
        values: ['USB Accelerator'],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: '59.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '59.99', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'var-9-1',
        title: 'USB Accelerator',
        availableForSale: true,
        selectedOptions: [{ name: 'Type', value: 'USB Accelerator' }],
        price: { amount: '59.99', currencyCode: 'USD' },
      },
    ],
    featuredImage: {
      url: '/placeholder.svg?height=600&width=600',
      altText: 'Coral USB AI Accelerator',
      width: 600,
      height: 600,
    },
    images: [
      {
        url: '/placeholder.svg?height=600&width=600',
        altText: 'Coral USB AI Accelerator',
        width: 600,
        height: 600,
      },
    ],
    seo: {
      title: 'Coral USB AI Accelerator',
      description: 'Edge TPU accelerator for fast ML inferencing',
    },
    tags: ['ai', 'tpu', 'machine-learning', 'edge-computing'],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-10',
    handle: 'lidar-sensor-kit',
    availableForSale: true,
    title: 'LiDAR Sensor Development Kit',
    description: 'Professional-grade LiDAR sensor for robotics and autonomous vehicle projects. 360-degree scanning, 12m range, and ROS compatibility included.',
    descriptionHtml: '<p>Professional-grade LiDAR sensor for robotics and autonomous vehicle projects. 360-degree scanning, 12m range, and ROS compatibility included.</p>',
    options: [
      {
        id: 'opt-10',
        name: 'Range',
        values: ['12m', '25m'],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: '399.00', currencyCode: 'USD' },
      minVariantPrice: { amount: '199.00', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'var-10-1',
        title: '12m',
        availableForSale: true,
        selectedOptions: [{ name: 'Range', value: '12m' }],
        price: { amount: '199.00', currencyCode: 'USD' },
      },
      {
        id: 'var-10-2',
        title: '25m',
        availableForSale: true,
        selectedOptions: [{ name: 'Range', value: '25m' }],
        price: { amount: '399.00', currencyCode: 'USD' },
      },
    ],
    featuredImage: {
      url: '/placeholder.svg?height=600&width=600',
      altText: 'LiDAR Sensor Development Kit',
      width: 600,
      height: 600,
    },
    images: [
      {
        url: '/placeholder.svg?height=600&width=600',
        altText: 'LiDAR Sensor Development Kit',
        width: 600,
        height: 600,
      },
    ],
    seo: {
      title: 'LiDAR Sensor Development Kit',
      description: 'Professional LiDAR sensor for robotics and autonomous vehicles',
    },
    tags: ['lidar', 'robotics', 'autonomous', 'sensor'],
    updatedAt: new Date().toISOString(),
  },
];

export const mockCollections: Collection[] = [
  {
    handle: '',
    title: 'All',
    description: 'All products',
    seo: { title: 'All Products', description: 'Browse all AI and maker products' },
    path: '/search',
    updatedAt: new Date().toISOString(),
  },
  {
    handle: 'single-board-computers',
    title: 'Single Board Computers',
    description: 'Raspberry Pi, NVIDIA Jetson, and other single board computers for AI and maker projects',
    seo: { title: 'Single Board Computers', description: 'Raspberry Pi, Jetson, and more' },
    path: '/search/single-board-computers',
    updatedAt: new Date().toISOString(),
  },
  {
    handle: 'smart-home',
    title: 'Smart Home',
    description: 'Open source smart home devices and hubs for privacy-focused automation',
    seo: { title: 'Smart Home', description: 'Open source smart home devices' },
    path: '/search/smart-home',
    updatedAt: new Date().toISOString(),
  },
  {
    handle: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'AI accelerators, development boards, and tools for machine learning projects',
    seo: { title: 'AI & Machine Learning', description: 'AI development tools and accelerators' },
    path: '/search/ai-ml',
    updatedAt: new Date().toISOString(),
  },
  {
    handle: 'robotics',
    title: 'Robotics',
    description: 'Drones, sensors, and components for robotics and autonomous systems',
    seo: { title: 'Robotics', description: 'Robotics components and kits' },
    path: '/search/robotics',
    updatedAt: new Date().toISOString(),
  },
  {
    handle: 'maker-kits',
    title: 'Maker Kits',
    description: 'Arduino kits, LED displays, and components for creative maker projects',
    seo: { title: 'Maker Kits', description: 'Arduino and maker project kits' },
    path: '/search/maker-kits',
    updatedAt: new Date().toISOString(),
  },
];

export const mockMenu: Menu[] = [
  { title: 'All', path: '/search' },
  { title: 'Single Board Computers', path: '/search/single-board-computers' },
  { title: 'Smart Home', path: '/search/smart-home' },
  { title: 'AI & ML', path: '/search/ai-ml' },
  { title: 'Robotics', path: '/search/robotics' },
];

export const mockPages: Page[] = [
  {
    id: 'page-1',
    title: 'About Us',
    handle: 'about',
    body: 'We are passionate about open source hardware and AI technology. Our mission is to make cutting-edge technology accessible to makers, developers, and enthusiasts worldwide.',
    bodySummary: 'Learn about our mission to democratize AI and open source hardware.',
    seo: { title: 'About Us', description: 'Learn about our company' },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'page-2',
    title: 'Shipping & Returns',
    handle: 'shipping-returns',
    body: 'We offer worldwide shipping with tracking. Returns accepted within 30 days of purchase.',
    bodySummary: 'Shipping and return policy information.',
    seo: { title: 'Shipping & Returns', description: 'Our shipping and return policies' },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'page-3',
    title: 'Privacy Policy',
    handle: 'privacy-policy',
    body: 'Your privacy is important to us. We collect only the information necessary to process your orders.',
    bodySummary: 'Our commitment to protecting your privacy.',
    seo: { title: 'Privacy Policy', description: 'How we protect your data' },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'page-4',
    title: 'Terms of Service',
    handle: 'terms-of-service',
    body: 'By using our service, you agree to these terms and conditions.',
    bodySummary: 'Terms and conditions for using our store.',
    seo: { title: 'Terms of Service', description: 'Terms and conditions' },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Helper to get products by collection
export function getProductsByCollection(collectionHandle: string): Product[] {
  if (!collectionHandle || collectionHandle === '') {
    return mockProducts;
  }
  
  const collectionTagMap: Record<string, string[]> = {
    'single-board-computers': ['raspberry-pi', 'nvidia', 'esp32'],
    'smart-home': ['smart-home', 'home-assistant', 'zigbee'],
    'ai-ml': ['ai', 'machine-learning', 'tpu', 'edge-computing'],
    'robotics': ['drone', 'robotics', 'lidar', 'autonomous'],
    'maker-kits': ['arduino', 'maker', 'led', 'electronics'],
  };
  
  const tags = collectionTagMap[collectionHandle] || [];
  return mockProducts.filter(product => 
    product.tags.some(tag => tags.includes(tag))
  );
}

// Helper to get featured products (first 3 with 'featured' tag)
export function getFeaturedProducts(): Product[] {
  return mockProducts.filter(p => p.tags.includes('featured')).slice(0, 3);
}

// Helper to search products
export function searchProducts(query: string): Product[] {
  if (!query) return mockProducts;
  const lowerQuery = query.toLowerCase();
  return mockProducts.filter(p => 
    p.title.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
