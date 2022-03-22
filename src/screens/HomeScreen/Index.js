import React from 'react'
import CoinItem from "../../components/CoinItem/Index";
import cryptocurrencies from '../../../Crypto Tracker Assets/data/cryptocurrencies.json'
import {FlatList} from 'react-native'



function HomeScreen() {
  return (
    <FlatList
    data={cryptocurrencies}
    renderItem={({item})=> <CoinItem marketCoin={item}/>}
    />
  )
}

export default HomeScreen