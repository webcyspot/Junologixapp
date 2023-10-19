import Select from "../../../../components/Select";
import mapIllustration from "../../../../assets/MapIllustration.svg";
import Icon from "../../../../components/Icon";

function ElectronicFiling() {
  return (
    <div id="electronic-filing" className="lg:relative">
      <div className="absolute max-lg:hidden  top-20 left-0 transform max-sm:translate-x-1/4 translate-x-3/4 -translate-y-1/4 w-20 ">
        <Icon />
      </div>
      <div className="mx-40 my-20 max-md:mx-10">
        <div className="text-center p-7 my-10">
          <h1 className="text-primary max-sm:text-lg text-[30px] max-sm:text-center font-bold">
            We have electronic reports{" "}
            <span className="text-black">for ALL states in yellow!</span>
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-around max-md:flex-col gap-10 max-sm:gap-5">
            <img
              src={mapIllustration}
              alt="mapIllustration"
              className="w-[900px]"
            />
            <Select />
          </div>
        </div>
      </div>
      <div className="absolute max-lg:hidden  right-0 transform -translate-x-3/4 translate-y-1/4 bottom-28 w-20">
        <Icon />
      </div>
    </div>
  );
}

export default ElectronicFiling;
