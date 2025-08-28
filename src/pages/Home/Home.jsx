import React from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";
import {
  ArrowRight,
  CheckCircle,
  Users,
  BookOpen,
  Briefcase,
  Code,
} from "lucide-react";
import LMSLandingPage from "./LMSLandingPage";

const Home = () => {
  useSEO("home");

  const features = [
    {
      icon: <Code size={32} className="text-blue-600" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs.",
    },
    {
      icon: <BookOpen size={32} className="text-blue-600" />,
      title: "IT Training",
      description: "Industry-relevant courses with hands-on experience.",
    },
    {
      icon: <Briefcase size={32} className="text-blue-600" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies for growth.",
    },
    {
      icon: <Users size={32} className="text-blue-600" />,
      title: "Bulk SMS Services",
      description: "Reach your audience effectively with bulk messaging.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <LMSLandingPage />
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Premier Software Development & Training Institute
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            With over 4.849 Google reviews, we're Nashik's trusted partner for
            IT solutions and education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/training"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Training Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LMS Program Preview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Full Stack Development Program
              </h2>
              <p className="text-slate-600 mb-6">
                4 Months Intensive Training + 3 Months Paid Internship
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-2" />
                  <span>
                    Java Spring Boot, Python FastAPI, or Node.js specialization
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-2" />
                  <span>React.js frontend development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-2" />
                  <span>DevOps and deployment training</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-2" />
                  <span>Career support and placement assistance</span>
                </li>
              </ul>
              <Link
                to="/lms-program"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/lms-program-preview.jpg"
                alt="Full Stack Development Program"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Career or Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients and students who have benefited
            from our expertise.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
