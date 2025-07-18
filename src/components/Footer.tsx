import '../custom.css';
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <span className="text-2xl font-bold gradient-text"> The Quickest</span>
                    <p className="mt-2 text-gray-400"> Most Consistent AI-System to Flood Your Coaching Institute with Serious </p><p className="mt-2 text-gray-400"> Aspirants
Chosen by the Top 1% of Institutes — 100+ </p> <p className="mt-2 text-gray-400"> Verified Aspirants in Just 90 Days.
You Don’t Chase Admissions. We Bring Them to You. </p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                    ©2025 • All Rights Reserved
                </p>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition">Contact Us</a>
                </div>
            </div>
        </div>
    </footer>
  );
}