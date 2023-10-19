import { useNavigate } from "react-router-dom";
import footerLogo from "../../assets/logo.svg";
import LinkedInLogo from "../../assets/linkedin-logo.svg";
import navigations from "../../navigations";

function Footer() {
  const navigate = useNavigate();
  // const location = useLocation();
  // const { pathname } = location;

  // const { toggleRegisterModal } = useAppContext();

  return (
    <footer className="bg-black text-gray-300">
      <div className="container max-md:text-center mx-auto py-8 px-4 md:px-2 lg:px-5 xl:px-7 2xl:px-15 ">
        <div className="flex max-md:flex-col justify-between max-md:items-center md:mx-20 ">
          <div className="flex item-center justify-center  max-md:mb-5">
            <img
              src={footerLogo}
              alt="logo"
              className="w-[120px] md:w-[200px] cursor-pointer lg:-mt-32"
              onClick={() =>
                navigate(navigations.LANDING_PAGE, {
                  state: { home: "home" },
                })
              }
            />
          </div>
          <div className="mb-8  lg:ml-10  max-md:ml-0 lg:mr-10">
            <div className="flex items-center justify-between md:gap-10 lg:gap-36 max-md:flex-col text-center lg:mb-10">
              <p
                onClick={() => {
                  navigate(navigations.LANDING_PAGE, {
                    state: { path: "about-us" },
                  });
                }}
                className="mb-2 hover:underline cursor-pointer"
              >
                About
              </p>
              <p
                onClick={() =>
                  navigate(navigations.LANDING_PAGE, {
                    state: { path: "key-features" },
                  })
                }
                className="mb-2 hover:underline cursor-pointer"
              >
                Features
              </p>
              <p
                className="mb-2 hover:underline cursor-pointer"
                onClick={() => {
                  navigate(navigations.LANDING_PAGE, {
                    state: { path: "electronic-filing" },
                  });
                }}
              >
                Electronic Filing
              </p>
            </div>
            <div className="flex items-center justify-between lg:gap-36 max-md:flex-col text-center ">
              <p
                onClick={() => {
                  navigate(navigations.LANDING_PAGE, {
                    state: { path: "ex-stars" },
                  });
                }}
                className="mb-2 hover:underline cursor-pointer"
              >
                ExSTARS
              </p>
              <p
                onClick={() => {
                  navigate(navigations.FAQ);
                }}
                className="mb-2 hover:underline cursor-pointer"
              >
                FAQS
              </p>
              <p
                onClick={() => {
                  navigate(navigations.LANDING_PAGE, {
                    state: { path: "contact-us" },
                  });
                }}
                className="mb-2 hover:underline cursor-pointer"
              >
                Contact Us
              </p>
            </div>
          </div>

          <div className="mb-8 lg:ml-10">
            <h2 className="text-2xl max-xl:text-lg font-semibold mb-4 underline">
              Get Latest Updates
            </h2>
            <div className="flex mb-2 item-center justify-start max-md:justify-center">
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/company/junologix/"
                target="_blank"
              >
                <img src={LinkedInLogo} alt="LinkedInLogo" className="w-20" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#FCFE72] opacity-20 mt-5" />
        <div className=" pt-10 text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()} Junologix. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
