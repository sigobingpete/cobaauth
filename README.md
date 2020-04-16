# cobaauth

npx react-native init NamaApp
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install redux
npm install react-redux
npm install react-native-svg
npm install react-native-svg-transformer

======================
# ganti metro.config.js

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();

======================
# jika ingin ganti icon launcher

npm install -g app-icon
app-icon generate

======================

# jika ingin build apk signed (release version)

keytool -genkey -v -keystore your_key_name.keystore -alias your_key_alias -keyalg RSA -keysize 2048 -validity 10000
ikuti https://reactnative.dev/docs/signed-apk-android
cd android
gradlew assembleRelease

======================
