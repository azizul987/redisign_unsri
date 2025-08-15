import React from 'react';
import wisudaImg from '../assets/wisuda-image.png';
import logoA from '../assets/logo.png';
import logoB from '../assets/logo-2.png';
import logoC from '../assets/logo-3.png';
import logoD from '../assets/logo-4.png';

export default function NewsSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 flex justify-center">
          <h2 className="inline-block bg-[#FF9D00] text-white text-xl font-bold px-6 py-2 rounded-md shadow border-4 border-[#FFEE00]">
            BERITA UTAMA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <div key={item} className="bg-[#343434] rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
              <div className="p-3">
                <div className="border-[3px] border-[#FF9D00] rounded overflow-hidden">
                  <img src={wisudaImg} alt="Yudisium ke-75" className="w-full h-auto object-contain" loading="lazy"/>
                </div>
              </div>
              <div className="px-4 pb-6">
                <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                  Fakultas Ilmu Komputer Universitas Sriwijaya kembali melepas alumni baru
                </h3>
                <p className="text-sm text-white mb-4">Yudisium ke-75</p>
                <p className="text-xs text-gray-300">Posted on Apr 17, 2025</p>
                <div className="mt-4 flex flex-wrap gap-3 items-center">
                  {[logoA, logoB, logoC, logoD].map((logo, idx) => (
                    <img key={idx} src={logo} alt={`Logo ${idx}`} className="h-6 w-auto" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex mt-4">
          <div className="h-[4px] bg-[#FF9D00]" style={{ width: '80%' }}></div>
          <div className="h-[4px] bg-transparent" style={{ width: '20%' }}></div>
        </div>
      </div>
    </section>
  );
}
