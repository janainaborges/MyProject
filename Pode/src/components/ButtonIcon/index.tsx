import React from "react";
import{ Image, Text, TouchableOpacity, View } from 'react-native'
import DiscordImg from '../../assets/discord.png'
import {styles} from './style';

type Props = {
    title: string
}

export default({title}: Props) => {
    return(
        <TouchableOpacity style={styles.container}>
        <View style={styles.iconWrapper}>
            <Image source={DiscordImg} style={styles.icon}/>
        </View>
        <Text style={styles.title}>
            {title}
        </Text>
        </TouchableOpacity>
    )
}