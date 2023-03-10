import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useSelector } from 'react-redux';
import { useMessagesListRenders } from '@hooks/useMessagesListRenders';
import { MessagesListDataProps } from '@screens/account/MessagesScreen/MessagesScreen.props';
import { postRequest } from '@utils/Axios/Axios.service';
import { ResponseConversationsGetInterface } from '@interfaces/response/Response.interface';
import { UserGetPostInterface } from '@interfaces/post/Post.inteface';
import { ReducerProps } from '@store/index/index.props';
import { useNavigation } from '@hooks/useNavigation';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { AccountStackNavigatorEnum } from '@navigation/StackNavigators/account/AccountStackNavigator.enum';
import { MessagesScreenStyle } from '@screens/account/MessagesScreen/MessagesScreen.style';

export const MessagesScreen = (): JSX.Element => {
    const { username } = useSelector((state: ReducerProps) => state.user.user);

    const [data, setData] = useState<Array<MessagesListDataProps>>([]);

    const loadConversations = useCallback(() => {
        postRequest<ResponseConversationsGetInterface, UserGetPostInterface>(
            'https://4thoa9jdo6.execute-api.eu-central-1.amazonaws.com/messages/get/conversations/0',
            {
                username
            }
        ).subscribe((response: ResponseConversationsGetInterface) => {
            if (response?.status) {
                setData(response?.data);
            }
        });
    }, [username]);

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.AccountStack,
        loadConversations
    );

    const onItemPress = useCallback(
        (item: MessagesListDataProps) => {
            navigateTo(AccountStackNavigatorEnum.ChatScreen, {
                conversationId: item?.id,
                title: item?.name,
                image: item?.picture
            });
        },
        [navigateTo]
    );

    const onRefresh = useCallback(() => {
        loadConversations();
    }, [loadConversations]);

    const { getItemType, renderItem, keyExtractor, refreshControl } =
        useMessagesListRenders(data, onItemPress, onRefresh);

    return (
        <View style={MessagesScreenStyle.container}>
            <FlashList
                data={data}
                getItemType={getItemType}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                refreshControl={refreshControl}
                showsVerticalScrollIndicator={false}
                estimatedItemSize={68}
                contentContainerStyle={MessagesScreenStyle.contentContainer}
            />
        </View>
    );
};
