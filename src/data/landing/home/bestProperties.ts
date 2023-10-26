import pana from '@/assets/images/landing/home/bestProperties/pana.png';
import girlPink from '@/assets/images/landing/home/bestProperties/girl-pink.png';
import cuate from '@/assets/images/landing/home/bestProperties/cuate.png';

export const bestPropeties: Array<{
  image: string;
  title: string;
  description: string;
  color: string;
  linkLabel: string;
}> = [
  {
    title: 'Buy Properties',
    description:
      'Browse the website’s database to choose a  property that best fit your taste in Nigeria',
    image: pana,
    color: 'rgba(46, 125, 215, 1)',
    linkLabel: 'Discover properties',
  },
  {
    title: 'Sell Properties',
    description:
      'Put your properties in front of millions of Nigerians and get the best deal in days not months.',
    image: cuate,
    color: 'rgba(48, 101, 132, 1)',
    linkLabel: 'Sell  properties ',
  },
  {
    title: 'Become an Agent',
    description:
      'Create an account and join us to become an agent. Get all the tools your Real estate agency needs.',
    image: girlPink,
    color: 'rgba(191, 94, 101, 1)',
    linkLabel: 'Join us now',
  },
];
