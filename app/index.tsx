import { BackHandler, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import Google from '@/assets/images/google-logo.svg';
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

type Props = {}

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={require("@/assets/images/way-apps.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <LinearGradient colors={["transparent", "rgba(255, 255, 255, 0.9)", "rgba(255, 255, 255, 1)"]} style={styles.background}>
            <View style={styles.wrapper}>

              <View style={styles.socialLoginWrapper}>
                <Animated.View entering={FadeInDown.delay(300).duration(500)}>
                  <Link href={"/signup"} asChild>
                    <TouchableOpacity style={styles.button}>
                      <Ionicons
                        name="mail-outline"
                        size={20}
                        color={Colors.black}
                      />
                      <Text style={styles.btnText}>Continue with Email</Text>
                    </TouchableOpacity>
                  </Link>
                </Animated.View>
              </View>

              <View style={styles.socialLoginWrapper}>
                <Animated.View entering={FadeInDown.delay(700).duration(500)}>
                  <Link href={"/signup"} asChild>
                    <TouchableOpacity style={styles.button}>
                      <Ionicons
                        name="logo-facebook"
                        size={20}
                        color={Colors.blue}
                      />
                      <Text style={styles.btnText}>Continue with Facebook</Text>
                    </TouchableOpacity>
                  </Link>
                </Animated.View>
              </View>

              <View style={styles.socialLoginWrapper}>
                <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
                  <Link href={"/signup"} asChild>
                    <TouchableOpacity style={styles.button}>
                      <Google width={20} height={20} />
                      <Text style={styles.btnText}>Continue with Google</Text>
                    </TouchableOpacity>
                  </Link>
                </Animated.View>
              </View>

              <Text style={styles.loginText}>
                Already have an account? {" "}
                <Link href={"(auth)/signin"} asChild>
                  <TouchableOpacity>
                    <Text style={styles.loginTextSpan}>SignIn</Text>
                  </TouchableOpacity>
                </Link>
              </Text>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end"
  },
  wrapper: {
    paddingBottom: 50,
    paddingTop: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    color: Colors.primary,
    letterSpacing: 2.4,
    marginBottom: 20
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.2,
    lineHeight: 30,
    marginBottom: 30
  },
  socialLoginWrapper: {
    alignSelf: 'stretch'
  },
  button: {
    flexDirection: 'row',
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 10,
    marginTop: 0
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black
  },
  loginText: {
    marginTop: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
    marginBottom: 10
  },
  loginTextSpan: {
    color: Colors.primary,
    fontWeight: '500'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
});