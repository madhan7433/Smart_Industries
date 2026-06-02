const machines = [
  {
    name: "Dynamic Balancing Machine",
    desc: "Balancing capacity from 0.5kg to 450kg.",
  },
  {
    name: "EDM Wire Cut Machine",
    desc: "High precision machining with digital readout.",
  },
  {
    name: "Gear Cutting Facility",
    desc: "Precision gear cutting and industrial machining.",
  },
  {
    name: "Workshop Facility",
    desc: "Well-equipped workshop with 1 Ton movable crane.",
  },
];

export default function Machines() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold">
            MACHINERY & FACILITIES
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Advanced Infrastructure
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {machines.map((machine) => (
            <div
              key={machine.name}
              className="border border-slate-700 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-3">
                {machine.name}
              </h3>

              <p className="text-slate-300">
                {machine.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}