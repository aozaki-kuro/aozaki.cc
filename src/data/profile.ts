export interface IconText {
  icon: string;
  text: string;
}

export interface SocialLink extends IconText {
  href: string;
  rel?: string;
}

export const professions: IconText[] = [
  { icon: 'fa6-solid:stethoscope', text: 'Doctor' },
  { icon: 'fa6-solid:heart-pulse', text: 'Cardiologist' },
  { icon: 'fa6-solid:graduation-cap', text: 'MD' },
];

export const hobbies: IconText[] = [
  { icon: 'fa6-solid:camera-retro', text: 'Photographer' },
  { icon: 'fa6-solid:headphones-simple', text: 'Audiophile' },
  { icon: 'fa6-solid:film', text: 'Cinephile' },
];

export const socialLinks: SocialLink[] = [
  { icon: 'fa6-solid:feather-pointed', text: 'My Blog', href: 'https://blog.aozaki.cc/' },
  {
    icon: 'fa6-brands:twitter',
    text: 'Twitter',
    href: 'https://310.im/x',
    rel: 'noopener noreferrer',
  },
  {
    icon: 'fa6-brands:mastodon',
    text: 'Mastodon',
    href: 'https://310.im/ms',
    rel: 'me noopener noreferrer',
  },
  {
    icon: 'fa6-brands:github',
    text: 'GitHub',
    href: 'https://310.im/gh',
    rel: 'noopener noreferrer',
  },
];

export const contactLinks: SocialLink[] = [
  {
    icon: 'fa6-brands:discord',
    text: 'Discord',
    href: 'https://310.im/dc',
    rel: 'me noopener noreferrer',
  },
  {
    icon: 'fa6-brands:telegram',
    text: 'Telegram',
    href: 'https://310.im/tg',
    rel: 'me noopener noreferrer',
  },
];

export const email = {
  icon: 'fa6-solid:envelope',
  address: 'i@aozaki.cc',
  display: 'i#aozaki.cc',
};
