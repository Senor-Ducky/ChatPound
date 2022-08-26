import * as React from 'react';
import { Title, TextInput, Button } from 'react-native-paper'
import { StyleSheet, View } from 'react-native';

import CustomRoundedButton from '../components/CustomRoundedButton';

const HomeScreen = () => {
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    return(
        <>
            <View style={Style.container}>
                <Title style={Style.maintext} >Welcome To ChatPound !</Title>

                <View style={Style.input_container}>
                    <TextInput style={Style.input_field} mode='outlined' placeholder='Username'/>
                    <TextInput 
                    style={Style.input_field} 
                    mode='outlined' 
                    placeholder='Password' 
                    secureTextEntry={secureTextEntry} 
                    right={<TextInput.Icon  
                    onPress={()=> {
                        if(secureTextEntry === true) {
                            setSecureTextEntry(false)
                        } else {
                            setSecureTextEntry(true)
                        }
                    }} 
                    name='eye'/>}/>
                    <Button theme={{roundness: 20}} style={Style.authButtons} mode='contained' onPress={()=>{}}>Login</Button>
                    <Button theme={{roundness: 20}} style={Style.authButtons} mode='contained' onPress={()=>{}}>Sign Up</Button>
                </View>
            </View>
        </>
       
    );
}

const Style = StyleSheet.create({
    container: { 
        backgroundColor: 'white', 
        flex: 1, 
        justifyContent: 'center'
    },
    maintext: { 
        textAlign: 'center', 
        padding: 20, 
        fontSize: 24,
    },
    input_field: {
        height: 40,  
        padding: 10, 
        margin: 12
    },
    input_container: {
        height: 100, 
        marginBottom: 50
    },
    authButtons: {
        margin: 12,
        marginLeft: 100,
        marginRight: 100,
        
    }
})

export default HomeScreen