import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import MainScreen from './screens/MainScreen';

const fetchFonts = () => {
    return Font.loadAsync({
        harley: require('./assets/fonts/harley.ttf'),
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);
    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    setFontLoaded(true);
                }}
                onError={console.warn}
            />
        );
    }
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <MainScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
