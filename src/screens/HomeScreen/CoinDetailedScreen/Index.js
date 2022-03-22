import React from 'react'
import {View,Text,} from 'react-native'
import Coin from '../../../../Crypto Tracker Assets/data/crypto.json'
import CoinDetailedHeader from './CoinDetailedHeader';

function CoinDetailedScreen() {
    const { image: { large },
    name,
    market_data:{ market_cap_rank},
    symbol

}=Coin;
  return (
      <View>
        <CoinDetailedHeader 
        image={large} 
        name={name}
        symbol={symbol}
        marketCapRank={market_cap_rank}
        />
      </View>
    
  )
}

export default CoinDetailedScreen