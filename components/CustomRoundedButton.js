import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomRoundedButton = ({onPress, title}) => {
    return(
        <TouchableOpacity onPress={onPress} style={Style.btnContainer}>
            <Text style={Style.btnText}>{title}</Text>
        </TouchableOpacity>
    );
}

const Style = StyleSheet.create({
    btnContainer: { 
        elevation: 8, 
        backgroundColor: '#009688', 
        borderRadius: 10, 
        paddingVertical: 10, 
        paddingHorizontal: 12,
        padding: 20,
        margin: 10
    },

    btnText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }

})

export default CustomRoundedButton;