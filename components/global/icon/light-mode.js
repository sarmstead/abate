const LightMode = props => {
  const {
    color,
    height,
    width
  } = props

  return (
    <svg width={width} height={height} className={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15.5C12.9667 15.5 13.7917 15.1583 14.475 14.475C15.1583 13.7917 15.5 12.9667 15.5 12C15.5 11.0333 15.1583 10.2083 14.475 9.525C13.7917 8.84167 12.9667 8.5 12 8.5C11.0333 8.5 10.2083 8.84167 9.525 9.525C8.84167 10.2083 8.5 11.0333 8.5 12C8.5 12.9667 8.84167 13.7917 9.525 14.475C10.2083 15.1583 11.0333 15.5 12 15.5ZM12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM1.75 12.75C1.53333 12.75 1.35417 12.6792 1.2125 12.5375C1.07083 12.3958 1 12.2167 1 12C1 11.7833 1.07083 11.6042 1.2125 11.4625C1.35417 11.3208 1.53333 11.25 1.75 11.25H4.25C4.46667 11.25 4.64583 11.3208 4.7875 11.4625C4.92917 11.6042 5 11.7833 5 12C5 12.2167 4.92917 12.3958 4.7875 12.5375C4.64583 12.6792 4.46667 12.75 4.25 12.75H1.75ZM19.75 12.75C19.5333 12.75 19.3542 12.6792 19.2125 12.5375C19.0708 12.3958 19 12.2167 19 12C19 11.7833 19.0708 11.6042 19.2125 11.4625C19.3542 11.3208 19.5333 11.25 19.75 11.25H22.25C22.4667 11.25 22.6458 11.3208 22.7875 11.4625C22.9292 11.6042 23 11.7833 23 12C23 12.2167 22.9292 12.3958 22.7875 12.5375C22.6458 12.6792 22.4667 12.75 22.25 12.75H19.75ZM12 5C11.7833 5 11.6042 4.92917 11.4625 4.7875C11.3208 4.64583 11.25 4.46667 11.25 4.25V1.75C11.25 1.53333 11.3208 1.35417 11.4625 1.2125C11.6042 1.07083 11.7833 1 12 1C12.2167 1 12.3958 1.07083 12.5375 1.2125C12.6792 1.35417 12.75 1.53333 12.75 1.75V4.25C12.75 4.46667 12.6792 4.64583 12.5375 4.7875C12.3958 4.92917 12.2167 5 12 5ZM12 23C11.7833 23 11.6042 22.9292 11.4625 22.7875C11.3208 22.6458 11.25 22.4667 11.25 22.25V19.75C11.25 19.5333 11.3208 19.3542 11.4625 19.2125C11.6042 19.0708 11.7833 19 12 19C12.2167 19 12.3958 19.0708 12.5375 19.2125C12.6792 19.3542 12.75 19.5333 12.75 19.75V22.25C12.75 22.4667 12.6792 22.6458 12.5375 22.7875C12.3958 22.9292 12.2167 23 12 23ZM6 7.05L4.575 5.65C4.425 5.5 4.35417 5.32083 4.3625 5.1125C4.37083 4.90417 4.44167 4.725 4.575 4.575C4.725 4.425 4.90417 4.35 5.1125 4.35C5.32083 4.35 5.5 4.425 5.65 4.575L7.05 6C7.18333 6.15 7.25 6.325 7.25 6.525C7.25 6.725 7.18333 6.89167 7.05 7.025C6.91667 7.175 6.74583 7.25 6.5375 7.25C6.32917 7.25 6.15 7.18333 6 7.05ZM18.35 19.425L16.95 18C16.8167 17.85 16.75 17.6708 16.75 17.4625C16.75 17.2542 16.825 17.0833 16.975 16.95C17.1083 16.8 17.275 16.725 17.475 16.725C17.675 16.725 17.85 16.8 18 16.95L19.425 18.35C19.575 18.5 19.6458 18.6792 19.6375 18.8875C19.6292 19.0958 19.5583 19.275 19.425 19.425C19.275 19.575 19.0958 19.65 18.8875 19.65C18.6792 19.65 18.5 19.575 18.35 19.425ZM16.95 7.05C16.8 6.9 16.725 6.725 16.725 6.525C16.725 6.325 16.8 6.15 16.95 6L18.35 4.575C18.5 4.425 18.6792 4.35417 18.8875 4.3625C19.0958 4.37083 19.275 4.44167 19.425 4.575C19.575 4.725 19.65 4.90417 19.65 5.1125C19.65 5.32083 19.575 5.5 19.425 5.65L18 7.05C17.8667 7.18333 17.6958 7.25 17.4875 7.25C17.2792 7.25 17.1 7.18333 16.95 7.05ZM4.575 19.425C4.425 19.275 4.35 19.0958 4.35 18.8875C4.35 18.6792 4.425 18.5 4.575 18.35L6 16.95C6.15 16.8 6.325 16.725 6.525 16.725C6.725 16.725 6.9 16.8 7.05 16.95C7.2 17.1 7.275 17.275 7.275 17.475C7.275 17.675 7.2 17.85 7.05 18L5.65 19.425C5.5 19.575 5.32083 19.6458 5.1125 19.6375C4.90417 19.6292 4.725 19.5583 4.575 19.425Z" />
    </svg>

  )
}

LightMode.defaultProps = {
  color: 'fill-white',
  height: '24',
  width: '24'
}

export default LightMode;