import React from "react";

function AccordionList({ number, title, description, isOpen, onClick }) {
  return (
    <div
      className={`p-6 mb-4 rounded-[40px] shadow-lg border ${
        isOpen ? "bg-[#B9FF66]" : "bg-[#f3f3f3]"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-5xl font-bold">{number}</h2>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <button
          className="w-12 h-12 rounded-full border text-2xl flex items-center justify-center"
          onClick={onClick}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <hr className="my-4 border-black" />
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}

export default AccordionList;
