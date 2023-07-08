import { createStackNavigator } from '@react-navigation/stack';
import { Feed } from '@screens/Feed';
import { MatchDetails } from '@screens/MatchDetails';
import { screenOptions } from '@routes/screenOptions';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="feed" component={Feed} options={{ headerShown: false }} />
      <Stack.Screen name="matchDetails" component={MatchDetails} />
    </Stack.Navigator>
  );
}
