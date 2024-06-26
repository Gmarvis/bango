import { StyleSheet, Text, Image, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen() {
    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    const navigatetion = useNavigation();

    useEffect(() => {
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(
            () => (ring1padding.value = withSpring(ring1padding.value + hp(5))),
            100
        );
        setTimeout(
            () =>
                (ring2padding.value = withSpring(ring1padding.value + hp(5.5)))
        );

        setTimeout(() => navigatetion.navigate("Home"), 2500);
    }, []);

    return (
        <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
            <StatusBar styles="light" />
            <Animated.View
                className="bg-white/20 rounded-full "
                style={{ padding: ring1padding }}
            >
                <Animated.View
                    className="bg-white/20 rounded-full "
                    style={{ padding: ring2padding }}
                >
                    <Image
                        source={require("../../assets/welcome.png")}
                        style={{ width: hp(20), height: hp(20) }}
                    />
                </Animated.View>
            </Animated.View>
            {/* title and punchline */}
            <View className="flex items-center space-y-2">
                <Text
                    className="font-bold text-white "
                    style={{ fontSize: hp(7) }}
                >
                    bango
                </Text>
                <Text
                    className="font-normal text-white "
                    style={{ fontSize: hp(2) }}
                >
                    Good food for a healthy life!
                </Text>
            </View>
        </View>
    );
}
