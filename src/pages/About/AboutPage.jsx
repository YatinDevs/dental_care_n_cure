import React from "react";
import { useSEO } from "../../hooks/useSEO";

const AboutPage = () => {
  useSEO("about");

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">
            About RICH System Solutions
          </h1>
          <div className="prose prose-lg text-slate-700">
            <p>
              RICH System Solutions is a premier software development company
              and training institute based in Nashik, Maharashtra. With over
              4.849 Google reviews, we've established ourselves as a trusted
              provider of IT solutions and education.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Journey</h2>
            <p>
              Founded with a vision to bridge the gap between industry
              requirements and academic knowledge, RICH System Solutions has
              been at the forefront of technology education and software
              development services since our inception.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Services</h2>
            <ul className="list-disc pl-5">
              <li>Custom Software Development</li>
              <li>Website Development and Design</li>
              <li>Digital Marketing Solutions</li>
              <li>Bulk SMS Services</li>
              <li>IT Training and Certification</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
            <p>
              Our commitment to quality, industry-relevant training, and
              customer satisfaction has made us the preferred choice for
              businesses and students in Nashik and beyond.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
