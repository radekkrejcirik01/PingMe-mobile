import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { HeaderPlus } from '@components/general/HeaderPlus/HeaderPlus';
import { StackNavigatorStyle } from '@navigation/StackNavigators/StackNavigator.style';
import DIMENSIONS from '@constants/DIMENSIONS';

export const ProfileTitle: StackNavigationOptions = {
    headerTitle: 'Profile'
};

export const PeopleOptions: StackNavigationOptions = {
    headerTitle: 'People',
    headerRight: () => <HeaderPlus />
};

export const ChatDetailOptions: StackNavigationOptions = {
    title: 'Details'
};

export const PictureOptions: StackNavigationOptions = {
    headerLeft: null,
    headerStyle: StackNavigatorStyle.navigationScreen,
    gestureResponseDistance: DIMENSIONS.width,
    headerTitle: ''
};

export const HangoutsTitle: StackNavigationOptions = {
    headerTitle: 'History'
};

export const NotificationsTitle: StackNavigationOptions = {
    headerTitle: 'Notifications'
};

export const HangoutDetailTitle: StackNavigationOptions = {
    headerTitle: 'Edit'
};

export const MessagesTitle: StackNavigationOptions = {
    headerTitle: 'Messages'
};

export const AccountTitle: StackNavigationOptions = {
    headerTitle: 'Account'
};

export const ChangePasswordTitle: StackNavigationOptions = {
    headerTitle: 'Change password'
};

export const DeleteAccountTitle: StackNavigationOptions = {
    headerTitle: 'Delete account'
};

export const CreateGroupHangoutTitle: StackNavigationOptions = {
    headerTitle: 'Group hangout'
};

export const PickPeopleTitle: StackNavigationOptions = {
    headerTitle: 'Add people'
};
