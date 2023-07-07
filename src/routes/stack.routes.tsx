import { createStackNavigator } from '@react-navigation/stack';
import { Feed } from '@screens/Feed';
import { MatchDetails } from '@screens/MatchDetails';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="feed" component={Feed} />
      <Stack.Screen name="matchDetails" component={MatchDetails} />
    </Stack.Navigator>
  );
}
