import Link from 'next/link';

export default function Home({ data }) {
  return (
    <div className='grid max-w-screen-2xl m-auto p-14 lg:p-24'>
      <h1 className='mb-10'>
        <span className='font-extrabold text-6xl'>Abate</span><br/>
        <span className='font-light text-2xl'>News Simplified</span>
      </h1>
      {
        data.links.map((link, index) => {
          return (
              <Link href={`/news/cnn/${link.id}`} key={index}><a target='_blank' className='font-medium text-3xl mb-6'>{link.title}</a></Link>
          )
        })
      }
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('/api/news/cnn/links?num=10');
  const data = await res.json();
  
  return { 
    props: {data},
    revalidate: 3600
  
  }
}