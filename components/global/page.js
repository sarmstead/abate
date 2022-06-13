import TopNav from './top-nav';

const Page = props => {
  return (
    <>
      <TopNav {...props} />
      {props.children}
    </>
  )
}

export default Page;