import Head from 'next/head';
import Link from 'next/link';
import { Bungee_Outline } from '@next/font/google';

const font = Bungee_Outline({
  weight: '400',
});

export default function Page() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center'>
        <div className='flex items-center h-screen my-auto'>
          <div className='text-center text-white'>
            <Head>
              <title>Zmyslo</title>
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <div className={font.className}>
              <h1 className='text-6xl sm:text-7xl md:text-8xl xl:text-9xl uppercase mb-2'>
                Zmyslo
              </h1>
            </div>
            <div className='flex justify-center space-x-2 md:space-x-4 mb-2'>
              <p className='text-xl lg:text-3xl font-thin'>Ruby</p>
              <p className='text-xl lg:text-3xl font-thin'>/</p>
              <p className='text-xl lg:text-3xl font-thin'>Swift</p>
              <p className='text-xl lg:text-3xl font-thin'>/</p>
              <p className='text-xl lg:text-3xl font-thin'>JavaScript</p>
            </div>
            <div className='flex justify-center items-center space-x-2 md:space-x-4'>
              <Link
                href='https://github.com/tomzmyslo'
                className='text-xl lg:text-3xl font-thin pb-2 hover:text-slate-200'
                target='_blank'
              >
                GitHub
              </Link>
              <p className='text-xl lg:text-3xl font-thin pb-2'>/</p>
              <Link
                href='https://www.linkedin.com/in/tomzmyslo'
                className='text-xl lg:text-3xl font-thin pb-2 hover:text-slate-200'
                target='_blank'
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
