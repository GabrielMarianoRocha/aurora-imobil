import Image from 'next/image';
import React from 'react';
import apartmentIcon from '../assets/icons/apartment.png';
import officeIcon from '../assets/icons/office.png';
import houseIcon from '../assets/icons/house.png';
import warehouseIcon from '../assets/icons/warehouse.png';
import parkingIcon from '../assets/icons/parking.png';
import Link from 'next/link';

const Services = () => {
  return (
    <div id="services" className="relative p-4 mb-4">
      {/* 5 icons and names of services */}
      <div className="grid grid-cols-2 sm:flex justify-center items-center mt-16 ml-[40px]">

        <div className="flex flex-col mr-[60px] hover:scale-125  ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] mr-[30px] flex flex-col justify-center items-center rounded-[120px] shadow-xl p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image
              src={apartmentIcon}
              alt="apartment"
              className="w-[45px] h-[45px]"
            />
            <p className="font-bold text-sm leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              Apartamento
            </p>
          </div>
        </div>

        <div className="flex flex-col  mr-[60px] hover:scale-125  ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] sm:w-[166px] mr-[30px] flex flex-col justify-center items-center rounded-[120px] shadow-xl p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image src={officeIcon} alt="office" className="w-10 h-10" />
            <p className="font-bold text-sm leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              Office
            </p>
          </div>
        </div>

        <div className="flex flex-col  mr-[60px] hover:scale-125  ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] mr-[30px] flex flex-col justify-center items-center rounded-[120px] shadow-xl p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image src={warehouseIcon} alt="warehouse" className="w-10 h-10" />
            <p className="font-bold text-sm leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              Warehouse
            </p>
          </div>
        </div>

        <div className="flex flex-col  mr-[60px] hover:scale-125  ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] mr-[30px] flex flex-col justify-center items-center rounded-[120px] shadow-xl p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image src={parkingIcon} alt="parking" className="w-[26px] h-11" />
            <p className="font-bold text-sm leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              asd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
