import { Vortex } from "react-loader-spinner";

function Loader() {
  return (
    <div className="bg-white flex flex-col justify-center items-center w-screen h-screen">
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["#FF7900", "#26A9E0", "#FFDE17", "#FCFE72", "#000", "#F2F9F1"]}
      />
      <p className="mt-5">
        Loading <span className="text-primary">.</span>
        <span className="text-secondary">.</span>
        <span className="text-primary">.</span>
      </p>
    </div>
  );
}

export default Loader;
