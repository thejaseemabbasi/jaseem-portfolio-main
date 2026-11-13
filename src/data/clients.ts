import type { Client } from '~/types';

/**
 * Logos for the marquee strip. Each entry draws on a 24×24 viewBox with
 * `fill="none" stroke="currentColor" stroke-width="1.8"`, so a simple
 * path or a couple of shapes is all you need.
 */
export const clients: Client[] = [
  { name: 'Zayed National Museum', shape: '<path d="M4 20h16M6 20V9l6-5 6 5v11"/>' },
  { name: 'ADGM', shape: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18"/>' },
  { name: 'Abu Dhabi Finance Week', shape: '<path d="M4 20 12 4l8 16z"/>' },
  { name: 'WAGMI Games', shape: '<path d="M12 3.5 20 12l-8 8.5L4 12z"/>' },
  { name: 'LMCC', shape: '<rect x="4" y="4" width="16" height="16" rx="5"/><path d="M9 12h6"/>' },
  { name: 'Direct Macro', shape: '<circle cx="9" cy="12" r="5.5"/><circle cx="15" cy="12" r="5.5"/>' },
  { name: 'PartyShark', shape: '<circle cx="12" cy="12" r="8.5"/><path d="M7 12h10M12 7v10"/>' },
];

export const clientsLabel = 'Delivered across MENA, US & Europe';
