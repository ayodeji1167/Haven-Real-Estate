import React from 'react';
import Hero from '../components/Home/Hero/Hero';
import BestProperties from '../components/Home/BestProperties/BestProperties';
import TrendingProperties from '../components/Home/TrendingProperties/TrendingProperties';
import RecommendedProperties from '../components/Home/RecomendedProperties/RecommendedProperties';

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
