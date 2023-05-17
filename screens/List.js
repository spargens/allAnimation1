import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";

import { DATA } from "../constants/data";
import { SharedElement } from "react-navigation-shared-element";

export default function List({ navigation }) {
    return (
        <FlatList
            data={DATA}
            keyExtractor={(item) => item.key}
            horizontal
            contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
            }}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        style={{ width: 300, height: 500 }}
                        onPress={() => navigation.navigate("image", { item })}
                    >
                        <SharedElement id={`item.${item.key}.image`}>
                            <Image
                                source={item.image}
                                style={{
                                    position: "absolute",
                                    width: 250,
                                    height: 500,
                                    marginHorizontal: 10,
                                    borderRadius: 8,
                                }}
                                resizeMode="cover"
                            />
                        </SharedElement>
                        <SharedElement id={`item.${item.key}.text`}>
                            <Text style={styles.text}>{item.location}</Text>
                        </SharedElement>
                    </TouchableOpacity>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    text: {
        position: "absolute",
        margin: 20,
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "white",
    },
});