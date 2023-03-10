import { Moment } from 'moment';

export interface ChatDataProps {
    id: number;
    sender: string;
    profilePicture: string;
    conversationId: number;
    message: string;
    time: Moment;
    readBy: Array<{
        username: string;
        profilePicture: string;
    }>;
    reactedBy: Array<{
        username: string;
        reaction: string;
    }>;
    url: string;
}

export interface ChatListProps {
    conversationId: number;
    picture: string;
}
