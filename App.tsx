import 'react-native-gesture-handler';
import { useFonts, Roboto_500Medium, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) return null;

  return <Routes />
}
