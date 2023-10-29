import { PropertyType } from '@/type/propertyType';
import image1 from '@/assets/images/landing/home/recommended/rec1.png';
import image2 from '@/assets/images/landing/home/recommended/rec2.png';
import image3 from '@/assets/images/landing/home/recommended/rec3.png';
import image4 from '@/assets/images/landing/home/recommended/rec4.jpg';
import image5 from '@/assets/images/landing/home/recommended/rec5.jpg';
import image6 from '@/assets/images/landing/home/recommended/rec6.jpg';
import image8 from '@/assets/images/landing/home/recommended/rec8.jpg';
import image9 from '@/assets/images/landing/home/recommended/rec9.jpg';
import image10 from '@/assets/images/landing/home/recommended/rec10.jpg';

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
    location: 'Agbara Estate, Ogun',
    description: 'An exclusive gorgeous home close from golf of the cologny lekki',
    price: '₦120,000,000',
    type: 'sale',
    image: image2,
  },
  {
    location: 'Ikoyi, Lagos',
    description: 'An exclusive gorgeous home close from golf of the cologny lekki',
    price: '₦400,000,000',
    type: 'sale',
    image: image3,
  },
  {
    location: 'Ikeja, Lagos',
    description: 'An exclusive gorgeous home close from golf of the cologny lekki',
    price: '₦35,000,000',
    type: 'rent',
    image: image4,
  },
  {
    location: 'Abeokuta, Ogun',
    description: 'An exclusive gorgeous home close from golf of the cologny lekki',
    price: '₦50,000,000',
    type: 'sale',
    image: image5,
  },
  {
    location: 'Victoria Island, Lagos',
    description: 'An exclusive gorgeous home close from golf of the cologny lekki',
    price: '₦750,000,000',
    type: 'sale',
    image: image6,
  },

  {
    location: 'Lekki Phase 1, Lagos',
    description: 'An exclusive gorgeous home close from golf of the cologny lekki',
    price: '₦180,000,000',
    type: 'rent',
    image: image8,
  },
  {
    location: 'Abeokuta, Ogun',
    description: 'An exclusive gorgeous home close from golf of the cologny lekki',
    price: '₦25,000,000',
    type: 'sale',
    image: image9,
  },
  {
    location: 'Ikorodu, Lagos',
    description: 'An exclusive gorgeous home close from golf of the cologny lekki',
    price: '₦30,000,000',
    type: 'rent',
    image: image10,
  },
];
