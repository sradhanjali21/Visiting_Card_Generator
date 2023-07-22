import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

export default Flip = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [value, setValue] = useState(0);

    useEffect(() => {
        animatedValue.addListener(({ value }) => {
            setValue(value);
        });

        return () => {
            animatedValue.removeAllListeners();
        };
    }, [animatedValue]);

    const frontInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    });

    const backInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
    });

    const frontOpacity = animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [1, 0],
    });

    const backOpacity = animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [0, 1],
    });

    const flipCard = () => {
        if (value >= 90) {
            Animated.spring(animatedValue, {
                toValue: 0,
                friction: 8,
                tension: 10,
            }).start();
        }
        else {
            Animated.spring(animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10,
            }).start();
        }
    };

    const frontAnimatedStyle = {
        transform: [{ rotateY: frontInterpolate }],
    };

    const backAnimatedStyle = {
        transform: [{ rotateY: backInterpolate }],
    };

    return (
        <View style={styles.container}>
            <View>
                <Animated.View style={[styles.flipCard, frontAnimatedStyle, { opacity: frontOpacity }]}>
                    <Text style={styles.flipText}>
                        This text is flipping on the front.
                    </Text>
                </Animated.View>
                <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, { opacity: backOpacity }]}>
                    <Text style={styles.flipText}>
                        This text is flipping on the back.
                    </Text>
                </Animated.View>
            </View>
            <TouchableOpacity onPress={flipCard}>
                <Text>Flip!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flipCard: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        backfaceVisibility: 'hidden',
    },
    flipCardBack: {
        backgroundColor: 'red',
        position: 'absolute',
        top: 0,
    },
    flipText: {
        width: 90,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});

