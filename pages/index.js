export default function Home({ data }) {
  return (
    <div className='grid max-w-screen-2xl	m-auto p-14 lg:p-24'>
      <h1 className='mb-10'>
        <span className='font-extrabold text-6xl'>Abate</span><br/>
        <span className='font-light text-2xl'>News Simplified</span>
      </h1>
      {
        data.articles.map((article, index) => {
          return (
            <article key={index} className='mb-20 last:mb-0'>
              <h2 className='font-medium text-3xl mb-6'>{article.title}</h2>
              {article.content.map((paragraph, index) => {
                return <p key={index} className='text-lg leading-7 mb-2'>{paragraph}</p>
              })}
            </article>
          )
        })
      }
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/news/cnn`);
  const data = await res.json();
  
  return { props: {data} }
}