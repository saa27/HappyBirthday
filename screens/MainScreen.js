import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Easing,
    ImageBackground,
    Dimensions,
} from 'react-native';
import AnimatedNumbers from 'react-native-animated-numbers';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import ImageScreen from './ImageScreen';
import ConfettiScreen from './ConfettiScreen';

const { width, height } = Dimensions.get('window');

const MainScreen = () => {
    const ImgBackground = Animated.createAnimatedComponent(ImageBackground);
    const [animateToNumber, setAnimateToNumber] = useState(0);
    const animation = useRef(new Animated.Value(0)).current;
    const happyTranslation = useRef(new Animated.Value(-300)).current;
    const bdTranslation = useRef(new Animated.Value(500)).current;
    const numberOpacity = useRef(new Animated.Value(0)).current;
    // const khushiOpacity = useRef(new Animated.Value(0)).current;
    const kOpacity = useRef(new Animated.Value(0)).current;
    const h1Opacity = useRef(new Animated.Value(0)).current;
    const uOpacity = useRef(new Animated.Value(0)).current;
    const sOpacity = useRef(new Animated.Value(0)).current;
    const h2Opacity = useRef(new Animated.Value(0)).current;
    const iOpacity = useRef(new Animated.Value(0)).current;
    const balloonTranslation = useRef(new Animated.Value(500)).current;
    const sballoonTranslation = useRef(new Animated.Value(800)).current;

    const slider = useRef(null);

    const increase = () => {
        setAnimateToNumber(18);
    };

    const slide = () => {
        slider.current.scrollTo({ x: 0, y: height + 25, animated: true });
    };
    const slideAgain = () => {
        slider.current.scrollTo({ x: 0, y: 2 * height + 30, animated: true });
    };

    handleAnimation = () => {
        setTimeout(() => {
            increase();
        }, 1000);
        Animated.sequence([
            Animated.timing(animation, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
                // easing: Easing.ease,
            }),
            Animated.parallel([
                Animated.timing(happyTranslation, {
                    toValue: -15,
                    duration: 1000,
                    useNativeDriver: true,
                    easing: Easing.bounce,
                }),
                Animated.timing(bdTranslation, {
                    toValue: 10,
                    duration: 1000,
                    useNativeDriver: true,
                    easing: Easing.bounce,
                }),
                Animated.timing(numberOpacity, {
                    toValue: 1,
                    duration: 1,
                    useNativeDriver: true,
                    // easing: Easing.bounce,
                }),
            ]),
            Animated.timing(kOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(h1Opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(uOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(sOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(h2Opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(iOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const balloonAnimation = () => {
        Animated.parallel([
            Animated.timing(balloonTranslation, {
                toValue: 10,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.timing(sballoonTranslation, {
                toValue: 25,
                duration: 2000,
                useNativeDriver: true,
            }),
        ]).start();
        setTimeout(() => {
            slide();
        }, 2000);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                ref={slider} //coz we want to make changes in the ScrollView with respect to the slider
                scrollEventThrottle={16} //to make the animation faster and smoother
            >
                <TouchableOpacity onPress={handleAnimation}>
                    <ImgBackground
                        source={require('../assets/hbd.gif')}
                        style={{
                            ...styles.cake,
                            transform: [
                                {
                                    scale: animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.8],
                                    }),
                                },
                            ],
                        }}
                    >
                        <Image
                            source={require('../assets/party.png')}
                            style={styles.people}
                        />
                    </ImgBackground>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // marginBottom: 250,
                    }}
                >
                    <Animated.Text
                        style={{
                            ...styles.happy,
                            transform: [{ translateX: happyTranslation }],
                        }}
                    >
                        Happy
                    </Animated.Text>
                    <Animated.View
                        style={{ opacity: numberOpacity, flexDirection: 'row' }}
                    >
                        <AnimatedNumbers
                            animateToNumber={animateToNumber}
                            fontStyle={{ fontSize: 40, fontWeight: 'bold' }}
                        />
                        <Text style={{ fontSize: 30, fontWeight: '100' }}>
                            th
                        </Text>
                    </Animated.View>
                    <Animated.Text
                        style={{
                            ...styles.happy,
                            transform: [{ translateX: bdTranslation }],
                        }}
                    >
                        Birthday
                    </Animated.Text>
                </View>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center' }}
                >
                    <Animated.Text
                        style={{ ...styles.happy, opacity: kOpacity }}
                    >
                        K
                    </Animated.Text>
                    <Animated.Text
                        style={{ ...styles.happy, opacity: h1Opacity }}
                    >
                        h
                    </Animated.Text>
                    <Animated.Text
                        style={{ ...styles.happy, opacity: uOpacity }}
                    >
                        u
                    </Animated.Text>
                    <Animated.Text
                        style={{ ...styles.happy, opacity: sOpacity }}
                    >
                        s
                    </Animated.Text>
                    <Animated.Text
                        style={{ ...styles.happy, opacity: h2Opacity }}
                    >
                        h
                    </Animated.Text>
                    <Animated.Text
                        style={{ ...styles.happy, opacity: iOpacity }}
                    >
                        i
                    </Animated.Text>
                </View>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center' }}
                >
                    <Animated.Image
                        source={require('../assets/balloon2.png')}
                        style={{
                            ...styles.balloon2,
                            transform: [{ translateY: balloonTranslation }],
                            opacity: balloonTranslation.interpolate({
                                inputRange: [10, 30, 500],
                                outputRange: [0, 1, 1],
                            }),
                        }}
                    ></Animated.Image>
                    <Animated.Image
                        source={require('../assets/balloon.png')}
                        style={{
                            ...styles.balloon,
                            transform: [{ translateY: balloonTranslation }],
                            opacity: balloonTranslation.interpolate({
                                inputRange: [10, 30, 500],
                                outputRange: [0, 1, 1],
                            }),
                        }}
                    ></Animated.Image>
                </View>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center' }}
                >
                    <Animated.Image
                        source={require('../assets/balloon2.png')}
                        style={{
                            ...styles.balloon22,
                            transform: [{ translateY: sballoonTranslation }],
                            opacity: sballoonTranslation.interpolate({
                                inputRange: [25, 30, 800],
                                outputRange: [0, 1, 1],
                            }),
                        }}
                    ></Animated.Image>
                    <Animated.Image
                        source={require('../assets/balloon.png')}
                        style={{
                            ...styles.balloon11,
                            transform: [{ translateY: sballoonTranslation }],
                            opacity: sballoonTranslation.interpolate({
                                inputRange: [25, 30, 800],
                                outputRange: [0, 1, 1],
                            }),
                        }}
                    ></Animated.Image>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={balloonAnimation}>
                        <Ionicons name="md-gift" size={55} color="pink" />
                    </TouchableOpacity>
                </View>
                <View style={{ height: height + 25 }}>
                    <ImageScreen onPress={slideAgain} />
                </View>
                <View style={{ height: height + 25 }}>
                    <ConfettiScreen />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    cake: {
        width: 400,
        height: 425,
        resizeMode: 'cover',
        // marginTop: 180,
    },
    happy: {
        fontSize: 40,
        fontFamily: 'harley',
    },
    people: {
        height: 100,
        width: '100%',
        marginTop: 320,
    },
    balloon: {
        height: 100,
        width: 60,
        marginLeft: 20,
    },
    balloon2: {
        height: 100,
        width: 60,
        marginRight: 200,
    },
    balloon11: {
        height: 80,
        width: 60,
        marginLeft: 30,
    },
    balloon22: {
        height: 80,
        width: 60,
        marginRight: 120,
    },
});

export default MainScreen;
