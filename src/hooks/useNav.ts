import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  feed: {} | undefined;
  matchDetails: {} | undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export function useNav() {
  return useNavigation<NavigationProps>();
}
