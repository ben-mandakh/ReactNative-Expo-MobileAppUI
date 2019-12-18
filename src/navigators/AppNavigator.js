import {
    createAppContainer,
    createSwitchNavigator
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoggedOut from "../screens/LoggedOut";
import LogIn from "../screens/LogIn";
import ForgotPassword from "../screens/ForgotPassword";
import TurnOnNotifications from "../screens/TurnOnNotifications";
import LoggedInTabNavigator from "./LoggedInTabNavigator";
import { logIn } from "../redux/actions/navigation";

const LoggedOutStack = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    LogIn: { screen: LogIn },
    ForgotPassword: { screen:ForgotPassword }
});

export default createAppContainer(
    createSwitchNavigator({
        LoggedOut: LoggedOutStack,
        LoggedIn: {
            screen: LoggedInTabNavigator,
            navigationOptions: {
                header: null,
                gesturesEnabled: false
            }
        },
        TurnOnNotifications: { screen: TurnOnNotifications }
    },
    {
        initialRouteName: "LoggedOut"
    }
 ));
