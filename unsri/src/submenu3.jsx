// HeroPanels.tsx
import poster from "@/assets/jump.png"; // pastikan path sesuai bundler-mu

export default function submenu3() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-[9fr_4fr] gap-6 md:gap-8">
        {/* Panel kiri: frame gelap + poster PNG */}
        <div className="rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 ring-1 ring-white/10 p-3 sm:p-4 md:p-5">
          {/* Wrapper dengan aspect-ratio supaya ruang poster stabil */}
          <div
            className="relative mx-auto w-full max-w-2xl"
            style={{ aspectRatio: "3 / 4" }} // ganti sesuai rasio poster kamu (mis. 2100x2970 -> 3/4)
          >
            <img
              src={poster}
              alt="Poster program"
              loading="lazy"
              draggable={false}
              className="absolute inset-0 h-full w-full object-contain rounded-lg
                         ring-1 ring-white/10 shadow-[0_12px_48px_-12px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>

        {/* Panel kanan: konten */}
        <aside className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 sm:p-6 md:p-7 text-white">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/20 px-3 py-1 text-xs font-medium">
              Message from the Dean
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Welcome to the Faculty of Computer Science
            </h2>
            <p className="text-sm/6 text-white/70">
              Selamat datang di Fasilkom UNSRI. Ini area teks untuk sambutan, misi,
              atau highlight terbaru. Panjang ideal 2–4 kalimat agar seimbang
              dengan area poster.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-emerald-500 px-4 py-2
                         text-sm font-semibold text-emerald-950 hover:bg-emerald-400
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              NEWS & INFORMATION
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2
                         text-sm font-semibold text-white hover:bg-white/20
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Research Group
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
