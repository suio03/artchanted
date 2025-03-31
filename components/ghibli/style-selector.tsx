
import React from 'react';
import Link from 'next/link';

const styles = [
  { id: 'anime', name: 'Anime' },
  { id: 'lego', name: 'Lego' },
  { id: 'minecraft', name: 'Minecraft' },
  { id: 'muppets', name: 'Muppets' },
  { id: 'rick&morty', name: 'Rick&Morty' }
];

interface StyleSelectorProps {
  activeStyle: string;
}

export default function StyleSelector({ activeStyle }: StyleSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 py-6">
      {styles.map((style) => (
        <Link
          key={style.id}
          href={`/?style=${style.id}`}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activeStyle === style.id
              ? 'bg-purple-600 text-white'
              : 'bg-white hover:bg-purple-100 text-gray-700'
          }`}
        >
          {style.name}
        </Link>
      ))}
    </div>
  );
}
