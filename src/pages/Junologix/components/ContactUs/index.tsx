import { BsChatDots } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import illustrastion from "../../../../assets/mainIllustration.svg";
import leftIllustrationIcon from "../../../../assets/hero-shape-left.svg";

function ContactUs() {
  // const { toggleChatBox } = useAppContext();
  return (
    <div id="contact-us">
      <div
        style={{ backgroundColor: "rgba(255, 121, 0, 0.09) " }}
        className="text-center p-7"
      >
        <h1 className="text-primary  max-lg:text-[30px]  text-5xl max-sm:text-center font-bold">
          Contact <span className="text-black">Us</span>
        </h1>
      </div>
      <div className="lg:relative ">
        <div
          style={{ backgroundColor: "rgba(252, 254, 114, 0.10)" }}
          className="flex flex-row gap-20 max-sm:gap-10 p-20 mx-40 my-20 max-sm:m-0 max-sm:p-5 justify-center items-center"
        >
          <div className="p-4 ">
            <h3 className="text-black text-3xl max-xsm:text-sm  max-sm:text-xl font-bold  z-80 max-md:text-center">
              We are happy to hear from you!
            </h3>

            <p className="text-[#6A6A6D] my-7 max-xsm:text-[0.7rem] font-extrabold  max-sm:my-3 max-md:text-center">
              Drop us a message!
            </p>
            <div className="flex justify-center items-center md:hidden ">
              <img
                src={illustrastion}
                alt="illustrastion"
                className="w-[200px] text-center max-xsm:w-[100px] "
              />
            </div>
            <div className="flex gap-5 item-center mt-10 mb-5">
              <div className="p-3 max-xsm:p-1.5 rounded-lg item-center bg-primary">
                <BsChatDots color="white" size={30} />
              </div>
              <div>
                <h3 className="text-[#243853] font-extrabold m-0 p-0 max-xsm:text-sm ">
                  Chat With Us
                </h3>
                <p
                  // onClick={() => {
                  //   toggleChatBox(true);
                  // }}
                  className="cursor-pointer text-primary font-bold underline max-xsm:text-[0.7rem] "
                >
                  Start Now
                </p>
              </div>
            </div>
            <div className="flex gap-5 item-center mb-5">
              <div className="p-3 max-xsm:p-1.5 rounded-lg item-center bg-primary ">
                <IoMailOutline color="white" size={30} />
              </div>
              <div>
                <h3 className="text-[#243853] font-extrabold max-xsm:text-sm ">
                  Email Address
                </h3>
                <p className="text-[#6A6A6D] text-sm max-xsm:text-[0.7rem] ">
                  support@junologix.com
                </p>
              </div>
            </div>
            <div className="flex gap-5 item-center mb-1 max-sm:mb-0">
              <div className="p-3 max-xsm:p-1.5 rounded-lg item-center bg-primary max-xsm:max-h-[45px] max-h-[55px]">
                <FiHome color="white" size={30} />
              </div>
              <div>
                <h3 className="text-[#243853] font-extrabold max-xsm:text-sm ">
                  Our Location
                </h3>
                <p className="text-[#6A6A6D] text-sm max-xsm:text-[0.7rem]">
                  1968 S. Coast Hwy Suite 4302 Laguna Beach, CA 92651
                </p>
              </div>
            </div>
          </div>
          <img
            src={illustrastion}
            alt="illustrastion"
            className="w-[300px] max-md:hidden"
          />
          <div className="absolute left-0 top-0 max-lg:hidden">
            <img
              src={leftIllustrationIcon}
              alt="leftIllustrationIcon"
              className="w-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
