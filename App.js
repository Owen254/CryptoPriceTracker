import React from "react";
import {View,StyleSheet,Image,Text} from 'react-native'
import {AntDesign} from 'react-native-vector-icons/AntDesign'
function App(){
  return(
      
       <View style={styles.container}>
         <View style={styles.coinContainer}>
            <Image 
            source={{uri:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'}}
            style={{height:30,width:30,marginRight:10,alignSelf:"center"}}
            />
            <View>
              <Text style={styles.title}>Bitcoin</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.text}>1</Text>
                    <Text style={styles.text}>BTC</Text>
                    {/* <AntDesign name="caretdown" size={24} color='white'/> */}
                    <Text style={styles.text}>0,63%</Text>
                </View>
            </View>
            <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>56265.09</Text>
            <Text style={styles.text}>Mcap 1.076 T</Text>
            </View>
            </View>
        </View>
              
  )
}

const styles=StyleSheet.create({
     container:{
       flex:1,
       backgroundColor:'#121212',
       paddingTop:10,
     
     },
     title:{
     color:'white',
     fontSize:16,
     fontWeight:'bold'
    },
    text:{
      color:'white',
      marginRight:5,
    },
    coinContainer:{
      flexDirection:'row',
      borderBottomWidth:StyleSheet.hairlineWidth,  //to separate each coin StyleSheet.hairlineWidth (0.3)
      borderBottomColor:'grey',
      padding:10
    }
})
export default App