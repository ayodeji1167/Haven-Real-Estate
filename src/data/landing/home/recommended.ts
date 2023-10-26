import { PropertyType } from '@/type/propertyType';
import image1 from '@/assets/images/landing/home/recommended/rec1.png';
import image2 from '@/assets/images/landing/home/recommended/rec2.png';
import image3 from '@/assets/images/landing/home/recommended/rec3.png';
export const recommendedProperties: Array<{
  image: string;
  type: PropertyType;
  location: string;
  description: string;
  price: string;
}> = [
  {
    location: 'Osapa London Lekki, Lagos',
    description: 'An exclusive gorgeous home close from golf of the cologny lekki',
    price: '₦270,000,000',
    type: 'rent',
    image: image1,
  },
  {
    location: 'Osapa London Lekki, Lagos',
    description: 'An exclusive gorgeous home close from golf of the cologny lekki',
    price: '₦270,000,000',
    type: 'buy',
    image: image2,
  },
  {
    location: 'Osapa London Lekki, Lagos',
    description: 'An exclusive gorgeous home close from golf of the cologny lekki',
    price: '₦270,000,000',
    type: 'short let',
    image: image3,
  },
];
