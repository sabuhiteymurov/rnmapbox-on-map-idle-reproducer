const config = {
  expo: {
    name: 'rnmapbox-on-map-idle-reproducer',
    slug: 'rnmapbox-on-map-idle-reproducer',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.sabuhiteymurov.rnmapbox-on-map-idle-reproducer',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
      [
        '@rnmapbox/maps',
        {
          RNMapboxMapsDownloadToken:
            process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN,
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  },
};

export default config;
