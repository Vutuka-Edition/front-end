import { BadgeDollarSign, Users, HeartHandshake } from 'lucide-react';

import applePay from '../assets/images/apple-pay.png';
import googlePay from '../assets/images/google-pay.png';
import paypal from '../assets/images/pay-pal.png';
import mastercard from '../assets/images/Mastercard.png';
import profile1 from '../assets/images/profile1.jpg';
import profile2 from '../assets/images/profile2.jpg';
import profile3 from '../assets/images/profile3.jpg';

export interface Process {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  images?: string[];
  tagline?: string[];
  text?: string;
}

export const processes: Process[] = [
  {
    id: 1,
    icon: Users,
    title: 'Create Account',
    description: 'Sign up to get started with our secure platform.',
    images: [profile1, profile2, profile3],
    text: 'Get Started'
  },
    {
    id: 2,
    icon: HeartHandshake,
    title: 'Submit your Text',
    description: 'Share your thoughts and ideas with our authors and get correction.',
    tagline: ['Share', 'Collaborate', 'Improve'],
    text: 'Submit Text'
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: 'Get Published',
    description: 'Your work will be published and shared with the community.',
    tagline: ['Publish', 'Share', 'Inspire'],
  },
    {
    id: 4,
    icon: BadgeDollarSign,
    title: 'Earn Money',
    description: 'Earn money by sharing your work with the community.',
    images: [applePay, googlePay, paypal, mastercard],
    text: 'Payment Options'
  },
];
