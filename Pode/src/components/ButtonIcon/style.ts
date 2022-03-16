import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        height:56,
        backgroundColor: '#E51C44',
        flexDirection:'row',
        alignItems: "center",
        borderRadius: 8,

    },
    title:{
        flex: 1,
        color:'#DDE3F0',
        fontSize: 15,
        textAlign: 'center',
    },
    iconWrapper: {
        width: 56,
        height:56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor:'#991F36',

    },
    icon:{
        width: 24,
        height:18,
    },

})


