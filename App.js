import React from "react";
import {View,StyleSheet,FlatList,StatusBar} from 'react-native'
import CoinItem from "./src/components/CoinItem/Index";
import cryptocurrencies from './Crypto Tracker Assets/data/cryptocurrencies.json'



function App(){
  return(
      <View style={styles.container}>
        <StatusBar />
           <FlatList
             data={cryptocurrencies}
            //  keyExtractor={}
             renderItem={({item})=> <CoinItem marketCoin={item}/>}
            
           
           />
           
        </View>
              
  )
}

const styles=StyleSheet.create({
     container:{
       flex:1,
       backgroundColor:'#121212',
       paddingTop:10,
     
     },
    
})
export default App;