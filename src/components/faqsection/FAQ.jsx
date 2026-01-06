import React from 'react';
import PageHeading from '../common/PageHeading';
import Accordion from './Accordion';

const FAQ = () => {

    return (
        <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-8 py-16">
            <div className="max-w-4xl w-full">

                <PageHeading title={"Everything you need to know."} text={"Frequently asked questions about our technology, shipping, warranty, and audio experience."} />

                <Accordion />
            </div>
        </div>
    );
};

export default FAQ;