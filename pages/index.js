import Link from 'next/link';
import { useEffect, useState } from 'react'

import TopNav from '../components/global/top-nav';

export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      try {
        const res = await fetch('/api/news/cnn/links?num=10');
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
      <p>Yikes! We came across the following error:
        <br />
        <span className='italic text-red-500'>{error}</span>
      </p>
    )
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <TopNav />
      <div className='grid max-w-screen-2xl m-auto p-14 lg:p-24'>
        <h1 className='mb-10 dark:text-white'>
          <span className='font-extrabold text-6xl'>Abate</span><br/>
          <span className='font-light text-2xl'>News Simplified</span>
        </h1>
        <h2 className='dark:text-white text-4xl mb-4'>CNN Articles</h2>
        {
          data.links.map((link, index) => {
            return (
                <Link href={`/news/cnn/${link.id}`} key={index}><a target='_blank' className='font-medium text-3xl mb-6 dark:text-white'>{link.title}</a></Link>
            )
          })
        }
      </div>
    </>
  )
}
