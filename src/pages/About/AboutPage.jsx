import React from "react";
import { motion } from "framer-motion";
import { Star, Users, Code, Globe, Award, Target } from "lucide-react";
import { useSEO } from "../../hooks/useSEO";

const AboutPage = () => {
  useSEO("about");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-bold text-slate-800 mb-6">
              About RICH System Solutions
            </h1>
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 px-4 py-2 rounded-full inline-flex mb-6">
              <Star className="fill-amber-400 text-amber-400" size={18} />
              <span className="font-medium">4.849 Google reviews</span>
            </div>
          </motion.div>

          <motion.div
            className="text-slate-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mb-6 text-lg">
              RICH System Solutions is a premier software development company
              and training institute based in Nashik, Maharashtra. With over
              4.849 Google reviews, we've established ourselves as a trusted
              provider of IT solutions and education.
            </p>

            <motion.div
              className="mt-8 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-blue-600"></div>
                <h2 className="text-2xl font-semibold text-slate-800">
                  Our Journey
                </h2>
              </div>
              <p>
                Founded with a vision to bridge the gap between industry
                requirements and academic knowledge, RICH System Solutions has
                been at the forefront of technology education and software
                development services since our inception.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-blue-600"></div>
                <h2 className="text-2xl font-semibold text-slate-800">
                  Our Services
                </h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <Code size={18} className="text-blue-600" />
                  <span>Custom Software Development</span>
                </li>
                <li className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <Globe size={18} className="text-purple-600" />
                  <span>Website Development and Design</span>
                </li>
                <li className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <Target size={18} className="text-amber-600" />
                  <span>Digital Marketing Solutions</span>
                </li>
                <li className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Bulk SMS Services</span>
                </li>
                <li className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <Award size={18} className="text-red-600" />
                  <span>IT Training and Certification</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="mt-8 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-blue-600"></div>
                <h2 className="text-2xl font-semibold text-slate-800">
                  Why Choose Us?
                </h2>
              </div>
              <p>
                Our commitment to quality, industry-relevant training, and
                customer satisfaction has made us the preferred choice for
                businesses and students in Nashik and beyond.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
// import React from "react";
// import { useSEO } from "../../hooks/useSEO";

// const AboutPage = () => {
//   useSEO("about");

//   return (
//     <div className="min-h-screen bg-white">
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-4xl">
//           <h1 className="text-4xl font-bold text-slate-800 mb-6">
//             About RICH System Solutions
//           </h1>
//           <div className="prose prose-lg text-slate-700">
//             <p>
//               RICH System Solutions is a premier software development company
//               and training institute based in Nashik, Maharashtra. With over
//               4.849 Google reviews, we've established ourselves as a trusted
//               provider of IT solutions and education.
//             </p>

//             <h2 className="text-2xl font-semibold mt-8 mb-4">Our Journey</h2>
//             <p>
//               Founded with a vision to bridge the gap between industry
//               requirements and academic knowledge, RICH System Solutions has
//               been at the forefront of technology education and software
//               development services since our inception.
//             </p>

//             <h2 className="text-2xl font-semibold mt-8 mb-4">Our Services</h2>
//             <ul className="list-disc pl-5">
//               <li>Custom Software Development</li>
//               <li>Website Development and Design</li>
//               <li>Digital Marketing Solutions</li>
//               <li>Bulk SMS Services</li>
//               <li>IT Training and Certification</li>
//             </ul>

//             <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
//             <p>
//               Our commitment to quality, industry-relevant training, and
//               customer satisfaction has made us the preferred choice for
//               businesses and students in Nashik and beyond.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;
