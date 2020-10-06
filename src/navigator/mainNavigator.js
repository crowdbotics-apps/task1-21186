import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile130568Navigator from '../features/UserProfile130568/navigator';
import Tutorial130567Navigator from '../features/Tutorial130567/navigator';
import NotificationList130539Navigator from '../features/NotificationList130539/navigator';
import Settings130538Navigator from '../features/Settings130538/navigator';
import Settings130530Navigator from '../features/Settings130530/navigator';
import UserProfile130528Navigator from '../features/UserProfile130528/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile130568: { screen: UserProfile130568Navigator },
Tutorial130567: { screen: Tutorial130567Navigator },
NotificationList130539: { screen: NotificationList130539Navigator },
Settings130538: { screen: Settings130538Navigator },
Settings130530: { screen: Settings130530Navigator },
UserProfile130528: { screen: UserProfile130528Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
