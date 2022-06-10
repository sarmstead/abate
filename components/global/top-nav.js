import { useEffect } from 'react';
import Icon from './icon';

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
    <nav className='max-w-screen-2xl m-auto pt-20'>
      <button className='hidden dark:flex gap-2' onClick={handleClickLight}>
        <Icon name='light-mode' />
        <span className='text-white'>Toggle Light Mode</span>
      </button>
      <button className='flex dark:hidden gap-2' onClick={handleClickDark}>
        <Icon name='dark-mode' />
        <span>Toggle Dark Mode</span>
      </button>
    </nav>
  )
}

export default TopNav