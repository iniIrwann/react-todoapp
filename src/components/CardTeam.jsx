import React from "react";

function CardTeam() {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO and Founder",
      experience:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image: "/images/john.png",
    },
    {
      name: "Jane Doe",
      position: "Director of Operations",
      experience:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image: "/images/jane.png",
    },
    {
      name: "Michael Brown",
      position: "Senior SEO Specialist",
      experience:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image: "/images/michael.png",
    },
    {
      name: "Emily Johnson",
      position: "PPC Manager",
      experience:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image: "/images/emily.png",
    },
    {
      name: "Brian Williams",
      position: "Social Media Specialist",
      experience:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      image: "/images/brian.png",
    },
    {
      name: "Sarah Kim",
      position: "Content Creator",
      experience:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
      image: "/images/sarah.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white border p-6 rounded-3xl shadow-md hover:shadow-lg transition"
          >
            {/* LinkedIn icon */}
            <div className="absolute top-3 right-3 bg-white border rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-3.035-4-2.804-4 0v5.5h-3v-10h3v1.354c1.396-2.586 7-2.777 7 2.475v6.171z" />
              </svg>
            </div>

            <div className="flex items-center mb-4">
              <div className="bg-lime-300 p-2 rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <div className="ml-4 text-start">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            </div>

            <hr className="my-4 border-black" />

            <p className="text-sm text-gray-700">{member.experience}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <button className="bg-black text-white px-6 py-3 rounded-lg">
          See all team
        </button>
      </div>
    </div>
  );
}

export default CardTeam;
