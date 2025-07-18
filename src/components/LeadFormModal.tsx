import { useState, useEffect } from "react";
import { useLeadForm } from "@/LeadFormContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

export default function LeadFormModal() {
  const { isOpen, closeLeadForm } = useLeadForm();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", centerName: "", courseType: "", message: "",
  });

  // Delay modal unmount for animation
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300); // match animation duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleInputChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Submitted successfully!");
        closeLeadForm();
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      id="leadFormModal"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white p-6 rounded-lg w-full max-w-xl relative transform transition-all duration-300 ${
          isOpen ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"
        }`}
      >
        <button
          onClick={closeLeadForm}
          className="absolute top-2 right-2 text-gray-500 text-2xl"
        >
          ×
        </button>

        <Card>
          <CardHeader>
            <CardTitle className="tracking-tight text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Get Your Free Marketing Consultation
            </CardTitle>
            <p className="text-sm text-gradient-hero text-center text-muted-foreground">
              Fill this form and we’ll contact you within 24 hours.
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
                <Input
                  placeholder="Email *"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input
                  placeholder="Phone Number *"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
                <Input
                  placeholder="Coaching Center Name"
                  value={formData.centerName}
                  onChange={(e) => handleInputChange("centerName", e.target.value)}
                />
              </div>

              <Select onValueChange={(val) => handleInputChange("courseType", val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Course Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="banking">Banking</SelectItem>
                  <SelectItem value="ssc">SSC</SelectItem>
                  <SelectItem value="upsc">UPSC</SelectItem>
                  <SelectItem value="jee-neet">JEE/NEET</SelectItem>
                  <SelectItem value="multiple">Multiple</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              <textarea
                placeholder="Additional Info"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full border rounded-md p-2 text-sm"
                rows={4}
              />

              <Button type="submit" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Submit & Get Free Consultation
              </Button>

              <div className="flex justify-center text-xs text-muted-foreground gap-4 mt-2">
                <div className="flex gap-1 items-center">
                  <Phone className="w-3 h-3" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex gap-1 items-center">
                  <MapPin className="w-3 h-3" />
                  <span>Pan India</span>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
