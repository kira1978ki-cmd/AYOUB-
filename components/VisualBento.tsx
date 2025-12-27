
import React from 'react';

const items = [
  { size: 'col-span-2 row-span-2', img: 'https://picsum.photos/800/800?random=1', color: 'bg-blue-500' },
  { size: 'col-span-1 row-span-1', img: 'https://picsum.photos/400/400?random=2', color: 'bg-purple-500' },
  { size: 'col-span-1 row-span-2', img: 'https://picsum.photos/400/800?random=3', color: 'bg-orange-500' },
  { size: 'col-span-1 row-span-1', img: 'https://picsum.photos/400/400?random=4', color: 'bg-emerald-500' },
  { size: 'col-span-2 row-span-1', img: 'https://picsum.photos/800/400?random=5', color: 'bg-rose-500' },
];

const VisualBento: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className={`${item.size} relative group overflow-hidden rounded-3xl glass-panel cursor-pointer`}
          >
            <div className={`absolute inset-0 opacity-10 ${item.color} group-hover:opacity-30 transition-opacity duration-700`} />
            <img 
              src={item.img} 
              alt="" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div className="w-12 h-1 bg-white rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualBento;
