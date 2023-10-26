import React from 'react';
import Hero from '../components/Home/Hero';
import BestProperties from '../components/Home/BestProperties';
import TrendingProperties from '../components/Home/TrendingProperties';
import RecommendedProperties from '../components/Home/RecommendedProperties';

export default function Home() {
  return (
    <div>
      <Hero />
      <BestProperties />
      <TrendingProperties />
      <RecommendedProperties />
    </div>
  );
}
