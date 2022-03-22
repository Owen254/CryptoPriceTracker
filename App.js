import React from "react";
import {View,StyleSheet,FlatList,StatusBar} from 'react-native'
import CoinDetailedScreen from "./src/screens/HomeScreen/CoinDetailedScreen/Index";
import HomeScreen from "./src/screens/HomeScreen/Index";



function App(){
  return(
      <View style={styles.container}>
        <StatusBar />
        
          {/* <HomeScreen/> */}
           <CoinDetailedScreen/>
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