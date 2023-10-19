import { useRef } from "react";
import rectangleShape from "../../assets/rectangle.svg";
import videoPlayIcon from "../../assets/videoPlayIcon.svg";
import videoSrc from "./video.mp4";

function VideoPlay({ onPlay, onPause, playing, onToggle }: any) {
  const videoRef = useRef<any>(null);

  return (
    <div className="relative">
      <div
        className={`absolute  ${
          playing
            ? "w-[600px] h-[400px] max-sm:w-[400px] max-sm:h-[200px]"
            : "w-80 h-48"
        }`}
        style={{
          position: playing && "relative",
          left: playing && "50%",
          transform: playing && "translateX(-50%)",
        }}
      >
        {!playing ? (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              controls={false}
              className="w-full h-full rounded-lg"
            />
          </>
        ) : (
          <video
            onPlay={onPlay}
            onPause={onPause}
            controls
            autoPlay={playing}
            className="w-full h-full rounded-lg"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {!playing && (
          <button
            onClick={onToggle}
            className="absolute inset-0 flex items-center justify-center w-full h-full text-white bg-primary bg-opacity-10"
          >
            <img
              src={videoPlayIcon}
              alt="videoPlayIcon"
              className="w-20 max-[200px]:w-10"
            />
          </button>
        )}
      </div>
      {!playing && (
        <img
          src={rectangleShape}
          alt="rectangleShape"
          className="pt-6 ml-5 max-sm:pt-9 max-xsm:full max-xsm:p-0 max-xsm:m-0 max-sm:ml-6 w-80 z-0"
        />
      )}
      {!playing && (
        <div className="absolute w-14 h-14 max-xsm:hidden rounded-full bg-primary max-[200px]:hidden z-20 bottom-0 -left-6" />
      )}
    </div>
  );
}

export default VideoPlay;
