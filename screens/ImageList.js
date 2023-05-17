import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";
import BackIcon from "../components/BackIcon";

import { SUBDATA } from "../constants/data";

const animation = {
    0: { opacity: 0, translateY: -100 },
    1: { opacity: 1, translateY: 0 },
};

const textAnimation = {
    0: { opacity: 0, translateY: 100 },
    1: { opacity: 1, translateY: 0 },
};

export default function ImageList({ navigation, route }) {
    const { item } = route.params;
    return (
        <>
            <SharedElement
                id={`item.${item.key}.image`}
            // style={{ width: "100%", height: "100%" }}
            >
                <Image
                    source={item.image}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                />
            </SharedElement>
            <SharedElement
                id={`item.${item.key}.text`}
                style={{ position: "absolute", zIndex: 99 }}
            >
                <Animatable.Text
                    animation={animation}
                    delay={300}
                    style={styles.text}
                    useNativeDriver
                >
                    {item.location}
                </Animatable.Text>
            </SharedElement>
            <FlatList
                data={SUBDATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ zIndex: 99, position: "absolute", bottom: 40 }}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {
                    return (
                        <Animatable.View
                            useNativeDriver
                            animation={textAnimation}
                            delay={200 + index * 200}
                            style={{
                                marginHorizontal: 10,
                                width: 150,
                                height: 200,
                                backgroundColor: "white",
                            }}
                        >
                            <Animatable.Image
                                useNativeDriver
                                animation={textAnimation}
                                delay={400 + (index + 1) * 200}
                                source={{ uri: item.image }}
                                style={{ width: 130, height: 150, margin: 10 }}
                            />
                            <Animatable.Text
                                style={{ marginLeft: 10 }}
                                useNativeDriver
                                animation={textAnimation}
                                delay={500 + (index + 1) * 200}
                            >
                                Activity {index}
                            </Animatable.Text>
                        </Animatable.View>
                    );
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        position: "absolute",
        marginLeft: 20,
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "white",
        marginTop: 40,
    },
});

ImageList.sharedElements = (route, otherRoute, showing) => {
    const { item } = route.params;
    return [
        {
            id: `item.${item.key}.image`,
        },
        {
            id: `item.${item.key}.text`,
        },
    ];
};
