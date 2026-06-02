export default function Trading() {
  const products = [
    {
      title: "Industrial Pumps",
      desc: "Water pumps, sewage pumps, submersible pumps and pumping solutions for industrial, commercial and water management applications.",
    },
    {
      title: "Industrial Motors",
      desc: "High-quality electric motors suitable for industrial machinery, manufacturing and automation systems.",
    },
    {
      title: "Pump Spare Parts",
      desc: "Impellers, shafts, bearings and replacement components for various pump systems.",
    },
    {
      title: "Mechanical Seals",
      desc: "Precision sealing solutions for pumps, compressors and rotating equipment.",
    },
    {
      title: "Bearings & Couplings",
      desc: "Reliable industrial bearings and couplings for smooth and efficient machine operation.",
    },
    {
      title: "Engineering Components",
      desc: "Custom and standard engineering components sourced to meet industrial requirements.",
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Industrial Products
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Industrial Pumps, Motors & Spare Parts
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto mt-6 text-lg">
            Beyond precision engineering services, SMART INDUSTRIES
            supplies industrial pumps, motors, spare parts and
            engineering components to support manufacturing,
            water treatment and industrial operations.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                {product.title}
              </h3>

              <p className="text-slate-300 leading-7">
                {product.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">
            Looking for Pumps, Motors or Spare Parts?
          </h3>

          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us for quality industrial products,
            engineering components and reliable sourcing solutions.
          </p>

          <a
            href="tel:+918760308318"
            className="inline-block bg-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}