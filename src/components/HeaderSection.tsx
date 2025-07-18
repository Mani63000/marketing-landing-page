import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Phone, Mail, MapPin, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";
import slider4 from "@/assets/slider-4.jpg";

const sliderImages = [
  {
    id: 1,
    src: slider1,
    alt: "Students studying in coaching center",
    title: "Banking Exam Preparation",
    subtitle: "Expert Coaching for SBI, IBPS & RBI"
  },
  {
    id: 2,
    src: slider2,
    alt: "Banking exam preparation",
    title: "SSC Coaching Excellence",
    subtitle: "CGL, CHSL & MTS Preparation"
  },
  {
    id: 3,
    src: slider3,
    alt: "UPSC preparation center",
    title: "UPSC Civil Services",
    subtitle: "Complete IAS Preparation"
  },
  {
    id: 4,
    src: slider4,
    alt: "JEE NEET coaching",
    title: "JEE/NEET Coaching",
    subtitle: "Medical & Engineering Success"
  }
];

export function HeaderSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    centerName: "",
    courseType: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Form Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      centerName: "",
      courseType: "",
      message: ""
    });
  };

  return (
    <section className="relative py-12 bg-gradient-to-br from-background via-secondary/20 to-primary/5"  style={{ paddingTop: '6rem' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch min-h-[600px]">
          {/* Left Side - Image/Video Slider */}
          <div className="relative animate-fade-in flex flex-col">
            <Carousel className="w-full max-w-xl mx-auto flex-1">
              <CarouselContent>
                {sliderImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                        <div className="flex items-center gap-2 text-white/90 mb-2">
                          <GraduationCap className="w-4 h-4" />
                          <span className="text-sm">{image.subtitle}</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            
            {/* Auto-play indicator */}
            <div className="flex justify-center mt-4 gap-2">
              {sliderImages.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-primary/30 animate-pulse"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Lead Form */}
          <div className="animate-slide-in-left flex">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 w-full flex flex-col">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Get Your Free Marketing Consultation
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Fill out the form below and our experts will contact you within 24 hours
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="name" className="text-sm">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="transition-all duration-200 focus:shadow-sm h-9"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-sm">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="transition-all duration-200 focus:shadow-sm h-9"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="transition-all duration-200 focus:shadow-sm h-9"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="centerName" className="text-sm">Coaching Center Name</Label>
                      <Input
                        id="centerName"
                        type="text"
                        placeholder="Your coaching center name"
                        value={formData.centerName}
                        onChange={(e) => handleInputChange("centerName", e.target.value)}
                        className="transition-all duration-200 focus:shadow-sm h-9"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="courseType" className="text-sm">Course Type</Label>
                    <Select onValueChange={(value) => handleInputChange("courseType", value)}>
                      <SelectTrigger className="transition-all duration-200 focus:shadow-sm h-9">
                        <SelectValue placeholder="Select your primary course type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="banking">Banking Exams (SBI, IBPS, RBI)</SelectItem>
                        <SelectItem value="ssc">SSC (CGL, CHSL, MTS)</SelectItem>
                        <SelectItem value="upsc">UPSC (Civil Services)</SelectItem>
                        <SelectItem value="jee-neet">JEE/NEET</SelectItem>
                        <SelectItem value="multiple">Multiple Courses</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1 flex-1">
                    <Label htmlFor="message" className="text-sm">Additional Information</Label>
                    <textarea
                      id="message"
                      placeholder="Tell us about your current marketing challenges or goals..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md resize-none flex-1 min-h-[80px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:shadow-sm text-sm"
                    />
                  </div>

                  <div className="space-y-3 mt-auto">
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-200 text-base py-5"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Get Free Consultation
                    </Button>

                    <div className="text-center text-xs text-muted-foreground">
                      <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>Pan India Service</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}