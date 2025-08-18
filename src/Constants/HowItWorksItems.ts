import { BadgeDollarSign, Send, Users, HeartHandshake } from 'lucide-react';

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
    title: 'Create Your Account',
    description:
      'Sign up quickly to access Vutuka Edition’s library, submit manuscripts, or join our reading community. Create your profile and start exploring today.',
    images: [profile1, profile2, profile3],
    text: 'Get Started',
  },
  {
    id: 2,
    icon: Send,
    title: 'Submit Your Manuscript',
    description:
      'Share your manuscript or text with our editorial team. Collaborate and receive constructive feedback to refine your work before publication.',
    tagline: ['Share', 'Collaborate', 'Improve'],
    text: 'Submit Text',
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: 'Get Published',
    description:
      'Once your work is polished, Vutuka Edition will publish it and make it available to our global community of readers. Inspire others with your stories and ideas.',
    tagline: ['Publish', 'Share', 'Inspire'],
  },
  {
    id: 4,
    icon: BadgeDollarSign,
    title: 'Earn from Your Work',
    description:
      'Monetize your creativity! Receive payments when readers purchase your books or access premium content. Flexible payment options make it simple to get paid securely.',
    images: [applePay, googlePay, paypal, mastercard],
    text: 'Payment Options',
  },
];
