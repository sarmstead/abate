import AbateLogo from './abate';
import AbateLogoFull from './full';

const Logo = props => {
  const { type } = props
  if (type) {
    if (type.toLowerCase() === 'full') {
      return <AbateLogoFull {...props} />
    }
  }

  return <AbateLogo />
}

export default Logo;