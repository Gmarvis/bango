import { View, Text, ScrollView, Image, TextInput } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../../components/categories";
import { useEffect, useState } from "react";
import axios from "axios";
import Resipes from "../../components/Resipes";

const HomeScreen = () => {
    const [activeCategory, setActiveCategory] = useState("Beef");
    const [categories, setCategories] = useState([]);

    const getCategory = async () => {
        try {
            const response = await axios.get(
                "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
            // console.log("set categoris", response.data);
            if (response && response.data) {
                setCategories(response.data.categories);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategory();
    }, []);
    return (
        <View className="bg-white flex-1">
            <StatusBar style="dark" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                className="space-y-6 pt-14"
            >
                {/* avatar and bell icon */}
                <View className="mx-4 flex-row justify-between items-center mb2">
                    <Image
                        source={require("../../assets/avatar.png")}
                        style={{ height: hp(5), width: hp(5) }}
                        className="rounded-full"
                    />
                    <BellIcon size={hp(4)} color="gray" />
                </View>
                {/* greeting and punchline */}
                <View className="mx-4 space-y-2 mb-2">
                    <Text className="text-neutral-600">Hello, Dora!</Text>
                    <Text
                        style={{ fontSize: hp(3.8) }}
                        className="font-semibold text-neutral-600"
                    >
                        Make your own Food and,
                    </Text>
                    <Text
                        style={{ fontSize: hp(3.8) }}
                        className="font-semibold text-neutral-600"
                    >
                        build a happy{" "}
                        <Text className="text-amber-400"> home</Text>
                    </Text>
                </View>

                {/* search bar */}
                <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
                    <TextInput
                        placeholder="Search a resipe"
                        placeholderTextColor={"gray"}
                        style={{ fontSize: hp(1.7) }}
                        className="flex-1 text-base mb-1 pl-3 tracking-wider"
                    />
                    <View className="bg-white rounded-full p-3">
                        <MagnifyingGlassIcon
                            size={hp(2.5)}
                            strokeWidth={3}
                            color={"gray"}
                        />
                    </View>
                </View>
                {/* categories */}
                <View>
                    <Categories
                        categories={categories}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                </View>

                {/* resipes */}
                <View>
                    <Resipes categories={categories} />
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
