import React from 'react';
import FeatureCards from './FeatureCards';
import BadgeButton from '../common/BadgeButton';
import PageHeading from '../common/PageHeading';

const Features = () => {
  

  return (

    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-8 ">

      <div className="max-w-7xl w-full ">
        <BadgeButton text="PREMIUM AUDIO" />

        <PageHeading title={"Engineered for Excellence"} text={"Experience sound as it was intended. Meticulously crafted features designed for the ultimate listening journey."} />

        <FeatureCards />

      </div>
    </div>
  );
};

export default Features;