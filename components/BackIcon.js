import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function BackIcon({ onPress }) {
    return (
        <AntDesign
            name="arrowleft"
            size={24}
            style={{ padding: 24, position: "absolute", zIndex: 10, top: 20 }}
            color="white"
            onPress={onPress}
        />
    )
}