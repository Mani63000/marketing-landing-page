import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Megaphone, 
  Smartphone, 
  Users, 
  TrendingUp, 
  Target,
  Globe,
  Mail,
  Video
} from "lucide-react";
import bankingIcon from "@/assets/banking-icon.jpg";
import sscIcon from "@/assets/ssc-icon.jpg";
import upscIcon from "@/assets/upsc-icon.jpg";
import jeeNeetIcon from "@/assets/jee-neet-icon.jpg";

export function Services() {
  const specializations = [
    {
      title: "Banking Exams",
      description: "SBI, IBPS, RBI preparation marketing",
      icon: bankingIcon,
      specialties: ["SBI PO/Clerk", "IBPS", "RBI Grade B", "Bank SO"]
    },
    {
      title: "SSC Exams", 
      description: "CGL, CHSL, MTS, and other SSC exam marketing",
      icon: sscIcon,
      specialties: ["SSC CGL", "SSC CHSL", "SSC MTS", "SSC GD"]
    },
    {
      title: "UPSC Preparation",
      description: "Civil Services examination marketing strategies",
      icon: upscIcon,
      specialties: ["IAS/IPS", "Prelims", "Mains", "Interview"]
    },
    {
      title: "JEE NEET",
      description: "Engineering and Medical entrance exam marketing",
      icon: jeeNeetIcon,
      specialties: ["JEE Main", "JEE Advanced", "NEET UG", "State Engineering"]
    }
  ];

  const services = [
    {
      icon: Search,
      title: "Search Engine Marketing",
      description: "Get found by students searching for coaching centers online",
      features: ["Google Ads", "Local SEO", "Keyword Research", "Competition Analysis"]
    },
    {
      icon: Smartphone,
      title: "Social Media Marketing",
      description: "Build community and engage with potential students on social platforms",
      features: ["Facebook Ads", "Instagram Marketing", "YouTube Promotion", "Content Strategy"]
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Generate qualified leads of serious exam aspirants",
      features: ["Landing Pages", "Lead Magnets", "Funnel Optimization", "CRM Integration"]
    },
    {
      icon: Video,
      title: "Content Marketing",
      description: "Educational content that showcases your expertise",
      features: ["Video Marketing", "Blog Content", "Study Materials", "Success Stories"]
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Build engaged communities of current and potential students",
      features: ["Online Groups", "Student Forums", "Alumni Network", "Referral Programs"]
    },
    {
      icon: TrendingUp,
      title: "Analytics & Growth",
      description: "Data-driven insights to optimize your marketing performance",
      features: ["Performance Tracking", "ROI Analysis", "Growth Strategies", "Regular Reports"]
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Our Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
             You Don’t Chase Admissions
            <span className="text-primary block"> We Bring Them to You </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
           The Quickest, Most Consistent AI-System to Flood Your Coaching Institute with Serious Aspirants
Chosen by the Top 1% of Institutes — 100+ Verified Aspirants in Just 90 Days.
          </p>
        </div>

        {/* Exam Specializations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {specializations.map((spec, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/20 animate-scale-in">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-primary/5 p-2">
                  <img 
                    src={spec.icon} 
                    alt={spec.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {spec.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {spec.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 justify-center">
                  {spec.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Marketing Services */}
        {/* <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Complete Marketing Solutions
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From digital marketing to brand building, we offer comprehensive services 
              to help your coaching center succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:border-primary/30 animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}