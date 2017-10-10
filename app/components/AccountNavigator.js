import AccountDetailScreen from '../screens/AccountDetailScreen';
import AccountListMapViewScreen from '../screens/AccountListMapViewScreen';
import AccountListScreen from '../screens/AccountListScreen';
import CustomerDetailScreen from '../screens/CustomerDetailScreen';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { screenChange } from '../utils/analytics';

const AccountStackNavigator = StackNavigator(
  {
    accountList: { screen: AccountListScreen },
    accountListMap: { screen: AccountListMapViewScreen },
    accountDetail: { screen: AccountDetailScreen },
    customerDetail: { screen: CustomerDetailScreen }
  },
  {
    mode: 'modal',
    initialRouteName: 'accountList'
  }
);

export default class AccountNavigator extends React.Component {
  render() {
    return <AccountStackNavigator onNavigationStateChange={screenChange} />;
  }
}
