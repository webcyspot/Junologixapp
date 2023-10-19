import aiIcon from "../../../../assets/aiimage.svg";
import rightIllustrationIcon from "../../../../assets/hero-shape-right.svg";

function AboutUs() {
  return (
    <div id="about-us" className="lg:relative">
      <div className="m-20 max-sm:m-10  bg-white">
        <h1 className="text-black max-lg:text-[30px] font-semibold text-5xl  text-center">
          About <span className="text-primary">Us</span>
        </h1>
      </div>

      <div className="lg:relative ">
        <div className="flex max-lg:hidden items-center justify-center ">
          <div className="w-[40%]   h-fit" />

          <div className="w-[60%]   min-h-[470px] max-lg:h-auto bg-[#FF790017]" />
        </div>
        <div className="flex justify-center items-center">
          <div className="lg:absolute  py-10   z-10 top-0  flex flex-row max-sm:flex-col justify-center gap-10  lg:mx-28 items-center">
            <img
              src={aiIcon}
              alt="globalMapIcon"
              className="w-1/2 max-sm:w-10/12 max-md:ml-10 max-sm:ml-0"
            />
            <div className="text-[#565656]  text-lg mr-20 max-sm:mr-0 w-[500px] max-sm:w-10/12">
              <p className="py-3">
                <span className="font-bold">Our vision</span> is to provide a
                platform with all the latest technology on the market to save
                time and money for tax professionals.
              </p>
              <p className="py-2">
                <span className="font-bold">Our mission</span> is to provide a
                100% web base software for tax compliance eliminating manual
                processes, minimize errors, reduce risk, and streamline all tax
                reporting.
              </p>
              <p className="py-1">
                <span className="font-bold">Our goal</span> is to provide a
                sustainable environment for tax compliance reporting that is
                transparent, efficient, accurate, fast, with expertise and AI
                insights.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 max-lg:hidden">
          <img
            src={rightIllustrationIcon}
            alt="rightIllustrationIcon"
            className="w-16"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
