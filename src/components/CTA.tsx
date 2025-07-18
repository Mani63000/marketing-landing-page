import { Button } from '@/components/ui/button';
import { useLeadForm } from "@/LeadFormContext";
import '../custom.css';
export function CTA() {
   const { openLeadForm } = useLeadForm();
  return (
    <>
      <section id="qualify" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fill Your Coaching Center with Students?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            See if you qualify for our exclusive student acquisition system.
          </p>
          <Button
            onClick={openLeadForm}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition shadow-lg pulse-animation"
          >
            CLICK HERE TO QUALIFY
          </Button>
        </div>
      </section>
    </>
  );
}
