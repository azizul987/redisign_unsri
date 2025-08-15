import flagId from '../assets/flag-id.png';

export default function TopBar() {
  const topNav = [
    { label: 'humas@ilkom.unsri.ac.id', href: 'mailto:humas@ilkom.unsri.ac.id' },
    { label: '@humasfasilkomunsri', href: 'https://instagram.com/humasfasilkomunsri' },
    { label: 'FASILKOM UNSRI TV', href: '#' },
  ];

  return (
    <div className="bg-[#343434] text-white text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 h-8 flex items-center justify-between">
        {/* Kiri */}
        <div className="flex items-center">
          <img src={flagId} alt="Bahasa Indonesia" className="h-3 w-auto" loading="lazy" />
          <div className="ml-[5px] flex items-center gap-4">
            {topNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#FFCA66] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Kanan */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="hidden sm:flex items-center bg-[#2C2626] rounded overflow-hidden"
        >
          <input
            type="search"
            placeholder="Cari..."
            className="bg-transparent text-white placeholder-gray-400 px-3 py-1 text-xs focus:outline-none"
          />
          <button type="submit" className="px-2 text-[#FFCA66] hover:text-white transition-colors">
            🔍
          </button>
        </form>
      </div>
    </div>
  );
}
