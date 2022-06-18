import Link from 'next/link';
import { useEffect, useState } from 'react'

import Page from '../../../components/global/page';

export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      try {
        const res = await fetch('/api/news/cnn/links');
        const responseData = await res.json();
        setData(responseData)
      }

      catch (error){
        console.error(error)
        setError(error.toString())
      }
      setIsLoading(false)
    }
    
    fetchData()
    
  }, [])
  
  if(error) {
    return (
      <Page>
        <p className='font-sans mb-2'>Yikes! We came across the following error:
          <br />
          <span className='italic text-red-500'>{error}</span>
        </p>
      </Page>
    )
  }

  if (isLoading) {
    return (<Page><div className='mt-10 font-sans uppercase font-bold text-black dark:text-white'>Loading...</div></Page>)
  }

  return (
    <Page>
      <div className='grid mt-10'>
        <h2 className='dark:text-primary-teal text-4xl font-bold mb-4'>Articles from CNN</h2>
        {
          data.links.map((link, index) => {
            return (
                <Link href={`/news/cnn/${link.id}`} key={index}><a className='underline underline-offset-8 decoration-dashed decoration-primary-teal mb-4 dark:text-white'>{link.title}</a></Link>
            )
          })
        }
      </div>
    </Page>
  )
}
