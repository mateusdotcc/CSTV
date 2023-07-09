import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export type RootStackParamList = {
  feed: {} | undefined;
  matchDetails: {} | undefined;
};

interface NavigationProps extends StackNavigationProp<RootStackParamList> {}

export function useNav() {
  return useNavigation<NavigationProps>();
}
