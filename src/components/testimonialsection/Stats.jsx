import React from 'react'
import Rating from './Rating';
import Buyers from './Buyers';
import RatedBy from './RatedBy';

const Stats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-5">
            <Rating />
            <Buyers />
            <RatedBy />
        </div>
    )
}

export default Stats
