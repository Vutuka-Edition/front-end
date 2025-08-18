export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: string;
  isbn: string;
  imageUrl: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    description: 'A guide to living in the present moment and finding inner peace.',
    price: '$12.99',
    isbn: '9781577314806',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg',
  },
  {
    id: 2,
    title: 'Becoming',
    author: 'Michelle Obama',
    description: 'An intimate and inspiring memoir by the former First Lady.',
    price: '$16.50',
    isbn: '9781524763138',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9781524763138-L.jpg',
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'Build good habits, break bad ones, and master tiny behaviors.',
    price: '$14.99',
    isbn: '9780735211292',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
  },
  {
    id: 4,
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    description: 'A classic on mindset, persistence, and the philosophy of success.',
    price: '$10.75',
    isbn: '9781585424337',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg',
  },
  {
    id: 5,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    description: 'How Homo sapiens came to dominate—and reshape—the world.',
    price: '$18.00',
    isbn: '9780062316110',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780062316110-L.jpg',
  },
  {
    id: 6,
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey',
    description: 'Timeless principles of personal and professional effectiveness.',
    price: '$15.95',
    isbn: '9780743269513',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780743269513-L.jpg',
  },
  {
    id: 7,
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    description: 'Personal finance lessons about wealth, assets, and mindset.',
    price: '$11.50',
    isbn: '9781612680170',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9781612680170-L.jpg',
  },
  {
    id: 8,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    description: 'A fable about following your dreams and listening to your heart.',
    price: '$9.99',
    isbn: '9780061122415',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg',
  },
  {
    id: 9,
    title: 'Educated',
    author: 'Tara Westover',
    description: 'A memoir about self-invention and the pursuit of education.',
    price: '$13.75',
    isbn: '9780399590504',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg',
  },
  {
    id: 10,
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    description: 'A counterintuitive guide to living a better life by caring less.',
    price: '$12.50',
    isbn: '9780062457714',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg',
  },
];
