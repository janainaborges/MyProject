import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        marginTop: -40,
        paddingHorizontal: 50,
    },
    image: {
        width: '100%',
        height: 360,
    },
    title: {
        color: '#DDE3F0',
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: 'Rajdhani_700Bold',
        lineHeight: 40,
    },
    subtitle: {
        color: '#DDE3F0',
        fontSize: 15,
        textAlign: "center",
        marginBottom: 64,
        fontFamily: 'Rajdhani_500Medium',
        lineHeight: 25,
    }
})