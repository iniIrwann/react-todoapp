import React, { useState } from "react";

function ContactUs() {
  const [selectedOption, setSelectedOption] = useState("sayhi");

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center mb-2">
          <span className="bg-lime-300 px-3 py-1 font-semibold text-xl rounded-md">
            Contact Us
          </span>
        </div>
        <p className="text-gray-600 text-lg">
          Connect with Us: Let’s Discuss Your Digital Marketing Needs
        </p>
      </div>

      {/* Form + Image */}
      <div className="bg-gray-100 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
        {/* Form */}
        <div className="w-full md:w-1/2">
          {/* Radio */}
          <div className="flex gap-6 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="sayhi"
                checked={selectedOption === "sayhi"}
                onChange={() => setSelectedOption("sayhi")}
                className="appearance-none w-5 h-5 rounded-full border-2 border-black checked:border-4 checked:border-lime-400"
              />
              <span>Say Hi</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="quote"
                checked={selectedOption === "quote"}
                onChange={() => setSelectedOption("quote")}
                className="appearance-none w-5 h-5 rounded-full border-2 border-black checked:border-4 checked:border-lime-400"
              />
              <span>Get a Quote</span>
            </label>
          </div>

          {/* Form Input */}
          <form className="flex flex-col gap-6">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-3 border rounded-md focus:outline-none"
              ></textarea>
            </div>

            <button className="bg-black text-white py-3 rounded-xl">
              Send Message
            </button>
          </form>
        </div>

        {/* Decorative Image / Illustration */}
        <div className="w-full md:w-1/2 hidden sm:flex justify-center items-center relative">
          <div className="relative">
            {/* Background Star */}
            <div className="w-64 h-64 border border-black rounded-full rotate-[35deg] absolute inset-0 m-auto z-0"></div>

            {/* Big Black Star */}
            <div className="w-32 h-32 bg-black rotate-45 absolute top-20 left-20 z-10"></div>

            {/* Small Lime Star */}
            <div className="w-16 h-16 bg-lime-300 rotate-45 absolute bottom-16 left-10 z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
