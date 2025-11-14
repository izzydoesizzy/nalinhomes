import { MapPin } from "lucide-react";

export const ServiceAreas = () => {
  const areas = [
    "Downtown Toronto",
    "North York",
    "Etobicoke",
    "Scarborough",
    "Mississauga",
    "Vaughan"
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto">
          {/* Service Areas Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
              <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">Service Areas</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
            Helping You Find Homes Across the GTA
          </h2>

          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            With deep knowledge of Toronto and surrounding areas, I help you find the perfect neighborhood that fits your lifestyle
          </p>

          {/* Areas Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {areas.map((area, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-slate-200 dark:bg-slate-800 rounded-lg text-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-300 cursor-pointer"
              >
                <p className="text-lg font-semibold text-slate-700 dark:text-slate-200">{area}</p>
              </div>
            ))}
          </div>

          {/* First-Time Buyers Callout */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 rounded-2xl p-12 text-center border border-slate-700">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Specialized in First-Time Home Buyers
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              I understand the unique challenges and excitement of buying your first home. With patience, guidance, and expertise, I'll make sure you feel confident and informed throughout the entire process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
