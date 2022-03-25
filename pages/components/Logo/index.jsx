import React from 'react';
import Image from 'next/image';
import logoImg from './logo.png';

export default function Logo() {
  return (
    <div>
      <figure className="flex items-center justify-center h-full w-full">
        <Image
          src={logoImg}
          alt="My Image"
          width={300}
          height={130}

        />
      </figure>
    </div>
  );
}
