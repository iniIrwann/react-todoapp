import React, { useState } from "react";
import Header from "../components/Header";
import hero from "@assets/hero-section.png";
import { companyLogos } from "@assets/data/companyLogo";
import Card from "../components/Card";
import { cardIllustration } from "../assets/data/cardIllustration";
import illustrationCard from "@assets/illustrationCard.png";
import { caseStudies } from "../assets/data/CaseStudies";
import { Link } from "react-router-dom";
import { accordionData } from "../assets/data/accordionData";
import AccordionList from "../components/AccordionList";
import CardTeam from "../components/CardTeam";
import Testimonials from "../components/Testimonial";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

function LandingPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <div className="mx-4 sm:mx-8 md:mx-24 mt-6">
        <Header />

        {/* HERO SECTION */}
        <section className="mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div className="text-center sm:text-left">
              <h1 className="font-semibold mb-6 text-3xl sm:text-5xl md:text-[60px] leading-tight">
                Navigating the digital landscape for success
              </h1>
              <p className="text-base sm:text-lg md:text-[20px] leading-normal mb-6">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
              <img
                src={hero}
                alt="hero"
                className="w-full max-w-md sm:max-w-full sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
              />
              <button className="bg-gray-800 text-white text-lg sm:text-[20px] px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300 mt-4">
                Book a consultation
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src={hero}
                alt="hero"
                className="w-full max-w-md sm:max-w-full hidden sm:block md:block lg:block xl:block 2xl:block"
              />
            </div>
          </div>
        </section>

        {/* COMPANY LOGOS */}
        <section className="my-16">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 grayscale filter">
            {companyLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company Logo ${index + 1}`}
                className="w-24 sm:w-[127px] h-12 sm:h-[48px] object-contain"
              />
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="mt-16">
          <div className="text-center my-16">
            <h2 className="text-3xl font-semibold green mb-4">Services</h2>
            <p className="text-base sm:text-lg leading-snug">
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardIllustration.map((cardData, index) => (
              <Card key={index} {...cardData} />
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 items-center rounded-3xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Let’s make things happen
              </h2>
              <p className="text-base sm:text-lg mb-6">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <button className="bg-black text-white text-lg px-6 py-3 rounded-lg hover:bg-green-dark transition duration-300">
                Get your free proposal
              </button>
            </div>
            <div className="flex justify-center p-4">
              <img
                src={illustrationCard}
                alt="illustration"
                className="max-h-[300px]"
              />
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="mt-16">
          <div className="text-center my-16">
            <h2 className="text-3xl font-semibold green mb-4">Case Studies</h2>
            <p className="text-base sm:text-lg leading-snug">
              Explore Real-Life Examples of Our Proven Digital Marketing Success
              through Our Case Studies
            </p>
          </div>
          <div className="bg-[#121212] rounded-3xl p-8 max-w-7xl mx-auto text-white">
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-500">
              {caseStudies.map((study, index) => (
                <div className="flex-1 px-6 py-4" key={index}>
                  <p>{study.paragraph}</p>
                  <Link
                    to={study.link}
                    className="mt-6 inline-flex items-center gap-2 text-[#B9FF66] font-semibold"
                  >
                    Learn more <span className="text-2xl">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKING PROGRESS */}
        <section className="mt-16">
          <div className="text-center my-16">
            <h2 className="text-3xl font-semibold green mb-4">
              Our Working Progress
            </h2>
            <p className="text-base sm:text-lg leading-snug">
              Step-by-Step Guide to Achieving Your Business Goals
            </p>
          </div>
          <div>
            {accordionData.map((item, index) => (
              <AccordionList
                key={index}
                {...item}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section className="mt-16">
          <div className="text-center my-16">
            <h2 className="text-3xl font-semibold green mb-4">Our Team</h2>
            <p className="text-base sm:text-lg leading-snug">
              Meet our professional and experienced team members
            </p>
          </div>
          <div>
            <CardTeam />
          </div>
        </section>

        {/* TESTIMONIAL, CONTACT & FOOTER */}
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
