import { View, Text, Pressable } from "react-native";
import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import { Image } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const Resipes = ({ categories }) => {
    return (
        <View className="mx-4 space-y-3">
            <Text
                style={{ fontSize: hp(3) }}
                className="font-semi-bold text-neutral-600"
            >
                Resipes
            </Text>
            <View>
                {categories.length > 0 && (
                    <MasonryList
                        data={[1, 2, 3, 4, 5, 6]}
                        keyExtractor={(item) => item}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, i }) => (
                            <ResipeCard item={item} index={i} />
                        )}
                        // refreshing={isLoadingNext}
                        // onRefresh={() => refetch({ first: ITEM_CNT })}
                        onEndReachedThreshold={0.1}
                        // onEndReached={() => loadNext(ITEM_CNT)}
                    />
                )}
            </View>
        </View>
    );
};

const ResipeCard = ({ item, index }) => {
    let isEven = index % 2 == 0;
    return (
        <Animated.View
            entering={FadeInDown.delay(index * 100)
                .duration(600)
                .springify()}
        >
            <Pressable
                style={{
                    width: "100%",
                    paddingLeft: isEven ? 0 : 8,
                    paddingRight: isEven ? 8 : 0,
                }}
                className="flex justify-center mb-4  space-y-1"
            >
                <Image
                    source={{
                        uri: "https://i.pinimg.com/564x/8f/d0/32/8fd032cb391266189d2cb25f02ac0673.jpg",
                    }}
                    style={{
                        width: "100%",
                        height: index % 3 == 2 ? hp(25) : hp(35),
                        borderRadius: 35,
                    }}
                    className="bg-black/5"
                />
                <Text
                    style={{ fontSize: hp(1.5) }}
                    className="font-semibold ml-2 text-neutral-600"
                >
                    resipename
                </Text>
            </Pressable>
        </Animated.View>
    );
};
export default Resipes;
