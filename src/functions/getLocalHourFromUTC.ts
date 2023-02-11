import moment, { Moment } from 'moment';

export const getLocalHourFromUTC = (time: Moment): string => {
    const stillUtc = moment.utc(time);
    const local = moment(stillUtc).local().format('HH:mm');

    return local;
};
