import Image from "next/image";

export default function Gallery() {
  const works = [
    {
      title: "Dynamic Balancing",
      image: "/gallery1.jpg",
    },
    {
      title: "Wire Cutting Jobs",
      image: "/gallery2.jpg",
    },
    {
      title: "Impeller Key Way",
      image: "/gallery3.jpg",
    },
    {
      title: "Mechanical Seal Gland",
      image: "/gallery4.jpg",
    },
    {
      title: "Valve Piston Key Way",
      image: "/gallery5.jpg",
    },
    {
      title: "Gear Cutting",
      image: "/gallery6.jpg",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-amber-500 font-semibold uppercase tracking-wider">
            Our Work
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Project Gallery
          </h2>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto">
            A glimpse of our engineering, machining and balancing works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.title}
              className="group overflow-hidden rounded-3xl"
            >
              <div className="relative h-72">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="bg-slate-800 p-5">
                <h3 className="text-xl font-semibold">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}