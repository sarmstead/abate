import Link from 'next/link';
import { useEffect, useState } from 'react';

import Page from '../../../components/global/page';
import Citation from '../../../components/news/citation';

const Article = (props) => {
  const { articleId } = props
  const [ data, setData ] = useState({})
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      try {
        const res = await fetch(`/api/news/cnn/single?id=${articleId}`);
        const responseData = await res.json();
        setData(responseData.article[0]);
      }
      catch (error){
        console.error(error)
        setError(error.toString())
      }

      setIsLoading(false)
    }

    fetchData()
  }, [articleId])

  const dateFormatter = date => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short'
    }
    return new Date(date).toLocaleDateString('en-US', options)
  }

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
      <nav className='font-sans text-complementary-salmon dark:text-primary-teal uppercase font-bold mt-20 mb-8'>
        <Link href='/'><a className='no-underline hover:underline'>Home</a></Link> | <Link href='/news/cnn'><a className='no-underline hover:underline'>CNN</a></Link>
      </nav>
      <article className='dark:text-white mb-20'>
        <h2 className='mb-7 font-bold mb-20 text-4xl max-w-5xl'>{data.title}</h2>
        {data.content.map((paragraph, index) => {
          return <p key={index} className='mb-7 last:mb-0'>{paragraph}</p>
      })}
      </article>
      <Citation title={data.title} authors={data.authors} link={data.link} datePublished={dateFormatter(data.date.published)} dateRetrieved={dateFormatter(data.date.retrieved)} />
    </Page>
  )
}

export const getServerSideProps = (context) => {

  return {
    props: { articleId: context.query.vendor_slug }
  }
}

export default Article;
