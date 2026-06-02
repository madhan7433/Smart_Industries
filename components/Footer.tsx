export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              SMART INDUSTRIES
            </h3>

            <p className="text-slate-400">
              Precision Engineering Solutions specializing in Dynamic Balancing,
              EDM Wire Cutting, Gear Cutting and Industrial Trading.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Services
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>Dynamic Balancing</li>
              <li>EDM Wire Cutting</li>
              <li>Gear Cutting</li>
              <li>Keyway Machining</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Contact
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>📞 +91 8760308318</li>
              <li>✉ sales@smartindustries.co.in</li>
              <li>📍 Coimbatore, Tamil Nadu</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">
          © 2026 Smart Industries. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}