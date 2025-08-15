import React from "react";
import posterLomba from "../assets/poster-lomba.png"; // ganti path sesuai file kamu
import fotoDekan from "../assets/foto-dekan.png"; // ganti path sesuai file kamu

export default function Infosesion() {
  return (
    <section className="py-10 bg-white">
      {/* Judul Section */}
      <div className="mb-8 flex justify-center">
        <h2 className="inline-block bg-[#FF9D00] text-white text-xl font-bold px-6 py-2 rounded-md shadow border-4 border-[#FFEE00]">
          NEWS & INFORMATION
        </h2>
      </div>

      {/* Konten dua kolom */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Panel Poster Lomba */}
        <div className="bg-black rounded-xl p-4 shadow-lg flex justify-center items-center">
          <img 
            src={posterLomba} 
            alt="Poster Lomba" 
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Panel Dekan */}
        <div className="bg-[#F7931E] rounded-xl shadow-lg flex flex-col justify-center items-center p-6">
          <img 
            src={fotoDekan} 
            alt="Dekan" 
            className="w-64 h-auto mb-4 rounded-lg" // ukurannya besar seperti gambar contoh
          />
          <h3 className="text-white font-bold text-lg mb-2">
            Message from The Dean
          </h3>
          <p className="text-white italic text-center max-w-xs">
            "Welcome to the Faculty of Computer Science, Sriwijaya University"
          </p>
        </div>

      </div>
    </section>
  );
}
