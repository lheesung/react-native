import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Bubble = ({text, isMine}: {text: string; isMine: boolean}) => {
    const bubbleStyle = isMine ? styles.myBubble : styles.otherBubble;
    const textStyle = isMine ? styles.myText : styles.otherText;

    return (
        <View style={[styles.bubbleContainer, bubbleStyle]}>
            <Text style={textStyle}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bubbleContainer: {
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginBottom: 10,
        maxWidth: '70%',
    },
    myBubble: {
        backgroundColor: '#DCF8C5',
        alignSelf: 'flex-end',
    },
    otherBubble: {
        backgroundColor: "#F0F0F0",
    },
    myText: {
        color: '#000',
        fontSize: 16,
    },
    otherText: {
        color: '#000',
        fontSize: 16,
    },
})

export default Bubble;