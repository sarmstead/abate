import Link from 'next/link';
import { useState } from 'react';

import Icon from '../global/icon';

const Citation = props => {
  const [isOpen, setIsOpen] = useState(false)
  const {
    authors,
    datePublished,
    dateRetrieved,
    link,
    title
  } = props

  const toggleTitle = isOpen ? 'Close X' : <Icon name='unfold' />;

  const handleToggle = (event) => {
    event.preventDefault();
    isOpen ? setIsOpen(false) : setIsOpen(true);
    console.log(isOpen);
  }

  return (
    <aside className='p-4 border border-solid rounded border-complementary-salmon dark:border-primary-teal'>
      <section className='grid grid-cols-2 cursor-pointer' onClick={handleToggle}>
        <button className='justify-self-start dark:text-white uppercase font-bold'>Bibliographic Data</button>
        <button className='uppercase font-bold dark:text-primary-teal justify-self-end'>{toggleTitle}</button>
      </section>
      {isOpen &&
        <section className='break-words dark:text-white mt-5'>
          <p className='mb-5'>Title — {title}</p>
          <p className='mb-5'>Author(s) — {authors}</p>
          <Link href={link}><a target='_blank'>Original Link — {link}</a></Link>
          <p className='my-5'>Date Published — {datePublished}</p>
          <p>Date Retrieved — {dateRetrieved}</p>
        </section>
      }
    </aside>
  )
}

export default Citation;