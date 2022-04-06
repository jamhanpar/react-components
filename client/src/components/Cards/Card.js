import React from 'react';

const Card = () => {
  const title = 'Title';
  const subTitles = 'Subtitles';
  const imgSrc =
    'https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg';

  return (
    <div className="w-3/4 h-52 rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transform hover:scale-105 transition ease-out duration-300">
      <img src={imgSrc} alt="" className="object-cover" />
      <div className="m-3 absolute top-32 mt-7 flex flex-col items-start">
        <span className="font-bold text-white">{title}</span>
        <span className="block text-white text-sm">{subTitles}</span>
      </div>
    </div>
  );
};

export default Card;
