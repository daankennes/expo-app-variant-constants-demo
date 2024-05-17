const IS_OTHER = process.env.APP_VARIANT === "OTHER";

export default {
  expo: {
    name: "expo-app-variant-constants-demo",
    slug: "expo-app-variant-constants-demo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: IS_OTHER ? "myotherapp" : "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: IS_OTHER ? "be.test.other" : "be.test.regular",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "28233b47-de1f-446e-8a98-2f89978fc377",
      },
    },
  },
};
