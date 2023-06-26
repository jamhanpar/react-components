// Description:
// Card with Popup & Shadow with transparent gradient for Title & Subtitle

export default function Card({
  title = "Lorem ipsum",
  subTitle = "Proin eget tortor risus",
  imgSrc = "https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg",
}) {
  return (
    <div className="w-3/4 h-52 rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transform hover:scale-105 transition ease-out duration-300">
      <img src={imgSrc} alt="" className="w-full h-full object-cover" />
      <div className="w-full p-3 absolute bottom-0 flex flex-col justify-center items-start bg-gradient-to-b from-transparent to-black">
        <span className="font-bold text-white">{title}</span>
        <span className="block text-white text-sm">{subTitle}</span>
      </div>
    </div>
  );
}
