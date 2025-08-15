import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#343434] text-white text-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Kontak</h2>
          <p>Email: <a href="mailto:humas@ilkom.unsri.ac.id" className="text-[#FFCA66] hover:underline">humas@ilkom.unsri.ac.id</a></p>
          <p>Instagram & Facebook: <span className="text-[#FFCA66]">@Humas Fasilkom Unsri</span></p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Kampus Utama</h2>
          <p>Jl. Palembang – Prabumulih KM.32</p>
          <p>Kabupaten Ogan Ilir, Sumatera Selatan</p>
          <p>Indonesia</p>
          <p>Telp: <span className="text-[#FFCA66]">(0711) 379249</span></p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Kampus Palembang</h2>
          <p>Jl. Srijaya Negara Bukit Besar</p>
          <p>Palembang 30139</p>
          <p>Telp: <span className="text-[#FFCA66]">(0711) 379249</span></p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Fakultas Ilmu Komputer Universitas Sriwijaya
      </div>
    </footer>
  );
}
