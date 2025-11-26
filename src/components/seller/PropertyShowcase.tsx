import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const PropertyShowcase = () => {
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop", // Modern home exterior
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop", // Luxury living room
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop", // Modern kitchen
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop", // Bedroom
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop", // Dining area
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", // Bathroom
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop", // Outdoor space
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop", // House exterior
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop", // Home office
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&h=600&fit=crop", // Architectural detail
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(71,85,105,0.4),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(30,41,59,0.5),transparent_60%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full lg:max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              See Your Home Through a Buyer's Eyes
            </h2>
            <p className="text-lg text-slate-300">
              Professional photography that makes every property shine
            </p>
          </div>

          <Card className="overflow-hidden bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all">
            <CardContent className="p-8">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <img
                          src={image}
                          alt={`Professional property photography example ${index + 1}`}
                          className="w-full h-80 object-cover rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-slate-800/90 border-slate-600 text-white hover:bg-slate-700" />
                <CarouselNext className="right-2 bg-slate-800/90 border-slate-600 text-white hover:bg-slate-700" />
              </Carousel>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
