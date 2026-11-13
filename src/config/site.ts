import type { SiteConfig } from '~/types';

export const siteConfig: SiteConfig = {
  name: 'Jaseem Abbasi',

  logo: {
    header: { src: '/images/header-logo.webp', width: 164, height: 58 },
    footer: { src: '/images/footer-logo.webp', width: 164, height: 58 },
  },

  author: 'Jaseem Abbasi',
  role: 'Technical Project, Product & Delivery Manager',
  title: 'Jaseem Abbasi — Technical Project, Product & Delivery Manager',
  description:
    'Portfolio of Jaseem Abbasi, a Technical Project Manager, Certified Scrum Master, and Product Manager with six years of experience leading enterprise CMS, mobile, web, and game programs across MENA, North America, and Europe.',
  url: import.meta.env.SITE ?? 'https://thejaseemabbasi.com',
  ogImage: '/og-default.png',
  locale: 'en',
  themeColor: '#c8f14d',

  contact: {
    email: 'thejaseemabbasi@gmail.com',
    phone: '+92 333 1335258',
    phoneHref: '+923331335258',
    location: 'Karachi, Pakistan — Remote across MENA, US & EU',
    availability: 'Available for Senior PM, Scrum & Product Leadership',
    formEndpoint: '',
  },

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaseemabbasi/', icon: 'linkedin' },
  ],

  about:
    'Technical Project Manager, Certified Scrum Master, and Product Manager with six years of experience governing enterprise CMS, mobile, web, and game deliveries from scope to launch.',

  copyrightHolder: 'Jaseem Abbasi',
};

export default siteConfig;
