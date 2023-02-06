import Image from 'next/image';
import Link from 'next/link';
import GitHub from 'components/GitHub';
import LinkedIn from 'components/LinkedIn';

export default function Page() {
  return (
    <div className='flex flex-col justify-center space-y-8 h-full text-indigo-100'>
      <div className='text-center'>
        <div className='flex justify-center pb-2'>
          <Image
            className='rounded-full border-2 lg:border-4 border-indigo-600'
            src='/me.jpeg'
            alt='Tom Zmyslo'
            height={120}
            width={120}
          />
        </div>
        <h2 className='text-5xl md:text-6xl lg:text-7xl text-indigo-600 font-bold mb-2'>
          Tom Zmyslo
        </h2>
        <h3 className='text-indigo-300 text-lg md:text-xl lg:text-2xl'>
          Ruby / JavaScript / Swift
        </h3>
      </div>
      <div className='text-center'>
        <p className='px-4 md:px-24 lg:px-56'>
          I'm a Software Engineer with over a decade of experience developing for the web, mobile
          and desktop. I'm currently developing customized incentive programs and customer
          management tools at{' '}
          <Link
            href='https://www.telus.com/agcg'
            className='text-indigo-600 hover:text-indigo-500 font-semibold'
            target='_blank'
          >
            Telus Agriculture &amp; Consumer Goods
          </Link>
          .
        </p>
      </div>
      <div className='flex justify-center space-x-4'>
        <Link
          href='https://github.com/tomzmyslo'
          className='text-indigo-600 hover:text-indigo-500'
          target='_blank'
        >
          <GitHub size={30} />
        </Link>
        <Link
          href='https://www.linkedin.com/in/tomzmyslo'
          className='text-indigo-600 hover:text-indigo-500'
          target='_blank'
        >
          <LinkedIn size={30} />
        </Link>
      </div>
    </div>
  );
}
