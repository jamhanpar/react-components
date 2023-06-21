import TestLayout from '../layout/TestLayout';

// Testing Component
import Sidebar from '../components/Sidebar/Sidebar';
import Toggle from '../components/Toggle/Toggle';
import FlipCard from '../components/Cards/FlipCard';

export default function Test() {
  return (
    <TestLayout>
      <div className="border border-y-1 border-gray-800">
        <h1 className="border border-b-gray-800">Sidebar</h1>
        <div className="flex flex-row">
          <Sidebar />
          {/* <div>Content</div> */}
          <Toggle />
        </div>
      </div>
      <div className="border border-y-1 border-gray-800">
        <h1 className="border border-b-gray-800">Card Flip</h1>
        <div className="flex flex-row">
          <FlipCard />
        </div>
      </div>
    </TestLayout>
  );
}
