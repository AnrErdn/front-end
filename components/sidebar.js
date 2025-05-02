'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar}>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-800" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      <nav
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}
      >
        <div className="p-6">
          <Image
            src="/nestlogo.png"
            alt="nest logo"
            width={145}
            height={160}
            className="mx-auto"
          />
        </div>

        <div className="px-6">
          <h1 className="text-xl font-semibold mb-1">Anar-Erdene</h1>
          <p className="text-sm text-gray-300">Admin</p>
          <p className="text-sm text-gray-400">anarerdene@gmail.com</p>
        </div>

        <div className="mt-auto p-6 flex flex-col space-y-3">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Lab1</button>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Lab2</button>
        </div>
      </nav>
    </>
  );
}
