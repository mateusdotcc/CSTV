import 'react-native-gesture-handler';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import Routes from '@routes/index';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync().then();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(
    function onSplashScreen() {
      async function prepare() {
        try {
          await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (e) {
          console.warn(e);
        } finally {
          setAppIsReady(true);
        }
      }

      if (fontsLoaded) prepare().then();
    },
    [fontsLoaded],
  );

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Routes />
    </View>
  );
}
