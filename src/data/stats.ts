import type { Stat } from '~/types';

export const stats: Stat[] = [
  { value: 6, suffix: '+', label: 'Years in digital delivery' },
  { value: 25, suffix: '+', label: 'Cross-functional team scale' },
  { value: 40, suffix: '%', label: 'Sprint velocity & workflow gain' },
];

/** Headline above the stats band, split so the tail can be dimmed. */
export const statsHeading = {
  lead: 'Predictable delivery is mostly deciding what matters first,',
  tail: 'then protecting that focus from scoping through launch.',
};

/**
 * Poster frame for the studio reel. Set `embedUrl` to a YouTube/Vimeo
 * privacy-friendly embed to make the play button load a real video;
 * leave it empty and the button is hidden.
 */
export const reel = {
  image: '/images/reel-poster.webp',
  alt: 'Delivery planning and sprint review workspace',
  width: 1000,
  height: 625,
  embedUrl: '',
  label: 'Play overview',
};
