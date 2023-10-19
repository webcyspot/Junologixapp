import arrowUp from "../../../../assets/line Arrow-up.svg";
import arrowDown from "../../../../assets/line Arrow-down.svg";
import scheduleIOIcon from "../../../../assets/scheduleIOIcon.svg";
import TaxIOIcon from "../../../../assets/TaxIOIcon.svg";
import DataIOIcon from "../../../../assets/DataIOIcon.svg";
import VideoPlay from "../../../../components/VideoPlay";
import { ReactNode, useState } from "react";

function BriefDetails() {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };
  return (
    <div className="p-10 mt-10 max-sm:mt-5 max-sm:mx-0 max-xsm:p-2 max-sm:pt-7 lg:mx-10 xl:mx-32">
      <div className="mt-5 mb-10 flex flex-col md:flex-row justify-around items-center">
        <h3 className="text-black text-start max-md:text-center text-[30px] font-bold max-md:mb-10">
          100% Cloud Technology! <br /> Tax Compliance <br /> At It’s BEST!
        </h3>

        <div
          className={`text-center flex justify-start items-center ${
            playing ? "video-container" : ""
          }`}
        >
          <VideoPlay
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onToggle={togglePlay}
            playing={playing}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex max-md:flex-col md:flex-row  md:gap-0 max-md:items-center items-start justify-center mt-[50px] mb-10 max-md:mt-5">
          <Card
            icon={TaxIOIcon}
            mainTitle={
              <p className="text-primary text-xl mb-5">
                Tax<span className="text-secondary font-bold">IO</span>
              </p>
            }
            title="Tax Determination & License Mgt Engine"
            description="Tax Determination calculates how much fuel tax is owed for each jurisdiction.  License Management will determine exceptions by license type."
          />
          <div className="sm:mb-[70px] md:hidden 2xl:block lg:mt-24">
            <img
              src={arrowUp}
              alt="checkboxIcon"
              className="max-sm:w-full  max-lg:max-w-10"
            />
          </div>
          <Card
            icon={DataIOIcon}
            mainTitle={
              <p className="text-primary text-xl mb-5">
                Data<span className="text-secondary font-bold">IO</span>
              </p>
            }
            title="Tax Data Transformation Engine"
            description="Tax data with artificial intelligence (AI) transforms big tax data to the format that is required by each state."
          />
          <div className="sm:mb-[50px] md:hidden 2xl:block lg:mt-24">
            <img
              src={arrowDown}
              alt="checkboxIcon"
              className="sm:mb-10  max-lg:max-w-10 max-sm:w-full"
            />
          </div>
          <Card
            icon={scheduleIOIcon}
            title="Tax Compliance & Reporting Engine"
            mainTitle={
              <p className="text-primary text-xl mb-5">
                Schedule<span className="text-secondary font-bold">IO</span>
              </p>
            }
            description="Tax Compliance automates the complex determination and calculation of taxes with evolving tax laws, rates, and regulations for each jurisdiction."
          />
        </div>
      </div>
    </div>
  );
}

export default BriefDetails;

interface Props {
  icon: any;
  title: string;
  description: string;
  mainTitle?: ReactNode;
}

const Card = ({ icon, title, description, mainTitle }: Props) => {
  return (
    <div className="p-5 w-[300px] text-center flex flex-col justify-center items-center mt-5 h-auto">
      <div className="bg-[#A5FE8A54] rounded-full p-13  flex justify-center items-center mb-3">
        <img src={icon} alt={title} className="w-[150px]" />
      </div>
      {mainTitle}
      <h5 className="text-black  text-sm mb-3 underline">{title}</h5>
      <p className="text-[#645E76] text-sm">{description}</p>
    </div>
  );
};
