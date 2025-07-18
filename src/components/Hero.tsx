import { useLeadForm } from "@/LeadFormContext";
import { Button } from "@/components/ui/button";
import '../custom.css';
export function Hero() {
    const { openLeadForm } = useLeadForm();
  return (
   <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">COACHING CENTERS</span> - THIS SYSTEM IS FOR YOU  🫵🏻
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                The only marketing system designed specifically to help coaching centers attract more students consistently.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="text-blue-600 text-4xl mb-4">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Student Acquisition</h3>
                    <p className="text-gray-600">Get 500+ new student inquiries every month with our proven marketing system.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="text-blue-600 text-4xl mb-4">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Targeted Marketing</h3>
                    <p className="text-gray-600">Get local leads to fill offline enters.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="text-blue-600 text-4xl mb-4">
                        <i className="fas fa-robot"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Automated funnel</h3>
                    <p className="text-gray-600">Automated funnel for nurturing leads and boosting conversions.</p>
                </div>
            </div>
             <Button onClick={openLeadForm} style={{paddingBottom: '2rem'}} className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 bg-gradient-hero rounded-full font-bold text-lg transition shadow-lg">CLICK HERE TO QUALIFY </Button>
        </div>
    </section>
  );
}