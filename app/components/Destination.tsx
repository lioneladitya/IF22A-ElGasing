// File: components/DestinationCard.tsx
'use client';

import React from 'react';
import Image from 'next/image';

interface DestinationCardProps {
  img: string;
  place: string;
  country: string;
  price: string;
  rating: string;
  url: string; // Properti URL yang dibutuhkan
}

const DestinationCard = ({ img, place, country, price, rating, url }: DestinationCardProps) => {
  return (
    <div className="bg-white/5 h-[600px] w-[340px] pb-4 rounded-3xl shadow-2 flex flex-col gap-4">
      <a href={url} className="h-2/3 rounded-t-3xl cursor-pointer">
        <Image className="h-full w-full rounded-t-3xl" src={img} alt={place} width={150} height={150} />
      </a>

      <div className="h-1/3 px-6">
        <div className="place-price flex justify-between">
          <p className="font-bold text-lg w-1/2">{place}</p>
          <p className="font-bold text-lg md:flex hidden">{price}</p>
        </div>
        <p className="mt-3">{country}</p>
        <div className="mt-6 flex gap-1 items-center">
          <p className="text_orange font-bold">{rating}</p>
          <Image className="h-full" src="/star.png" alt="star" width={20} height={5} />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
