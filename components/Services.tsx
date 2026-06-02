const services = [
  {
    title: "Dynamic Balancing",
    description: "Precision balancing of rotating components.",
  },
  {
    title: "EDM Wire Cutting",
    description: "High-accuracy wire cutting solutions.",
  },
  {
    title: "Gear Cutting",
    description: "Custom gear cutting and machining.",
  },
  {
    title: "Industrial Spare Parts Trading",
    description: "Supply of machine spares, components and industrial accessories.",
  },
  {
    title: "Electric Motors Supply",
    description: "Trading and sourcing of industrial electric motors.",
  },
  {
    title: "Pump & Mechanical Components",
    description: "Supply of pumps, couplings, bearings and related parts.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold">
            OUR SERVICES
          </p>

          <h2 className="text-5xl font-bold mt-3 text-slate-900">
            Engineering Solutions
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Delivering precision machining and industrial
            engineering services with reliability and quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-900">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}