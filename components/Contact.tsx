export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-12">
      <p className="text-orange-500 uppercase tracking-widest text-sm">
        Contact Us
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Get In Touch
      </h2>
      <p className="text-slate-600 mt-2 text-sm md:text-base">
        Let’s discuss your engineering requirements
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Phone */}
      <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="font-bold text-xl mb-4 text-slate-900">
          📞 Phone
        </h3>
        <a
          href="tel:+918760308318"
          className="text-orange-500 mt-2 block text-sm hover:underline"
        >
          +91 8760308318
        </a>
      </div>

      {/* Email */}
      <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="font-bold text-xl mb-4 text-slate-900">
          📧 Email
        </h3>
        <a
          href="mailto:sales@smartindustries.co.in"
          className="text-orange-500 mt-2 block text-sm hover:underline"
        >
          sales@smartindustries.co.in
        </a>
      </div>

      {/* Address */}
      <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="font-bold text-xl mb-4 text-slate-900">
          📍 Address
        </h3>
        <p className="text-orange-500 mt-2 text-sm leading-snug">
          SFNO 395/1C, 395/1D,<br />
          Lakshmi Nagar,<br />
          Malumichampatti,<br />
          Coimbatore - 641050
        </p>
      </div>

    </div>

    {/* MAP */}
    <div className="mt-10">
      <iframe
        className="w-full h-64 md:h-80 rounded-lg shadow-sm"
        src="https://www.google.com/maps?q=Malumichampatti%20Coimbatore&output=embed"
        loading="lazy"
      ></iframe>
    </div>

  </div>
</section>
  );
}