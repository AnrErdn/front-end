'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PencilIcon, TrashIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const products = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    count: 12,
    price: 1999,
    image: '/iphone14.png',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Martian DXRACER',
    count: 7,
    price: 1799,
    image: '/martian.png',
    category: 'Gaming',
  },
  {
    id: 3,
    name: 'MacBook Air M2',
    count: 5,
    price: 2499,
    image: '/macbook.png',
    category: 'Computers',
  },
  {
    id: 4,
    name: 'Leather Office Chair',
    count: 8,
    price: 899,
    image: '/chair.png',
    category: 'Furniture',
  },
  {
    id: 5,
    name: 'Nike Air Max 270',
    count: 20,
    price: 149,
    image: '/airjordan.png',
    category: 'Clothing',
  },
];

export default function Main() {
  const [sortField, setSortField] = useState('id');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Filter products by category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    } else {
      return a[sortField] < b[sortField] ? 1 : -1;
    }
  });

  return (
    <div className="p-6 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Product Inventory</h1>
          <div className="flex space-x-4">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-slate-100 border border-slate-200 text-slate-700 py-2 px-4 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-slate-100">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider cursor-pointer hover:bg-slate-200 transition-colors" onClick={() => handleSort('id')}>
                  <div className="flex items-center">
                    ID
                    {sortField === 'id' && (
                      <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Product
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider cursor-pointer hover:bg-slate-200 transition-colors" onClick={() => handleSort('category')}>
                  <div className="flex items-center">
                    Category
                    {sortField === 'category' && (
                      <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider cursor-pointer hover:bg-slate-200 transition-colors" onClick={() => handleSort('count')}>
                  <div className="flex items-center">
                    Count
                    {sortField === 'count' && (
                      <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider cursor-pointer hover:bg-slate-200 transition-colors" onClick={() => handleSort('price')}>
                  <div className="flex items-center">
                    Price
                    {sortField === 'price' && (
                      <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {sortedProducts.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 whitespace-nowrap text-sm font-medium text-slate-900">
                    #{product.id}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-12 h-12 relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="rounded-md object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-slate-900">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap text-sm text-slate-600">
                    <span className="px-2 py-1 rounded-md bg-slate-100">{product.category}</span>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap text-sm text-slate-900">
                    {product.count}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap text-sm text-slate-900">
                    ${product.price.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button className="p-1.5 rounded-md bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 rounded-md bg-rose-100 text-rose-600 hover:bg-rose-200 transition-colors">
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

