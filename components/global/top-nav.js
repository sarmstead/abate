import { useEffect } from 'react';
import Icon from './icon';
import Logo from './logo';
import Sandwich from './icon/sandwich';
import Link from 'next/link';

const TopNav = () => {

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[])

  const handleClickLight = (event) => {
    event.preventDefault();
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
    return;
    
  }

  const handleClickDark = (event) => {
    event.preventDefault();
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
    return;
  }

  return (
    <nav className='grid grid-cols-3 items-center py-4 px-5 dark:bg-accent-dark-gray border-y dark:border-0 border-complementary-salmon border-solid'>
      <button className='justify-self-start'>
        <Icon name='sandwich' />
      </button>
     
      <Link href='/'>
        <div className='justify-self-center cursor-pointer'>
          <Logo width='w-24 md:w-32' />
        </div>
      </Link>

      <div className='justify-self-end'>
        <button className='hidden dark:block gap-2' onClick={handleClickLight}>
          <Icon name='light-mode' />
        </button>
        <button className='block dark:hidden gap-2' onClick={handleClickDark}>
          <Icon name='dark-mode' />
        </button>
      </div>
      
    </nav>
  )
}

export default TopNav