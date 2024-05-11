import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { categoriesData } from "../src/constants/categoryData";

const Categories = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <Animated.View entering={FadeInDown.duration(500).springify()}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="space-x-4"
                contentContainerStyle={{
                    paddingHorizontal: 15,
                    marginHorizontal: 6,
                }}
            >
                {categories.map((cat, index) => {
                    let isActive = cat.strCategory === activeCategory;
                    let activeButtonClass = isActive
                        ? "bg-amber-400"
                        : "bg-black/10";
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setActiveCategory(cat.strCategory)}
                            className="flex items-center space-y-1 "
                        >
                            <View
                                className={
                                    "rounded-full p-[6px] shadow-md " +
                                    activeButtonClass
                                }
                            >
                                <Image
                                    source={{ uri: cat.strCategoryThumb }}
                                    style={{ width: hp(6), height: hp(6) }}
                                    className="rounded-full"
                                />
                            </View>
                            <Text className="text-neutral-600">
                                {cat.strCategory}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </Animated.View>
    );
};

export default Categories;