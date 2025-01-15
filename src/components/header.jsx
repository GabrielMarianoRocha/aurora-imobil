import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [header, setHeader] = useState(false);
  return (
    <div
      style={{ background: '#f7b500' }}
      className=" fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-5 flex justify-between items-center p-4">
        <Link href="/">
          <h1
            style={{ color: 'white' }}
            className="py-2 text-2xl font-bold hover:text-orange-500"
          >
            Aurora Systems
          </h1>
        </Link>
      </div>

      {/* Search */}

      <div className=" hidden sm:flex">
        <input
          type="text"
          placeholder="Pesquisar"
          maxLength="20"
          className="w-40 bg-transparent outline-none placeholder-white mx-4 py-2 text-white capitalize"
        />
      </div>

      <ul
        style={{ color: 'white' }}
        className="text-sm font-bold hidden sm:flex
      "
      >
        <li className=" p-4 hover:text-orange-500">
          <Link href="#about-container">Sobre</Link>
        </li>
        <li className=" p-4 hover:text-orange-500">
          <Link href="#services">Serviços</Link>
        </li>
        <li className=" p-4 hover:text-orange-500">
          <Link href="#reviews">Avaliações</Link>
        </li>
        <li className=" p-4 hover:text-orange-500">
          <Link href="#contact">Contato</Link>
        </li>
      </ul>

      <div className="block sm:hidden p-4 z-10">
        {header ? (
          <AiOutlineClose size={30} style={{ color: 'white' }} />
        ) : (
          <AiOutlineMenu size={30} style={{ color: 'white' }} />
        )}
      </div>
    </div>
  );
};

export default Header;
