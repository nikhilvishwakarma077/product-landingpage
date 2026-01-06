import React from 'react';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const MainProductPage = () => {

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 py-25 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <LeftColumn />

          <RightColumn />
        </div>
      </div>
    </div>
  );
};

export default MainProductPage;