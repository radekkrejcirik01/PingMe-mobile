import { HangoutPickerEnum } from '@components/general/HangoutPicker/HangoutPicker.enum';

export interface HangoutPickerProps {
    isVisible: boolean;
    onDateTimeChange: (value: string) => void;
    onPlaceChange: (value: string) => void;
    onPlaceInputFocusChanged?: (focused: boolean) => void;
    type?: HangoutPickerEnum | null;
}

export const HangoutPickerDefaultProps: Omit<
    HangoutPickerProps,
    'isVisible' | 'onDateTimeChange' | 'onPlaceChange'
> = {
    onPlaceInputFocusChanged: () => {},
    type: null
};
