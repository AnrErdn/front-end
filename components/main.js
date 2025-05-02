'use client';

import Image from 'next/image';

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
  return (
    <div className="bg-slate-100 p-6 rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Product Inventory</h1>
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-md shadow-md p-4 flex items-center justify-between hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">{product.name}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            </div>

            <div className="flex space-x-8 text-right">
              <div>
                <p className="text-sm text-gray-400">Count</p>
                <p className="text-lg font-medium">{product.count}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Price</p>
                <p className="text-lg font-medium">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
