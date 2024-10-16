import React from 'react';

const Slide = () => {
  const images = [
    "/images/gyouza.png",  

    
  ];

  return (
    <div className="relative overflow-hidden px-4 ">
      
      <div className="infinite-slider animate-slide whitespace-nowrap gap-1 ">
        {images.map((image, index) => (

          
          <img
            key={index}
            src={image}
            alt=""
            className="inline-block h-full object-cover "
            style={{ }}

          />
        ))}
      </div>
    </div>
  );
};

export default Slide;
