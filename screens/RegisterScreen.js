import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import {Text, Avatar, TextInput, Button} from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const RegisterScreen = ({navigation}) => {
    const [secureTextEntry, setSecureTextEntry] = React.useState(true)
    return(
        <>
        <KeyboardAwareScrollView style={{backgroundColor: 'white'}} resetScrollToCoords={{x:0, y:0}} scrollEnabled={false} contentContainerStyle={{}}>
            <View style={Style.container}>
                <View style={Style.accountPlusIconContainer}>
                    <Avatar.Icon style={Style.accountPlusIcon} size={100} icon="account-plus" />
                    <Text style={Style.textContent}> Don't Have An Account ?</Text>
                </View>
                
                
                    <TextInput style={Style.input_field} mode='outlined' placeholder='E-mail'/>
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

                            <TextInput 
                            style={Style.input_field} 
                            mode='outlined' 
                            placeholder='Confirm Password' 
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
                            
                            <Button theme={{roundness: 20}} style={Style.signUpButton} mode='contained' onPress={()=>{}}>Sign-Up</Button>
                
            </View>
        </KeyboardAwareScrollView>
        </>

    );
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    accountPlusIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    textContent: {
        fontSize: 24,
        marginTop: 15,
    },
    input_field: {
        padding: 10,
        marginTop: 5,
        marginLeft: 12,
        marginRight: 12,
        height: 35
    },
    signUpButton: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20
    }
})

export default RegisterScreen