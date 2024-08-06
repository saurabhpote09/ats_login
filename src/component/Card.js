import React from 'react';

const Card = ({ icon, number, label, trendIcon, trend }) => {
    return (
        
        <div className="grid grid-cols-3 grid-rows-2 gap-0 justify-center items-center shadow-md rounded-lg p-6 border">
        <div className="col-start-1 row-start-1 row-span-2 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">
          <img src={icon} alt={label} aria-label={label} />
        </div>
        <div className="col-start-2 row-start-1 flex items-center">
          <div className="text-[32px] font-bold">{number}</div>
        </div>
        <div className="col-start-3 row-start-1 flex items-center justify-end gap-1">
          <img src={trendIcon} alt="Trend" aria-label="Trend Icon" />
          <span className='text-sm font-medium text-[#00B656]'>{trend}</span>
        </div>
        <div className="col-start-2 col-span-2 row-start-2 flex ">
          <div className="text-black text-base  font-medium">{label}</div>
        </div>
      </div>
      

    );
};

export default Card;
