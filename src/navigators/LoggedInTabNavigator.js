import React from 'react';
import PropTypes from 'prop-types';
import {
  createBottomTabNavigator
} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import ExploreContainer from '../containers/ExploreContainer';
import InboxContainer from '../containers/InboxContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SavedContainer from '../containers/SavedContainer';
import TripsContainer from '../containers/TripsContainer';
import CreateList from '../screens/CreateList';
import colors from '../styles/colors';

const ExploreTab = createStackNavigator({
  ExploreContainer: {
    screen: ExploreContainer,
    navigationOptions: {
      header: null,
    },
  },
  CreateList: { screen: CreateList },
},
{
  mode: 'modal',
});


ExploreTab.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const CustomTabBarIcon = (name, size) => {
  const icon = ({ tintColor }) => (
    <Ionicons
      name={name}
      size={size}
      color={tintColor}
    />
  );

  icon.propTypes = {
    tintColor: PropTypes.string.isRequired,
  };

  return icon;
};

const LoggedInTabNavigator = createBottomTabNavigator({
  Explore: {
    screen: ExploreTab,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: CustomTabBarIcon('ios-search', 22),
    },
  },
  Saved: {
    screen: SavedContainer,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: CustomTabBarIcon('ios-heart-empty', 22),
    },
  },
  Trips: {
    screen: TripsContainer,
    navigationOptions: {
      tabBarLabel: 'MENTOR',
      tabBarIcon: CustomTabBarIcon('ios-add-circle', 21),
    },
  },
  Inbox: {
    screen: InboxContainer,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: CustomTabBarIcon('ios-filing', 22),
    },
  },
  Profile: {
    screen: ProfileContainer,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: CustomTabBarIcon('ios-contact', 22),
    },
  },
}, {
  tabBarOptions: {
    labelStyle: {
      fontWeight: '600',
      marginBottom: 5,
    },
    activeTintColor: colors.pink,
  },
  tabBarPosition: 'bottom',
});

export default LoggedInTabNavigator;
