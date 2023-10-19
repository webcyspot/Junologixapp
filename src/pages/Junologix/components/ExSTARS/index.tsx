import messageVectorTextIcon from "../../../../assets/messageVectorTextIcon.svg";
import handIllustration from "../../../../assets/hand-holding-illustration.svg";
import approvedIcon from "../../../../assets/approvedIcon.svg";

function ExSTARS() {
  return (
    <div id="ex-stars">
      <div
        style={{ backgroundColor: "rgba(255, 121, 0, 0.09) " }}
        className="text-center p-7"
      >
        <h1 className="text-primary text-[30px] max-sm:text-center max-sm:text-lg font-bold">
          We are an approved{" "}
          <span className="text-black">
            Excise Transmitter & Software Developer!
          </span>
        </h1>
      </div>
      <div className="m-20 max-md:mx-10">
        <div className="flex mb-0 pb-0 max-md:flex-col max-md:items-center max-md:justify-center">
          <div className="flex flex-col gap-10 ">
            <h3 className="text-primary text-3xl max-md:text-center max-sm:text-lg max-md:text-xl lg:ml-20 font-[600]">
              ExSTARS! ExSTARS! ExSTARS!
            </h3>
            <img
              src={handIllustration}
              alt="humanIllustration"
              className=" max-xl:w-[700px] xl:w-[800px] md:w-[450px]"
            />
          </div>
          <img
            src={messageVectorTextIcon}
            alt="messageVectorTextIcon"
            className="max-xl:w-[500px] md:-mt-40 xl:w-[600px] md:w-[450px]"
          />
        </div>
        <div className="flex max-md:flex-col  max-md:gap-5 lg:-mt-5 lg:ml-80 max-md:mt-3 items-center justify-center gap-10 mt-[100px]">
          <img src={approvedIcon} alt="approvedIcon" className="w-[150px]" />
          <p className="text-[#727273] text-sm w-[500px] max-sm:w-full">
            Junologix has successfully completed the EDI testing and have been
            accepted as an Electronic Participant in the ExSTARS electronic
            filing program. We are one of only 10 third party vendors that is
            listed on the IRS approved list.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExSTARS;
