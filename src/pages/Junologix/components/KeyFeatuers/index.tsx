import Icon from "../../../../components/Icon";
import cloudSaasIcon from "../../../../assets/cloudSaasIcon.svg";
import centralFilledIcon from "../../../../assets/centralFilledIcon.svg";
import AIIcon from "../../../../assets/AIIcon.svg";
import EFileIcon from "../../../../assets/E-FileIcon.svg";
import PerformanceIcon from "../../../../assets/PerformanceIcon.svg";
import IRSIcon from "../../../../assets/IRSIcon.svg";

function KeyFeatures() {
  const cards = [
    {
      id: 1,
      title: "Cloud SaaS Secured",
      icon: cloudSaasIcon,
      description:
        "Your data is safe from unwanted parties. We deploy 256-bit encryption throughout the compliance journey.",
    },
    {
      id: 2,
      title: "Centralized Filing Management",
      icon: centralFilledIcon,
      description:
        "File, manage assessments and audits in one secured location.",
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      icon: AIIcon,
      description:
        "A.I. infused validation inspects each transaction (from import to e-file) ensuring your data is ready to file error free.",
    },
    {
      id: 4,
      title: "E-File and Digitally Printed Form",
      icon: EFileIcon,
      description:
        "We support all e-file formats (EDI, XML, Mag Media, Excel, Csv...). State approved forms, we got that covered too.",
    },
    {
      id: 5,
      title: "Performance Dashboard",
      icon: PerformanceIcon,
      description:
        "360° view of your filing performance and never miss a deadline.",
    },
    {
      id: 6,
      title: "IRS ExSTARS",
      icon: IRSIcon,
      width: "w-12",
      description: "ExSTARS certified - form 720-TO and 720-CS.",
    },
  ];
  return (
    <div id="key-features" className="lg:relative bg-[#FCFE7238]">
      <div className="absolute max-lg:hidden  top-20 left-0 transform max-sm:translate-x-1/4 translate-x-3/4 -translate-y-1/4 w-20 ">
        <Icon />
      </div>
      <div className=" lg:pb-10 lg:mx-20">
        <h1 className="text-primary text-[30px] text-center font-bold py-5 pt-10">
          Key <span className="text-black">Features</span>
        </h1>
        <div className="flex justify-center items-center">
          <div className="p-20 max-sm:flex max-sm:flex-col max-sm:p-5 max-2xl:grid max-2xl:grid-cols-2 max-2xl:gap-10 2xl:grid 2xl:grid-cols-3 2xl:gap-14 ">
            {cards.map(({ title, description, icon, id, width }) => (
              <Card
                key={id}
                title={title}
                icon={icon}
                width={width}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute max-lg:hidden  right-0 transform -translate-x-3/4 translate-y-1/4 bottom-28 w-20">
        <Icon />
      </div>
    </div>
  );
}

export default KeyFeatures;

function Card({ title, description, icon, width }: any) {
  return (
    <div
      className={`bg-[#FFFFFF] shadow-lg  rounded-[15px] lg:h-[350px] lg:w-[370px] md:w-[310px] md:h-auto max-sm:h-auto max-sm:w-auto  text-center p-5`}
    >
      <div
        className={`text-center flex items-center justify-center my-7 max-sm:my-3`}
      >
        {width ? (
          <div className="p-5 bg-[#FF790038] rounded-full">
            <img src={icon} alt={title} className={`${width}`} />
          </div>
        ) : (
          <img src={icon} alt={title} />
        )}
      </div>
      <h3 className={`"text-black mb-5  font-bold text-[20px]`}>{title}</h3>
      <p className={`"text-black`}>{description}</p>
    </div>
  );
}
