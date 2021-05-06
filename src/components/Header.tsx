import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImage from '../assets/perfil.png';
import colors from '../styles/colors';



export function Header(){
    return (
        <View style={styles.container}>
            <View>
                <Text>Olá,</Text>
                <Text>Rodrigo</Text>
            </View>

            <Image source={userImage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    }
})