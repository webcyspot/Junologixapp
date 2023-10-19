import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import navigations from "../../navigations";
import { useGetState } from "../../api/services/api.service";

export default function Select() {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useGetState();

  const [selectedOption, setSelectedOption] = useState({
    state: "Select a state",
    id:0,
  });

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  console.log("hello", selectedOption?.id)

  return (
    <div>
      <label
        id="listbox-label"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Electronic Filing
      </label>
      <div className="relative mt-2">
        <button
          type="button"
          className="relative w-full lg:w-[300px] cursor-pointer rounded-lg bg-white py-1.5 pr-16 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-black focus:outline-none focus:ring-2 sm:text-sm sm:leading-6"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby="listbox-label"
          onClick={toggleDropdown}
        >
          <span className="ml-3 block truncate">{selectedOption.state}</span>

          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <motion.svg
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="12"
              viewBox="0 0 26 12"
              fill="none"
              className={`h-5 w-5 ${
                isOpen ? "transform rotate-180" : ""
              } text-gray-400 transition-transform duration-200`}
              aria-hidden="true"
            >
              <path
                d="M1.75175 0H24.2323C25.7875 0 26.5652 1.5298 25.4643 2.42633L14.2283 11.5838C13.5469 12.1387 12.4372 12.1387 11.7557 11.5838L0.519816 2.42633C-0.58106 1.5298 0.196543 0 1.75175 0Z"
                fill="#FF7900"
              />
            </motion.svg>
          </span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              role="listbox"
              aria-labelledby="listbox-label"
            >
              {data &&
                data?.data?.map((option, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`relative cursor-pointer select-none `}
                    onClick={() => selectOption(option)}
                    role="option"
                    tabIndex={0}
                  >
                    <div className="flex flex-col">
                      <span
                        className={`font-normal pl-3 py-2 mt-1 block truncate ${
                          option.state === selectedOption.state
                            ? "bg-primary text-white"
                            : "text-gray-900"
                        } `}
                      >
                        {option.state}
                      </span>
                      {index !== data?.data?.length - 1 && (
                        <div className="bg-[#D9D9D9] w-full h-[1px] mt-1" />
                      )}
                    </div>
                    {option.state === selectedOption.state && (
                      <span className="text-white absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                  </motion.li>
                ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <p className="lg:mt-10">{data?.data[selectedOption?.id-1]?.return}</p>
      <p
        onClick={() => {
          navigate(navigations.LANDING_PAGE, {
            state: { path: "contact-us" },
          });
        }}
        className="lg:mt-52 max-lg:mt-40"
      >
        Don’t see the Return <br />
        <span className="text-primary font-bold">Contact Us!</span>
      </p>
    </div>
  );
}
