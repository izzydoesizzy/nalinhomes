import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const PropertyShowcase = () => {
  const properties = [
    {
      address: "Luxury Downtown Condo",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
      ],
      description: "Sophisticated corner unit with floor-to-ceiling windows and premium finishes"
    },
    {
      address: "Modern Family Home",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
      ],
      description: "Beautifully renovated 4-bedroom home with private backyard oasis"
    },
    {
      address: "Executive Townhouse",
      images: [
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      ],
      description: "Stunning 3-level townhome with designer finishes and rooftop terrace"
    }
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(71,85,105,0.4),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(30,41,59,0.5),transparent_60%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Buyers See When We're Done
            </h2>
            <p className="text-lg text-slate-300">
              Professional photography that showcases your home's best features
            </p>
          </div>

          <div className="space-y-12">
            {properties.map((property, index) => (
              <Card key={index} className="overflow-hidden bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{property.address}</h3>
                    <p className="text-slate-300">{property.description}</p>
                  </div>
                  
                  <Carousel className="w-full">
                    <CarouselContent>
                      {property.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <img
                              src={image}
                              alt={`${property.address} - Photo ${imgIndex + 1}`}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
