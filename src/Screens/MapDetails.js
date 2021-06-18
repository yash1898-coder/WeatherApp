import React,{ useEffect,useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
// import { useEffect,useState } from 'react/cjs/react.development';

const MapDetails = ({route}) => {
  const [GetMapData, setGetMapData] = useState(route.params.item)
  
useEffect(()=>{
  console.log("Get Route Data==>",GetMapData.coord.lon);
  
},[])

    return (
        <View style={styles.container}>
            <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: GetMapData.coord.lat,
            longitude:GetMapData.coord.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
           <Marker
            draggable
            coordinate={{
              latitude: GetMapData.coord.lat,
            longitude:GetMapData.coord.lon,
            }}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          /> 
        </MapView>
        </View>
    )
}

export default MapDetails

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
      flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }
})
