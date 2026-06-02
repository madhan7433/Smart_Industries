import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* IMAGE SLIDER */}
      <HeroSlider />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-slate-950/70"></div>

      {/* TEXT (STATIC - NO SLIDE) */}
      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

        <p className="text-amber-500 tracking-widest uppercase text-sm mb-4">
          PRECISION ENGINEERING • INDUSTRIAL SOLUTIONS • MANUFACTURING
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          SMART <span className="text-amber-500">INDUSTRIES</span>
        </h1>

        <p className="mt-6 text-slate-200 max-w-2xl mx-auto text-lg">
          We specialize in Dynamic Balancing, EDM Wire Cutting,
          Gear Cutting and Industrial Pump & Motor Trading solutions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-lg font-semibold transition"
          >
            Get a Quote
          </a>

          <a
            href="tel:+918760308318"
            className="border border-white/40 hover:border-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Call Now
          </a>
        </div>

        {/* BAR FIX (small + professional) */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
          <span>Dynamic Balancing</span>
          <span>EDM Wire Cutting</span>
          <span>Industrial Pumps</span>
          <span>Gear Cutting</span>
        </div>

      </div>
    </section>
  );
}