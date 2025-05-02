'use client';

import { MagnifyingGlassIcon, UserGroupIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="w-full bg-white px-6 py-4 shadow flex justify-between items-center">
      {/* Left section */}
      <div className="flex space-x-4">
        {/* Hariltsagchid */}
        <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 bg-black p-2 rounded-md">
          <UserGroupIcon className="h-5 w-5 text-white" />
          <span className='text-white'>Харилцагчид</span>
        </button>

        {/* Search */}
        <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 border-gray-500 border-2 w-72 rounded-md pl-4">
          <MagnifyingGlassIcon className="h-5 w-5" />
          <span>Search</span>
        </button>
      </div>

      {/* Right section */}
      <div>
        {/* Бараа бүртгэх */}
        <button className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <PlusIcon className="h-5 w-5" />
          <span>Бараа бүртгэх</span>
        </button>
      </div>
    </header>
  );
}
