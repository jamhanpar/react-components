import { FiMenu } from 'react-icons/fi';

export default function Sidebar() {
  return <div className="w-full h-auto bg-slate-800 text-white">
    <div>
        <FiMenu />
        <h1>Company</h1>
    </div>
    <div>
        <div>
            <span>Home</span>
        </div>
        <div>
            <span>Cards</span>
        </div>
        <div>
            <span>Buttons</span>
        </div>
    </div>
  </div>;
}
