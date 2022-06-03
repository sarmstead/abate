import { useRouter } from 'next/router';
import getCNNLinks from '../../../utils/api/cnn-links';

const Article = (props) => {
  const router = useRouter();
  console.log('Context:', props)
  const { article } = router.query;

  return <p>Article Rendered: {article}</p>
}

// export const getStaticPaths = async () => {
//   const allLinks = await getCNNLinks('https://lite.cnn.com');
//   const ids = allLinks.map(link => {
//     return link.id
//   })
  
//   return {
//     paths: [
//       { params: { article: ids } }
//     ],
//     fallback: true
//   };
// }

// export const getStaticProps = (context) => {
//   // TO DO: create function to get single article from CNN. Put the function here to fetch.
//   const endpoint = `https://lite.cnn.com/en/article/${context.params.article[0]}`
//   return {
//     props: { endpoint }
//   }
// }

export default Article;