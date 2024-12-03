import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        {/* <View className="w-full min-h-[85vh] px-6 justify-center items-center"> */}
        <View className="w-full h-full px-6 justify-center items-center">
          <Image
            className="w-[130px] h-[84px]"
            source={images?.logo}
            resizeMode="contain"
          />

          <Image
            className="w-full h-[300px] max-w--[380px]"
            source={images?.cards}
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white text-center font-bold">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              source={images?.path}
              resizeMode="contain"
            />
          </View>

          <Text className="text-xs font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
            isLoading={false}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style={"light"} />
    </SafeAreaView>
  );
}
