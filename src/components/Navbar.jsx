import { motion } from 'framer-motion';
import React from 'react';
import { navLists } from '../constants';
import { appleImg, bagImg, searchImg } from '../utils';

const MenuItem = ({ item }) => {
  return (
    <div className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-gray hover:text-white transition-all"
      >
        {item}
      </motion.p>
    </div>
  );
};

const Menu = ({ children }) => {
  return (
    <nav className="relative rounded-3xl border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-6 px-12 py-4">
      {children}
    </nav>
  );
};

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5">
      <div className="flex items-center justify-between w-full max-w-[90rem] mx-auto">
        <img src={appleImg} alt="Apple" width={14} height={18} className="cursor-pointer" />

        <Menu>
          {navLists.map((nav) => (
            <MenuItem key={nav} item={nav} />
          ))}
        </Menu>

        <div className="flex items-center gap-4">
          <img src={searchImg} alt="search" width={18} height={18} className="cursor-pointer" />
          <img src={bagImg} alt="bag" width={18} height={18} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// not responsive yet 2
