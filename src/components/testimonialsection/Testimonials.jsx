import React from 'react'
import BadgeButton from '../common/BadgeButton';
import PageHeading from '../common/PageHeading';
import ReviewCards from './ReviewCards';
import Stats from './Stats';
import CTAbutton from '../common/CTAbutton';

const Testimonials = () => {



  return (
    <div className=" min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 w-full mx-auto p-8">

      <BadgeButton text="COMMUNITY TRUSTED" />
      <PageHeading title={"Sound that Speaks for Itself"} text={"Join thousands of customers who have upgraded their daily listening experience."} />
      <ReviewCards />
      <Stats />
      <CTAbutton text={"Get Your Pair"}  />

    </div>

  )
}

export default Testimonials
