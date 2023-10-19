import firstLogo from "../../../../assets/firstLogo.svg";
import secondLogo from "../../../../assets/secondLogo.svg";
import thirdLogo from "../../../../assets/thirdLogo.svg";
import fourthLogo from "../../../../assets/fourthIcon.svg";
import fifthLogo from "../../../../assets/fifthLogo.svg";
import sixthLogo from "../../../../assets/sixthLogo.svg";
import seventhLogo from "../../../../assets/seventhLogo.svg";

import { useEffect, useState } from "react";

const logos = [
  <img
    src={firstLogo}
    alt={`firstLogo`}
    className="w-40 max-sm:w-14 text-center -mt-4 max-sm:m-0 p-0"
  />,
  <img
    src={secondLogo}
    alt={`secondLogo`}
    className="w-52 max-sm:w-20 text-center mt-5 max-sm:mt-2.5 p-0"
  />,
  <img
    src={thirdLogo}
    alt={`thirdLogo`}
    className="w-40 max-sm:w-14 text-center m-0 p-0"
  />,
  <img
    src={fourthLogo}
    alt={`fourthLogo`}
    className="w-60 max-sm:w-20 text-center m-0 p-0"
  />,
  <img
    src={fifthLogo}
    alt={`fifthLogo`}
    className="w-60 max-sm:w-20 text-center m-0 p-0"
  />,
  <img
    src={sixthLogo}
    alt={`sixthLogo`}
    className="w-60 max-sm:w-20 text-center m-0 p-0"
  />,
  <img
    src={seventhLogo}
    alt={`seventhLogo`}
    className="w-40 max-sm:w-16 text-center m-0 p-0 "
  />,
];

const SupportersLogo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 4 >= logos.length ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto relative overflow-hidden mt-5">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / 4)}%)`,
          }}
        >
          {logos.map((children, index) => (
            <div
              key={index}
              className="w-1/4 items-center justify-center"
              style={{
                flex: "0 0 25%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {children}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[3px] m-0 p-0 bg-secondary" />
    </>
  );
};

export default SupportersLogo;
