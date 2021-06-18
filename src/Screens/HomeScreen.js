import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'



const HomeScreen = ({navigation}) => {
   const [Data, setData] = useState([])
  
  useEffect(()=>{
    GetData()
  },[])

const GetData=()=>{
    fetch("http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=673988ddabe513ca95c6ec5600abebaa",{
        method:'get'
    })
    .then((response)=>response.json())
    .then((res)=>{
        console.log("GetTHE Data-->",res.list);
        setData(res.list)
    })
    .catch((err)=>{
        console.log("Get Error==>",err);
    })
}

   const renderItem=({item,index})=>{
        return(
            <TouchableOpacity style={styles.FlatlistView} onPress={()=>navigation.navigate("MapDetails",{item:item})}>
               <View>
                <Text style={styles.DataText}>{item.name}</Text>
                <Text style={{fontSize:16}}>{item.weather[0].main}</Text>
                </View>
                <Text style={{fontSize:22}}>{item.main.temp} c</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.FirstView}>
                <Text style={styles.HeaderText} >WeatherApp</Text>
            </View>
            <View style={styles.SecondView}>
                <FlatList 
                  data={Data}
                  renderItem={renderItem}
                  keyExtractor={(index,item)=>index.toString()}
                />
            </View>
        </View>
    )

}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    FirstView:{
        flex:0.08,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00804A'
    },
    SecondView:{
        flex:0.92
    },
    HeaderText:{
        fontSize:20,
        color:'#fff'
    },
    FlatlistView:{
        width:'90%',
        height:110,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:20
    },
    DataText:{
        fontSize:18,
        marginBottom:10
    }
})
