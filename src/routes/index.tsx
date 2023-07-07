import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '@themes/index';

export default function Routes() {
  return (
    <ThemeProvider theme={myTheme}>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
