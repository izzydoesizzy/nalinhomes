import { Heart, Shield, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
export const StressTransformation = () => {
  const transformations = [{
    icon: Heart,
    stress: "Feeling Anxious & Overwhelmed",
    transformation: "You'll Feel Calm & Confident",
    description: "Nalin brings exactly what you need—calm when you're anxious, realism when you're overly optimistic.",
    testimonial: "As a super anxious first time homebuyer, Nalin took the time to answer every question thoroughly and honestly.",
    author: "Isabelle",
    color: {
      gradient: 'from-rose-500 to-pink-600',
      icon: 'text-rose-500'
    }
  }, {
    icon: Shield,
    stress: "Worried About Missing Red Flags",
    transformation: "Every Detail Scrutinized",
    description: "With Sherlock-level investigation, Nalin spots issues you'd never consider in order to protect your best interests.",
    testimonial: "With Sherlock-level investigation, Nalin spots issues you'd never consider in order to protect your best interests. Never rushed, always helpful, and he pointed out red flags I wouldn't have noticed.",
    author: "Massimo",
    color: {
      gradient: 'from-blue-500 to-cyan-600',
      icon: 'text-blue-500'
    }
  }, {
    icon: Lightbulb,
    stress: "Analysis Paralysis & Uncertainty",
    transformation: "Clear, Confident Decisions",
    description: "Stop second-guessing. Get expert guidance that helps you move forward with certainty.",
    testimonial: "Our nervousness and indecisiveness was balanced by Nalin's calm and professional attitude.",
    author: "Maxine",
    color: {
      gradient: 'from-amber-500 to-orange-600',
      icon: 'text-amber-500'
    }
  }, {
    icon: Users,
    stress: "Feeling Alone in the Process",
    transformation: "Supported Every Single Step",
    description: "You'll have an advisor who's genuinely invested in your journey, not just the commission.",
    testimonial: "Nalin is caring, genuine, and always has our best interests in mind.",
    author: "Gregor",
    color: {
      gradient: 'from-emerald-500 to-teal-600',
      icon: 'text-emerald-500'
    }
  }];
  return <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Home Buying Can Be Stressful.</span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                But It Doesn't Have to Be.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here's how Nalin transforms the most common home buying stresses into a smooth and supported journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {transformations.map((item, index) => <Card key={index} className="border border-border">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color.gradient} flex items-center justify-center`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground line-through mb-1">{item.stress}</p>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{item.transformation}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="border-l-4 border-blue-500 pl-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-r">
                        <p className="text-sm italic text-foreground mb-1">{item.testimonial}</p>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">— {item.author}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center">
            
          </div>
        </div>
      </div>
    </section>;
};