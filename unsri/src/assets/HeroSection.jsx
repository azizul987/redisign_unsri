import React from 'react';
import rectorateImg from '../assets/gedung-rektorat.png';
import fasilkomImg from '../assets/gedung-fasilkom.png';
import logoA from '../assets/logo.png';
import logoB from '../assets/logo-2.png';
import logoC from '../assets/logo-3.png';
import logoD from '../assets/logo-4.png';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[480px] md:min-h-[560px]">
      {/* Split Background */}
      <div className="absolute inset-0 z-0 grid grid-rows-2 md:grid-rows-1 md:grid-cols-[9fr_4fr]">
        <div className="relative row-span-1">
          <img src={rectorateImg} alt="Gedung Rektorat Unsri" className="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
        </div>
        <div className="relative row-span-1">
          <img src={fasilkomImg} alt="Gedung Fasilkom Unsri" className="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
        </div>
      </div>

      {/* Logo Row */}
      <div className="md:absolute z-10 left-0 w-full md:w-[69.23%] md:top-6">
        <div className="px-4">
          <div className="flex justify-center items-center gap-4 md:gap-6">
            {[logoA, logoB, logoC, logoD].map((src, idx) => (
              <img key={idx} src={src} alt={`Logo ${idx + 1}`} className="h-8 w-auto md:h-10 object-contain drop-shadow" loading="lazy"/>
            ))}
          </div>
        </div>
      </div>

      {/* Teks & Tombol */}
      <div className="md:absolute z-10 left-0 w-full md:w-[69.23%] h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="font-bold leading-tight text-white text-[32px] md:text-[49px]">
          UNIVERSITAS SRIWIJAYA
        </h1>
        <div className="mt-3 md:mt-4 inline-block bg-[#FF9D00] rounded-[36px] px-10 py-4 shadow-lg">
          <span className="text-black text-lg md:text-xl font-semibold tracking-wide">
            Fakultas Ilmu Komputer
          </span>
        </div>
        <p className="mt-4 md:mt-6 max-w-3xl text-white leading-relaxed text-[14px] md:text-[16px] text-justify md:text-center">
          Berdirinya Fakultas Ilmu Komputer didahului dengan Program Diploma Komputer (PDK)
          Unsri baru berdiri pertengahan tahun 2003...
        </p>
      </div>
    </section>
  );
}
