import { useState } from 'react';
import clsx from 'clsx';
import Earth from './Earth';

export default function EarthAndPlane() {
  const [isSpinning, setIsSpinning] = useState(true);
  return (
    <div
      className={clsx(
        'relative',
        isSpinning && 'animate-[spin_4s_linear_infinite]'
      )}
    >
      {/* Earth */}
      <div className={clsx(isSpinning && 'animate-[spin_10s_linear_infinite]')}>
        <Earth />
      </div>

      {/* Plane */}
      <div className="p-2 rounded-full position absolute -bottom-12">
        <i className="fa-solid fa-plane rotate-[190deg] text-3xl text-neutral-400"></i>
      </div>
    </div>
  );
}
