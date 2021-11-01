import * as React from 'react';
import {
    Animated,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    LogBox,
} from 'react-native';
LogBox.ignoreAllLogs();

const { width, height } = Dimensions.get('screen');

const imageW = width * 0.7;
const imageH = imageW * 1.54;

const ConfettiScreen = (props) => {
    const firstTranslation = React.useRef(new Animated.Value(500)).current;
    const secondTranslation = React.useRef(new Animated.Value(500)).current;
    const thirdTranslation = React.useRef(new Animated.Value(500)).current;
    const fourthTranslation = React.useRef(new Animated.Value(500)).current;
    const fifthTranslation = React.useRef(new Animated.Value(500)).current;

    const heartAnimation = () => {
        Animated.loop(
            Animated.parallel([
                Animated.timing(firstTranslation, {
                    toValue: 10,
                    duration: 1300,
                    // useNativeDriver: true,
                }),
                Animated.timing(secondTranslation, {
                    toValue: 10,
                    duration: 1350,
                    // useNativeDriver: true,
                }),
                Animated.timing(thirdTranslation, {
                    toValue: 10,
                    duration: 1400,
                    // useNativeDriver: true,
                }),
                Animated.timing(fourthTranslation, {
                    toValue: 10,
                    duration: 1450,
                    // useNativeDriver: true,
                }),
                Animated.timing(fifthTranslation, {
                    toValue: 10,
                    duration: 1500,
                    // useNativeDriver: true,
                }),
            ])
        ).start();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={heartAnimation}>
                <ImageBackground
                    source={require('../assets/bg.jpg')}
                    style={styles.img}
                >
                    <View style={{ marginTop: 500 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginBottom: 10,
                            }}
                        >
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: '#47436F',
                                    transform: [
                                        { translateY: firstTranslation },
                                        {
                                            rotate: firstTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: firstTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: '#E7285A',
                                    marginLeft: 200,
                                    transform: [
                                        { translateY: firstTranslation },
                                        {
                                            rotate: firstTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: firstTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginBottom: 10,
                            }}
                        >
                            <Animated.View
                                style={{
                                    ...styles.circle2,
                                    backgroundColor: 'orange',
                                    transform: [
                                        { translateY: thirdTranslation },
                                    ],
                                    opacity: thirdTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: 'orange',
                                    marginLeft: 70,
                                    transform: [
                                        { translateY: secondTranslation },
                                        {
                                            rotate: secondTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: secondTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: 'green',
                                    marginLeft: 100,
                                    height: thirdTranslation.interpolate({
                                        inputRange: [10, 20, 200, 500],
                                        outputRange: [12, 80, 80, 12],
                                        extrapolate: 'clamp',
                                    }),
                                    transform: [
                                        { translateY: thirdTranslation },
                                    ],
                                    opacity: thirdTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: 'orange',
                                    marginLeft: 40,
                                    transform: [
                                        { translateY: secondTranslation },
                                        {
                                            rotate: secondTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: secondTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.circle2,
                                    marginLeft: 20,
                                    backgroundColor: 'orange',
                                    transform: [
                                        { translateY: thirdTranslation },
                                    ],
                                    opacity: thirdTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}
                        >
                            <Animated.View
                                style={{
                                    ...styles.circle,
                                    borderColor: '#47436F',
                                    transform: [
                                        { translateY: secondTranslation },
                                    ],
                                    opacity: secondTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.circle,
                                    marginLeft: 300,
                                    transform: [
                                        { translateY: secondTranslation },
                                    ],
                                    opacity: secondTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginBottom: 10,
                            }}
                        >
                            <Animated.View
                                style={{
                                    ...styles.circle2,
                                    marginLeft: 30,
                                    backgroundColor: 'orange',
                                    transform: [
                                        { translateY: thirdTranslation },
                                    ],
                                    opacity: thirdTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: 'lightblue',
                                    marginLeft: 50,
                                    transform: [
                                        { translateY: thirdTranslation },
                                        {
                                            rotate: thirdTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: thirdTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: '#47436F',
                                    marginLeft: 70,
                                    transform: [
                                        { translateY: thirdTranslation },
                                        {
                                            rotate: thirdTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: thirdTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    marginLeft: 40,
                                    transform: [
                                        { translateY: thirdTranslation },
                                        {
                                            rotate: thirdTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: thirdTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginBottom: 10,
                            }}
                        >
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: '#E7285A',
                                    height: thirdTranslation.interpolate({
                                        inputRange: [10, 20, 200, 500],
                                        outputRange: [12, 80, 80, 12],
                                        extrapolate: 'clamp',
                                    }),
                                    transform: [
                                        { translateY: thirdTranslation },
                                    ],
                                    opacity: thirdTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.circle2,
                                    backgroundColor: 'green',
                                    marginLeft: 40,
                                    transform: [
                                        { translateY: thirdTranslation },
                                    ],
                                    opacity: thirdTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: 'lightblue',
                                    marginLeft: 50,
                                    transform: [
                                        { translateY: thirdTranslation },
                                        {
                                            rotate: thirdTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: thirdTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.circle2,
                                    backgroundColor: 'orange',
                                    marginLeft: 70,
                                    transform: [
                                        { translateY: thirdTranslation },
                                    ],
                                    opacity: thirdTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    marginLeft: 40,
                                    transform: [
                                        { translateY: thirdTranslation },
                                        {
                                            rotate: thirdTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: thirdTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginBottom: 10,
                            }}
                        >
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: 'orange',
                                    transform: [
                                        { translateY: fourthTranslation },
                                        {
                                            rotate: fourthTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: fourthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.circle,
                                    marginLeft: 100,
                                    borderColor: '#47436F',
                                    transform: [
                                        { translateY: fourthTranslation },
                                    ],
                                    opacity: fourthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.circle,
                                    marginLeft: 70,
                                    borderColor: '#47436F',
                                    transform: [
                                        { translateY: fourthTranslation },
                                    ],
                                    opacity: fourthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: 'green',
                                    marginLeft: 100,
                                    height: fourthTranslation.interpolate({
                                        inputRange: [10, 20, 200, 500],
                                        outputRange: [12, 80, 80, 12],
                                        extrapolate: 'clamp',
                                    }),
                                    transform: [
                                        { translateY: fourthTranslation },
                                    ],
                                    opacity: fourthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: 'orange',
                                    marginLeft: 40,
                                    transform: [
                                        { translateY: fourthTranslation },
                                        {
                                            rotate: fourthTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: fourthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginBottom: 10,
                            }}
                        >
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: 'lightblue',
                                    marginLeft: 50,
                                    transform: [
                                        { translateY: fifthTranslation },
                                        {
                                            rotate: fifthTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: fifthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    marginLeft: 30,
                                    backgroundColor: '#E7285A',
                                    height: fifthTranslation.interpolate({
                                        inputRange: [10, 20, 200, 500],
                                        outputRange: [12, 80, 80, 12],
                                        extrapolate: 'clamp',
                                    }),
                                    transform: [
                                        { translateY: fifthTranslation },
                                    ],
                                    opacity: fifthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    backgroundColor: '#47436F',
                                    marginLeft: 70,
                                    transform: [
                                        { translateY: fifthTranslation },
                                        {
                                            rotate: fifthTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: fifthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.square,
                                    marginLeft: 120,
                                    transform: [
                                        { translateY: fifthTranslation },
                                        {
                                            rotate: fifthTranslation.interpolate(
                                                {
                                                    inputRange: [10, 100, 500],
                                                    outputRange: [
                                                        '360deg',
                                                        '0deg',
                                                        '0deg',
                                                    ],
                                                }
                                            ),
                                        },
                                    ],
                                    opacity: fifthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginBottom: 10,
                            }}
                        >
                            <Animated.View
                                style={{
                                    ...styles.circle2,
                                    backgroundColor: 'green',
                                    marginLeft: 40,
                                    transform: [
                                        { translateY: fifthTranslation },
                                    ],
                                    opacity: fifthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.circle2,
                                    backgroundColor: 'green',
                                    marginLeft: 120,
                                    transform: [
                                        { translateY: fifthTranslation },
                                    ],
                                    opacity: fifthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginBottom: 10,
                            }}
                        >
                            <Animated.View
                                style={{
                                    ...styles.circle2,
                                    backgroundColor: 'black',
                                    marginLeft: 40,
                                    transform: [
                                        { translateY: fifthTranslation },
                                    ],
                                    opacity: fifthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.circle2,
                                    backgroundColor: 'pink',
                                    marginLeft: 120,
                                    transform: [
                                        { translateY: fifthTranslation },
                                    ],
                                    opacity: fifthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                            <Animated.View
                                style={{
                                    ...styles.circle2,
                                    backgroundColor: '#47436F',
                                    marginLeft: 120,
                                    transform: [
                                        { translateY: fifthTranslation },
                                    ],
                                    opacity: fifthTranslation.interpolate({
                                        inputRange: [10, 30, 500],
                                        outputRange: [1, 1, 1],
                                    }),
                                }}
                            ></Animated.View>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: '100%',
        width: '95%',
        resizeMode: 'cover',
    },
    square: {
        height: 12,
        width: 12,
        backgroundColor: 'pink',
    },
    circle: {
        height: 15,
        width: 15,
        borderRadius: 8,
        borderWidth: 0.8,
    },
    circle2: {
        height: 8,
        width: 8,
        borderRadius: 6,
    },
});

export default ConfettiScreen;
