import { useEffect, useState } from 'react';

import Page from '../../../components/global/page';

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

  if(error) {
    return (
      <Page>
        <p>Yikes! We came across the following error:
          <br />
          <span className='italic text-red-500'>{error}</span>
        </p>
      </Page>
    )
  }

  if (isLoading) {
    return (<Page><div className='mt-10 text-black dark:text-white'>Loading...</div></Page>)
  }

  return (
    <Page>
      <article className='dark:text-white'>
        <p>{data.title}</p>
        {data.content.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
      })}
      </article>
    </Page>
  )
}

export const getServerSideProps = (context) => {
  return {
    props: { articleId: context.params.article[0] }
  }
}

export default Article;