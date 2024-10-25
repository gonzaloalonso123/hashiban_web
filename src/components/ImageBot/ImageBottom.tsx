import { useEffect, useRef, useState } from "react";
import "./ImageBottom.css";
import Background from "../../images/image_bot_fondo.webp";
import Shine from "../../images/image_bot_shine.webp";
import Goblins from "../../images/image_bot_goblins.webp";
import { VideoPlayer } from "../Video/Video";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

function ImageBottom() {
  const [offsetY, setOffsetY] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageRefContainer = useRef<HTMLImageElement>(null);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
    if (imageRef.current != null) {
      setParentHeight(imageRef.current.height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleImageLoad = () => {
    if (imageRef.current != null && imageRefContainer.current != null) {
      setParentHeight(imageRef.current.height);
      imageRefContainer.current.scrollTo(300, 0);
    }
  };

  return (
    <div id="image-bot_flex" style={{ left: offsetY }}>
      <div className="relative">
        {/* {isPhone && <Arrow />} */}
        <Video />
        <div
          className="image-bot_section"
          style={{
            height: parentHeight,
          }}
          ref={imageRefContainer}
        >
          <img
            src={Shine}
            id="shine"
            style={{ transform: `translateX(${offsetY * -0.1}px)` }}
          />
          <img
            src={Background}
            ref={imageRef}
            onLoad={handleImageLoad}
            alt=""
            id="background"
          />
          <img
            src={Goblins}
            alt=""
            id="goblins"
            style={{ transform: `translateX(${0.05 * -offsetY}px)` }}
          />
        </div>
      </div>
    </div>
  );
}

const Video = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex top-0 left-0 z-50 w-full items-center justify-center pointer-events-none h-full absolute font-black">
      {!clicked ? (
        <span
          className="text-6xl xl:text-[150px] blink text-yellow-200 pointer-events-auto cursor-pointer font-sans"
          onClick={() => setClicked(true)}
        >
          ▶
        </span>
      ) : (
        <motion.div
          className="w-full flex flex-col py-32 bg-gradient-to-b from-transparent via-black to-transparent pointer-events-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-end max-w-[850px] mx-auto w-full">
            <div
              onClick={() => setClicked(false)}
              className="text-5xl text-white cursor-pointer"
            >
              <IoCloseSharp />
            </div>
            <VideoPlayer />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ImageBottom;
