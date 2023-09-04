import Link from 'next/link';
import Page from '../components/global/page';

const Legal = () => {
  return (
    <Page>
      <h1 className='font-bold dark:text-primary-teal text-4xl mb-4'>Terms of Use</h1>
      <p>Abate is a project created by <Link href='https://sunjayarmstead.com/about/' target='_blank'>Sunjay Armstead</Link>.</p>
      <p>Our service is free to use and all of our code is <Link href='https://github.com/sarmstead/abate' target='_blank'>open source</Link>.</p>
      <p>The purpose of this project is to aggregate news from a variety of sources in one place. We are committed to the fidelity of original information and the proper citation of every source used. You will find bibliographic information, including links to the original posting, after each individual article. We only aggregate from text-only sources that already remove advertisements and other multimedia content.</p>
      <p>You may contact us at <Link href='https://sunjayarmstead.com/contact/' target='_blank'>sunjayarmstead.com/contact</Link> if you have any questions about the terms of using this application.</p>
    </Page>
  )
}

export default Legal;
