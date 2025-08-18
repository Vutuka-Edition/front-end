export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Amina Nkurunziza',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    comment:
      "Absolutely loved 'The Alchemist'! The translation and layout from Vutuka Edition are top-notch. I highly recommend it to anyone looking for a great read.",
    date: 'May 24, 2024',
  },
  {
    id: 2,
    name: 'Samuel Kamanzi',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    comment:
      "Great collection of books. The digital library makes it easy to read anywhere. I love the variety of genres available. I guess you could say there's something for everyone!",
    date: 'September 14, 2024',
  },
  {
    id: 3,
    name: 'Grace Uwase',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    comment:
      'I published my first book with Vutuka Edition, and the support was excellent from start to finish!',
    date: 'March 5, 2024',
  },
  {
    id: 4,
    name: 'Jean Claude',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    rating: 4,
    comment:
      'I enjoy the community programs and reading events. Vutuka Edition is more than just a publisher.',
    date: 'April 1, 2024',
  },
];
