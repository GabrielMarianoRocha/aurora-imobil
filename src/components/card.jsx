import Image from 'next/image';
import React from 'react';
import eyeIcon from '../assets/icons/eye.png';

const Card = ({ imageSrc, title, price, description, pretension }) => {
  return (
    <div className="w-[350px] h-[400px] hover:scale-105 ease-in duration-200 mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-slate-700">
      <div className="flex flex-col items-start" style={{ backgroundColor: 'white' }}>
        <div className="relative">
          <img
            className="h-[190px] w-full object-contain"
            src='https://pub-8317e9c8f366474496cee204e4f982fc.r2.dev/rodrigo-carpenedo-imoveis/Book%20Ville%20de%20France%20ultimo-imagens-0.jpg'
            alt="house image"
          />
        </div>

        <div className="p-8">
          <div className="capitalize text-cardText font-black text-[15px] leading-[30px] dark:text-black">
            {title}
          </div>
          <p className=" text-2xl leading-[30px] font-bold text-cardText py-[10px] dark:text-black ">
            {price}
          </p>
          <p className="text-[13px] leading-[25px] text-blueCardSubTitle font-bold py-[10px]  dark:text-black">
            {pretension}
          </p>
          <p className="text-xs leading-5 text-blueCardSubTitle font-bold dark:text-black">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
