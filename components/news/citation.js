import Link from 'next/link';
import { useState } from 'react';

import Icon from '../global/icon';

const Citation = props => {
  const [isOpen, setIsOpen] = useState(false)
  const {
    authors,
    date,
    link,
    title
  } = props

  const toggleTitle = isOpen ? 'Close X' : <Icon name='unfold' />;

  const handleToggle = (event) => {
    event.preventDefault();
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (<>
    {!isOpen &&
      <aside className='p-4 border border-solid rounded border-black dark:border-primary-teal'>
        <section className='grid grid-cols-2 cursor-pointer font-sans' onClick={handleToggle}>
          <button className='justify-self-start dark:text-white uppercase font-bold text-left'>Bibliographic Data</button>
          <button className='uppercase font-bold dark:text-primary-teal justify-self-end'>{toggleTitle}</button>
        </section>
      </aside>
    }

    {isOpen &&
    <aside className='p-4 border border-solid rounded border-complementary-salmon dark:border-primary-teal'>
      <section className='grid grid-cols-2 cursor-pointer font-sans' onClick={handleToggle}>
        <button className='justify-self-start dark:text-white uppercase font-bold text-left'>Bibliographic Data</button>
        <button className='uppercase font-bold text-complementary-salmon dark:text-primary-teal justify-self-end'>{toggleTitle}</button>
      </section>
      <section className='break-words dark:text-white mt-5'>
        <p className='mb-5'>Title — {title}</p>
        <p className='mb-5'>Contributions — {authors}</p>
        <p>Original Link — <Link href={link}>{link}</Link></p>
        <p className='my-5'>Last Updated — {date}</p>
      </section>
    </aside>
    }
    </>
  )
}

export default Citation;
