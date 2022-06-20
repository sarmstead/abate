import Footer from './footer';
import TopNav from './top-nav';

const Page = props => {
  return (
    <>
      <TopNav {...props} />
      {props.children}
      <Footer {...props} />
    </>
  )
}

export default Page;