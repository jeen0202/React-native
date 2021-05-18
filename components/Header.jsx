import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {handleModal} from '../store/taskActions'


const Header = () =>{    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                할 일 목록
            </Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style = {styles.button}
                onPress={() => handleModal}>                
                    <Ionicons name ='ios-add' color='#FFFFFF' size={24}/>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //각 요소가 양쪽으로 떨어지게 만든다.
        marginTop : 56,
        marginBottom : 16,
        marginLeft : 16,
    },
    title : {
        color : '#212121',
        fontSize : 32,
        fontWeight : '600',
    },
    button: {
        width: 28,
        height : 28,
        borderRadius:14,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems:'center',
        //Platform.select를 사용하여 os별로 다르게 지정한다.
        paddingTop : Platform.select({
            ios:2,
            android:0
        }),
        paddingLeft: Platform.select({
            ios :1,
            android :0,
        })
    }
})
export default Header