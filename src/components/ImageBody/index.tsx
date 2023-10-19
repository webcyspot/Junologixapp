import { useState, useEffect } from "react";
import bg from "../../assets/image-body.svg";
import { TypeAnimation } from "react-type-animation";

function ImageBody() {
  const [fontSize, setFontSize] = useState("0px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setFontSize("50px");
      } else if (window.innerWidth >= 1025) {
        setFontSize("40px");
      } else if (window.innerWidth >= 992) {
        setFontSize("30px");
      } else if (window.innerWidth >= 769) {
        setFontSize("24px");
      } else if (window.innerWidth >= 640) {
        setFontSize("18px");
      } else if (window.innerWidth < 640) {
        setFontSize("14px");
      } else if (window.innerWidth <= 290) {
        setFontSize("10px");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="relative mt-20 max-sm:mt-10">
        <img
          src={bg}
          alt="bg"
          className="w-full rounded-none xl:min-h-[80vh] max-sm:min-h-[30vh] h-auto "
        />
        <div className="absolute lg:-top-32 lg:left-20 left-32 max-sm:-left-5 max-[280]:-left-10 max-md:left-7 max-xsm:left-0 md:left-0 inset-0 flex flex-col justify-center items-start p-8 text-white">
          <div style={{ fontSize: fontSize }}>
            <TypeAnimation
              className=" text-[#000]  font-bold z-10 "
              style={{
                whiteSpace: "pre-line",
              }}
              wrapper="div"
              sequence={[
                "From Soup to nuts, Junologix \nhave you covered from tax\ndetermination to compliance.",
              ]}
              speed={10}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-5 rounded-none"></div>
      </div>
    </>
  );
}

export default ImageBody;
