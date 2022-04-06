import React from 'react';

const Card1 = () => {
  const title = 'Title';
  const subTitles = 'Subtitles';
  const imgSrc =
    'https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg';

  return (
    <div className="w-2/4 h-52 rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transform hover:scale-105 transition ease-out duration-300">
      <img src={imgSrc} alt="" className="w-full h-52 object-cover" />
      <div className="w-full px-3 pb-2 absolute top-32 mt-7 bg-gray-500 bg-opacity-40">
        <span className="font-bold text-white">{title}</span>
        <span className="block text-white text-sm">{subTitles}</span>
      </div>
    </div>
  );
};

export default Card1;
