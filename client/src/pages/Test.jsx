import TestLayout from '../layouts/TestLayout';

// Testing Component
import Sidebar from '../components/Sidebars/Sidebar';
import Toggle from '../components/Toggles/Toggle';
import FlipCard from '../components/Cards/FlipCard';

export default function Test() {
  const components = [
    { title: 'Sidebar', component: <Sidebar /> },
    { title: 'Toggle', component: <Toggle /> },
    { title: 'Flip Card', component: <FlipCard /> },
  ];

  const renderComponents = components.map(({ title, component }, index) => (
    <div
      key={title + index}
      className="flex flex-col justify-center items-center gap-2"
    >
      <div className="text-2xl">{title}</div>
      {component}
    </div>
  ));

  return (
    <TestLayout>
      <div className="flex flex-col gap-10">{renderComponents}</div>
    </TestLayout>
  );
}
