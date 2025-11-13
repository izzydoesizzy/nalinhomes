import nalinPhoto from "@/assets/nalin-photo.png";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-xl overflow-hidden shadow-lg">
              <img
                src={nalinPhoto}
                alt="Nalin Sharma - Toronto Real Estate Broker"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-semibold">
                <span>✓</span> Licensed Real Estate Broker
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Nalin Sharma
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                For over a decade, I've been helping first-time homebuyers in Toronto turn their dreams into reality. I understand that buying your first home can feel overwhelming—there's so much to learn, so many decisions to make, and the stakes feel incredibly high.
              </p>
              <p>
                That's exactly why I do what I do. My approach is simple: I remove the stress, eliminate the uncertainty, and guide you through every single step with transparency and care.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground pt-4">My Process & Philosophy</h3>
              <p>
                I believe in education over pressure. Every client deserves to understand exactly what they're getting into, from the first showing to closing day. I break down complex real estate jargon into plain English, answer every question (no matter how small), and ensure you feel confident in every decision.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground pt-4">What Clients Enjoy Most</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>No Pressure Approach:</strong> You'll never feel rushed or pushed into a decision that doesn't feel right.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Always Available:</strong> Quick responses, clear communication, and genuine support throughout the journey.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Strategic Negotiation:</strong> I fight for your best interests and ensure you get the best possible deal.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Long-term Partnership:</strong> Many of my clients become lifelong friends who continue to reach out for advice.</span>
                </li>
              </ul>
              
              <p className="text-foreground font-semibold pt-4">
                With me, you're not just getting an agent—you're getting a dedicated partner who's genuinely invested in your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
