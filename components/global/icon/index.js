import LightMode from "./light-mode";
import DarkMode from "./dark-mode";

const Icon = props => {
  const { name } = props;
  if (name) {
    switch(name.toLowerCase()) {
      case 'light-mode':
        return <LightMode {...props} />
      case 'dark-mode':
        return <DarkMode {...props} />
      default:
        return;
    }
  } else {
    return;
  }
}

export default Icon;