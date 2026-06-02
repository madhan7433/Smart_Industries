import Image from "next/image";

export default function Machinery() {
  const machines = [
    {
      title: "Dynamic Balancing Machine",
      image: "/balancing-machine.jpg",
      stat: "0.5kg - 450kg",
      desc: "Precision dynamic balancing solutions for rotating components with balancing capacity ranging from 0.5kg to 450kg.",
    },
    {
      title: "EDM Wire Cut Machine",
      image: "/edm-machine.jpg",
      stat: "2 Machines",
      desc: "High-precision EDM wire cutting with automatic motorized operation for accurate machining and complex profiles.",
    },
    {
      title: "Workshop Facility",
      image: "/workshop.jpg",
      stat: "1 Ton Crane",
      desc: "Well-equipped workshop facility with movable crane support for efficient handling of industrial components.",
    },
  ];

  return (
    <section
      id="machinery"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold uppercase tracking-wider">
            Infrastructure
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Machinery & Facilities
          </h2>

          <p className="text-slate-600 mt-6 max-w-3xl mx-auto text-lg">
            Equipped with advanced machinery and workshop facilities
            to deliver reliable engineering and machining solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {machines.map((machine) => (
            <div
              key={machine.title}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64">
                <Image
                  src={machine.image}
                  alt={machine.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {machine.stat}
                </span>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {machine.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {machine.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}