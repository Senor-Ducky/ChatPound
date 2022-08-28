import * as React from 'react';
import { Title, TextInput, Button, Text } from 'react-native-paper'
import { StyleSheet, View, Image } from 'react-native';

import CustomRoundedButton from '../components/CustomRoundedButton';

const LoginScreen = ({navigation}) => {
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    return(
        <>
            <View style={Style.container}>
                <View style={Style.imageContainer}>
                    <Image  resizeMethod='auto' resizeMode='contain' style={Style.logo} source={require('../assets/chat_pound.png')}/>
                </View>

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
                    <Text variant='bodySmall' style={{textAlign: 'center'}}> New User? Sign up below!</Text>
                    <Button theme={{roundness: 20}} style={Style.authButtons} mode='contained' onPress={()=>{navigation.navigate('Register')}}>Sign Up</Button>
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
        marginBottom: 200
    },
    authButtons: {
        margin: 12,
        marginLeft: 100,
        marginRight: 100,
        
    },
    logo: {
        height: 150,
    
        
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default LoginScreen