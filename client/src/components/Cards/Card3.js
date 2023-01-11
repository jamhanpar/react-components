// Description:
// Card with inner shadow

import useScrollPercentage from "../../hooks/useScrollPercentage";
import useWindowSize from "../../hooks/useWindowSize";

export default function Card1({
  title = "Lorem ipsum",
  imgSrc = "https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg",
}) {
  const { scrollPercentage } = useScrollPercentage();
  const { screen } = useWindowSize();

  const scrollFactor = Math.max(
    0,
    Math.min(100 - (scrollPercentage / 3) * 4, 100)
  );

  const mobileStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 275px",
    backgroundPositionY: `${scrollFactor}%`,
  };

  const tabDesktopStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className="card w-full h-48 object-cover shadow-inner shadow-gray-600"
      style={screen === "mobile" ? mobileStyle : tabDesktopStyle}
    >
      <div className="w-full p-4 absolute bottom-0 bg-gradient-to-b from-transparent to-black">
        <span className="font-bold text-white">{title}</span>
      </div>
    </div>
  );
}
