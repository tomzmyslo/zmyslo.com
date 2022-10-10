import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Github from '../components/Github';
import LinkedIn from '../components/LinkedIn';
import logo from '../public/zmyslo-retro-logo.png';

function HomePage() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center'>
        <div className='flex items-center h-screen my-auto'>
          <div className='text-center text-white'>
            <Head>
              <title>Zmyslo</title>
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <Image className='filter invert pb-8' src={logo} alt='Zmyslo Logo' />
            <div className='flex justify-center space-x-2 mt-4'>
              <p className='text-xl font-light pb-2'>Ruby</p>
              <p className='text-xl font-light pb-2'>/</p>
              <p className='text-xl font-light pb-2'>Swift</p>
              <p className='text-xl font-light pb-2'>/</p>
              <p className='text-xl font-light pb-2'>JavaScript</p>
            </div>
            <div className='flex justify-center items-center space-x-4 mt-4'>
              <Link href='https://github.com/tomzmyslo'>
                <a target='_blank'>
                  <Github />
                </a>
              </Link>
              <Link href='https://www.linkedin.com/in/tomzmyslo'>
                <a target='_blank'>
                  <LinkedIn />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
