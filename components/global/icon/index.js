import LightMode from './light-mode';
import DarkMode from './dark-mode';
import Sandwich from './sandwich';

const Icon = props => {
  const { name } = props;
  if (name) {
    switch(name.toLowerCase()) {
      case 'light-mode':
        return <LightMode {...props} />
      case 'dark-mode':
        return <DarkMode {...props} />
      case 'sandwich':
        return <Sandwich {...props} />
      default:
        return;
    }
  } else {
    return;
  }
}

export default Icon;