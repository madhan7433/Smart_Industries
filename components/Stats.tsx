export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-amber-600 font-semibold uppercase tracking-wider">
              About Smart Industries
            </p>

            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              Precision Engineering &
              Industrial Solutions
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-8">
              SMART INDUSTRIES is a Coimbatore-based engineering company
              specializing in Dynamic Balancing, EDM Wire Cutting,
              Gear Cutting and Industrial Machining solutions.
            </p>

            <p className="mt-4 text-slate-600 text-lg leading-8">
              We also supply industrial pumps, motors, spare parts,
              mechanical seals and engineering components for
              manufacturing and industrial applications.
            </p>

            <p className="mt-4 text-slate-600 text-lg leading-8">
              Our focus is to deliver precision, reliability and
              quality workmanship that helps industries improve
              performance and operational efficiency.
            </p>
          </div>

          {/* Right */}
          <div className="bg-slate-950 rounded-3xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-8">
              Our Expertise
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="text-amber-500 font-semibold text-xl">
                  Dynamic Balancing
                </h4>
                <p className="text-slate-300 mt-2">
                  Capacity from 0.5kg to 450kg.
                </p>
              </div>

              <div>
                <h4 className="text-amber-500 font-semibold text-xl">
                  EDM Wire Cutting
                </h4>
                <p className="text-slate-300 mt-2">
                  High precision wire cutting with two EDM machines.
                </p>
              </div>

              <div>
                <h4 className="text-amber-500 font-semibold text-xl">
                  Gear & Keyway Cutting
                </h4>
                <p className="text-slate-300 mt-2">
                  Custom machining solutions for industrial components.
                </p>
              </div>

              <div>
                <h4 className="text-amber-500 font-semibold text-xl">
                  Industrial Trading
                </h4>
                <p className="text-slate-300 mt-2">
                  Pumps, motors, spare parts and engineering products.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}