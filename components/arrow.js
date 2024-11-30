import { View, Image } from 'react-native'
import React from 'react'

const Arrow = ({direction}) => {
    if (direction == 'left') {
        return <Image source={require('../assets/icons/left.png')}></Image>
    } else {
        return <Image source ={require('../assets/icons/right.png')}></Image>
    }

}

export default Arrow;