import TestLayout from '../layout/TestLayout';

// Testing Component
import Sidebar from '../components/Sidebar/Sidebar';
import Toggle from '../components/Toggle/Toggle';

export default function Test() {
  return (
    <TestLayout>
      <div className="flex flex-row">
        <Sidebar />
        {/* <div>Content</div> */}
        <Toggle />
      </div>
    </TestLayout>
  );
}
