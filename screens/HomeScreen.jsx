import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Categories from "../components/Categories";
import SortCategories from "../components/sortCategories";
import Destinations from "../components/Destinations";

const ios = Platform.OS == "ios";
const topMargin = ios ? "mt-3" : "mt-10";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={"space-y-6" + topMargin}
      >
        {/* AVATAR */}
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text
            style={{ fontSize: wp(7) }}
            className="font-bold text-neutral-700"
          >
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/Images/avatar.png")}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>
        {/* Search Bar */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
            <AntDesign name="search1" size={24} color="gray" />
            <TextInput
              placeholder="Search Destination.."
              placeholderTextColor={"gray"}
              className="flex-1 text-base pl-1 tracking-wider"
            />
          </View>
        </View>
        {/* Categories */}
        <View className="mb-4">
          <Categories />
        </View>

        {/* Sort Categories */}
        <View className="mb-4">
          <SortCategories />
        </View>

        {/* Destinations */}
        <View>
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
