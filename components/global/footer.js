import Link from 'next/link';
import Logo from './logo';

const Footer = props => {
  const today = new Date(Date.now())

  return (
    <footer className='max-w-4xl border-t border-primary-teal mx-auto mt-20 flex flex-col justify-center'>
      <Link href='/' className='cursor-pointer mx-auto mt-8 mb-10'><Logo type='full' {...props} /></Link>
      <small className='text-xs tracking-wide text-center font-sans text-black dark:text-white uppercase font-semibold'>Copyright © {today.getFullYear()} Sunjay Armstead. All rights reserved. <Link href='/legal' className='underline decoration-primary-teal'>Terms of Use.</Link></small>
    </footer>
  )
}

export default Footer;
