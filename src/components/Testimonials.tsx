import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "Director, Excellence Banking Academy",
      location: "Delhi",
      content: "Our student enrollment increased by 400% within 6 months of working with this team. Their understanding of the banking exam market is exceptional.",
      rating: 5,
      examType: "Banking"
    },
    {
      name: "Priya Sharma", 
      title: "Founder, SSC Champions Institute",
      location: "Mumbai",
      content: "They helped us reach students across Maharashtra with targeted campaigns. Our online presence grew tremendously and so did our admissions.",
      rating: 5,
      examType: "SSC"
    },
    {
      name: "Dr. Ankit Verma",
      title: "Principal, UPSC Mentors",
      location: "Bangalore",
      content: "The marketing strategies were specifically designed for UPSC aspirants. We saw a 300% increase in serious inquiries from quality candidates.",
      rating: 5,
      examType: "UPSC"
    },
    {
      name: "Deepika Singh",
      title: "CEO, Future Govt Jobs Academy",
      location: "Lucknow",
      content: "Their digital marketing approach helped us compete with bigger institutes. We're now the top choice for government job preparation in our city.",
      rating: 5,
      examType: "Multi-Exam"
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Enrolled", description: "New admissions generated" },
    { number: "250%", label: "Average Growth", description: "In student inquiries" },
    { number: "₹2Cr+", label: "Revenue Generated", description: "For our coaching partners" },
    { number: "95%", label: "Client Retention", description: "Partner satisfaction rate" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Coaching Centers Say
            <span className="text-primary block">About Our Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real coaching centers across India. See how we've helped 
            institutes like yours grow their student base and revenue.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 bg-muted/30 rounded-xl animate-scale-in">
              <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
              <div className="font-semibold text-foreground mb-1">{achievement.label}</div>
              <div className="text-sm text-muted-foreground">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:border-primary/30 animate-fade-in">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote and Rating */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Quote className="w-6 h-6 text-primary opacity-60" />
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-foreground text-lg leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  {/* Author Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="space-y-1">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                    
                    <Badge variant="outline" className="shrink-0">
                      {testimonial.examType}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start your journey to become the next coaching center success story. 
            Get personalized marketing strategies that actually work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              ✓ Free consultation available
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              ✓ Results within 30 days
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              ✓ Proven track record
            </Badge>
          </div>
        </div> */}
      </div>
    </section>
  );
}