const Unfold = props => {
  const { color, height, width } = props

  return (
    <figure className={`${width} ${height}`} alt='Menu icon'>
      <svg viewBox="0 0 24 24" className={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M8.6 8.64999L7.5 7.54999L12 3.04999L16.5 7.54999L15.4 8.64999L12 5.24999L8.6 8.64999ZM12 20.95L7.5 16.45L8.6 15.35L12 18.75L15.4 15.35L16.5 16.45L12 20.95Z" />
      </svg>
    </figure>

  )
}

Unfold.defaultProps = {
  color: 'fill-black dark:fill-white',
  height: 'w-6',
  width: 'w-6'
}

export default Unfold;