import React from "react";

// Import gambar PNG (contoh, nanti ganti sesuai kebutuhan)
import comnetsImg from "../assets/comnets.png";
import rcrgImg from "../assets/rcrg.png";
import ipprrgImg from "../assets/ipprrg.png";
import airlabImg from "../assets/airlab.png";
import skImg from "../assets/sk.png";
import ifImg from "../assets/if.png";
import siImg from "../assets/si.png";

const RecentVideos = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100">
      {/* Kolom Video */}
      <div className="md:col-span-2 bg-white p-4 rounded-lg shadow">
        <div className="flex justify-center mb-4">
          <h2 className="inline-block bg-[#FF9D00] text-white text-xl font-bold px-6 py-2 rounded-md shadow border-4 border-[#FFEE00]">
            RECENT VIDEOS
          </h2>
        </div>
        <div className="aspect-video mb-4">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/live/r0Sr1rcG51Y?si=ZSqvzGQoPrzcBxcE" // ganti link video
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Thumbnails */}
        <div className="flex gap-2 justify-center">
          <img src="/thumbnail1.png" alt="Thumb 1" className="w-20 h-20 object-cover border rounded" />
          <img src="/thumbnail2.png" alt="Thumb 2" className="w-20 h-20 object-cover border rounded" />
          <img src="/thumbnail3.png" alt="Thumb 3" className="w-20 h-20 object-cover border rounded" />
          <img src="/thumbnail4.png" alt="Thumb 4" className="w-20 h-20 object-cover border rounded" />
        </div>
      </div>

      {/* Kolom Kanan */}
      <div className="space-y-6">
        {/* Research Group */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-center mb-4">
            <h2 className="inline-block bg-[#FF9D00] text-white text-xl font-bold px-6 py-2 rounded-md shadow border-4 border-[#FFEE00]">
              Research Group
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <img src={comnetsImg} alt="COMNETS" className="w-36" />
            <img src={airlabImg} alt="AIRLAB" className="w-36" />
            <img src={rcrgImg} alt="RCRG" className="w-36" />
            <img src={airlabImg} alt="AIRLAB" className="w-36" />
            <img src={ipprrgImg} alt="IPPRRG" className="w-36" />
          </div>
        </div>

        {/* Department */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-center mb-4">
            <h2 className="inline-block bg-[#FF9D00] text-white text-xl font-bold px-6 py-2 rounded-md shadow border-4 border-[#FFEE00]">
              Department
            </h2>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={skImg} alt="Sistem Komputer" className="w-64" />
            <img src={ifImg} alt="Informatika" className="w-64" />
            <img src={siImg} alt="Sistem Informasi" className="w-64" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentVideos;
