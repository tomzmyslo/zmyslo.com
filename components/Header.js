import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <nav className='bg-indigo-600 p-2 w-full fixed lg:p-0'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center h-10 lg:h-14'>
          <Link href='/'>
            <Logo />
          </Link>
          <div className='space-x-4'>
            <Link href='projects' className='text-indigo-100 pb-2 hover:text-indigo-300'>
              Projects
            </Link>
            <Link href='resume' className='text-indigo-100 pb-2 hover:text-indigo-300'>
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
