import { StyleSheet, View } from 'react-native';
import Mapbox, { MapView } from '@rnmapbox/maps';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN!);

const map = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onMapIdle={() => console.log('map idle')}
        onRegionDidChange={() => console.log('region did change')}
      />
    </View>
  );
};

export default map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
