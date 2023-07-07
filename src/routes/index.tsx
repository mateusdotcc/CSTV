import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';
import { StatusBar } from 'expo-status-bar';

export default function Routes() {
  return (
    <>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </>
  );
}
