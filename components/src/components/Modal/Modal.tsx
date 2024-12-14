import clsx from 'clsx';

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-stone-700/25 backdrop-blur-sm flex justify-center items-center'>
      <button
        className={clsx(
          'fixed top-4 right-4 text-white text-3xl',
          'hover:cursor-pointer hover:text-stone-200'
        )}
        onClick={onClose}
      >
        <i className='fa-solid fa-xmark'></i>
      </button>
      <div className='w-full max-w-lg bg-white p-4 rounded-lg m-4'>
        {children}
      </div>
    </div>
  );
}
