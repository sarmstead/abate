const Sandwich = props => {
  const { color, width } = props

  return (
    <figure className={width} alt='Menu icon'>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 8H19.5" className={color} strokeWidth="1.5"/>
        <path d="M4.5 16H19.5" className={color} strokeWidth="1.5"/>
      </svg>
    </figure>
  )
}

Sandwich.defaultProps = {
  color: 'stroke-black dark:stroke-primary-teal',
  width: 'w-6'
}

export default Sandwich