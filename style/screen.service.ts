import { StyleSheet, Dimensions, Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';
export const IS_WEB = Platform.OS === 'web';
export const viewportWidth = Dimensions.get('window').width;
export const viewportHeight = Dimensions.get('window').height;

export const wp = (percentage: number) => {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

export const slideHeight = viewportHeight * 0.28;
export const slideWidth = wp(75);
const itemHorizontalMargin = wp(1);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 10;



