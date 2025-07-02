import { ConfigContext, ExpoConfig } from "expo/config";
import {
  EAS_PROJECT_ID,
  OWNER,
  PROJECT_SLUG,
} from "./.SECRETS/EAS_PROJECT_CREDS";

// Production App config
const APP_NAME = process.env.APP_NAME;
const BUNDLE_IDENTIFIER = process.env.BUNDLE_IDENTIFIER;
const PACKAGE_NAME = process.env.PACKAGE_NAME;
const SCHEME = process.env.SCHEME;

const ICON = "./assets/images/laxfan-icon.png"; //"./assets/images/icon.png";
const ADAPTIVE_ICON = "laxFan-Logo_1024x1024"; //"./assets/images/adaptive-icon.png";
const SPLASH_ICON = "./assets/images/splash-icon.png";
const FAVICON = "./assets/images/laxicon.png";

export default ({ config }: ConfigContext): ExpoConfig => {
  const appVariant = process.env.EXPO_PUBLIC_APP_VARIANT;
  console.log("⚙️ Building app for environment:", appVariant);
  const { name, bundleIdentifier, icon, adaptiveIcon, packageName, scheme } =
    getDynamicAppConfig(
      (appVariant as "development" | "preview" | "production") || "development",
    );

  return {
    ...config,
    name: name,
    slug: PROJECT_SLUG, // Must be consistent across all environments.
    orientation: "portrait",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    icon: icon,
    scheme: scheme,
    ios: {
      supportsTablet: true,
      bundleIdentifier: bundleIdentifier,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: adaptiveIcon,
        backgroundColor: "#ffffff",
      },
      package: packageName,
      versionCode: 1,
    },
    updates: {
      url: `https://u.expo.dev/${EAS_PROJECT_ID}`,
    },
    extra: {
      eas: {
        projectId: EAS_PROJECT_ID,
      },
    },
    runtimeVersion: "53",
    // runtimeVersion: {
    //   policy: "sdkVersion",
    // },
    web: {
      bundler: "metro",
      // output: "static",
      // favicon: "./assets/images/favicon.png",
      favicon: FAVICON,
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: SPLASH_ICON,
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    owner: OWNER,
  };
};

// Dynamically configure the app based on the environment.
// Update these placeholders with your actual values.
export const getDynamicAppConfig = (
  environment: "development" | "preview" | "production",
) => {
  if (environment === "production") {
    return {
      name: APP_NAME,
      bundleIdentifier: BUNDLE_IDENTIFIER,
      packageName: PACKAGE_NAME,
      // packageName: "com.jonharlan.laxfan.dev",
      icon: ICON,
      adaptiveIcon: ADAPTIVE_ICON,
      scheme: SCHEME,
    };
  }

  if (environment === "preview") {
    return {
      name: `${APP_NAME} Preview`,
      bundleIdentifier: `${BUNDLE_IDENTIFIER}.preview`,
      packageName: `${PACKAGE_NAME}.preview`,
      icon: ICON,
      adaptiveIcon: ADAPTIVE_ICON,
      scheme: `${SCHEME}-prev`,
    };
  }

  return {
    name: `${APP_NAME} Development`,
    bundleIdentifier: `${BUNDLE_IDENTIFIER}.dev`,
    packageName: `${PACKAGE_NAME}.dev`,
    icon: ICON,
    adaptiveIcon: ADAPTIVE_ICON,
    scheme: `${SCHEME}-dev`,
  };
};
