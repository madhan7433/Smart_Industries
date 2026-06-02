export default function WhyChooseUs() {
  const features = [
    {
      title: "Precision Engineering",
      desc: "Accurate machining and balancing solutions with strict quality standards.",
    },
    {
      title: "Advanced Machinery",
      desc: "Modern balancing machines, EDM wire cutting and workshop facilities.",
    },
    {
      title: "Reliable Delivery",
      desc: "Committed to completing projects on schedule without compromising quality.",
    },
    {
      title: "Customer Satisfaction",
      desc: "Focused on long-term relationships through dependable engineering support.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold uppercase tracking-wider">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Trusted Engineering Partner
          </h2>

          <p className="text-slate-600 mt-6 max-w-3xl mx-auto">
            Delivering precision engineering solutions with reliability,
            quality and customer-focused service.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <span className="text-amber-600 text-2xl">✓</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}