import { FiMenu, FiHome } from 'react-icons/fi';
import { FaRegAddressCard } from 'react-icons/fa';
// import { GiShirtButton } from 'react-icons/gi';

export default function Sidebar() {
  return <div className="w-full py-2 bg-slate-800 text-white sm:w-48">
    <div className="flex flex-row items-center gap-3 mx-3 my-2 cursor-pointer">
        <FiMenu className="select-none" />
        <h1>Logo</h1>
    </div>
    <div className="flex flex-col">
        <div className="flex flex-row items-center gap-3 mx-3 my-2 cursor-pointer">
            <FiHome />
            <span>Home</span>
        </div>
        <div className="flex flex-row items-center gap-3 mx-3 my-2 cursor-pointer">
            <FaRegAddressCard />
            <span>Cards</span>
        </div>
        <div className="flex flex-row items-center gap-3 mx-3 my-2 cursor-pointer">
            {/* <GiShirtButton /> */}
            <span>Buttons</span>
        </div>
    </div>
  </div>;
}
