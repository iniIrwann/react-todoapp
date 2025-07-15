import "@/index.css";

function Card({
  logoCard,
  firstTitleCard,
  seccondTitleCard,
  bgCardColor,
  bgTextColor,
  iconCard,
}) {
  let textColor = "text-black";
  if (bgCardColor === "bg-black") {
    textColor = "text-white";
  }

  return (
    <div
      className={`flex border justify-between border-gray-400 shadow-2xl ${bgCardColor} rounded-[45px] p-10`}
    >
      <div className="flex justify-between space-y-2 flex-col flex-1">
        <div className="flex flex-col items-start">
          <p
            className={`font-semibold text-2xl text-start rounded-sm px-4 ${bgTextColor}`}
          >
            {firstTitleCard}
          </p>
          <p
            className={`font-semibold text-2xl text-start rounded-sm px-4 py-0 ${bgTextColor}`}
          >
            {seccondTitleCard}
          </p>
        </div>

        <div className={`${textColor} gap-x-2 flex items-center`}>
          <img src={iconCard} alt=""  className="h-[30px]"/>
          Learn More
        </div>
      </div>
      <img src={logoCard} alt="logoCard" className="w-48 object-contain" />
    </div>
  );
}

export default Card;
