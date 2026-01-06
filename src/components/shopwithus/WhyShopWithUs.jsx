import React from 'react';
import { Shield, Banknote, BadgeCheck, RotateCcw } from 'lucide-react';
import PageHeading from '../common/PageHeading';
import BenefitCard from './BenefitCard';

const WhyShopWithUs = () => {

    return (
        <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-8 py-16">
            <div className="max-w-7xl w-full">

                <PageHeading title={"Why Shop With Us"} text={"Experience premium sound with complete peace of mind. We ensure a seamless and secure shopping journey from checkout to unboxing."} />

                <BenefitCard />
            </div>
        </div>
    );
};

export default WhyShopWithUs;