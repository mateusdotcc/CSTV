import { myTheme } from '@themes/index';
import { StackNavigationOptions } from '@react-navigation/stack';

export const screenOptions: StackNavigationOptions = {
  headerLeftContainerStyle: { paddingLeft: myTheme.spaces.gutter },
  headerRightContainerStyle: { paddingRight: myTheme.spaces.gutter },
  headerStyle: { height: 120, backgroundColor: myTheme.colors.black },
  headerShadowVisible: false,
  headerTintColor: myTheme.colors.white,
  headerTitleStyle: {
    fontFamily: myTheme.fontFamily.medium,
    fontSize: 18,
  },
};
