interface SocialMediaLink {
  id: number;
  platform: string;
  url: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  { id: 1, platform: 'Facebook', url: 'https://www.facebook.com/' },
  { id: 2, platform: 'Twitter', url: 'https://www.twitter.com/' },
  { id: 3, platform: 'Instagram', url: 'https://www.instagram.com/' },
  { id: 4, platform: 'LinkedIn', url: 'https://www.linkedin.com/' },
];

export default socialMediaLinks;
