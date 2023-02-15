'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from './Logo';

export default function Header() {
  const pathname = usePathname();
  
  return (
    <nav className='bg-indigo-600 p-2 w-full fixed z-50 lg:p-0'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center h-10 lg:h-14'>
          <Link href='/'>
            <Logo />
          </Link>
          <div className='space-x-4'>
            <Link href='/projects' className={`pb-2 hover:text-green-400 ${pathname == '/projects' ? 'text-green-400' : 'text-indigo-100'}`}>
              Projects
            </Link>
            <Link href='/resume' className={`pb-2 hover:text-green-400 ${pathname == '/resume' ? 'text-green-400' : 'text-indigo-100'}`}>
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
