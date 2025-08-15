import { useState } from 'react';
import logoPath from '../assets/logo.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  const mainNav = ['Home', 'Profil', 'Program Studi & Unit', 'Dosen & Pegawai', 'PPID', 'Zona Integritas', 'E-PPT'];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logoPath} alt="Logo Unsri" className="h-14 w-auto" />
          <div>
            <p className="text-xs text-gray-500 tracking-tight uppercase">Universitas Sriwijaya</p>
            <p className="text-lg font-bold text-gray-800">Fakultas Ilmu Komputer</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-base font-medium">
          {mainNav.map((item) => (
            <a key={item} href="#" className="text-[#343434] hover:text-[#FF9D00] transition-colors">
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-gray-100">
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-2">
            {mainNav.map((item) => (
              <li key={item}>
                <a href="#" className="block py-2 px-2 rounded hover:bg-gray-100">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
