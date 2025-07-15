import React from "react";
import Slider from "react-slick";

function Testimonials() {
  const testimonials = [
    {
      message:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
    {
      message:
        "Thanks to Positivus, our digital presence has improved significantly. Their team provides excellent support and delivers measurable results. They are a trusted partner in our marketing strategy.",
      name: "Jane Doe",
      position: "CEO at ABC Inc",
    },
    {
      message:
        "Positivus has been instrumental in growing our business online. They’re proactive, creative, and always stay ahead of trends. Their attention to detail is unmatched.",
      name: "Michael Brown",
      position: "Founder at Startup Co",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center mb-2">
          <span className="bg-lime-300 px-2 py-1 font-semibold text-xl rounded-md">
            Testimonials
          </span>
        </div>
        <p className="text-gray-600 text-lg">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      {/* Slider */}
      <div className="bg-black text-white rounded-3xl p-12">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative border border-lime-400 rounded-2xl p-8 max-w-xl">
                {/* Bubble tail */}
                <div className="absolute -bottom-3 left-10 w-5 h-5 bg-black border-lime-400 border-b border-r rotate-45"></div>

                <p className="mb-6 text-sm">{item.message}</p>
                <div>
                  <p className="font-semibold text-lime-400">{item.name}</p>
                  <p className="text-sm">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
