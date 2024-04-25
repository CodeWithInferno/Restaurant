'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Import the Button component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white font-bold">SubDash</h1>
            </div>
          </div>
          <div className="hidden md:flex justify-end items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <Button>Home</Button>
              <Button>Services</Button>
              <Button>About</Button>
              <Button>Contact</Button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? '' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Button>Home</Button>
          <Button>Services</Button>
          <Button>About</Button>
          <Button>Contact</Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;



