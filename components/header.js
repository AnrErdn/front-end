'use client';

import { MagnifyingGlassIcon, UserGroupIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Header() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 shadow-lg flex justify-between items-center transition-all duration-300">
      {/* Left section */}
      <div className="flex space-x-4">
        {/* Hariltsagchid */}
        <button className="flex items-center space-x-1 hover:scale-105 transition-transform bg-indigo-600 hover:bg-indigo-700 p-2.5 rounded-md group">
          <UserGroupIcon className="h-5 w-5 text-white" />
          <span className='text-white text-sm font-medium'>Харилцагчид</span>
        </button>

        {/* Search */}
        <div className={`flex items-center space-x-1 bg-slate-700 ${searchFocused ? 'ring-2 ring-indigo-400' : ''} w-72 rounded-md pl-4 transition-all duration-200`}>
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-300" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white w-full py-2.5 px-2 focus:outline-none text-sm"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>

      {/* Right section */}
      <div>
        {/* Бараа бүртгэх */}
        <button className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2.5 rounded-md hover:bg-indigo-500 transition-colors shadow-md hover:shadow-indigo-700/30">
          <PlusIcon className="h-5 w-5" />
          <span className="font-medium text-sm">Бараа бүртгэх</span>
        </button>
      </div>
    </header>
  );
}

