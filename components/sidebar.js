'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, HomeIcon, CubeIcon, ChartBarIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { id: 'home', name: 'Home', icon: HomeIcon },
    { id: 'products', name: 'Products', icon: CubeIcon },
    { id: 'analytics', name: 'Analytics', icon: ChartBarIcon },
    { id: 'profile', name: 'Profile', icon: UserCircleIcon },
  ];

  return (
    <>
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-800" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      <nav
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}
      >
        <div className="p-6 flex items-center justify-center">
          <Image
            src="/nestlogo.png"
            alt="nest logo"
            width={120}
            height={120}
            className="mx-auto hover:scale-105 transition-transform"
          />
        </div>

        <div className="px-6 py-3 mb-8 border-b border-slate-700">
          <h1 className="text-xl font-semibold mb-1 text-indigo-300">Anar-Erdene</h1>
          <p className="text-sm text-gray-300">Admin</p>
          <p className="text-sm text-gray-400">anarerdene@gmail.com</p>
        </div>

        <div className="px-4 mb-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`flex items-center space-x-3 w-full px-4 py-3 mb-2 rounded-md transition-all ${
                activeNav === item.id
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
              {activeNav === item.id && (
                <div className="w-1.5 h-1.5 rounded-full bg-white ml-auto"></div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-auto p-6 flex flex-col space-y-3">
          <button className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 px-4 py-2.5 rounded-md transition-all duration-300 shadow-md text-sm font-medium">Lab1</button>
          <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2.5 rounded-md transition-colors text-sm font-medium">Lab2</button>
        </div>
      </nav>
    </>
  );
}

