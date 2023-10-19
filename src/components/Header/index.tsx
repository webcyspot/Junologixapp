import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import navigations from "../../navigations";

function Header() {
  const navigate = useNavigate();
  // const { toggleLoginModal } = useAppContext();
  return (
    <div className="w-full bg-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-sm:p-2 py-3 lg:pb-5 max-sm:pt-1.5 sm:mx-20 xl:mx-32  flex flex-row items-center justify-between ">
        <img
          onClick={() =>
            navigate(navigations.LANDING_PAGE, { state: { home: "home" } })
          }
          src={logo}
          alt="logo"
          className="w-[250px] max-sm:w-[200px] cursor-pointer"
        />

        <a
          href="https://mfexcise.junologix.com/"
          className="cursor-pointer text-center hover:underline text-secondary"
        >
          Login
        </a>
      </div>
    </div>
  );
}

export default Header;
