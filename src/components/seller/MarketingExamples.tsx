import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Home, FileText } from "lucide-react";

export const MarketingExamples = () => {
  const stagingExamples = [
    {
      title: "Living Room Transformation",
      before: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      description: "Strategic furniture placement and neutral palette created inviting space"
    },
    {
      title: "Master Bedroom Staging",
      before: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
      description: "Luxury hotel-inspired styling increased perceived value"
    }
  ];

  const photographyExamples = [
    {
      title: "Exterior Twilight Shot",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      description: "Professional twilight photography highlights architectural features"
    },
    {
      title: "Kitchen Detail",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
      description: "HDR imaging showcases premium finishes and natural light"
    },
    {
      title: "Living Space",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
      description: "Wide-angle composition maximizes perceived space"
    }
  ];

  const listingExamples = [
    {
      address: "123 Luxury Lane",
      headline: "Sophisticated Downtown Living with Breathtaking City Views",
      description: "Experience unparalleled luxury in this meticulously designed 2-bedroom, 2-bathroom corner suite. Floor-to-ceiling windows frame stunning panoramic views, while premium finishes including hardwood floors, quartz countertops, and stainless steel appliances create an atmosphere of refined elegance. Building amenities include 24/7 concierge, fitness center, and rooftop terrace.",
      highlights: ["2 Bed | 2 Bath | 1,200 sq ft", "Corner Unit with Wraparound Windows", "Premium Building Amenities", "Steps to Transit & Entertainment"]
    },
    {
      address: "456 Family Court",
      headline: "Perfect Family Home in Sought-After Neighborhood",
      description: "This beautifully maintained 4-bedroom home offers the ideal blend of comfort and convenience. Recently renovated kitchen and bathrooms complement original hardwood floors and crown molding. The private backyard oasis is perfect for entertaining, while the finished basement provides additional living space. Located on a quiet street near top-rated schools.",
      highlights: ["4 Bed | 3 Bath | 2,500 sq ft", "Renovated Kitchen & Baths", "Private Backyard Oasis", "Near Top-Rated Schools"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Our Marketing In Action
            </h2>
            <p className="text-lg text-muted-foreground">
              See the quality and attention to detail in every listing
            </p>
          </div>

          <Tabs defaultValue="staging" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="staging" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Staging
              </TabsTrigger>
              <TabsTrigger value="photography" className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                Photography
              </TabsTrigger>
              <TabsTrigger value="descriptions" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Descriptions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="staging" className="space-y-8">
              {stagingExamples.map((example, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{example.title}</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-2">BEFORE</p>
                        <img
                          src={example.before}
                          alt={`${example.title} - Before`}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-accent mb-2">AFTER</p>
                        <img
                          src={example.after}
                          alt={`${example.title} - After`}
                          className="w-full h-64 object-cover rounded-lg border-2 border-accent/20"
                        />
                      </div>
                    </div>
                    <p className="text-muted-foreground">{example.description}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="photography" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {photographyExamples.map((example, index) => (
                  <Card key={index} className="overflow-hidden hover:border-accent/50 transition-all">
                    <CardContent className="p-0">
                      <img
                        src={example.image}
                        alt={example.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-foreground mb-2">{example.title}</h3>
                        <p className="text-sm text-muted-foreground">{example.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="descriptions" className="space-y-6">
              {listingExamples.map((example, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-accent mb-2">{example.address}</p>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{example.headline}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {example.description}
                      </p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-sm font-semibold text-foreground mb-2">Key Highlights:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {example.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
