import React,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SplashScreen = ({navigation}) => {

useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate('HomeScreen')
    },5000)
},[])

    return (
        <View style={styles.container}>
            <Text style={styles.WeatherText}>WeatherApp</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor:'#fff'
    },
    WeatherText:{
            fontSize:40,
            color:'#00804A'}
})
