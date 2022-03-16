import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { 
    Image,
    Text, 
    View , 
} from "react-native";
import { theme } from "../../global/theme";
import {styles} from './style';

type Props = {
    children?:ReactNode;
}
export default ({children}: Props) =>{
    return(
        <LinearGradient
        style={styles.container}
        colors={[theme.colors.secondary80, theme.colors.secondary100]}
        >
            {children}
            
        </LinearGradient>
    )
}