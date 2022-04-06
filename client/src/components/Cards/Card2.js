import React from 'react';

const Card2 = () => {
  const title = 'Title';
  const subTitles = 'Subtitles';
  const imgSrc =
    'https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg';

  return (
    <div className="w-40 h-52 rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transform hover:scale-105 transition ease-out duration-300">
      <img src={imgSrc} alt="" className="w-full h-3/4 object-cover" />
      <div className="w-full h-1/4 px-3 pb-2 flex flex-col items-start justify-center bg-white">
        <span className="font-bold text-black">{title}</span>
        <span className="block text-black text-sm">{subTitles}</span>
      </div>
    </div>
  );
};

export default Card2;
