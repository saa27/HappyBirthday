import * as React from 'react';
import {
    StatusBar,
    FlatList,
    Image,
    Animated,
    Text,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

const data = [
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1635181339/1_zizj60.jpg',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1635181613/khushi_3_psvgyc.jpg',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1635181336/4_u0dklu.jpg',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1635490813/6_zkddw8.jpg',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1635181613/khushi_2_lzt0eo.jpg',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1635181335/3_bpw8ff.jpg',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1635490815/5_oqeynh.jpg'
];

const imageW = width * 0.7;
const imageH = imageW * 1.54;

const ImageScreen = (props) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <View style={[StyleSheet.absoluteFillObject]}>
                {data.map((image, index) => {
                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width,
                    ];
                    const outputRange = [0, 1, 0];
                    return (
                        <Animated.Image
                            key={`image-${index}`}
                            source={{ uri: image }}
                            style={[
                                StyleSheet.absoluteFillObject,
                                {
                                    opacity: scrollX.interpolate({
                                        inputRange,
                                        outputRange,
                                    }),
                                },
                            ]}
                            blurRadius={15}
                        />
                    );
                })}
            </View>
            <Animated.FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                pagingEnabled
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                width,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                source={{ uri: item }}
                                style={{
                                    height: imageH,
                                    width: imageW,
                                    resizeMode: 'cover',
                                    borderRadius: 20,
                                }}
                            />
                        </View>
                    );
                }}
            />
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={props.onPress}>
                    <Ionicons
                        name="arrow-down-circle-outline"
                        size={65}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ImageScreen;
